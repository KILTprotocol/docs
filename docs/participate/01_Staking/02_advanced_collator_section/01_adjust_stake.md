---
id: adjust-stake
title: Adjust Your Own Stake
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

A Collator can increase or decrease their stake, always within the limits of the minimum and maximum allowed stake amounts.
The corresponding extrinsics for these operations are `parachainStaking -> candidateStakeMore(more)` and `parachainStaking -> candidateStakeLess(less)`.

<StakingTxDisclaimer />

<Tabs
  groupId="collator-adjust-stake"
  defaultValue="Stake more"
>
<TabItem value="Stake more" label="Stake more">

![](/img/chain/parachainStaking-candidateStakeMore.png)

1. Select the Collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> collatorStakeMore`
3. Choose the desired stake amount which you want to add or remove from your current stake (the *more* field).
You can add up to the minimum of 200,000 KILT and your maximum available balance.
4. Sign and submit the extrinsic (the *Submit Transaction* button)

</TabItem>
<TabItem value="Stake less" label="Stake less">

![](/img/chain/parachainStaking-candidateStakeLess.png)

1. Select the Collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> collatorStakeLess`
3. Choose the desired stake amount which you want to remove from your current stake (the *less* field).
You can reduce down to minimum Collator amount (10,000 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted.
4. Sign and submit the extrinsic (the *Submit Transaction* button)

</TabItem>
</Tabs>