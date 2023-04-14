---
id: did-signature
title: Generate and Verify a DID Signature
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidSignature from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/09_did_signature.ts';

In addition to being used to authorize chain operations, both light and full DIDs have off-chain applications.

One such applications is generating digital signatures.
As a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature.

The snippet below shows how to generate and verify a DID signature using the KILT SDK.

You may notice the import of the `u8aToHex` utility function from the `@polkadot/util` package. This is because the KILT SDK uses the [polkadot.js](https://polkadot.js.org/docs/) libraries, that are intended to be used to interact with [substrate](https://docs.substrate.io/) based blockchains like KILT.
Those libraries provide all the necessary basics, like cryptographic primitives or serialization, but they do not provide any high-level functionality.

<TsJsBlock>
  {DidSignature}
</TsJsBlock>

:::note
Notice that the snippet above takes a `DidDocument` instance to generate the signature.
A `DidDocument` can represent either a light or a full DID.
This means that both light and full DIDs can generate signatures, and the KILT SDK implements the right verification logic depending on whether the signer is a light or a full DID.
:::
