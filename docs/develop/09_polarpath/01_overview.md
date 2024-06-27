---
id: what-is-polarpath
title: Overview
---


Polar path consists of an `asset-swap` pallet for KILT chain runtimes and extrinisics that let parachain-based chain developers to make their native token accessible on the Ethereum network using [the Snowbridge bridge](https://docs.snowbridge.network) between Polkadot and Ethereum.

Polar path provides parachains with a solution for creating an ERC-20 wrapper around their native tokens, enabling a trustless conversion of any existing native parachain token (PARA) into a wrapped parachain token (wPARA) on Ethereum while maintaining the trustlessness guarantees Snowbridge provides.

The pallet enables a configured conversion rate of parachain tokens on the origin chain to an ERC-20 wrapper token on Polkadot’s AssetHub.

## Setup

:::tip Asset Hub
The Polkadot Relay Chain doesn't natively support assets apart from DOT. Instead, parachains support this functionality, and for Polkadot, this parachain is the [Asset Hub](https://wiki.polkadot.network/docs/build-integrate-assets).
:::

Making a Parachain Token to be usable on Ethereum requires the following steps:
1. Deploy an ERC-20 contract token to Ethereum with a fixed supply based on the parachain needs.
2. [Disable the token issuer rights](https://ethereum.org/en/guides/how-to-revoke-token-access/) on the ERC-20 contract.
3. [Register the ERC-20 token on Asset Hub](https://wiki.polkadot.network/docs/learn-assets#creation-and-management).
4. The entity holding ERC-20 funds performs a one-time transfer of all tokens from their Ethereum account to the parachain's sovereign account on Asset Hub.
5. Parachain governance recognizes the wrapper around the ERC-20 token by pairing the ERC-20 token to the parachain token in the swap pallet and enable the token issuer rights.

Holders of the token on the parachain can can now switch tokens between it and Ethereum.

## Use cases

After setup, the following flows are possible:

:::tip XCM
Polar path uses Polkadot's [Cross-Consensus Message Format (XCM)](https://wiki.polkadot.network/docs/learn-xcm), a messaging format and language used to communicate between consensus systems.
:::

### Sending tokens from the parachain to Ethereum

1. Transmit custom parachain tokens, "PARA", from the parachain to wrapped tokens "wPARAs" on Asset Hub via XCM
2. Send wPARAs from Asset Hub to the ERC-20 contract on Ethereum via Snowbridge

### Sending tokens from Ethereum to the parachain

1. Send wPARAs from the ERC-20 contract on Ethereum to Asset Hub via Snowbridge
2. Transmit wPARAs on Asset Hub to PARAs on the parachain via XCM






Extrinsics

`setSwapPair`
Create a new switch pair between a parachain token and an ERC-20 token. Returns a result and takes the following parameters:

			origin: OriginFor<T>,
			reserve_location: Box<VersionedMultiLocation>,
			remote_asset_id: Box<VersionedAssetId>,
			remote_fee: Box<VersionedMultiAsset>,
			total_issuance: u128,
			circulating_supply: u128,


`removeSwapPair`

`pauseSwapPair`
Pause switching assets for a specific parachain token and ERC-20 pair.


`resumeSwapPair`
Restart switching assets for a specific parachain token and ERC-20 pair.

`swap`
Allow any user with enough local asset balance to send them to the pool account for this specific swap pair and get issued a corresponding amount of remote asset from the parachain’s sovereign account on remote location, to a `MultiLocation` of their choice.

