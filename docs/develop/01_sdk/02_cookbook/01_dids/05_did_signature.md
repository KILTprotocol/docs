---
id: did-signature
title: Generate and Verify a DID Signature
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidSignatureTs from '!!raw-loader!@site/code_examples/core_features/did/08_did_signature.ts';
import DidSignatureJs from '!!raw-loader!@site/code_examples/core_features/_js/did/08_did_signature.js';

Beyond being used to authorize chain operations, both light and full DIDs have off-chain applications.

One of such applications is generating digital signatures.
As a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature.

The snippet below shows how to generate and verify a DID signature using the KILT SDK.

<TsJsBlock tsSnippet={DidSignatureTs} jsSnippet={DidSignatureJs} />

:::note
Notice that the snippet above takes a `DidDocument` instance to generate the signature.
A `DidDocument` can represent either a light or a full DID.
This means that both light and full DIDs can generate signatures, and the KILT SDK implements the right verification logic depending on whether the signer is a light or a full DID.
:::
