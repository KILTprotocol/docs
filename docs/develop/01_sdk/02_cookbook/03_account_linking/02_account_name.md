---
id: account-name
title: Query the web3name of an Account
---

import CodeBlock from '@theme/CodeBlock';
import AccountWeb3NameQuery from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';
import AccountWeb3NameQueryNoSDK from '!!raw-loader!@site/code_examples/core_features/linking/04_account_web3name_query_no_sdk.ts';

For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the [KILT Stakeboard][kilt-stakeboard].

This section shows how to perform the `account -> web3name` querying both with and without the support of the KILT SDK.

## Query an Account's web3name Without the KILT SDK

Querying the web3name for a given account without the SDK involves performing two different RPC calls to a KILT full node, as shown below.

<CodeBlock className="language-ts">
  {AccountWeb3NameQuery}
</CodeBlock>

## Query an Account's web3name with the KILT SDK

Although the SDK still performs the same two RPC queries shown in the code snippets above, it hides the complexity from the user, who only needs to call a single function, as shown below.

<CodeBlock className="language-ts">
  {AccountWeb3NameQueryNoSDK}
</CodeBlock>

:::info
A custom RPC endpoint is currently under development that would allow reducing the number of calls from 2 to 1 for most of the DID-related lookups.
We will update this section with the new information once it has been released.
:::

[kilt-stakeboard]: https://stakeboard.kilt.io/