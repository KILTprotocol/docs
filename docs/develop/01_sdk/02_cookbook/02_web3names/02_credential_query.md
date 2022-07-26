---
id: credential-query
title: Query Public Credentials for a web3name
---

import CodeBlock from '@theme/CodeBlock';
import QueryNameCredentials from '!!raw-loader!@site/code_examples/core_features/web3names/03_query_name_credentials.ts';

web3names are linked to KILT DIDs, and KILT DIDs can define service endpoints to expose additional service/information.
One of the possible endpoint types is the [`KiltPublishedCredentialCollectionV1`][kilt-published-credential-collection-v1-type] type.
The type defines the structure to make KILT Credentials public and accessible to anyone.

Because of the relationship between web3names and DIDs, it is possible, given a certain web3name, to retrieve all public credentials that the DID subject identified by that web3name has made available.
Below is a code snippet showing how to do that using the KILT SDK, and how to perform the needed security checks/validation as recommended by the [specification][kilt-published-credential-collection-v1-type].

<CodeBlock className="language-ts">
  {QueryNameCredentials}
</CodeBlock>

[kilt-published-credential-collection-v1-type]: https://github.com/KILTprotocol/specifications/blob/dee9ac26e381f6e0cbcd184b0892327db0f8b312/docs/did/kilt-published-credential-collection-v1.md