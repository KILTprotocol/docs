---
id: did-signature
title: Generate and Verify a DID Signature
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidSignature from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/10_did_signature.ts';

In addition to being used to authorize chain operations, DIDs have off-chain applications.

One such applications is generating digital signatures.
As a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature.

The snippet below shows how to generate and verify a DID signature using the KILT SDK.

<TsJsBlock>
  {DidSignature}
</TsJsBlock>

:::note
Please take note that the code snippet mentioned earlier employs a DidDocument instance for generating the signature.
A DidDocument serves as a representation of a DID. This indicates that DIDs are capable of generating signatures, and the KILT SDK is designed to implement suitable verification logic based on the type of signer's DID.
:::
