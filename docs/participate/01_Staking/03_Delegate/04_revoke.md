---
id: revoke
title: How to revoke
---

You can revoke your delegation at any time by calling `parachainStaking -> revokeDelegation`.
As a result, you won't receive any rewards immediately after the transaction is successful.
- The corresponding amount will be prepared for unstaking.
- You need to wait 7 days (in block time) before you can unlock your unstaked tokens, see section [Unlock Unstaked](../04_unlock_unstaked.md) for more information.
- Revoking a delegation does not count towards the limit of “1 delegation per round”.

:::info
You can either do this in Polkadot JS Apps or the [**KILT Stakeboard**](../../../develop/05_showcase.md#Apps), which serves as an in-house developed Frontend for all KILT staking activity.
Below, we explain how to do it for the former case.
However, the latter option is described in detail in the [**BOTLabs Trusted Entity support hub**](https://support.kilt.io/support/solutions/80000442174).
:::

![](/img/chain/parachainStaking-revokeDelegation.png)


In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Extrinsics -> Submission.`

1. Select the delegator's KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the appropriate extrinsic: `parachainStaking -> revokeDelegation`
3. Select the `Id` option (the *MultiAddress (LookupSource) field*)
4. Select the collator account (the *Id: AccountId* field)
5. Sign and submit the extrinsic

:::info
Since you can only delegate to a single collator candidate for now, revoking a single delegation is exactly the same as [**exiting**](./04_exit.md).
Of course, this will change if the community decides to enable multiple delegations per account.
:::


