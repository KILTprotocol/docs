---
id: adjust-stake
title: Adjust your Delegation Stake
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

A delegator can increase and decrease their stake by calling either  `parachainStaking -> delegatorStakeMore(more)` or `parachainStaking -> delegatorStakeLess(less)`.
Your adjustment becomes effective immediately!
In case you increased your stake, you instantly receive higher rewards for any produced blocks of your collator.
However, if you decreased your delegation amount, the reverse applies and you receive less rewards.

<StakingTxDisclaimer />

<Tabs
  groupId="delegator-adjust-stake"
  defaultValue="Stake more"
>
<TabItem value="Stake more" label="Stake more">

![](/img/chain/parachainStaking-delegatorStakeMore.png)

1. Select the delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> delegatorStakeMore`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the collator account (the *Id: AccountId* field)
5. Choose the desired stake amount which you want to add to your current stake.
You can add up to your maximum available balance.
6. Sign and submit the extrinsic (the *Submit Transaction* button)

</TabItem>
<TabItem value="Stake less" label="Stake less">

![](/img/chain/parachainStaking-delegatorStakeLess.png)

1. Select the delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> delegatorStakeLess`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the collator account (the *Id: AccountId* field)
5. Choose the desired stake amount which you want to remove from your current stake.
You can reduce down to the minimum delegation amount (20 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted.
6. Sign and submit the extrinsic (the *Submit Transaction* button)

</TabItem>
</Tabs>

:::caution
You cannot adjust your stake if your collator candidate is in the leaving state, e.g., they want to stop collating.
However, you can still [**revoke**](./04_revoke.md) your delegation or [**exit**](./05_exit.md).
:::

