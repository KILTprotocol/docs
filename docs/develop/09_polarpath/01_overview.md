---
id: what-is-polarpath
title: Overview
---

Polar path consists of an `asset-swap` pallet for parachain runtimes and extrinisics that let parachain developers make their native token accessible on the Ethereum network using [the Snowbridge bridge](https://docs.snowbridge.network) between Polkadot and Ethereum.

Polar path provides parachains with a solution for creating an ERC-20 wrapper around their native tokens, enabling a trustless, one to one conversion of any existing native parachain token (PARA) into a wrapped parachain token (wPARA) on Ethereum while maintaining the trustlessness guarantees Snowbridge provides.

## Setup

:::tip Asset Hub
The Polkadot Relay Chain doesn't natively support assets apart from DOT. Instead, parachains support this functionality, and for Polkadot, this parachain is the [Asset Hub](https://wiki.polkadot.network/docs/build-integrate-assets).
:::

Making a Parachain token usable on Ethereum requires the following steps:

1. Deploy an ERC-20 contract token to Ethereum with a fixed supply based on the parachain needs.

    :::tip Asset Hub
    In most cases, the total supply should match the parachain max supply.
    :::

2. [Disable the token issuer rights](https://ethereum.org/en/guides/how-to-revoke-token-access/) on the ERC-20 contract.
3. [Register the ERC-20 token on Asset Hub](https://docs.snowbridge.network/applications/token-transfers#token-registration).
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
2. Send wPARAs on Asset Hub to PARAs on the parachain via XCM

## Extrinsics

Before performing a switch, the `origin` account first needs to create a switch pair between the parachain token and the ERC-20 token using the `setSwitchPair` extrinisc. Then you can use any of the other extriniscs with the switch pair, including performing the switch itself using the `switch` extrinisc.

:::tip KILT example
The KILT parachain uses the `Root` origin account, so creating a switch pair requires a referendum to dispatch the extrinsic.
:::

:::info Local and remote assets
A **local asset** is the identifier of the asset considered to be the parachain token.
This is a [Junction](https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-junctions) type, referring where in the current hierarchy to find the asset.

A **remote asset** is the identifier of the asset considered to be the other side of the switch pair.
For an ERC20 token, this is a [MultiLocation](https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-summary) type (in XCM terms) pointing directly to an address on one of the many EVM-based deployments.
:::

### `setSwitchPair`

Create a new switch pair between a parachain token and an ERC-20 token. Returns a result and takes the following parameters:

-   `origin`: Polkadot [Junction](https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-junctions) defining the
-   `reserve_location`: `MultiLocation` defining the location of the remote asset.
-   `remote_asset_id`: Box<VersionedAssetId>
-   `remote_fee`: Box<VersionedMultiAsset>
-   `total_issuance`: A `u128` defining ,
-   `circulating_supply`: A `u128` defining,

### `removeSwitchPair`

Remove an existing switch pair. Returns a result and takes the following parameters:

-   `remote_asset_id`: Box<VersionedAssetId>,

### `pauseSwitchPair`

Pause an existing switch pair. Returns a result and takes the following parameters:

-   `remote_asset_id`: Box<VersionedAssetId>,

### `resumeSwitchPair`

Resume a paused an existing switch pair. Returns a result and takes the following parameters:

-   `remote_asset_id`: Box<VersionedAssetId>,

### `switch`

Allow any user with enough parachain asset balance to send them to the [Asset Hub pool account](https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/pallet/struct.Pallet.html#method.create_pool) for a specific switch pair and receive a corresponding amount of remote asset from the parachain's sovereign account on the remote location, to a `MultiLocation` of their choice.

Returns a result and takes the following parameters:

-   `from`: T::AccountId
-   `to`: VersionedMultiLocation
-   `amount`: LocalCurrencyBalanceOf<T>
