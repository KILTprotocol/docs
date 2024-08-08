---
id: exit
title: Leave the Set of Delegators
---

import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

A Delegator can revoke their delegation by calling `parachainStaking -> leaveDelegators`.
As a result, you won't receive any rewards immediately after the transaction is successfully executed.

- Your previously delegated amount will be prepared for unstaking.
- You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see the section [Unlock Unstaked](../05_unlock_unstaked.md) for more information.
- Exiting does not count towards the limit of “1 delegation per round”.

<StakingTxDisclaimer />

![](/img/chain/parachainStaking-leaveDelegators.png)

1. Select the KILT address you delegated from as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> leaveDelegators`.
3. Sign and submit the extrinsic (the *Submit Transaction* button)
