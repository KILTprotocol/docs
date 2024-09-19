---
id: public-credentials
title: Public Credentials for Assets
---

import CodeBlock from '@theme/CodeBlock';

import PublicCredential from '@site/scripts/out/public-credential.json.raw!=!raw-loader!@site/scripts/out/public-credential.json';

[AssetDIDs][asset-did-concepts] give a way to uniquely identify assets regardless of the blockchain they live on or their current owner.
KILT allows owners of an on-chain DID with an assertion key (a.k.a. issuers) to issue credentials to those assets.

Public credentials aren't that different in their structure from traditional KILT credentials.
The main difference is that, since they're public, they don't have selective disclosure capabilities.
This is because the cryptographic information required to enable this is stripped away from the credential content.

<CodeBlock className="language-json" title="Public credential example">
  {PublicCredential}
</CodeBlock>

:::warning Anyone can be an issuer!
While the owner of normal KILT credentials holds them in their wallet and decides what credential to share with who, public credentials are, as the name suggests, public by design.

This means that when reading the credentials issued for a given asset, consumers should be aware of the level of trust they have towards the issuer of each credential.
:::

[asset-did-concepts]: ../04_asset_dids.md