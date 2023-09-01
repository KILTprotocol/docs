---
id: fullnode-setup
title: Set Up a KILT Full Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We will guide you through the process of setting up and connecting to a KILT full node.
In contrast [to a collator](../../participate/01_staking/01_become_a_collator/03_setup_node.md), full nodes do not author blocks.
They act as a backend for websites and help to verify new blocks or validate extrinsics (e.g., coin transfers and other transactions) directly on the network without relying on a centralized infrastructure provider.

## Setup

There are currently two different runtimes (i.e., two different parachain environments) that a KILT full node can be part of:

- **Spiritnet**: the official public network, which contains only stable and thoroughly-tested features
- **Peregrine**: the public test network whose runtime is as close to that of Spiritnet as possible. It can be used to test applications that use KILT before connecting them to the production Spiritnet chain, which requires tokens that have real monetary value

Each runtime has its own benchmark measurements.

:::info
The remainder of this guide will focus on the official **Spiritnet**.
Nevertheless, we recommend trying out the setup on our Peregrine testnet first.
Hence, at each step where it is applicable, we indicate what differs between the Peregrine and Spiritnet configuration for the full node to join either network.
:::

### WASM Runtime Execution

A KILT full node should use the `--execution=wasm` parameter for both the Relay Chain and parachain collation.
The alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.
When this happens, the full node will crash and will stop synchronizing with the network.
Since the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic.

### Specify the Right Chainspec

The `--chain` parameter indicates which blockchain the KILT full node will join.
This parameter must be specified for both the parachain **and** the Relay Chain, since both chains are, as a matter of fact, separate blockchains.
The KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.
This can either be `peregrine` or `spiritnet`.

Hence, to start a full node for the Spiritnet network, the parameter would be `--chain=spiritnet`.
Unfortunately, there is no hardcoded chain spec for the Peregrine network, so the full path of the chainspec file must be provided `--chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json`.
Please refer to the [KILT node repository](https://github.com/KILTprotocol/kilt-node/blob/develop/dev-specs/kilt-parachain/peregrine-kilt.json) or the [Docker image](https://hub.docker.com/r/kiltprotocol/kilt-node/tags) for more information.

### Specify the Blockchain Storage Path

The `--base-path` parameter specifies where all the persistent files must be stored.
By default, the session keys will also be stored in the *base path*, but we recommend separating them from the other files.
This makes sure that the keyfiles are not accidentally lost or published when the blockchain database is either backed up or restored.
You can configure where to store the session keys using the `--keystore-path` option.
Since the collator will collate only for the parachain, there is no need to add this to the Relay Chain part of the command.

## Join the Network

<Tabs
groupId="exec-strategy"
defaultValue="Binary"
values={[
{label: 'Binary', value: 'Binary'},
{label: 'Docker', value: 'Docker'},
]}>

<TabItem value="Binary">

### Build the Full Node

In order to build the KILT full node executable, you need to have a [nightly version of Rust](https://www.rust-lang.org/tools/install) and the `wasm32-unknown-unknown` target for this toolchain installed.
We recommend aligning your nightly version with the one used in the [KILT node repository](https://github.com/KILTprotocol/kilt-node) by executing the [init script](https://github.com/KILTprotocol/kilt-node/blob/develop/scripts/init.sh).
After cloning the repository, you can build the executable by running the `build` command below from the root directory.

```bash
# Clone the repository
git clone https://github.com/KILTprotocol/kilt-node.git
# Check out master branch
git checkout master
# Set up the build environment by installing the Rust compiler.
./scripts/init.sh
# Build the executable from source enabling all the optimizations with --release.
cargo build --release -p kilt-parachain
```

:::info
You must not use the default `develop` branch to build the executable.
Instead, the [latest release](https://github.com/KILTprotocol/kilt-node/releases) from `master` should be used.
:::

The compiled executable can be found in `./target/release/kilt-parachain` after the build process completes successfully.

### Run an Archive Node

To run an Archive full node, add the option `--pruning archive` to the command.

<Tabs
groupId="runtime"
defaultValue="Spiritnet"
values={[
{label: 'Spiritnet', value: 'Spiritnet'},
{label: 'Peregrine', value: 'Peregrine'},
]}>

<TabItem value="Spiritnet">

```bash
./target/release/kilt-parachain \
  --chain=spiritnet \
  --runtime=spiritnet \
  --rpc-port=9944 \
  --rpc-cors=all \
  --rpc-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --chain=polkadot \
  --execution=wasm
```
</TabItem>
<TabItem value="Peregrine">

```bash
./target/release/kilt-parachain \
  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \
  --runtime=peregrine \
  --rpc-port=9944 \
  --rpc-cors=all \
  --rpc-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \
  --execution=wasm
```
</TabItem>
</Tabs>

</TabItem>
<TabItem value="Docker">

### Run an Archive Node

The full node can also be started as a Docker container.
To expose the WebSockets ensure that the `--rpc-external` flags is set.

To run an Archive full node add the option `--pruning archive` to the command.

First, you can fetch the latest pre-built image:

```bash
docker pull kiltprotocol/kilt-node:latest
```

Once you have the image, you can spin up the container.
Make sure to choose whether you want to start a full node for Peregrine or Spiritnet by selecting the correct runtime and chain.

<Tabs
groupId="runtime"
defaultValue="Spiritnet"
values={[
{label: 'Spiritnet', value: 'Spiritnet'},
{label: 'Peregrine', value: 'Peregrine'},
]}>

<TabItem value="Spiritnet">

```bash
docker run -v kilt-node-data:/data kiltprotocol/kilt-node:latest \
  --base-path=/data/para \
  --chain=spiritnet \
  --runtime=spiritnet \
  --rpc-port=9944 \
  --rpc-cors=all \
  --rpc-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --base-path=/data/relay \
  --chain=polkadot \
  --execution=wasm
```
</TabItem>
<TabItem value="Peregrine">

```bash
docker run -v kilt-node-data:/data kiltprotocol/kilt-node:latest \
  --base-path=/data/para \
  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \
  --runtime=peregrine \
  --rpc-port=9944 \
  --rpc-cors=all \
  --rpc-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --base-path=/data/relay \
  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \
  --execution=wasm
```
</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Sync the Blockchain State

Once started, the full node needs to fully sync up with both the parachain and the Relay Chain states.
Depending on the size of both blockchain states and the node hardware specs, it may take from a number of hours to a few days for the node to fully synchronize.
More details can be found in the [Polkadot network documentation](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#synchronize-chain-data).

:::note Example of node sync
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
