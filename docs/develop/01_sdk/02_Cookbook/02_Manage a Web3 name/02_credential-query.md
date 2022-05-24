---
id: credential-query
title: Query public credentials for a Web3 name
---

import CodeBlock from '@theme/CodeBlock';
import CredentialFetch from '!!raw-loader!@site/code-examples/core_features/web3names/5_web3name.ts';

Web3 names are linked to KILT DIDs, and KILT DIDs can define service endpoints to expose additional service/information.
One of the possible endpoints type is the [`KiltPublishedCredentialCollectionV1`][kilt-published-credential-collection-v1-type] type.
The type defines the structure to make KILT credentials public and accessible to anyone.

Because of the relationship between Web3 names and DIDs, it is possible, given a certain Web3 name, to retrieve all public credentials that the DID subject identified by that Web3 name has made available.
Below is a code snippet showing how to do that using the KILT SDK, and how to perform the needed security checks/validation as recommended by the [specification][kilt-published-credential-collection-v1-type].

<CodeBlock className="language-js">
  {CredentialFetch}
</CodeBlock>

[kilt-published-credential-collection-v1-type]: https://github.com/KILTprotocol/specifications/blob/dee9ac26e381f6e0cbcd184b0892327db0f8b312/docs/did/kilt-published-credential-collection-v1.md