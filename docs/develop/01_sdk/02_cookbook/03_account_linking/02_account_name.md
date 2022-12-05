---
id: account-name
title: Query the web3name of an Account
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import AccountWeb3NameQuery from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';
import AccountWeb3NameQueryNoSDK from '!!raw-loader!@site/code_examples/core_features/linking/04_account_web3name_query_no_sdk.ts';

For accounts that have been linked to DIDs that have claimed a web3name, the linking feature opens the way to a host of possibilities, e.g., showing the web3name of a collator's account on the [KILT Stakeboard][kilt-stakeboard].

This section shows how to perform the `account -> web3name` querying both with and without the support of the KILT SDK.

## Query an Account's web3name with the KILT SDK

<TsJsBlock>
  {AccountWeb3NameQuery}
</TsJsBlock>

## Query an Account's web3name without the KILT SDK

<TsJsBlock>
  {AccountWeb3NameQueryNoSDK}
</TsJsBlock>

[kilt-stakeboard]: https://stakeboard.kilt.io/
