---
id: peregrine-chain-setup
title: Connect to Peregrine
---

Before connecting to the production Spiritnet, it is recommended to test applications using its canary network _Peregrine_.
In contrast to [running your own blockchain](./01_standalone_setup.md), you will neither have control over the blockchain, nor have any initial funds.

In this section we will guide you through the process of receiving funds on Peregrine and connecting to one of the network nodes.
Additionally, we explain the difference between the Standalone and Parachain runtimes.

## Receive Funds

Since the native token of Peregrine, the _PILT_, does not have any economic value, you can request 100 PILT from the [Peregrine faucet](https://substratefaucet.xyz/kilt).

## Connect to the Network

Replace the WebSocket address of [your script](./index.md#set-up-your-project) or application with `wss://peregrine.kilt.io`.

You can either use your own frontend or the [Polkadot JS Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws#/explorer) to interact with the chain.
For a full list of deployments and services, take a look [here](../../02_chain/03_deployments.md).
