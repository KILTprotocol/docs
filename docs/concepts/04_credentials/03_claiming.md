---
id: claiming
title: Claims
---

import CodeBlock from '@theme/CodeBlock';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->
import Claim from '@site/scripts/out/claim.json.raw!=!raw-loader!@site/scripts/out/claim.json';

As KILT is an open system, entities can make claims about any other entities, including themselves.
A Claim (as in the real world) can only be trusted if another trusted entity (we call them Attesters) *certifies* this Claim.
Therefore, Verifiers might trust different Attesters for distinct scenarios.

## Creating a Claim

In KILT, Claims are based on claim types (CTypes).
Hence, given a CType, a Claimer only needs to create a Claim with the properties specified in the CType schema.
The resulting Claim contains a reference to the CType by its hash and includes the identity of the Claim subject (identified by the `owner` property).

<CodeBlock className="language-json" title="Claim example">
  {Claim}
</CodeBlock>

## Attesting the Claims

Once the Claimer has created a Claim, they need to get it *certified*, i.e., attested, by an Attester.
The resulting `Credential` must then be sent to the chosen Attester using any messaging system.

The to-be-attested `Credential` contains the original Claim, data needed for future selective disclosure (more on that in the [Verification section](./05_verification.md)) of the claim contents, the legitimation and / or delegation ID of the Attester and the Claim root hash, which is used to identify both the credential and its on-chain attestation.

For a detailed developer-oriented guide to KILT Claims, please refer to our [Claim Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/02_attestation_request.md).
