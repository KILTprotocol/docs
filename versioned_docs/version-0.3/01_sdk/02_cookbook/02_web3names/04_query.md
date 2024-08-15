---
id: web3name-query
title: Resolve a web3name
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import QueryDid from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/web3names/02_query_did_name.ts';


A web3name can be resolved in a similar manner to [how a DID is resolved](../01_dids/04_did_query.md).
Resolving the web3name will provide the same information as resolving a DID does.

To query and retrieve the DID document associated with a web3name, you can use the following code example:


<TsJsBlock>
  {QueryDid}
</TsJsBlock>

In the code example above, the `queryDidDocument` function takes a web3Name parameter, which represents the web3name to be resolved.
It internally uses the `api.call.did.queryByWeb3Name` method to query the information of the provided web3name from the blockchain.

The function then decodes the result using `Kilt.Did.linkedInfoFromChain` to extract the associated DID document and any other linked blockchain accounts. Finally, it returns the resolved DID document.
