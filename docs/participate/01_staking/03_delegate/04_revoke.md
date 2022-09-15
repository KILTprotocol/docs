---
id: revoke
title: Revoke Your Delegation
---

import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

You can revoke your delegation at any time by calling `parachainStaking -> revokeDelegation`.
As a result, you won't receive any rewards immediately after the transaction is successfully executed.
- The corresponding amount will be prepared for unstaking.
- You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see section [Unlock Unstaked](../05_unlock_unstaked.md) for more information.
- Revoking a delegation does not count towards the limit of “1 delegation per round”.

<StakingTxDisclaimer />

![](/img/chain/parachainStaking-revokeDelegation.png)

1. Select the Delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> revokeDelegation`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the Collator account (the *Id: AccountId* field)
5. Sign and submit the extrinsic (the *Submit Transaction* button)

:::info
Since you can only delegate to a single Collator candidate for now, revoking a single delegation is exactly the same as [**exiting**](./05_exit.md).
Of course, this will change if the community decides to enable multiple delegations per account.
:::


