---
id: collator-min-requirements
title: Minimum hardware requirements
---

The KILT blockchain extrinsic weights were calculated using the following hardware:

- **OS** - Ubuntu 20.04.2
- **CPU** - AMD Ryzen 7 1700X
- **Storage** - A NVMe solid-state drive. Should be reasonably sized to deal with blockchain growth. Starting around 80GB - 160GB will be okay for the first six months of KILT parachain and Kusama relaychain but it will mostly likely grow after that and will have to be re-evaluated on a regular basis.
- **Memory** - 16GB

Although the aforementioned hardware is by no means the minimum spec required, the new node *should* be at least be as capable as that in all the categories.
Having more perfoment hardware reduces the probability that the node will not be able to produce and propose a valid block on time during the allocated block production slot, missing out on the collating rewards.

You can measure the performance of the new hardware by benchmarking it using [the steps described in the benchmarking section](#benchmarking).