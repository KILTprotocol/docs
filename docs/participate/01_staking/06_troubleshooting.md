---
id: troubleshooting
title: Troubleshooting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="collator-delegator"
  defaultValue="Collator"
>
<TabItem value="Collator" label="Collator">

There are a few things that can be checked to make sure everything is set up correctly.

If the collator's account is shown next to some of the blocks on any network explorer, e.g., the one offered by PolkadotJS Apps, then the collator is correctly producing blocks and getting rewarded for it.
If the logs print the message that starts with a :gift: emoji, it indicates that the collator setup is correct but that the blocks produced are not included by the Relay Chain.
This typically signals some issues about the node hardware or connectivity.
If not, it might be that the node does not produce and send blocks fast enough.
This can be caused by slow hardware or a slow internet connection.
Also, note that a high bandwidth connection can still be slow if it has a high ping!
Bandwidth and latency do not necessarily come hand in hand.
In this case, it is better to rule out other options before thinking about upgrading the collator's hardware.

1. Check that the session keys are associated with the validatorId (aka AccountId).
There should be a 32 Byte long public key stored in `session > nextKeys(your AccountId)`.
2. Check that the node has the corresponding private key for the public session key.
Connect to the node and query `author > hasKey(<pubKey from 1.>, aura)` to see if it returns `true`.
3. Check that the node is fully synced with the Relay Chain & parachain (best and finalized block number is equal to the one shown in the PolkadotJS Apps ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), [wss://peregrine.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer)) and on Subscan (only for [Spiritnet](https://spiritnet.subscan.io/)).
4. Check that the collator is among the selected candidates.
Its address should included in the list returned by querying `parachainStaking > topCandidates()`.
5. Check that the `parachainStaking` pallet has registered the collator's address among the authorized authors in the `session`.
Its address should be listed when querying `session > validators()`.

## Collator Rewards Have Stopped

If you have stopped receiving rewards, either of the following is true:
1. You were kicked out of the top collator candidate list because your total stake is too low.
    See the [section about joining](./01_become_a_collator/05_join_collators.md#check-your-position-in-the-collators-queue) for the necessary steps to retrieve the least staked candidate address in that list.
    You can query their stake by going to `Developer -> Chain State` calling `parachainStaking -> candidatePool(address) -> +`.
2. You have connectivity issues, see above for resolution tips.

</TabItem>
<TabItem value="Delegator" label="Delegator">

## Delegator Rewards Have Stopped

If you have stopped receiving rewards, either
1. You were kicked out of your collator candidate's delegation pool because all current delegators have a higher stake or
2. Your collator candidate stopped producing blocks, because:
   1. They left the collator candidate pool intentionally so they don't have an associated collator state on-chain henceforth; or
   2. They are not among the top staked candidates (of which there are 30 at the time of writing 2022-05-05); or
   3. They are offline.

In case of 1. or 2i., your stake will automatically be unstaked and prepared for [unlocking](./05_unlock_unstaked.md).
Otherwise, in case of 2ii. and 2iii., you need to [manually initiate the unlocking period](./03_delegate/04_exit.md) if you don't want to or cannot delegate to another Collator candidate.
</TabItem>
</Tabs>

### Why Can't I Transfer Unstaked Tokens?

Staking puts a lock on your tokens which blocks them from being transferred.
You can still use them for participating in Governance.
If your funds are unstaked, you still need to wait 7 days (in block time) to [unlock tokens after unstaking them](./05_unlock_unstaked.md).
