---
id: collator-join
title: Join the collator candidates pool
---

:::warning

These steps should be followed only once a collator node has successfully linked a session key to its address and has synced the parachain and relaychain states by following the steps above.

:::

The maximum number of **active** collators is currently (2022-05-05) 16 on Peregrine and 35 on Spiritnet.

In order to become a collator, you must stake
- at least 10,000 KILT tokens and
- at most 200,000 KILT tokens.

The collator must call an extrinsic `parachainStaking -> joinCandidates(stake)` with the desired stake to join the candidate pool:

 In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.kilt.io#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Extrinsics -> Submission`

1. Select the collator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the following extrinsic: `parachainStaking -> joinCandidates(stake)`
3. Insert the staked KILT amount for the collator
4. Sign and submit the extrinsic

:::info

A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.
In the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing `0`s.
So, for instance, 1 KILT needs to be written as `1000000000000000`, while 10,000 KILT would be written as `10000000000000000000`.

:::

![](/img/chain/parachainStaking-joinCandidates.png)

A collator candidate can check the current top candidates to see their position and required staked amount to become an active collator, i.e., to start authoring new blocks.

 In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.kilt.io#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Chain state -> Storage`

1. Selected state query: `parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet`
2. Execute the query by pressing the "+" button on the right side

If the collator has enough self-stake and delegator stake it will be selected to collate.
A time period of two sessions must pass before the collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one.

![](/img/chain/session-validators.png)

### Change a Collator's Stake

A collator can increase/decrease their stake, always within the limits of the minimum and maximum allowed stake amounts.
The corresponding extrinsics for these operations are `parachainStaking -> candidateStakeMore(more)` and `parachainStaking -> candidateStakeLess(less)`.

![](/img/chain/parachainStaking-candidateStakeMore.png)
