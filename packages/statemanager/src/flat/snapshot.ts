import { merkleizeList } from '@ethereumjs/trie'
import {
  Account,
  KECCAK256_NULL,
  KeyEncoding,
  LevelDB,
  bytesToHex,
  equalsBytes,
  hexToBytes,
} from '@ethereumjs/util'
import debugDefault from 'debug'
import { keccak256 } from 'ethereum-cryptography/keccak'

import type { Address } from '@ethereumjs/util'
import type { Debugger } from 'debug'

const ACCOUNT_PREFIX: Uint8Array = hexToBytes('0x' + '00')
const STORAGE_PREFIX: Uint8Array = hexToBytes('0x' + '11')
const CODE_PREFIX: Uint8Array = hexToBytes('0x' + '22')

const { debug: createDebugLogger } = debugDefault

type SnapshotElement = {
  data: Uint8Array | undefined
}

function concatenateUint8Arrays(arrays: Uint8Array[]) {
  const l = arrays.reduce((prev, curr) => prev + curr.length, 0)
  const concatenatedArray = new Uint8Array(l)

  let offset = 0
  for (const array of arrays) {
    concatenatedArray.set(array, offset)
    offset += array.length
  }

  return concatenatedArray
}

// TODO don't extend Cache
export class Snapshot {
  _db: LevelDB<Uint8Array, Uint8Array>
  _debug: Debugger
  _checkpoints = 0

  /**
   * Diff cache collecting the state of the cache
   * at the beginning of checkpoint height
   * (respectively: before a first modification)
   *
   * If the whole cache element is undefined (in contrast
   * to the account), the element didn't exist in the cache
   * before.
   */
  _diffCache: Map<string, SnapshotElement | undefined>[] = []
  constructor(db?: LevelDB<Uint8Array, Uint8Array>) {
    this._db = db ?? new LevelDB<Uint8Array, Uint8Array>()
    this._diffCache.push(new Map<string, SnapshotElement | undefined>())
    this._debug = createDebugLogger('client:snapshot')
  }

  async _saveCachePreState(key: Uint8Array) {
    const keyHex = bytesToHex(key)
    const diffMap = this._diffCache[this._checkpoints]
    if (!diffMap.has(keyHex)) {
      const oldElem: SnapshotElement | undefined = {
        data: (await this._db.get(key)) as Uint8Array | undefined,
      }
      diffMap.set(keyHex, oldElem)
    }
  }

  async putAccount(address: Address, account: Account): Promise<void> {
    const key = concatenateUint8Arrays([ACCOUNT_PREFIX, keccak256(address.bytes)])
    await this._saveCachePreState(key)

    const value = account.serialize()
    await this._db.put(key, value)
  }

  async getAccount(address: Address): Promise<Uint8Array | undefined> {
    const key = concatenateUint8Arrays([ACCOUNT_PREFIX, keccak256(address.bytes)])

    return this._db.get(key)
  }

  // TODO make this a private internal function
  getAccounts(): Promise<[Uint8Array, Uint8Array | undefined][]> {
    const prefix = ACCOUNT_PREFIX
    return this._db.byPrefix(prefix, { keyEncoding: KeyEncoding.Bytes })
  }

  async delAccount(address: Address): Promise<void> {
    const key = concatenateUint8Arrays([ACCOUNT_PREFIX, keccak256(address.bytes)])
    await this._saveCachePreState(key)

    return this._db.del(key)
  }

  /**
   * Deletes not only the account itself, but also the code
   * and any storage items if available.
   */
  async clearAccount(address: Address): Promise<void> {
    const rawAccount = await this.getAccount(address)
    if (rawAccount === undefined) return

    await this.delAccount(address)

    const account = Account.fromRlpSerializedAccount(rawAccount)
    if (!equalsBytes(account.codeHash, KECCAK256_NULL)) {
      // await this.delCode(account.codeHash)
    }

    await this.clearAccountStorage(address)
  }

  // TODO why do we update codeRoot of account for putCode but not storageRoot for putStorageSlot?
  // ANSWER I'm seeing it's because during merklize account storageRoot's are updated en masse
  async putStorageSlot(address: Address, slot: Uint8Array, value: Uint8Array): Promise<void> {
    const key = concatenateUint8Arrays([STORAGE_PREFIX, keccak256(address.bytes), keccak256(slot)])
    await this._saveCachePreState(key)
    await this._db.put(key, value)
  }

  async getStorageSlot(address: Address, slot: Uint8Array): Promise<Uint8Array | undefined> {
    const key = concatenateUint8Arrays([STORAGE_PREFIX, keccak256(address.bytes), keccak256(slot)])
    return this._db.get(key)
  }

  async getStorageSlots(address: Address): Promise<[Uint8Array, Uint8Array | undefined][]> {
    const prefix = concatenateUint8Arrays([STORAGE_PREFIX, keccak256(address.bytes)])
    return this._db.byPrefix(prefix, { keyEncoding: KeyEncoding.Bytes })
  }

  async delStorageSlot(address: Address, slot: Uint8Array): Promise<void> {
    const key = concatenateUint8Arrays([STORAGE_PREFIX, keccak256(address.bytes), keccak256(slot)])
    await this._saveCachePreState(key)
    await this._db.del(key)
  }

  async clearAccountStorage(address: Address): Promise<void> {
    const prefix = concatenateUint8Arrays([STORAGE_PREFIX, keccak256(address.bytes)])
    const keys = await this._db.keysByPrefix(prefix, { keyEncoding: KeyEncoding.Bytes })
    for (const key of keys) await this._saveCachePreState(key)
    await this._db.delByPrefix(prefix, { keyEncoding: KeyEncoding.Bytes })
  }

  async putCode(address: Address, code: Uint8Array): Promise<void> {
    const codeHash = keccak256(code)
    if (equalsBytes(codeHash, KECCAK256_NULL)) {
      return
    }

    const key = concatenateUint8Arrays([CODE_PREFIX, keccak256(address.bytes)])
    await this._saveCachePreState(key)
    await this._db.put(key, code)

    // update codeHash field of associated account
    const rawAccount = await this.getAccount(address)
    if (!rawAccount) throw new Error('Creating code for nonexistent account')
    const account = Account.fromRlpSerializedAccount(rawAccount)
    account.codeHash = codeHash
    await this.putAccount(address, account)
  }

  async getCode(address: Address): Promise<Uint8Array | undefined> {
    const rawAccount = await this.getAccount(address)
    if (!rawAccount) return undefined
    const account = Account.fromRlpSerializedAccount(rawAccount)
    if (equalsBytes(account.codeHash, KECCAK256_NULL)) {
      return new Uint8Array(0)
    }

    const key = concatenateUint8Arrays([CODE_PREFIX, keccak256(address.bytes)])
    return this._db.get(key)
  }

  async merkleize(): Promise<Uint8Array> {
    // Merkleize all the storage tries in the db
    const storageRoots: { [k: string]: Uint8Array } = await this._merkleizeStorageTries()
    const accounts = await this.getAccounts()
    const leaves: [Uint8Array, Uint8Array][] = []
    accounts.map(([key, value]) => {
      const accountKey = key.slice(ACCOUNT_PREFIX.length)
      // TODO update the account's stateRoot field if there exist
      // storage slots for that account in the db (i.e. not EoA).
      // TODO can probably cache stateRoot and re-compute storage

      const storageRoot = storageRoots[bytesToHex(accountKey)]
      let v = value
      if (storageRoot !== undefined) {
        const acc = Account.fromRlpSerializedAccount(v ?? KECCAK256_NULL)
        acc.storageRoot = storageRoot
        v = acc.serialize()
      }
      leaves.push([accountKey, v ?? KECCAK256_NULL])
    })
    return merkleizeList(leaves)
  }

  async _merkleizeStorageTries(): Promise<{ [k: string]: Uint8Array }> {
    const tries: any = {}
    const prefix = STORAGE_PREFIX
    for await (const [key, value] of this._db._leveldb.iterator({ gt: prefix })) {
      const hashedAddr = key.slice(STORAGE_PREFIX.length, STORAGE_PREFIX.length + 32)
      const hashedAddrString = bytesToHex(hashedAddr)
      if (hashedAddrString in tries === false) {
        tries[hashedAddrString] = []
      }
      const slotKey = key.slice(STORAGE_PREFIX.length + 32)
      tries[hashedAddrString] = tries[hashedAddrString].push([slotKey, value])
    }
    const roots: any = {}
    for (const [address, leaves] of Object.entries(tries)) {
      roots[address] = merkleizeList(leaves as Uint8Array[][])
    }
    return roots
  }

  // /**
  //  * Revert changes to cache last checkpoint (no effect on trie).
  //  */
  // TODO need to implement more performant way of deleting by prefix diffs
  async revert(): Promise<void> {
    this._checkpoints -= 1
    // if (this.DEBUG) {
    //   this._debug(`Revert to checkpoint ${this._checkpoints}`)
    // }
    const diffMap = this._diffCache.pop()!
    for (const entry of diffMap.entries()) {
      const addressHex = entry[0]
      const elem = entry[1]
      if (elem === undefined) {
        await this._db.del(hexToBytes(addressHex))
      } else {
        await this._db.put(hexToBytes(addressHex), elem.data ?? KECCAK256_NULL) // TODO or instead of putting null you should delete
      }
    }
  }

  async merge(): Promise<void> {
    this._checkpoints -= 1
    // if (this.DEBUG) {
    //   this._debug(`Commit to checkpoint ${this._checkpoints}`)
    // }
    const diffMap = this._diffCache.pop()!
    for (const entry of diffMap.entries()) {
      const addressHex = entry[0]
      const oldEntry = this._diffCache[this._checkpoints].has(addressHex)
      if (!oldEntry) {
        const elem = entry[1]
        this._diffCache[this._checkpoints].set(addressHex, elem)
      }
    }
  }

  // /**
  //  * Commits to current state of cache (no effect on trie).
  //  */
  async commit(): Promise<void> {
    await this.merge()
  }

  // /**
  //  * Marks current state of cache as checkpoint, which can
  //  * later on be reverted or committed.
  //  */
  checkpoint(): void {
    this._checkpoints += 1
    // if (this.DEBUG) {
    //   this._debug(`New checkpoint ${this._checkpoints}`)
    // }
    this._diffCache.push(new Map<string, SnapshotElement | undefined>())
  }
}
