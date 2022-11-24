---
id: full-did-batch
title: Sign Extrinsics With a Full DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidSignTx from '!!raw-loader!@site/code_examples/core_features/did/08_full_did_sign_tx.ts';
import FullDidBatch from '!!raw-loader!@site/code_examples/core_features/did/08_full_did_batch.ts';

A DID can be used to sign extrinsics.
But not every extrinsics can be sign using a DID.
The Spiritnet blockchain offers two flavours of extrinsics.

The first flavour can only be called using an account.
These extrinsic require fee payment and need therefore be send from an account with sufficient balance.

The second flavour is callable from a DID.
Since every transaction requires fees to be paid, this flavour needs to be wrapped inside a normal account extrinsic.
The account will pay all fees and deposit that will be required.

This document describes how to sign the DID extrinsics.
The KILT SDK provides two functions for signing DID extrinsics.
The first function signs a single extrinsic while the second one batches multiple extrinsics together.

## Single extrinsics

To sign a single transaction, you need to provide:

* the DID that should be the origin of the extrinsic
* a [`SignCallback`](../06_signCallback.md) that signs the extrinsic
* the extrinsic that should be submitted
* and the address of the account that pays for the fees.

<TsJsBlock>
  {FullDidSignTx}
</TsJsBlock>


## Batch multiple extrinsics

Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.
For instance, a batch could include the creation of two different CTypes in the same operation.
This would save the user the time of producing one additional block and generating one additional signature, as multiple extrinsics are batched and signed at once, and they are submitted and executed in the same block.
For more information, see the [official Substrate documentation](https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html).

An example of a batched creation of two CTypes using the `authorizeBatch` is provided below.

<TsJsBlock>
  {FullDidBatch}
</TsJsBlock>
