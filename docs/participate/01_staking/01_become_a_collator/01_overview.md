---
id: overview
title: Overview
---

Collators are the most important members of the network as they not only maintain the state by running a KILT full node, but are also allowed to change it by building state transition proofs and sharing them with the Relay Chain validators.
Generally speaking, the latter finalize the proposed block if and only if it represents a valid state transition.

It is important to note that elusive collators can never get invalid blocks finalized thanks to the design security umbrella provided by the Relay Chain.
Thus, the most harm dishonest collators can do is to slow down or halt the network.
As long as at least one honest collator exists, the parachain is secured and fully operative.
However, the block time would be slower than with a full set of honest and functioning collator nodes.

If you want to join the KILT network as a collator, you have to run a full node of the blockchain and set up your session keys.
You are also required to hold a minimum amount of  self-staked tokens to qualify for a collator seat.
Once you have finished the mandatory steps described throughout the following sections, you can be added to the candidate pool.
The candidate pool is sorted first by the total staking amount including delegations.
If the pool is full and the new candidate has the exact same stake amount as the last member of the pool (by total stake), the blockchain favors the candidate that has been in the pool longest.
Thus, only the collators with the highest total stake are periodically selected to be eligible block authors.

:::info
You can find more information about collators and the Relay Chain-parachain-interaction in the [**official Polkadot Wiki**](https://wiki.polkadot.network/docs/learn-collator).
:::

## Roadmap

We will guide you through the steps to become a collator.
First, we will discuss the hardware requirements and how you could test the performance of your node.
Then, we go over a few configuration options and show you how to set up and start a KILT collator, including how to generate your sessions keys and join the pool of collator candidates.

:::info
If you are already collating, you can skip to the advanced section.
There you will learn how to [**monitor**](../02_advanced_collator_section/04_monitoring.md) or [**benchmark**](../02_advanced_collator_section/06_benchmarking.md) your node, [**adjust your stake**](../02_advanced_collator_section/01_adjust_stake.md), [**fix problems**](../05_troubleshooting.md) or [**leave the network**](../02_advanced_collator_section/02_exit.md).
:::

## Join the Community

As a collator you are required to keep track of updates and changes to configuration.
You should also be accessible in case there is an issue with your node, as this affects not only your and your delegator's rewards, but also the entire network negatively.
We recommend joining the [KILT Community Discord server](https://discord.gg/wBrXsB5G) and following (at least) the **collators** and **staking** channels.
There, you will receive announcements about future updates and potential mandatory client upgrades.
Moreover, the channels serve as a discussion hub for collators and delegators.

After joining Discord, feel free to send a DM to [`Dudley | KILT protocol#6222`](https://discordapp.com/users/687952993156726784) or [`William | KILT Protocol#4433`](https://discordapp.com/users/w3n;williamfreude#4433) to introduce yourself.
Of course, you can also directly announce yourself in one of the two channels mentioned above.
This way, the community knows who to contact in case there are any issues with your node.
