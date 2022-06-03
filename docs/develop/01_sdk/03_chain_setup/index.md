---
id: dev-chain-setup
title: Chain Setup for Development
---

If you want to develop a DApp, Wallet, web3 login or similar, you will need a running blockchain that doesn't require you to buy KILT just to develop and test the next big thing.
For that you can either use the KILT Peregrine network or run your own blockchain locally.

The Peregrine network is a parachain that is similar to the Spiritnet (our mainnet) in functionality, but its coin, the PILT, doesn't hold any monetary value.
New features that we add to our blockchain, will first be tested on Peregrine before they are introduced to the Spiritnet.
This gives you the chance to test your software with the newest blockchain features, before they are available on the mainnet.

Even though the Peregrine network is convenient, there are a scenarios where a public network is not the right choice for developers.
If you need more funds than the faucet can provide, or if you need to reset the state of the blockchain, you will need to setup your own little KILT blockchain.

In this section, we will guide you through the process of 
1. [Running your own KILT blockchain locally](./01_standalone_setup.md),
2. [Connecting to the Peregrine test network](./02_peregrine_setup.md) and
3. [Connecting to the Spiritnet production network](./03_prod_chain_setup.md).
4. Moreover, we will explain the [differences between our _Standalone_ and _Parachain_ runtimes](./02_peregrine_setup.md#standalone-vs-parachain-peregrinespiritnet).

## Set up your project

We expect you to already have a small project which can connect and potentially interact with a blockchain given its WebSocket address.
In case this puzzle piece is missing for you, please have a look at our [Quickstart](../01_quickstart.md#connecting-to-kilt-blockchain) which will provide you with all necessary means to create and run your script.

