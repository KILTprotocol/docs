---
id: exit
title: How to exit
---

A delegator can revoke all of their delegations at once by calling `parachainStaking -> leaveDelegators`.
- Your previously delegated amount will be prepared for unstaking.
- You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see the section [Unlock Unstaked](../04_unlock_unstaked.md) for more information.
- Exiting does not count towards the limit of “1 delegation per round”.

:::info
You can either do this in Polkadot JS Apps or the [**KILT Stakeboard**](../../../develop/05_showcase.md#Apps), which serves as an in-house developed Frontend for all KILT staking activity.
Below, we explain how to do it for the former case.
However, the latter option is described in detail in the [**BOTLabs Trusted Entity support hub**](https://support.kilt.io/support/solutions/80000442174).
:::

![](/img/chain/parachainStaking-leaveDelegators.png)

1. Select the delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> leaveDelegators`.
3. Sign and submit the extrinsic

:::info
Since you can only delegate to a single collator candidate for now, exiting is exactly the same as [**revoking a single delegation**](./03_revoke.md).
Of course, this will change if the community decides to enable multiple delegations per account.
:::