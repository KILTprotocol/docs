---
id: claiming
title: Claims
---

import CodeBlock from '@theme/CodeBlock';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->
import Claim from '@site/scripts/out/claim.json.raw!=!raw-loader!@site/scripts/out/claim.json';

As KILT is an open system, entities can make claims about any other entities, including themselves.
A claim (as in the real world) can only be trusted if another trusted entity (we call them Attesters) *certifies* this claim.
Therefore, Verifiers might trust different Attesters for distinct scenarios.

## Creating a Claim

In KILT, claims are based on claim types (CTypes).
Hence, given a CType, a Claimer only needs to create a claim with the properties specified in the CType schema.
The resulting claim contains a reference to the CType by its hash and includes the identity of the claim subject (identified by the `owner` property).

<CodeBlock className="language-json" title="Claim example">
  {Claim}
</CodeBlock>

## Requesting a Credential

Once the Claimer has created a claim, they need to get it *certified*, i.e., attested, by an Attester.
The resulting `Credential` must then be sent to the chosen Attester using any messaging system.

The to-be-attested `Credential` contains the original claim, data needed for future selective disclosure (more on that in the [Verification section](./05_verification.md)) of the claim contents, the legitimation and / or delegation ID of the Attester and the credential root hash, which is used to identify both the credential and its on-chain attestation.

For a detailed developer-oriented guide to KILT claims, see our [Claim Cookbook section](/develop/sdk/cookbook/claiming/attestation-request).
