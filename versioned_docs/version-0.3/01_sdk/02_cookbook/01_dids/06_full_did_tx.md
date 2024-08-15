---
id: full-did-batch
title: Build DID Extrinsics
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidSignTx from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/did/09_full_did_tx.ts';
import FullDidBatch from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/did/08_full_did_batch.ts';

DID keys can be used to sign extrinsic.
But not every extrinsic can be signed using a DID.
The Spiritnet blockchain offers two types of extrinsics.

The first type can only be called using an account.
We call them account extrinsic.
The second callable type are DID extrinsics.
They must be used for all KILT features like creating CTypes, issue attestations, etc.
Since every extrinsic requires fees to be paid, this type needs to be wrapped inside an account extrinsic.
Accounts hold balances and can therefore pay fees and provide deposits.

This document describes how to sign the DID extrinsics.
The KILT SDK provides two functions for signing DID extrinsics.
The first function signs a single extrinsic while the second one batches multiple extrinsics together.

## Single extrinsics

To sign a single extrinsic, you need to provide:

* the DID that wants to sign the extrinsic (also called *origin* of the extrinsic)
  * refer to the [full did creation guide](02_full_did_creation.md) to learn how to create a DID
* [a `SignCallback` that signs the extrinsic](../07_signCallback.md)
* the extrinsic that should be signed and submitted
* and the address of the account that pays for the fees.

<TsJsBlock>
  {FullDidSignTx}
</TsJsBlock>


## Batch multiple extrinsics

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID.
For instance, a batch could create multiple services with a single submission to the blockchain.
This would save the user the time of generating one additional signature, as multiple extrinsics are batched and signed at once.
The extrinsics are also submitted and executed in the same block.
For more information, see the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batch using the `authorizeBatch` is provided below.

<TsJsBlock>
  {FullDidBatch}
</TsJsBlock>

DIDs have different keys that posses different capabilities.
Each key can only be used to authorize a specific subset of extrinsics.
If extrinsics are batched together that require different DID keys, the `authorizeBatch` function will call the sign callback multiple times.
