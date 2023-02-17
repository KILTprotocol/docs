---
id: public-credentials
title: Public Credentials for Assets
---

import CodeBlock from '@theme/CodeBlock';

import PublicCredential from '@site/scripts/out/public-credential.json.raw!=!raw-loader!@site/scripts/out/public-credential.json';

Given that with [AssetDIDs][asset-did-concepts] there is now a way to uniquely identify assets regardless of the chain they live on or their current owner, KILT also allows owners of a on-chain DID with an assertion key (a.k.a. attesters) to issue credentials to those assets.

Public credentials are not very different in their structure compared to traditional KILT credentials.
The main difference is that, since they are public, public credentials do not have any selective disclosure capabilities, hence all the cryptographic information required to enable those is stripped away from the credential content.
Everything else remain as for regular credentials, including the requirement for its structure to match a given CType, and optionally the presence of some delegation information.

<CodeBlock className="language-json" title="Public credential example">
  {PublicCredential}
</CodeBlock>

:::info Anyone can be an attester!
While traditional KILT credentials are held in users' wallets, who then decide what credential to share with whom, public credentials are, indeed, public by design.
This means than when reading all the credentials issued for a given asset, consumers should be aware of the level of trust they have towards the issuer of each credential, as is the case for traditional KILT credentials.
:::

[asset-did-concepts]: ../04_asset_dids.md