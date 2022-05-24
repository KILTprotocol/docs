---
id: sync-blockchain
title: Sync blockchain state
---

Before a collator can author blocks, the node needs to fully sync up with both the parachain and the relaychain.
Depending on the size of the blockchain states, it may take a number of hours to few days for the node to catch up.
More details can be found on the [Polkadot network docs](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data).

:::note Example of node sync:
```Example of node sync
2021-06-17 02:34:34 🔍 Discovered new external address for our node: /ip4/100.102.231.64/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB
2021-06-17 02:34:36 ⚙️  Syncing 409.2 bps, target=#8062689 (5 peers), best: #3477 (0x63ad…e046), finalized #3072 (0x0e4c…f587), ⬇ 153.2kiB/s ⬆ 12.9kiB/s
2021-06-17 02:34:37 🔍 Discovered new external address for our node: /ip4/100.111.175.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB
2021-06-17 02:34:38 🔍 Discovered new external address for our node: /ip4/100.100.176.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB
2021-06-17 02:34:41 ⚙️  Syncing 386.2 bps, target=#8062690 (7 peers), best: #5409 (0x1d76…8c3d), finalized #5121 (0x8ad1…b6dc), ⬇ 96.1kiB/s ⬆ 10.9kiB/s
2021-06-17 02:34:46 ⚙️  Syncing 394.8 bps, target=#8062691 (11 peers), best: #7383 (0x0689…6f1e), finalized #7168 (0x72a9…8d8c), ⬇ 352.9kiB/s ⬆ 5.1kiB/s
2021-06-17 02:34:51 ⚙️  Syncing 347.0 bps, target=#8062692 (12 peers), best: #9118 (0x66fc…cce3), finalized #8704 (0x14c9…705e), ⬇ 62.7kiB/s ⬆ 1.7kiB/s
```
:::