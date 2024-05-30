---
id: dapp-developer
title: Dapp developer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::version-label[DIP]

:::

The Decentralized Identity Provider (DIP) SDK helps Dapp developers build DIP functionality into their apps.

## Installation

Add the SDK as a dependency:

```bash npm2yarn
npm install @kiltprotocol/dip-sdk
```

Import the SDK into your code:

```typescript
import { * } from '@kiltprotocol/dip-sdk'
```

## Example application

This example application walks through the code you can find in the tests for the DIP SDK.

### 1. Generate a base proof

Start by generating the base proof for the DIP using the `[generateDipSiblingBaseProof](https://kiltprotocol.github.io/dip-sdk/functions/generateDipSiblingBaseProof.html)` method and passing the desired configuration:

```typescript
const baseDipProof = await DipSdk.generateDipSiblingBaseProof(config)
```

:::info What's a base proof?
A base proof is a cross-chain state proof, revealing the parts of a DID Document stored on the KILT blockchain.
:::

The configuration for the base proof takes the following parameters:

-   `DipSiblingBaseProofInput`: The input for the base proof. It can be one of the following values:
    -   `didUri`: (Required) The DID URI of the DIP subject performing the cross-chain operation.
    -   `keyIds`: (Required) An array of verification method IDs of the DID revealed in the cross-chain operation.
    -   `proofVersion`: (Required) The version of the DIP proof to generate.
    -   `blockNumber`: The block number of the relay chain to use for the generation of the DIP proof. If not provided, uses the last finalized block.
    -   `linkedAccounts`: An array of account addresses to link to the DID and reveal in the generated proof.
    -   `web3Name`: Whether to reveal the web3name of the DID subject in the generated proof.

In the example, the configuration also has extra parameters for the time-bound DID signature extension [mentioned below](#creating-extensions-for-specific-proofs).

For this example, the configuration also needs details of the provider, which in this example case uses this value populated from an environment variable:

```typescript
const providerAddress = `ws://127.0.0.1:${process.env['PROVIDER_ALICE_RPC']}`
```

### 2. Generate a submittable extrinsic

The method returns the DID base proof. You have to call a second method, the `[generateDipSubmittableExtrinsic](https://kiltprotocol.github.io/dip-sdk/functions/generateDipSubmittableExtrinsic.html)` method to generate a submittable extrinsic.

You need to pass the following parameters:

-   The API of the consumer chain.
-   The base proof.
-   The extrinsic call to the consumer chain.
-   The DID URI.

:::info Submittable extrinsics

A transaction that originates from an external account and affects the state of the blockchain.
An extrinisc executes actions on the network, such as transferring funds, making governance decisions, using functionality of the parachain, or interacting with smart contracts.

:::

```typescript
const dipSubmittable = DipSdk.generateDipSubmittableExtrinsic({
    api: consumerApi,
    baseDipProof,
    call,
    didUri: did.uri,
})
```

The method returns the different components of the proof, [which you can see in the example code](https://github.com/KILTprotocol/dip-sdk/blob/9ad141b3757e076744ab8b2d29bcf10bbeaddd9f/tests/dip-provider-template-dip-consumer-template/develop.test.ts#L219):

-   The provider head proof, which is proof of the provider parachain header on the relay chain.
-   The commitment proof, which proves the DIP commitment for the subject of the action, which is the DID URI.
-   The actual deep proof, which reveals parts of the DID document as specified by key IDs, proof version, whether to include the web rename and the linked account, and the proof version that the user specified.

Behind the scenes, the method uses the `dispatchAs` method ([and corresponding chain method](https://github.com/KILTprotocol/kilt-node/blob/4ddb8a0ef6258873458f19d3ee9dcb6d7c24e645/pallets/did/src/lib.rs#L1152)) to pass the extrinsic following the consumer's type registry.
You can now sign and submit to the consumer chain.

```typescript
await signAndSubmitTx(consumerApi, dipSubmittable, submitterKeypair)
```

### 3. Linking accounts (optional)

Linked accounts let you specify which accounts you want to prove that you control when you make the cross-chain proof. As part of the proof provided, you can also include other values, such as the web3name.

For all the accounts you want to link, use the `associateAccountToChainArgs` method, [as detailed in this guide](../../develop/01_sdk/02_cookbook/03_account_linking/01_link.md##linking-an-account-to-a-did).

You can then batch all the linked account transactions and authorize them using the `authorizeTx` method.

```typescript
const signedLinkedAccounts = await Kilt.Did.authorizeTx(
    newFullDidUri,
    providerApi.tx.utility.batchAll(linkAccountTxs),
    signCallback,
    newSubmitterKeypair.address as KiltAddress,
    { txCounter: new BN(4) }
)
```

:::tip

You can also include accounts you want to link as part of the initial configuration object for the base proof as a list of account addresses.

:::

## Creating extensions for specific proofs

If you need a specific proof type for a consumer chain, then a chain developer needs to submit a PR to the SDK repository in the `src > dipProof > extensions` folder.
The extension included with the SDK adds support for a time-bound DID signature, i.e., a signature which is valid only until a certain block number on the consumer chain.

The extension can take any form, but must return [a SCALE encoded](https://docs.substrate.io/reference/scale-codec/) object. There's an example of how the extension does this [on GitHub](https://github.com/KILTprotocol/dip-sdk/blob/9ad141b3757e076744ab8b2d29bcf10bbeaddd9f/src/dipProof/extensions/timeBoundDidSignature.ts#L113).

To use the extension, the `generateDipSubmittableExtrinsic` method and pass the additional proof elements along with consumer chain specific components.

```typescript
const dipSubmittable = DipSdk.generateDipSubmittableExtrinsic({
    additionalProofElements:
        DipSdk.dipProof.extensions.timeBoundDidSignature.toChain(
            crossChainDidSignature
        ),
    api: consumerApi,
    baseDipProof,
    call,
    didUri: did.uri,
})
```

:::info

Read the auto-generated [API documentation](https://kiltprotocol.github.io/dip-sdk) for more details on the methods the SDK provides.

:::
