---
id: hardware-requirements
title: Minimum Hardware Requirements
---

The KILT blockchain extrinsic weights were calculated using the following hardware:

- **OS** - Ubuntu 20.04.2
- **CPU** - AMD Ryzen 7 1700X
- **Storage** - A NVMe solid-state drive. Should be reasonably-sized to deal with blockchain growth. Starting around 250GB will be okay for the next year of the KILT parachain and Polkadot Relay Chain, but it will mostly likely grow after that and will have to be re-evaluated on a regular basis.
- **Memory** - 16GB

Although the aforementioned hardware is by no means the minimum spec required, the new node *is recommended* to be as close as possible to these capabilities in all the categories.
Having more performant hardware reduces the probability that the node will not be able to produce and propose a valid block on time during the allocated block production slot, missing out on the collating rewards.

You can measure the performance of the new hardware by benchmarking it using [the steps described in the benchmarking section](../02_advanced_collator_section/06_benchmarking.md).
