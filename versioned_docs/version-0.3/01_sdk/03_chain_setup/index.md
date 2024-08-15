---
id: dev-chain-setup
title: Chain Setup for Development
---

If you want to develop solutions that integrate KILT, such as a dapp, a wallet, or a Web3 login, you will need a blockchain environment that can be used for development and testing without requiring you to buy actual KILT tokens.
For that purpose, you can either use the public KILT Peregrine testnet or run your own development blockchain.

The **Peregrine** network is a parachain that is similar to Spiritnet (our mainnet) in functionality, but its coin, the PILT, doesn't hold any monetary value.
Any new features that we plan to add to our Spiritnet runtime will first undergo a testing period on Peregrine.
This gives developers like you the chance to test your software with any new features before they are available on Spiritnet.

Nevertheless, there are a scenarios where a public network (that everyone else is also using) is not ideal.
For instance, if you need more funds than the faucet can provide, or if you need to reset the state of the blockchain at any time, you will need to setup your own little KILT blockchain.

In this section, we will guide you through the process of 
1. [Running your own KILT blockchain](./01_standalone_setup.md)
2. [Connecting to the Peregrine test network](./02_peregrine_setup.md)
3. [Connecting to the Spiritnet production network](./03_prod_chain_setup.md)

## Set up your Project

We expect you to already have a small project which can connect and potentially interact with a KILT blockchain given the WebSocket address of a KILT node.
If that is not the case, please take a look at our [Quickstart section](../01_quickstart.md#connecting-to-kilt-blockchain) which will provide you with all necessary means to create and run a basic script.
