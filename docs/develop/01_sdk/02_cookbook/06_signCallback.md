---
id: signCallback
title: SignCallback
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import SignCallback from '!!raw-loader!@site/code_examples/core_features/signCallback/useSignCallback.ts';
import SignExtrinsicCallback from '!!raw-loader!@site/code_examples/core_features/signCallback/useExtrinsicCallback.ts';
import GetStoreTxSignCallback from '!!raw-loader!@site/code_examples/core_features/signCallback/useStoreTxSignCallback.ts';

Signing data involves using the private key and therefore needs to be secure.
There are many different options how data could be signed.
You might have the private key stored in memory and are therefore able to simply sign the data.
This is the easiest option but also comes with higher security risk.
Storing the private key on a separate device or inside a sandboxed application can increase security.
But to enable these security options, we need a generic interface to talk to the signer.
This is what the `SignCallback` does.

The `SignCallback` defines an interface between the SDK and an arbitrary signing strategy.
May it be a ledger, an air gapped phone or your browser extension.
The interface is generic enough to support implementations for all these security measures.

## The SignCallback Family

There are three types of signing callbacks:
1. The `SignCallback` is the most general and can be used in almost all cases, except when signing a full DID creation transaction.
2. The `SignExtrinsicCallback` is a special `SignCallback` which can only be used to sign extrinsics.
   Thus, every `SignCallback` can also be used as a `SignExtrinsicCallback`.
3. The `GetStoreTxSignCallback` can only be used to sign the creation of a new DID.

### SignCallback

The plain `SignCallback` signs arbitrary data.
It is called with `SignRequestData` which contains

* the `data` as `UInt8Array` that should be signed
* the `keyRelationship` which specifies which DID key must be used
* and the `did` (`DidUri`) which specifies the DID that must sign the data

The callback is expected to return a `SignResponseData` which contains

* the `signature` as an `UInt8Array`
* the `keyUri` which identifies the key that was used for signing
* and the `keyType` which specifies the signature scheme that was used (either `sr25519`, `ed25519` or `ecdsa`)

The signed callback can be used as a closure.
If you already have the private key of the DID stored in the surrounding scope, you can just use this key.

<TsJsBlock>
    {SignCallback}
</TsJsBlock>

### SignExtrinsicCallback

The `SignExtrinsicCallback` is a special case of the `SignCallback`.
Signing an extrinsic doesn't require the `keyUri` as a return value since the chain will pick the appropriate key using information from the extrinsic.
The extrinsic that is submitted has a specific `VerificationKeyRelationship`, which defines which key must be used to sign the extrinsic.
Using this relation between extrinsic and key, the chain looks up the public key and verifies the signature.

The `SignExtrinsicCallback` is called with the same `SignRequestData`, but can return a `SignResponseData` that doesn't contain the `keyUri` but only

* the `signature` as an `UInt8Array`
* and the `keyType` which specifies the signature scheme that was used (either `sr25519`, `ed25519` or `ecdsa`).

<TsJsBlock>
    {SignExtrinsicCallback}
</TsJsBlock>

### GetStoreTxSignCallback

The `GetStoreTxSignCallback` is only used to sign the data that is submitted to the blockchain when a DID is being created.
Because there is no DID identifier before the DID is registered on chain, this callback doesn't receive the DID as a parameter.
There is also no DID document and no public key stored if the DID hasn't yet been created.
Therefore the `keyUri` cannot point to a valid DID key and is not included in the return data.

<TsJsBlock>
    {GetStoreTxSignCallback}
</TsJsBlock>

## Signing using an extension

🚧 This section is work in progress 🚧
