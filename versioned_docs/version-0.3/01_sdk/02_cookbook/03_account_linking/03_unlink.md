---
id: account-unlink
title: Unlink an Account From a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidUnlink from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/linking/05_did_unlink.ts';
import AccountUnlink from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/linking/06_account_unlink.ts';
import ReclaimDeposit from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/linking/07_reclaim_deposit.ts';

Similar to the way a new account to DID link is created, removing a link can happen in one of three ways:

1. The DID owner submits a transaction indicating which account to unlink:

<TsJsBlock>
  {DidUnlink}
</TsJsBlock>

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<TsJsBlock>
  {AccountUnlink}
</TsJsBlock>

3. The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:

<TsJsBlock>
  {ReclaimDeposit}
</TsJsBlock>