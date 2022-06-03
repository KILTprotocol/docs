---
id: peregrine-chain-setup
title: Connect with Peregrine
---

Before connecting to the production Spiritnet, you should test your application with its canary network _Peregrine_.
In contrast to [running your own blockchain](./01_standalone-setup.md), you will neither have control over the blockchain, nor have any initial funds.

In this guide we will guide you through the processing of receiving funds on Peregrine and connecting to the network.
Additionally, we explain the difference between the Standalone and Parachain runtimes.

## Receive funds

Since the native token of Peregrine, the _PILT_, does not have any economic value, you can request 100 PILT from the [Peregrine faucet](https://faucet.peregrine.kilt.io).

## Connect with the network

Simply replace the WebSocket address of your [your script](./index.md#set-up-your-project) or application with `wss://peregrine.kilt.io/parachain-public-ws`.

You can either use your own frontend or the [Polkadot JS Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer) to interact with the chain.
Moreover, you can use [Subscan](https://kilt-testnet.subscan.io/) as a chain explorer.
For a full list of deployments and services, please have a look [here](../../02_chain/03_deployments.md).

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

Deploying a parachain is more complex than deploying a standalone chain.
For the standalone node, you simple execute a single docker command.
The task of spinning up a parachain can be split up in three steps.

1. Setup a relay chain with 4 validators.
2. Start and connect your parachain node to the relaychain.
3. Register your parachain using the runtime WASM and the genesis state.

Since these steps are not trivial to execute and take quite some time to do by hand, we provide a minimal [docker based setup](https://github.com/KILTprotocol/local-parachain-setup) which automates these steps.

### Transaction Encoding

Before transactions are sent to the chain, they are encoded and signed.
The encoding depends on the runtime and can differ from chain to chain.
Even the same call in the same pallet can have a different encoding for different chains.

| Chain      | Encoding of Vesting.vest() |
| ---------- | -------------------------- |
| Spiritnet  | `0x2900`                   |
| Standalone | `0x2100`                   |