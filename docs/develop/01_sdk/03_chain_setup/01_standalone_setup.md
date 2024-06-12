---
id: standalone-chain-setup
title: BYOB - Bring Your Own Blockchain
---

If you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.
For this purpose, we provide a Docker image which runs in standalone mode.
This means that the blockchain doesn't act as a parachain but as an independent chain.
There is no need to run a Relay Chain and register the KILT chain as a parachain.
This greatly simplifies the setup.

You only need to start the Docker image:

```bash
docker run --rm -it -p 9944:9944 -p 9933:9933 kiltprotocol/standalone-node:latest --dev --ws-external --rpc-external
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
2022-05-05 13:25:12 ⛓  Native runtime: kilt-kestrel (kilt-kestrel-0.tx3.au4)
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

The blockchain exposes a RPC endpoint on port `9944`.
You can test that by calling an RPC endpoint using curl.

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "system_name", "params":[]}' http://127.0.0.1:9944/
```

This should give you `{"jsonrpc":"2.0","result":"KILT Node","id":1}` as a response.

The `--dev` parameter provides a pre-funded account which you can use as a faucet, and that has the following mnemonic: `receive clutch item involve chaos clutch furnace arrest claw isolate okay together`.

You can create the account with the following SDK function:

```ts
// Creates an ed25519 key by default which is required to access the funds.
const devFaucet = Crypto.makeKeypairFromUri(faucetSeed)
```

With the new `devFaucet`, you can transfer funds to other accounts and test all the KILT features that require tx fee payment.

## Standalone vs. Parachain (Peregrine/Spiritnet)

The standalone chain is close in functionality to Kilt parachains but there are a few fundamental differences between them.

<!-- ### Blocktime

Block time is actually the same, but this might change in the future. -->

### Governance

While governance is an important part of Kilt parachains, it's not used in the standalone version and the **Sudo** pallet replaces it.
None of the following pallets are part of the standalone chain, but they are all part of the parachain runtime:

* Democracy
* Council
* TechnicalCommittee
* TechnicalMembership
* Treasury
* Scheduler

### Staking

Staking is part of the consensus protocol and is used to elect who is allowed to produce blocks.
Parachains need to have this election process as decentralized as possible.
On the other hand, for a standalone development chain, it's not necessary since all nodes are probably controlled by you or your organization.

### Deployment Complexity

Deploying a parachain is more complex than deploying a standalone chain.
For the standalone node, a single Docker command is enough.
In contrast, the task of spinning up a parachain is split into three steps.

1. Setup a Relay Chain with 4 validators.
2. Start and connect your parachain node to the Relay Chain.
3. Register your parachain using the runtime WASM and the genesis state.

Since these steps are not trivial to execute and take some time to do manually, you can use this [Docker-based setup script](https://github.com/KILTprotocol/local-parachain-setup) to automate the steps.

### Transaction Encoding

Before transactions are sent to the chain, they are encoded and signed.
The encoding depends on the runtime and can differ from chain to chain.
Even the same call in the same pallet can have a different encoding for different chains, for instance, the `vest`()` call of the `vesting` pallet:

| Chain      | Encoding of Vesting.vest() |
| ---------- | -------------------------- |
| Spiritnet  | `0x2900`                   |
| Standalone | `0x2100`                   |
