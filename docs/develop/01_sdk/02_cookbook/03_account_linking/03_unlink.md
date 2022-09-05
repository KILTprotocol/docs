---
id: account-unlink
title: Unlink an Account from a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import DidUnlinkTs from '!!raw-loader!@site/code_examples/core_features/linking/05_did_unlink.ts';
import DidUnlinkJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/05_did_unlink.js';
import AccountUnlinkTs from '!!raw-loader!@site/code_examples/core_features/linking/06_account_unlink.ts';
import AccountUnlinkJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/06_account_unlink.js';
import ReclaimDepositTs from '!!raw-loader!@site/code_examples/core_features/linking/07_reclaim_deposit.ts';
import ReclaimDepositJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/07_reclaim_deposit.js';

Similarly to how a new account <-> DID link is created, removing a link can happen in one of three ways:

1. The DID owner submits a transaction indicating which account to unlink:

<TsJsBlock tsSnippet={DidUnlinkTs} jsSnippet={DidUnlinkJs} />

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<TsJsBlock tsSnippet={AccountUnlinkTs} jsSnippet={AccountUnlinkJs} />

3. The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:

<TsJsBlock tsSnippet={ReclaimDepositTs} jsSnippet={ReclaimDepositJs} />