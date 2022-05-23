---
id: remove_vote
title: Remove a vote
---

If you happen to change your mind and want to remove a vote from an open referendum, you have to find the index of the referendum you voted on, remove your vote from that index and unlock your coins that are no longer locked up by this vote.

## Find the referendum index

1. Go to the [democracy tab in the Polkadot Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.api.onfinality.io%2Fpublic-ws#/democracy)
2. Note the number next to the referendum you voted for

![](/img/chain/find-referendum-index.png)

## Remove the vote
Go to the [extrinsic tab in the Polkadot Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.api.onfinality.io%2Fpublic-ws#/extrinsics)

1. Select the account you used for voting
1. Select the `democracy` pallet
2. Select the `removeVote` extrinsic
3. Enter the index of the referendum
4. Sign and send the extrinsic

![](/img/chain/remove-vote.png)

## Unlock expired voting locks

Please refer to the "[Unlock coins after lockup expires](./2_unlock_coins.md)" guide.
