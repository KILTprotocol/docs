---
id: join
title: Join collator candidate pool
---

After you have finished with the setup, you can finally tell the chain that you are ready to collate and join the pool of candidates.
You can either do this in Polkadot JS Apps or the [KILT Stakeboard](../../../develop/05_showcase.md#Apps), which serves as an in-house developed Frontend for all KILT staking activity.
Below, we explain how to do it for the former case.
However, the latter option is described in detail in the [BOTLabs Trusted Entity support hub](https://support.kilt.io/support/solutions/80000442174).

:::warning
These steps should be followed only once a collator node has successfully [**linked a session key to its address**](./03_session_keys.md) and [**synced the parachain and relaychain states**](./05_sync_blockchain.md) by following the previous steps.
:::

### Requirements

The maximum number of **active** collators is currently (2022-05-05) 16 on Peregrine and 30 on Spiritnet.

In order to become a collator, you must stake
- at least 10,000 KILT tokens and
- at most 200,000 KILT tokens.

### How to send the transaction

The collator must call an extrinsic `parachainStaking -> joinCandidates(stake)` with the desired stake to join the candidate pool:

 In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Extrinsics -> Submission`

1. Select the collator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the following extrinsic: `parachainStaking -> joinCandidates(stake)`
3. Insert the staked KILT amount for the collator (any value between `10000000000000000000` and `200000000000000000000`)
4. Sign and submit the extrinsic

:::info
A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.
In the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing `0`s.
So, for instance, 1 KILT needs to be written as `1000000000000000`, while 10,000 KILT would be written as `10000000000000000000`.
:::

### How to check your position

![](/img/chain/parachainStaking-joinCandidates.png)

A collator candidate can check the current top candidates to see their position and required staked amount to become an active collator, i.e., to start authoring new blocks.

 In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Chain state -> Storage`

1. Selected state query: `parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet`
2. Execute the query by pressing the "+" button on the right side

If the collator has enough self-stake and delegator stake it will be selected to collate.
Otherwise, the last address in the list will be the least staked candidate.
A time period of two sessions must pass before the collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one.

![](/img/chain/session-validators.png)