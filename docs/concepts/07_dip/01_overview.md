---
id: what-is-dip
title: Overview
---

The Decentralized Identity Provider (DIP) enables cross-chain decentralized identity system that mirrors the functionality of OpenID. This means that parachains requiring an identity solution don’t need to build their own infrastructure. Instead, they can leverage the infrastructure DIP provides. DIP is open-source, and you can integrate it with existing Polkadot-compatible runtimes with minimal changes and without affecting the fee model of the relying party.


DIP has three key roles: the identity **provider**, the **consumer**, and the **user**.

- The identity **provider** is any blockchain with an identity system that makes it available for other chains, e.g., KILT Protocol, Litentry, etc.
- The relaying party or **consumer** is any blockchain that has chosen to delegate identity management to the provider, thus relieving it of needing to maintain its identity infrastructure.
- The **user** is an entity with an identity on the provider chain and wants to use it on other chains without setting up a new identity on each.


## Adding support to a parachain

There are several steps to add DIP support to a substrate-based parachain, depending on the chain's role.

### Provider chain


1. Agree on the format of your identity proofs and how verification works with your consumer chains.
2. Add the DIP provider pallet as a dependency in your chain runtime.
3. Configure the DIP provider pallet using the required `Config` trait.

You can find more details in the [Provider pallet](./02_provider.md) section.


### Consumer chain

1. Agree on the format of your identity proofs and how verification works with your identity provider
2. Add the DIP consumer pallet as a dependency in your chain runtime
3. Configure the DIP consumer pallet using the required `Config` trait.
4. Deploy it on your chain, along with any additional pallets the identity provider requires.

You can find more details in the [Consumer pallet](./03_consumer.md) section.

## Developer

Use SDK methods



