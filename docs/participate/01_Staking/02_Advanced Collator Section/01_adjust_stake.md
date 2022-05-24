---
id: adjust-stake
title: Adjust your own stake
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A collator can increase or decrease their stake, always within the limits of the minimum and maximum allowed stake amounts.
The corresponding extrinsics for these operations are `parachainStaking -> candidateStakeMore(more)` and `parachainStaking -> candidateStakeLess(less)`.

:::info
You can either do this in Polkadot JS Apps or the [**KILT Stakeboard**](../../../develop/05_showcase.md#Apps), which serves as an in-house developed Frontend for all KILT staking activity.
Below, we explain how to do it for the former case.
However, the latter option is described in detail in the [**BOTLabs Trusted Entity support hub**](https://support.kilt.io/support/solutions/80000442174).
:::

 In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Extrinsics -> Submission`.

<Tabs
  groupId="collator-adjust-stake"
  defaultValue="Stake more"
>
<TabItem value="Stake more" label="Stake more">

![](/img/chain/parachainStaking-candidateStakeMore.png)

1. Select the collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> collatorStakeMore`
3. Choose the desired stake amount which you want to add or remove from your current stake.
You can add up to the minimum of 200,000 KILT and your maximum available balance.

</TabItem>
<TabItem value="Stake less" label="Stake less">

![](/img/chain/parachainStaking-candidateStakeLess.png)

1. Select the collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the extrinsic: `parachainStaking -> collatorStakeLess`
3. Choose the desired stake amount which you want to remove from your current stake.
You can reduce down to minimum collator amount (10,000 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted.
4. Sign and submit the extrinsic

</TabItem>
</Tabs>