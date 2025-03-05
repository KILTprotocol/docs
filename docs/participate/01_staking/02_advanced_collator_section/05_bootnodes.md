---
id: bootnodes
title: Bootnodes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The bootnodes are required to connect to the peer-to-peer network and discover additional peers.
The addresses are included in the chain spec, so there is no need to add them as a parameter to the start command.
For the sake of completeness, the bootnodes are listed below:

<Tabs
  groupId="exec-network"
  defaultValue="Spiritnet"
>
<TabItem value="Spiritnet" label="Spiritnet">

  For **Spiritnet**, the parachain bootnodes are:

```
--bootnodes=/dns4/hetzner-1.kilt.io/tcp/30333/p2p/12D3KooWKU8ehzuKAzHEMCy4i4kpJtgCFBCYYhqcub4Y1HR8FRoT \
--bootnodes=/dns4/hetzner-2.kilt.io/tcp/30333/p2p/12D3KooWDJzJ7TRNKvE2DWXMSSsoKR5TgxsnNy3W1eCBPveX6g9i \
--bootnodes=/dns/kilt.boot.stake.plus/tcp/30332/wss/p2p/12D3KooWHZ6ftYNVQDm5gbHvtGgkPStaBBQBje8rrtxdH1jJonkW \
--bootnodes=dns4/boot.helikon.io/tcp/8570/p2p/12D3KooWGaE81VE2rzD5TbeRqpTgQwh2sWXMVfMJLBMHQH8AfoXu \
--bootnodes=/dns/kilt-polkadot-boot-ng.dwellir.com/tcp/443/wss/p2p/12D3KooWRLyHNCYbYMpQWWESNqyW925VP6vMesotaAXSVB3Efhv4
```

</TabItem>
<TabItem value="Peregrine" label="Peregrine">

For **Peregrine**, the parachain bootnodes are:

```
--bootnodes=/dns4/eyrie-4.kilt.io/tcp/30371/p2p/12D3KooWALJtiCZzcUPVsCa5f5egGfQyFhPY67kKosDw95bJqK7M
--bootnodes=/dns4/eyrie-5.kilt.io/tcp/30372/p2p/12D3KooWCRgcGtFRsvqxqgysiR6Ah9SAzUNkM12Ef9sy59ZEspSQ
```

</TabItem>
</Tabs>
