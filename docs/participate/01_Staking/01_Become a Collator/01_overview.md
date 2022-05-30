---
id: overview
title: Overview
---

## Introduction

Collators are the most important members of the network as they do not only maintain the state by running a full node but also advance it by building state transition proofs and sharing these with the relay chain validators.
Generally speaking, the latter finalize the proposed block if it is valid.
It is important to note that elusive collators can never get invalid blocks finalized thanks to the design security umbrella provided by the relay chain.
Thus, the most harm dishonest collators can do, is to slow down or halt the network.
As long as there exists at least one honest collator, the parachain is secured and fully operative.
However, the block time would be slower than with a full set of honest and functioning collator nodes.

If you want to join the KILT network as a collator, you have to run a full node of the blockchain and set up your session keys.
You are also required to hold a minimum amount of tokens self-staked to qualify for a collator seat.
Once you have finished the mandatory steps described throughout the following sections, you are added to the candidate pool.
The candidate pool is sorted by the total staking amount (including delegations) with the ultimate decision criteria being whoever joined earlier.
Thus, only the collators with the highest total stake periodically selected to be eligible block authors.

:::info
You can find more information about Collators and the relay-parachain-interaction in the [**official Polkadot Wiki**](https://wiki.polkadot.network/docs/learn-collator).
:::

## Roadmap

We will guide you through the steps to become a collator.
First, we will discuss the hardware requirements and how you could test the performance of your node.
Then, we go over a few configuration options and show you how to setup and start a KILT collator, including how to generate your sessions keys and join the pool of collator candidates.

:::info
In case you are already collating, you could check out the advanced section.
There you will learn how to [**monitor**](../02_Advanced%20Collator%20Section/04_monitoring.md) or [**benchmark**](../02_Advanced%20Collator%20Section/06_benchmarking.md) your node, [**adjust your stake**](../02_Advanced%20Collator%20Section/01_adjust_stake.md), [**fix problems**](../05_troubleshooting.md) or [**leave the network**](../02_Advanced%20Collator%20Section/02_exit.md).
:::

## Join the Community

As a collator you are required to keep track of updates and changes to configuration.
You should also be accessible in case there is any issue with your node as this does not only affect your and your delegator's rewards but also the entire network negatively.
We recommend to join the [KILT Community Discord server](https://discord.gg/wBrXsB5G) and follow (at least) the **collators** and **staking** channels.
There, you will receive announcements about future updates and potential mandatory client upgrades.
Moreover, they serve as a discussion hub for collators and delegators.

After having joined the Discord, feel free to send a DM to [`Dudley | KILT protocol#6222`](https://discordapp.com/users/687952993156726784) or [`William | KILT Protocol#4433`](https://discordapp.com/users/w3n;williamfreude#4433) to introduce yourself.
Of course, you can also directly announce yourself in one of the two channels mentioned above.
This way, the community knows who to contact in case there are any issues with your node.
