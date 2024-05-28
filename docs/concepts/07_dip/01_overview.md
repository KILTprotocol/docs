---
id: what-is-dip
title: Overview
---

:::version-label[DIP]

:::

The Decentralized Identity Provider (DIP) enables a cross-chain decentralized identity system that mirrors the functionality of OpenID.

DIP has three key roles: the identity **provider**, the **consumer**, and the **user**.

- The identity **provider** is any blockchain with an identity system that makes it available for other chains, e.g., KILT Protocol, Litentry, etc.
- The **consumer** is any blockchain that has chosen to delegate identity management to the provider, thus relieving it of needing to maintain its identity infrastructure.
- The **user** is an entity with an identity on the provider chain and wants to use it on other chains without setting up a new identity on each. A Dapp developer can use the DIP SDK to make this process easier for the user and add other DIP-related features to their app.

This means that parachains requiring an identity solution don’t need to build their own infrastructure.
Instead, they can leverage the infrastructure DIP provides.
DIP is open-source, and you can integrate it with existing Polkadot-compatible runtimes with minimal changes and without affecting the fee model of the consumer system.

## Adding support to a parachain

There are several steps to add DIP support to a Substrate-based parachain, depending on the chain's role.

### Provider chain

1. Define the format of identity proofs and how verification works with the consumer chains.
2. Add the DIP provider pallet as a dependency to the chain runtime.
3. Configure the DIP provider pallet using the required `Config` trait.

:::info

Find more details in the [Provider pallet](./02_provider.md) section.

:::

### Consumer chain

1. Discover and retrieve the format of your identity proofs and how verification works with your identity provider
2. Add the DIP consumer pallet as a dependency to the chain runtime
3. Configure the DIP consumer pallet using the required `Config` trait.
4. Deploy it on chain, along with any additional pallets the identity provider requires.

:::info

Find more details in the [Consumer pallet](./03_consumer.md) section.

:::

## User accounts on KILT

For an account to take advantage of DIP with KILT it needs a decentralized identity (DID) and to create a transaction on the provider chain to generate a cross-chain identity commitment.

For an account to be able to do this, a Dapp developer needs to build the functionality into their app for a user using the DIP SDK.

:::info

Find more details in the [user account](./04_user_account_kilt.md) section.

:::

## Dapp developer

The DIP SDK is a JavaScript library that makes it easier for Dapp developers to integrate DIP into their apps. The SDK includes methods for interacting with runtimes, generating proofs, and more.

:::info

Find more details in the [Dapp developer](./05_dapp_developer.md) section.

:::