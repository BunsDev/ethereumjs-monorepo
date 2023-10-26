window.BENCHMARK_DATA = {
  "lastUpdate": 1698304975657,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d4439b334610dec146ce7b2d0df75093b2a3ef",
          "message": "genesis: fix holesky genesis state (#3074)\n\n* genesis: fix holesky genesis state\r\n\r\n* Make typescript happy\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-29T22:27:08+05:30",
          "tree_id": "0791dce52eabbc7ba1fe4457591f736c79d5133c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/95d4439b334610dec146ce7b2d0df75093b2a3ef"
        },
        "date": 1696006882328,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23252,
            "range": "±6.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23836,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21971,
            "range": "±4.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22984,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22271,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2da533d714918f9513d21f7e9db74c06bd58516",
          "message": "FindPath-optimize (#3066)\n\n* trie/findPath: create stack array with key length\r\n\r\n* trie/findPath: use progress pointer to track key index\r\n\r\n* trie/findPath: filter array before return\r\n\r\n* fix debug msg\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-09-29T15:15:52-06:00",
          "tree_id": "351975c89dca60580eeee0dcf86de9483c1b54e1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e2da533d714918f9513d21f7e9db74c06bd58516"
        },
        "date": 1696022428948,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20031,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17791,
            "range": "±7.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18963,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19254,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18094,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8816e2ddee521a74c38e0c9ad67d866ca841f39",
          "message": "Make browser binaries optional (#3075)\n\n* Move browser testing deps to optional peers\r\n\r\n* Update package-lock\r\n\r\n* skip peer deps on CI\r\n\r\n* Add rollup as evm devDep\r\n\r\n* update package-lock\r\n\r\n* Revert evm devDep\r\n\r\n* revert changes in vm CI",
          "timestamp": "2023-09-30T16:34:19+05:30",
          "tree_id": "041039a5c0f75679cac563842a066e2752969fdc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8816e2ddee521a74c38e0c9ad67d866ca841f39"
        },
        "date": 1696072148374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18918,
            "range": "±6.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19669,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19563,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19039,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18243,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c235d379be907a88f2e465a90724e58ed415da2f",
          "message": "client: make the newpayload execution of big blocks non blocking (#3076)\n\n* client: make the newpayload execution of big blocks non blocking\r\n\r\n* add spec test\r\n\r\n* Clean up typing\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-30T19:24:21+05:30",
          "tree_id": "4512737fe44b70e86d1c79fd45d982cbf55bc88d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c235d379be907a88f2e465a90724e58ed415da2f"
        },
        "date": 1696082263535,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30025,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29941,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29766,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28797,
            "range": "±3.55%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23121,
            "range": "±12.04%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09601d290a787dc1cd38892feea50fe2a57602ff",
          "message": "client: track and respond to invalid blocks in engine api and other hive engine-cancun fixes (#3077)\n\n* client: track and respond to invalid blocks in engine api\r\n\r\n* skip adding produced blocks to chain in get payload\r\n\r\n* fix the validHash lookup and fix get payload spec\r\n\r\n* small prunecache cleanup\r\n\r\n* skip marking invalid for block data issues\r\n\r\n* perform parent validations first\r\n\r\n* make payload id unique w.r.t. fee recipient\r\n\r\n* cache remoteblocks early\r\n\r\n* doc updates\r\n\r\n* Nits\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-02T21:24:19-04:00",
          "tree_id": "3fbd98403f48b709d9b8df7e55baafdbd9f31a52",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/09601d290a787dc1cd38892feea50fe2a57602ff"
        },
        "date": 1696296509457,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29876,
            "range": "±4.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29921,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29621,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 29135,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24602,
            "range": "±9.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05b48dcc13ab80070e79fa47b62ead01dab3f778",
          "message": "client: fix canonical reset of the chain by the skeleton (#3078)\n\n* client: fix canonical reset of the chain by the skeleton\r\n\r\ncleanup and better logging for newpayload execution skip\r\n\r\nfix caching scenario\r\n\r\nfix the beacon syncronizer and skeleton opening\r\n\r\n* add more info to log\r\n\r\n* nits\r\n\r\n* Add test for skeleton/chain startup\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-03T11:08:05-04:00",
          "tree_id": "d3b7444c0b5ba2f44f023119e000ee49551d3166",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05b48dcc13ab80070e79fa47b62ead01dab3f778"
        },
        "date": 1696345904242,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28873,
            "range": "±5.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28944,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28226,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28002,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22960,
            "range": "±11.89%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a41a6725cc854a6b72e6ab6320e10dd8a9ebc380",
          "message": "client: Add eth_coinbase RPC implementation (#3079)\n\n* Add coinbase rpc endpoint\r\n\r\n* Add test for coinbase rpc endpoint\r\n\r\n* Add cli test for minerCoinbase option\r\n\r\n* Uncomment commented out tests\r\n\r\n* Update test\r\n\r\n* Update test\r\n\r\n* Fix test\r\n\r\n* Update packages/client/src/rpc/modules/eth.ts\r\n\r\n* fixes\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-04T11:37:24-04:00",
          "tree_id": "d49d793ce1e14eae0671106dbef143ac272697b3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a41a6725cc854a6b72e6ab6320e10dd8a9ebc380"
        },
        "date": 1696434114414,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19355,
            "range": "±4.79%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19595,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19488,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19649,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19320,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaf9c8eaa4745ef17f5a182fb5b29b6302258c6d",
          "message": "Guard against rpc port collisions (#3083)\n\n* Add guard for port collions in CLI params\r\n\r\n* Add test\r\n\r\n* Remove only\r\n\r\n* Remove process exit",
          "timestamp": "2023-10-04T14:56:07-04:00",
          "tree_id": "210e61cbad21cf4ed59396d6733a94690a57ee5e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aaf9c8eaa4745ef17f5a182fb5b29b6302258c6d"
        },
        "date": 1696445980450,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28685,
            "range": "±6.04%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28740,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28726,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28417,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23378,
            "range": "±10.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90a14028088def9f4b7f8520e65f39ee4b4c7c8b",
          "message": "Client: Small UX Improvements (#3086)\n\n* Client: do not falsely show Merge-happening-soon announcement if mergeForkIdTransition block number >= paris\r\n\r\n* Client: move skeleton-empty-comparison msg to debug level (not so much user info transported, rather repetitive and distracting)\r\n\r\n* Client: fix txsPerType engine API payload logging, improve formatting\r\n\r\n* Client: log the negative consensus client connection case\r\n\r\n* Client: adjust threshold for skeleton canonical chain fill status messages from 20 to 100 (reduce msg output)\r\n\r\n* Client: adjust threshold for skeleton canonical chain fill status messages even more\r\n\r\n* Client: add super messages [TM] so that outstandingly important notifications (transitioning to beacon sync) do not get lost in the noise\r\n\r\n* Client: somewhat reduce payload and forkchoice log intervals\r\n\r\n* Client: make execution HF switch log msg a super message\r\n\r\n* Client: somewhat reduce cache stats output\r\n\r\n* Client: another HF super msg\r\n\r\n* Fixed typing mismatch\r\n\r\n* Add connection status tests\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-05T14:52:13-04:00",
          "tree_id": "5ab5eaac9cdda72326b161f9f034fac3591a2bf9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/90a14028088def9f4b7f8520e65f39ee4b4c7c8b"
        },
        "date": 1696532936358,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28455,
            "range": "±5.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28890,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28567,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28335,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23427,
            "range": "±9.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de97e98659828907324d018ff6722d859541e5ba",
          "message": "client: skeleton reorg head fixes and log improvements (#3085)\n\n* client: skeleton reorg head fixes\r\n\r\n* improve logging\r\n\r\n* logging fix\r\n\r\n* improve log\r\n\r\n* revert\r\n\r\n* revert small change not required\r\n\r\n* fix build\r\n\r\n* improve logging\r\n\r\n* log after 6 secs\r\n\r\n* fix reset chain\r\n\r\n* remove\r\n\r\n* shift fill logs to debug\r\n\r\n* fix condition\r\n\r\n* relocate eta\r\n\r\n* enrich the logs\r\n\r\n* enrich the logs\r\n\r\n* fix\r\n\r\n* log improv\r\n\r\n* init log\r\n\r\n* log fix\r\n\r\n* nits\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-05T21:01:54-04:00",
          "tree_id": "5055807da1be5c66b07e51235949ec7473b97c3a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/de97e98659828907324d018ff6722d859541e5ba"
        },
        "date": 1696554503711,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29939,
            "range": "±4.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29033,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29299,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28847,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24469,
            "range": "±9.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e712f501c426070a411b4b5ddad9f054357c929a",
          "message": "client: fix synced log consistency and add short status summary (#3090)\n\n* fix synced log consistency and add short status summary\r\n\r\n* improv\r\n\r\n* add stall info plus some log reorg\r\n\r\n* log imrrov\r\n\r\n* better prefixes\r\n\r\n* spec fixes\r\n\r\n* fix setting hardfork\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-06T18:02:38+02:00",
          "tree_id": "5c8fa7d0730e078c288d6d38bc7ccb5b3036f130",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e712f501c426070a411b4b5ddad9f054357c929a"
        },
        "date": 1696608374535,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28267,
            "range": "±6.28%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 27461,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 27690,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27568,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23320,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9744079157a3b6137e8a063621519c75bbd6908e",
          "message": "client: add lodestar quickstart to client readme (#3093)",
          "timestamp": "2023-10-06T14:24:14-04:00",
          "tree_id": "41bdeb18f40bd3501991bf68016f1ee0550f4701",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9744079157a3b6137e8a063621519c75bbd6908e"
        },
        "date": 1696616864226,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29984,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29585,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29406,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28471,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24052,
            "range": "±10.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a8c597a78d9584f0eede4cf41a2ca26893433af",
          "message": "monorepo: fix postcss vulnerability (#3095)",
          "timestamp": "2023-10-07T17:50:37-04:00",
          "tree_id": "f1a0f5272441cc90b8167b5d7b87d4c56b382e9f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9a8c597a78d9584f0eede4cf41a2ca26893433af"
        },
        "date": 1696715823866,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28478,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28853,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28228,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28079,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23120,
            "range": "±9.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f348815a16d3835acf995670118c2fc9ed9e1bc",
          "message": "monorepo: add wallet to readme (#3096)\n\n* monorepo: add wallet to redme\r\n\r\n* monorepo: minor fixes\r\n\r\n* monorepo: fix readme wallet actions workflow svg url",
          "timestamp": "2023-10-08T21:01:35-04:00",
          "tree_id": "8d09a0d01cb8438c23b6dae21116505929d68790",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9f348815a16d3835acf995670118c2fc9ed9e1bc"
        },
        "date": 1696813525705,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28692,
            "range": "±5.57%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28710,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28501,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28053,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23251,
            "range": "±10.17%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc1d63b11b20e1afa4ef5dfc5f66410aa0580006",
          "message": "monorepo: add genesis to readme (#3097)\n\n* monorepo: add genesis to readme\r\n\r\n* monorepo: minor fixes\r\n\r\n* monorepo: adjust genesis tests column to N/A\r\n\r\n* Add genesis workflow\r\n\r\n* Add genesis tests badge link\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Amir <indigophi@protonmail.com>",
          "timestamp": "2023-10-09T07:50:41-04:00",
          "tree_id": "d417c51085920ed85aff23a9a8f3e00631e5c078",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fc1d63b11b20e1afa4ef5dfc5f66410aa0580006"
        },
        "date": 1696852498234,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28379,
            "range": "±6.94%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28451,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28652,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28208,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 27412,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9579e5e0be06e8aba65dd518e5886b9b834e6cf7",
          "message": "client: fixes regarding beacon sync, vmexecution and further log improvs (#3094)\n\n* client: fix starting beacon sync in init\r\n\r\nsmall imrpov\r\n\r\nfix error language\r\n\r\nprint cl connectected less often and some log improvs\r\n\r\n* handle an edgecase observed in devnet9\r\n\r\n* fix to check if head is executed\r\n\r\n* fix the spec\r\n\r\n* fix new payloadv2\r\n\r\n* Client -> Beacon Sync: tail <-> head flips\r\n\r\n* Client -> Beacon Sync: head -> el renaming to avoid head/tail subchain vs canonical confusion + foster comparison with cl value\r\n\r\n* Client -> Beacon Sync: remove redundant el=... cl=... log info addition\r\n\r\n* Client -> Beacon Sync: add small separator for backfill sync line for readability and association ease\r\n\r\n* Client -> Beacon Sync: small separator additions\r\n\r\n* Client -> Beacon Sync: fix reorgsHead coloring\r\n\r\n* Client -> Beacon Sync: significantly reduce payload/fcu log intervals (eventually replace with stats)\r\n\r\n* backstep vm if for anycase the parent state root is not found in trie\r\n\r\n* improv check\r\n\r\n* Bump test coverage\r\n\r\n* Client -> Beacon Sync: memory/cache stats output reduction\r\n\r\n* fix error msg typo\r\n\r\n* Client -> Beacon Sync: further reduce payload/fcu log output\r\n\r\n* Client -> Beacon Sync: reduce number of newlines\r\n\r\n* Client -> Beacon Sync: make created new subchain super msg\r\n\r\n* Client -> Beacon Sync: make resuming beacon sync super msg\r\n\r\n* Fix test\r\n\r\n* Client -> Beacon Sync: add backfilling -> filling super msg\r\n\r\n* Client -> Beacon Sync: make synchronized blockchain a normal super msg\r\n\r\n* Client -> Beacon Sync: again set cache stats a bit down\r\n\r\n* Client -> Beacon Sync: add chain validation completed super msg\r\n\r\n* fix the backfill to frontfill transition message\r\n\r\n* fix error\r\n\r\n* rename variables for better code comprehension\r\n\r\n* update validation complete condition\r\n\r\n* More clean up\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-09T22:35:39+05:30",
          "tree_id": "0600b6ba6846ec0a665266d4abc224ba4d741dea",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9579e5e0be06e8aba65dd518e5886b9b834e6cf7"
        },
        "date": 1696871369272,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28290,
            "range": "±5.58%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28527,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28329,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27856,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22127,
            "range": "±12.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4a4a926b01824176c312d8f1a887b5a8b1cad9a",
          "message": "Add holesky dns url (#3088)\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-10-09T11:36:49-07:00",
          "tree_id": "422c8dfb0fcca7c76704817eb5f0c0d376edd947",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f4a4a926b01824176c312d8f1a887b5a8b1cad9a"
        },
        "date": 1696876851342,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28954,
            "range": "±5.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28633,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28617,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28146,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22912,
            "range": "±10.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02a7abb2f767b8bafdb7fa7e4440e69bd618c67c",
          "message": "Client: More UI Improvements / Fix TxPool not being started along FCU (#3100)\n\n* Client: expand super msgs to also take in multiline output\r\n\r\n* Client: adjust CL disconnect thresholds to avoid reconnect messages\r\n\r\n* Client: add note to explain subchains on subchain creation\r\n\r\n* Client: fix synchronized setting on FCU\r\n\r\n* Client: make tx pool started a super msg\r\n\r\n* fix switching client to syncronized state and start txpool\r\n\r\n---------\r\n\r\nCo-authored-by: harkamal <gajinder@g11.in>",
          "timestamp": "2023-10-11T17:54:08+05:30",
          "tree_id": "3168fb310cf386a2eadaf42fbcf785954971ce9d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/02a7abb2f767b8bafdb7fa7e4440e69bd618c67c"
        },
        "date": 1697027335122,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19125,
            "range": "±6.26%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19800,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19525,
            "range": "±3.92%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19914,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19192,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2405da8d5c9ace9601f0312c48b7be997a9a8c29",
          "message": "Code cache should be able to save prestate without reading from statemanager DB (#3080)\n\n* Await accountEval when using it's return value in asserts\r\n\r\n* Fix account cache revert and _saveCachePreState\r\n\r\n* Do not use value from db for putting code into cache\r\n\r\n* Fix prestate save and revert logic\r\n\r\n* Update packages/statemanager/src/cache/code.ts\r\n\r\n* Check if key exists in map before checking the element to not overwrite undefined values\r\n\r\n* Change code comment to be more clear\r\n\r\n* Simplify save prestate check\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-12T11:10:03+02:00",
          "tree_id": "39b404bf239d2cea353a7c49e506bac345ca6f7a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2405da8d5c9ace9601f0312c48b7be997a9a8c29"
        },
        "date": 1697102009095,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30312,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29588,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29725,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28271,
            "range": "±4.98%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23874,
            "range": "±10.81%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4d60587409cf423159b07c03482ae37f2739f7e",
          "message": "Change rpcDebug option to allow enabling/disabling specific rpc module logs (#3102)\n\n* Change rpcDebug option to allow enabling/disabling specific rpc module logs\r\n\r\n* Client: generalize --rpcDebug functionality to allow for arbitrary filters\r\n\r\n* Fix test\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-13T13:35:10+02:00",
          "tree_id": "61667a7312d70fc28f980495b310797f7012c9e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a4d60587409cf423159b07c03482ae37f2739f7e"
        },
        "date": 1697197327626,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 27826,
            "range": "±7.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28530,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28255,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28255,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 26915,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "charmful0x@gmail.com",
            "name": "Darwin",
            "username": "charmful0x"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b4c229b0ec1be3fee052978db28ba904f9b92d0",
          "message": "docs: fix examples URLs path (#3103)",
          "timestamp": "2023-10-15T15:54:53-07:00",
          "tree_id": "283e54d45e40699be81814f068355c6a98e5a295",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7b4c229b0ec1be3fee052978db28ba904f9b92d0"
        },
        "date": 1697410707046,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29302,
            "range": "±5.54%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28860,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28827,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28379,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23271,
            "range": "±10.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8ac9bb876d474f1fd69ad1c3fc28c9509c99787",
          "message": "client: update c-kzg and use the offical trusted setup (#3107)\n\n* client: update c-kzg and use the offical trusted setup\r\n\r\n* update sims",
          "timestamp": "2023-10-20T09:10:58-04:00",
          "tree_id": "31c1f088375d0d53aa612fc59c18183ada53c21d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a8ac9bb876d474f1fd69ad1c3fc28c9509c99787"
        },
        "date": 1697807668611,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28772,
            "range": "±5.35%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28741,
            "range": "±2.79%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28516,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28501,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23379,
            "range": "±10.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df8c441ca06c88f35917fc452426ed0e11d45271",
          "message": "monorepo: address babel vulnerability (#3108)",
          "timestamp": "2023-10-21T19:17:13-04:00",
          "tree_id": "a4f73bb66a8bbaf22401b8efeb5c856e5e437dc8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/df8c441ca06c88f35917fc452426ed0e11d45271"
        },
        "date": 1697931397727,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30153,
            "range": "±4.82%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29474,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29436,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28853,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24231,
            "range": "±10.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d282e2e35258aa2751ba3828347d2ba99775df0c",
          "message": "trie: refactor lock class (#3109)\n\n* trie: refactor lock\r\n\r\n* trie: merge lock tests",
          "timestamp": "2023-10-22T01:01:33+01:00",
          "tree_id": "28db7d09722b48d50523c8128dc37205f009db2c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d282e2e35258aa2751ba3828347d2ba99775df0c"
        },
        "date": 1697933100261,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28728,
            "range": "±4.81%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28850,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28571,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28209,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23314,
            "range": "±10.62%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeb74e4b55972678092bb3a24a8485b996b632de",
          "message": "Change execution stats intervals (#3106)\n\n* Report execution stats in time intervals\r\n\r\n* Format constant\r\n\r\n* Remove unused property\r\n\r\n* Client: further reduce execution/state stats interval from 40 -> 90 secs\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-23T10:23:25+02:00",
          "tree_id": "6368583ac94055591591c9e54cd8e1deb43b67dd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/eeb74e4b55972678092bb3a24a8485b996b632de"
        },
        "date": 1698049865544,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18367,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16652,
            "range": "±6.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17910,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17622,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17488,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61af5c377d65821fb44829d72f9ca4c4ef8716c2",
          "message": "Write tests for slim format conversion helpers (#3114)\n\n* Write tests for slim format conversion helpers\r\n\r\n* Update packages/util/test/account.spec.ts\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-25T10:51:47+02:00",
          "tree_id": "aea45815f16024263ca1e4fc36c1a1870e361bb3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/61af5c377d65821fb44829d72f9ca4c4ef8716c2"
        },
        "date": 1698224156917,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23252,
            "range": "±7.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23562,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22624,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22955,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22383,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25696acfeb0b4b0fa8a5bd14a85beb55cc189b55",
          "message": "Util internal tests and fix (#3112)\n\n* Add tests for internal util functions\r\n\r\n* Reimplement fromUtf8 function to not double-add the hex prefix\r\n\r\n* Do not try to pad an already padded string\r\n\r\n* Use bytesToUnprefixedHex for fromUtf8\r\n\r\n* Add more tests\r\n\r\n* Remove unused import\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-25T19:24:46+02:00",
          "tree_id": "99eb0b836cd54e4b1ca8f8bcabe425788f584830",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/25696acfeb0b4b0fa8a5bd14a85beb55cc189b55"
        },
        "date": 1698255109897,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30120,
            "range": "±4.46%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29721,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29527,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28810,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24365,
            "range": "±9.55%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77292fe70f6fa74b91794c1a4f4567c1e6c2a81d",
          "message": "vm: better error message to avoid confusion with EIP1559 base fee (#3118)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-25T20:40:51+02:00",
          "tree_id": "104526d3b80148d0a49621dcc078381ca15d3782",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/77292fe70f6fa74b91794c1a4f4567c1e6c2a81d"
        },
        "date": 1698259503162,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20159,
            "range": "±6.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20586,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20243,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19780,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19007,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "876e56087698db18aa6f6cbf74f7f9d84843664b",
          "message": "client/pendingBlock: ensure withdrawals only get added if they are not null && not undefined (#3119)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-10-25T21:14:59+02:00",
          "tree_id": "c19d74577c017451c3e361794ff93835fe56d54d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/876e56087698db18aa6f6cbf74f7f9d84843664b"
        },
        "date": 1698261511353,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28410,
            "range": "±4.95%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28383,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28452,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27475,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22653,
            "range": "±12.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2353bc7cc72c2f10c8b505c31f02dde6601421d3",
          "message": "verkle: verkle package (#2923)\n\n* verkle: initial commit\r\n\r\n* verkle: scaffold verkle trie implementation and types\r\n\r\n* verkle: fix installation issues\r\n\r\n* verkle: move rust verkle wasm to verkle package\r\n\r\n* verkle: remove package json and readme from rust verkle wasm dir\r\n\r\n* util: add some bigint LE utils for verkle\r\n\r\n* verkle: refactor constants and cryptographic methods to the verkle package\r\n\r\n* verkle: remove unnecessary constants & methods\r\n\r\n* verkle: verkle node classes and types\r\n\r\n* verkle: get method and rawNode utils\r\n\r\n* verkle: handle case where array item is not found\r\n\r\n* verkle: wip findPath method\r\n\r\n* verkle: wip\r\n\r\n* verkle: fromRawNode method\r\n\r\n* verkle: update packages\r\n\r\n* verkle: minor adjustments\r\n\r\n* verkle: wip\r\n\r\n* verkle: add test case for put and get\r\n\r\n* verkle: wip insertstem and related methods for verkle nodes\r\n\r\n* verkle: internal node test\r\n\r\n* verkle: default values and minor fixes to internalNode\r\n\r\n* verkle: make internal verkle node options optional\r\n\r\n* verkle: leafNode basic test\r\n\r\n* verkle: remove unused import\r\n\r\n* verkle: setDepth method for leafNode and commented out code for create method\r\n\r\n* verkle: wip\r\n\r\n* verkle: add Point interface\r\n\r\n* verkle: general cleanup and improvements\r\n\r\n* verkle: minor test adjustments\r\n\r\n* verkle: readme and testing related updates\r\n\r\n* verkle: capital V for verkle workflow\r\n\r\n* Update packages/verkle/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/verkle/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/verkle/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/verkle/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* verkle: use Lock from util package\r\n\r\n* client: undo removal of link\r\n\r\n* util: update byte<>int conversion helpers\r\n\r\n* verkle: use Uint8Array instead of hexstrings for db\r\n\r\n* verkle: add imports to example\r\n\r\n* verkle: update db to Uint8Arrays\r\n\r\n* verkle: revert to using strings as keys for cache\r\n\r\n* verkle: update crypto import\r\n\r\n* verkle: adjust Key and Value encoding in create method\r\n\r\n* verkle: adjust value encoding in db del method\r\n\r\n* verkle: add missing key and value encoding opts to batch options\r\n\r\n* verkle: remove extra line\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <konjou@gmail.com>\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>",
          "timestamp": "2023-10-26T09:19:07+02:00",
          "tree_id": "ee121eff2f32221d7bcd8fdd078355eec4badada",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2353bc7cc72c2f10c8b505c31f02dde6601421d3"
        },
        "date": 1698304974548,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29388,
            "range": "±4.76%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29271,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29116,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28459,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24549,
            "range": "±8.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      }
    ]
  }
}