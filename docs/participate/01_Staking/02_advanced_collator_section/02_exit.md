---
id: exit
title: Leave the Collator Set
---

import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

When you intent to stop collating or just being a collator candidate, you have to go through three stages until your staked tokens are unlocked and your collator state is purged from the chain.

:::info
Unfortunately, exiting is not a simple process for security reasons.
Since a picture says more than a thousand words, you can find a visualization of this process in the following [**lifecycle section**](./03_collator_lifecycle.md).
:::

## Initiate exit request

First, you signal your intent by calling `parachainStaking -> initLeaveCandidates`.
You will both be removed from the `CandidatePool` and your state switches from `Active` to `Leaving(leaveRound)`, where `leaveRound` reflects the number of sessions in which you can actually leave.
You still need to stay online and build blocks for the current and next sessions.
Of course, you will continue to receive rewards for your authored blocks.
A leaving candidate cannot be selected as an active collator for the sessions hereinafter.
Moreover, you cannot receive new Delegations and existing Delegations cannot be adjusted.
However, Delegations can still be revoked.

<StakingTxDisclaimer />

![](/img/chain/parachainStaking-initLeaveCandidates.png)

1. Select the collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> initLeaveCandidates`
3. Sign and submit the extrinsic (the *Submit Transaction* button)

## Execute exit request

Second, after waiting until the `leaveRound`-th session, you can call `executeLeaveCandidate` to remove all of your `Candidate` associated storage.
You should be certain as there is no turning back afterwards.
If you wish to become a Candidate at a later stage, you have to apply again and miss out on all of your former delegations.

![](/img/chain/parachainStaking-executeLeaveCandidates.png)

1. Select the any KILT address with sufficient funds to pay for the transaction fee (~5 milli KILT) as the extrinsic submitter (the *using the selected account* field)
_NOTE: Of course, you can chose your collator account._
2. Select the appropriate extrinsic: `parachainStaking -> executeLeaveCandidates`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the collator account (the *Id: AccountId* field)
5. Sign and submit the extrinsic (the *Submit Transaction* button)

## Cancel exit request
However, you can still cancel your exit request by calling `cancelLeaveCandidates` if you have not exited yet and the CandidatePool is not full already.
Upon cancelling your exit intent, your state switches back to `Active` and you still have all Delegations which were not revoked in the meantime.
Moreover, if you are you are one of the top staked candidates, you will automatically become a Collator in two rounds (~4 hours).

![](/img/chain/parachainStaking-cancelLeaveCandidates.png)

1. Select the collators's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> cancelLeaveCandidates`
3. Sign and submit the extrinsic (the *Submit Transaction* button)

## Unlock your stake

In case you executed the exit request, you cannot immediately unlock your previously staked tokens.
There is a delay of 7 days in block time before you can free them by calling `unlockUnstaked`.
See [here](../04_unlock_unstaked.md) for a step-by-step tutorial.
