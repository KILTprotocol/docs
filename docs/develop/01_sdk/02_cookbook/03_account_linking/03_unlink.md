---
id: account-unlink
title: Unlink an Account from a KILT DID
---

import CodeBlock from '@theme/CodeBlock';
import DidUnlink from '!!raw-loader!@site/code_examples/core_features/linking/05_did_unlink.ts';
import AccountUnlink from '!!raw-loader!@site/code_examples/core_features/linking/06_account_unlink.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/linking/07_reclaim_deposit.ts';

Similarly to how a new account <-> DID link is created, removing a link can happen in one of three ways:

1. The DID owner submits a transaction indicating which account to unlink:

<CodeBlock className="language-js">
  {DidUnlink}
</CodeBlock>

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<CodeBlock className="language-js">
  {AccountUnlink}
</CodeBlock>

3. The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:

<CodeBlock className="language-js">
  {ReclaimDeposit}
</CodeBlock>