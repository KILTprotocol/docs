---
id: did-signature
title: Generate and Verify a DID Signature
---

import CodeBlock from '@theme/CodeBlock';
import DidSignature from '!!raw-loader!@site/code_examples/core_features/did/08_did_signature.ts';

In addition to being used to authorize chain operations, both light and full DIDs have off-chain applications.

One such applications is generating digital signatures.
As a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature.

The snippet below shows how to generate and verify a DID signature using the KILT SDK.

<CodeBlock className="language-ts">
  {DidSignature}
</CodeBlock>

:::note
Notice that the snippet above takes a `DidDetails` instance to generate the signature.
The `DidDetails` class is an abstract class that both `LightDidDetails` and `FullDidDetails` implement (more info [here][sdk-did-details-module]).
This means that both light and full DIDs can generate signatures, and the KILT SDK implements the right verification logic depending on whether the signer is a light or a full DID.
:::

[sdk-did-details-module]: https://github.com/KILTprotocol/sdk-js/tree/master/packages/did/src/DidDetails