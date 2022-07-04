---
id: standalone-chain-setup
title: BYOB - Bring Your Own Blockchain
---

In case you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.
For this purpose, we provide a Docker image which runs in standalone mode.
This means that the blockchain doesn't act as a parachain but as an independent chain.
There is no need to run a relaychain and register the KILT chain as a parachain.
This greatly simplifies the setup.

You only need to start the Docker image:

```bash
docker run --rm -it -p 9944:9944 -p 9933:9933 kiltprotocol/mashnet-node:latest --dev --ws-external --rpc-external
```

You should see output similar to the following:

```
2022-05-05 13:25:12 KILT Node
2022-05-05 13:25:12 ✌️  version 1.6.2
2022-05-05 13:25:12 ❤️  by KILT <info@kilt.io>, 2019-2022
2022-05-05 13:25:12 📋 Chain specification: Development
2022-05-05 13:25:12 🏷  Node name: subdued-chair-0035
2022-05-05 13:25:12 👤 Role: AUTHORITY
2022-05-05 13:25:12 💾 Database: RocksDb at /tmp/substrateufCNUV/chains/development/db/full
2022-05-05 13:25:12 ⛓  Native runtime: mashnet-node-10620 (mashnet-node-0.tx3.au4)
2022-05-05 13:25:13 🔨 Initializing Genesis block/state (state: 0xb4a2…94b3, header-hash: 0x09fc…3a2b)
2022-05-05 13:25:13 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2022-05-05 13:25:14 Using default protocol ID "sup" because none is configured in the chain specs
2022-05-05 13:25:14 🏷  Local node identity is: 12D3KooWMCqWaxXTQbmG9feCe4cMzjCzUKfm5T6VvGDmh8X5QHe9
2022-05-05 13:25:14 📦 Highest known block at #0
2022-05-05 13:25:14 〽️ Prometheus exporter started at 127.0.0.1:9615
2022-05-05 13:25:14 Listening for new connections on 0.0.0.0:9944.
2022-05-05 13:25:19 💤 Idle (0 peers), best: #0 (0x09fc…3a2b), finalized #0 (0x09fc…3a2b), ⬇ 0 ⬆ 0
2022-05-05 13:25:20 Accepted a new tcp connection from 172.17.0.1:56636.
2022-05-05 13:25:23 🙌 Starting consensus session on top of parent 0x...
2022-05-05 13:25:23 🎁 Prepared block for proposing at 1 (3 ms) [hash: 0x...; parent_hash: 0x09fc…3a2b; extrinsics (1): [0xae1a…0701]]
2022-05-05 13:25:23 🔖 Pre-sealed block for proposal at 1. Hash now 0x..., previously 0x....
```

Congratulations!
You are running your own KILT blockchain. 🎉

The blockchain exposes a websocket endpoint on port `9944` and an RPC endpoint on port `9933`.
You can test that by calling an RPC endpoint using curl.

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "system_name", "params":[]}' http://127.0.0.1:9933/
```

This should give you `{"jsonrpc":"2.0","result":"KILT Node","id":1}` as a response.

In addition, you can also connect to the exposed WebSocket endpoints using [your script](./index.md#set-up-your-project).
Simply replace the WebSocket address with `ws://127.0.0.1:9944`.
Please note that we connect to the port `9944` as we are using the WebSocket protocol for our SDK and not bare HTTP.
