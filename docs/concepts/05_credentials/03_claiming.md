---
id: claiming
title: Claims
---

import CodeBlock from '@theme/CodeBlock';
import Claim from '@site/scripts/out/claim.json.raw!=!raw-loader!@site/scripts/out/claim.json';

As KILT is an open system, entities can make claims about any other entities, including themselves.
An entity can only trust a claim (as in the real world) if another trusted entity (called Attesters) *certifies* this claim.
<!-- TODO: But what's a verifier? -->
Therefore, Verifiers might trust different Attesters for distinct scenarios.

## Creating a claim

In KILT, claims are based on claim types (CTypes).
Given a CType, a Claimer only needs to create a claim with the properties specified in the CType schema.
The resulting claim contains a reference to the CType by its hash and includes the identity of the claim subject (identified by the `owner` property, which has the value of a KILT DID).

<CodeBlock className="language-json" title="Claim example">
  {Claim}
</CodeBlock>

## Requesting a credential

Once the Claimer has wrapped his claims into a `Credential`, it must be sent the chosen Attester using any messaging system to get them **certified**, i.e. attested.

The to-be-attested `Credential` contains the original claim, data needed for future selective disclosure of the claim contents (read more in the [Verification documentation](./05_verification.md)), and the legitimation and / or delegation ID of the Attester and the credential root hash, used to identify both the credential and its on-chain attestation.

:::info

For a detailed developer-oriented guide to KILT claims, read the [Claim Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/02_attestation_request.md).

:::
