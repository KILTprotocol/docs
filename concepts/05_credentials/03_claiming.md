---
id: claiming
title: Claims
---

import CodeBlock from '@theme/CodeBlock';
import Claim from '@site/scripts/out/claim.json.raw!=!raw-loader!@site/scripts/out/claim.json';

As KILT is an open system, entities can make claims about any other entities, including themselves.
An entity can only trust a claim (as in the real world) if another trusted entity (called **Issuers**) *certifies* this claim.
Therefore, **Verifiers** might trust different **Issuers** for distinct scenarios.

:::info Role recap
- **Holders** want information about themselves certified.
They also issue credentials, but these remain invalid without an attestation.
- **Issuer** check the truthfulness of a claim and certify them.
- **Verifiers** accept the credentials, only verifying that your certification are legitimate.
:::

## Creating a claim

In KILT, claims are based on claim types (CTypes).
Given a CType, a Holder only needs to create a claim with the properties specified in the CType schema.
The resulting claim contains a reference to the CType by its hash and includes the identity of the claim subject (identified by the `owner` property, which has the value of a KILT DID).

<CodeBlock className="language-json" title="Claim example">
  {Claim}
</CodeBlock>

## Requesting a credential

Once the Holder has wrapped their claims into a `Credential`, they send it to the chosen Issuer using any messaging system for **certification**, i.e. attested.

The to-be-attested `Credential` contains the original claim, data needed for future selective disclosure of the claim contents (read more in the [Verification documentation](./05_verification.md)), and the legitimation and / or delegation ID of the Issuer and the credential root hash, used to identify both the credential and its on-chain attestation.

:::info

For a detailed developer-oriented guide to KILT claims, read the [Claim Cookbook section](/develop/sdk/cookbook/claiming/attestation-request).

:::
