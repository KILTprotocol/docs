---
id: credential-query
title: Query Public Credentials for a web3name
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import QueryNameCredentials from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/03_query_name_credentials.ts';

web3names are linked to KILT DIDs, and KILT DIDs can define service endpoints to expose additional service/information.
One of the possible endpoint types is the [`KiltPublishedCredentialCollectionV1`][kilt-published-credential-collection-v1-type] type.
The type defines the structure to make KILT credentials public and accessible to anyone.

Because of the relationship between web3names and DIDs, it is possible, given a certain web3name, to retrieve all public credentials that the DID subject identified by that web3name has made available.
Below is a code snippet showing how to do that using the KILT SDK, and how to perform the needed security checks/validation as recommended by the [specification][kilt-published-credential-collection-v1-type].

<TsJsBlock>
  {QueryNameCredentials}
</TsJsBlock>

[kilt-published-credential-collection-v1-type]: https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1/blob/main/README.md