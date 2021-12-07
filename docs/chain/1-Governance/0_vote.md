---
id: vote
title: Casting a Vote
---

1. Go to KILT Spiritnet on [Polkadot.JS](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.api.onfinality.io%2Fpublic-ws#/democracy)

2. Under the “Governance” → “Democracy” section you will see active referenda and proposals

3. Scroll to the referendum you wish to vote on

4. Click “Vote”
   ![](/img/chain/cast-vote.png)

5. This opens a separate pop-up.
   Enter the amount of coins you want to lock (1).
   The minimum required to vote is 1 KILT. <br />
   You can vote with multiplier 0.1 (up to 10% of your voting tokens) without any lock.

6. If you wish to increase your voting power by selecting a period of time to lock your coins, click the arrow next to conviction (2).
   Choose your conviction in the drop-down menu.<br />
   :::note
   if the referendum is successful, your coins will remain locked for this period; if unsuccessful, your tokens will be unlocked when the referendum has finished.
   Also because voting happens transparently on-chain, it requires a small transaction fee (around 0.017 KILT).
   Locked tokens or tokens used for staking can be simultaneously used for voting, but a usable, unlocked balance to cover this fee is required.
   :::

7. Vote “Aye” if you agree with the proposal and “Nay” if you disagree.

8. Click “Sign and Submit” in the pop-up.
   ![](/img/chain/vote-sign-sporran.png)

9. Sign the transaction by entering your password (Sporran or Polkadot.JS, depending on where you are connected.)
10. That’s it!

## Backgrounder: Conviction Voting

Like Polkadot and Kusama, KILT Protocol has conviction voting.
This means if you feel very strongly about a proposal, you can lock up tokens for longer periods to increase your voting power up to a maximum factor of 6.
The longer you lock your tokens, the stronger your vote will be weighted.

The times range from no lockup to a period of around 224 days, with the lockup time beginning after the voting period ends.
Tokens used for voting will always be locked until the end of the voting period, no matter what conviction you vote with.
Of note: the lock time is based on the standard blocktime of 12 seconds per block and hence may vary due to differences in the real blocktime.

![](/img/chain/vote-conviction.png)

If you choose not to lock any tokens, your vote only counts as 10% of the tokens that you commit to the voting (vote value), while the maximum lock up of around 224 days means you can make your vote count for 600% of the vote value.
You can choose to lock all or some of your coins for any range between 0.1x and 6x, with a lockup time as outlined above.

For example: You have a wallet with 1,001 KILT Coins.
This could include staked or vested coins.

### Example 1 - minimum

* You want to vote but don’t want to lock any coins.
* You enter 1,000 into the “vote value”
* You choose “0.1 x voting balance, no lockup period”
* This gives you a voting power of 100 KILT Coins.
* Note that all your 1,000 coins are locked for the time of the voting period (7 days).

### Example 2 - maximum

* You strongly believe in the referendum and want to vote with your full balance and maximum conviction.
* Choose “6 x voting balance, locked for 32x enactment (224 days)”
* This will give you a voting power of 6,000 KILT Coins, if you use your full amount, or 6 times the voting power of the amount you chose.
  The chosen amount will be locked for a period of around 224 days after the voting period ends (7 days).

:::note

rounded numbers are used as an example only – make sure that you always leave enough free, usable balance to cover the transaction fees.

:::

Conviction voting allows users with a small amount of tokens to increase their voting power, and deters a token holder from creating and voting on a malicious proposal and then leaving the network.

If the referendum is successful, your voting coins will remain locked for the time specified (which means that you will be unable to transfer them, but they will still be usable for staking during that time); if unsuccessful, your tokens will be unlocked after the referendum has finished.

KILT also uses an algorithm to adapt the amount of “aye” (yes/agree) votes needed to pass depending on voter turnout: the greater the number of voters, the lower the threshold required to pass.
Therefore, when voter turnout is low a supermajority is generally required; with a high turnout a simple majority is sufficient.

Before voting on any referendum, you can read more about it and join the discussion in [Polkassembly](https://kilt.polkassembly.network/onchain) (under “On-chain” → “Referenda”).
Polkassembly is an open source platform for providing information, context and a discussion forum for proposals and referenda in the Polkadot ecosystem.
