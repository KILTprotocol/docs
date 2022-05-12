---
id: dev-setup
title: Development Setup
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!@site/code-examples/core_features/dev_setup.ts';

If you want to develop a DApp, Wallet, web3 login or similar, you will need a running blockchain that doesn't require you to buy KILT just to develop and test the next big thing.
For that you can use the Peregrine network.
The Peregrine network is a parachain that is similar to the Spiritnet (our mainnet) in functionality, but its coin, the PILT, doesn't hold any monetary value.
New features that we add to our blockchain, will first be tested on Peregrine before they are introduced to the Spiritnet.
This gives you the chance to test your software with the newest blockchain features, before they are available on the mainnet.

Even though the peregrine network is convenient, there are a scenarios where a public network is not the right choice for developers.
If you need more funds than the faucet can provide, or if you need to reset the state of the blockchain, you will need to setup your own little KILT blockchain.

Below, we will guide you through the process of connecting to the Peregrine network as well as running your own KILT blockchain.
Moreover, we will explain the difference between our _Standalone_ and _Parachain_ runtimes.

## Set up your project

Before we can connect to our blockchain, we need to create a small project that can connect to the chain.
For that create a new directory and initialize a new project.
We are also adding the KILT SDK, TypeScript and a couple of peer dependencies.

```bash
yarn init -y
yarn add @kiltprotocol/sdk-js@0.27.0 \
    @polkadot/keyring@8.7.1 \
    @polkadot/util@8.7.1 \
    @polkadot/util-crypto@8.7.1
yarn add -D ts-node \
    typescript \
    @types/node
```

After all these dependencies are added, we will add a simple script that prints the balance of a couple of well known development accounts.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

Copy the above code into index.ts.
You can know execute the script:

```bash
yarn exec ts-node index.ts
```

The output should look like this:

```
Seed //Alice has account id 4siJtc4dYq2gPre8Xj6KJcSjVAdi1gmjctUzjf3AwrtNnhvy and 0
Seed //Bob has account id 4r99cXtVR72nEr9d6o8NZGXmPKcpZ9NQ84LfgHuVssy91nKb and 0
```

None of the development accounts have usable balance on the public Peregrine network.

## BYOB - Bring Your Own Blockchain

If you don't want to rely on Peregrine, need more funds or need to periodically reset the state of the blockchain, you will need to run your own blockchain.
For this purpose, we provide a docker image which runs in standalone mode.
This means that the blockchain doesn't act as a parachain but as an independent chain.
There is no need to run a relaychain and register the KILT chain as a parachain.
This greatly simplifies the setup.
You only need to start the docker image:

```
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
You are running your own blockchain. 🎉

The blockchain exposes a websocket endpoint on port `9944` and an RPC endpoint on port `9933`.
You can test that by first calling an RPC endpoint using curl.

```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "system_name", "params":[]}' http://127.0.0.1:9933/
```

This should give you `{"jsonrpc":"2.0","result":"KILT Node","id":1}` as a response.

But you can also connect to the websocket endpoints using our little script above.
Simple replace the Peregrine address `wss://peregrine.kilt.io/parachain-public-ws` with `ws://127.0.0.1:9944`.
Note that we connect to the port `9944` as we are using the websocket protocol for our SDK and not bare http.


## Standalone vs. Parachain (Peregrine/Spiritnet)

The standalone chain is very close in functionality to our parachains but there are a few fundamental differences between them.

<!-- ### Blocktime

Block time is actually the same, but this might change in the future. -->

### Governance

While governance is a very important part of our parachains, it is not used in the standalone version and replaced by the sudo pallet.
None of the following pallets are part of the standalone chain, but they are all part of the parachain runtime:

* Democracy
* Council
* TechnicalCommittee
* TechnicalMembership
* Treasury
* Scheduler

### Staking

Staking is a feature that is used to elect who is allowed to produce blocks.
It is important for parachains to have this election as decentralized as possible.
But for a local development chain it is not necessary since you will be the only one producing blocks.

### Deployment Complexity

Deploying a parachain is more complext than deploying a standalone chain.
For the standalone node, you simple execute a single docker command.
The task of spinning up a parachain can be split up in three steps.

1. Setup a relay chain with 4 validators.
2. Start and connect your parachain node to the relaychain.
3. Register your parachain using the runtime WASM and the genesis state.

Since these steps are not trivial to execute and take quite some time to do by hand, we started a [docker based setup](https://github.com/KILTprotocol/local-parachain-setup) which automates these steps.

### Transaction Encoding

Before transactions are send to the chain, they are encoded and signed.
The encoding depends on the runtime and can differ from chain to chain.
Even the same call in the same pallet can have a different encoding for different chains.

| Chain      | Encoding of Vesting.vest() |
| ---------- | -------------------------- |
| Spiritnet  | `0x2900`                   |
| Standalone | `0x2100`                   |
