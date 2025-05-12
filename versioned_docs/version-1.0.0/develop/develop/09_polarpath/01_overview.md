---
id: what-is-polarpath
title: Overview
---

:::version-label[polarPath]

:::

Polar path consists of an `asset-swap` pallet for parachain runtimes and extrinisics that let parachain developers make their native token accessible on the Ethereum network using [the Snowbridge bridge](https://docs.snowbridge.network) between Polkadot and Ethereum.

Polar path provides parachains with a solution for creating an ERC-20 wrapper around their native tokens, enabling a trustless, one to one conversion of any existing native parachain token (TOKEN) into a wrapped parachain token (eTOKEN) on Ethereum while maintaining the trustlessness guarantees Snowbridge provides. The switch also sends a corresponding amount of the native token to the parachain's sovereign account on the Asset Hub (wTOKEN).

## Setup

:::tip Asset Hub
The Polkadot Relay Chain doesn't natively support assets apart from DOT. Instead, parachains support this functionality, and for Polkadot, this parachain is the [Asset Hub](https://wiki.polkadot.network/docs/build-integrate-assets).
:::

Making a Parachain token usable on Ethereum requires the following steps:

1. The involved AssetHub account need enough balance of wTOKEN to cover the switch. This includes the amount of the switch, fees, and an existential deposit. The balance can be in DOT, KSM, ETH, or USDC.

    :::danger
    If you don't have enough balance when you perform the switch, you will lock your funds, requiring a public KILT governance referendum to unlock them.
    :::

2. Deploy an ERC-20 contract token to Ethereum with a fixed supply based on the parachain needs.

    :::tip Asset Hub
    Usually, the total supply should match the parachain max supply.
    :::

3. [Disable the token issuer rights](https://ethereum.org/en/guides/how-to-revoke-token-access/) on the ERC-20 contract.
4. [Register the ERC-20 token on Asset Hub](https://docs.snowbridge.network/applications/token-transfers#token-registration).
5. The parachain must have a representative asset on the state of the reserve XCM fees asset.

    For example, in the case of Asset Hub, the parachain should implement, `pallet-assets` to manage DOT on their chain.

6. The entity holding ERC-20 funds performs a one-time transfer of all tokens from their Ethereum account, minus the amount of tokens previously locked with the parachain, to the parachain's sovereign account on Asset Hub.
7. Parachain governance recognizes the wrapper around the ERC-20 token by pairing the ERC-20 token to the parachain token in the swap pallet and enable the token issuer rights.

Holders of the token on the parachain can can now switch tokens between it and Ethereum.

## Use cases

After setup, the following flows are possible:

:::tip XCM
Polar path uses Polkadot's [Cross-Consensus Message Format (XCM)](https://wiki.polkadot.network/docs/learn-xcm), a messaging format and language used to communicate between consensus systems.
:::

### Sending tokens from the parachain to Ethereum

1. Transmit custom parachain tokens, "TOKEN", from the parachain to tokens "eTOKEN" on Asset Hub via XCM
2. Send eTOKENs from Asset Hub to the ERC-20 contract on Ethereum via Snowbridge

### Sending tokens from Ethereum to the parachain

1. Send eTOKENs from the ERC-20 contract on Ethereum to Asset Hub via Snowbridge
2. Send wTOKENs on Asset Hub to TOKENs on the parachain via XCM

## Extrinsics

Before performing a switch, the `origin` account first needs to create a switch pair between the parachain token and the ERC-20 token using the `setSwitchPair` extrinisc. Then you can use any of the other extriniscs with the switch pair, including pausing, resuming, and performing the switch itself using the `switch` extrinisc.

Read [the `switch` pallet's documentation](./02_switch_pallet.md) for more information on the extriniscs.

:::tip KILT example
The KILT parachain uses the `Root` origin account, so creating a switch pair requires a referendum to dispatch the extrinsic.
:::

:::info Local and remote assets
A **local asset** is the identifier of the asset considered to be the parachain token.
This is a [Junction](https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-junctions) type, referring where in the current hierarchy to find the asset.

A **remote asset** is the identifier of the asset considered to be the other side of the switch pair.
For an ERC20 token, this is a [MultiLocation](https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-summary) type (in XCM terms) pointing directly to an address on one of the many EVM-based deployments.
:::
