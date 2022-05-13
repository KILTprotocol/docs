---
id: fullnode
title: How to set up a full node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We will guide you through the process of setting up and connecting to a full node.
In contrast to a collator, full nodes do not author blocks.
They act as a backend for Websites, verify new blocks and validate extrinsics (e.g. coin transfers and other transactions) before they are gossiped to the collator nodes.

## Setup

There are currently two different runtimes (i.e., two different parachain environments) that a KILT full node can be part of:

- Peregrine: the public test network whose runtime is as close to the official chain as possible. It can be used to try stuff out before executing them on the live chain, which involves spending tokens that have real monetary value.
- Spiritnet: the official public network, which contains only stable features.

:::info
The remainder of the guide explaining how to run a full node is for the official Spiritnet.
Nevertheless, we recommend to try out the setup on our Peregrine testnet first.
Hence, at each step where it is applicable, we indicate what differs between the Peregrine and Spiritnet configuration for the full node to join either network.
:::

### WASM runtime execution

A KILT full node should use the `--execution=wasm` parameter for both the relaychain and parachain collation.
The alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.
When this happens the full node will crash and will stop synchronizing with the network.
Since the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic.

### Specify the right chain spec

The `--chain` parameter decides which blockchain the KILT full node will join.
This parameter must be specified for both the parachain and the relaychain, since both chains are, as a matter of fact, separate blockchains.
The KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.
This can either be `peregrine` or `spiritnet`.

Hence, to start a full node for the Spiritnet network, the parameter would be `--chain=spiritnet`, while for Peregrine would be `--chain=peregrine`.

### Where are all the files stored?

The `--base-path` parameter specifies where all the persistent files must be stored.
By default the session keys will also be stored in the _base path_, but we recommend to separate them from the other files.
This makes sure that the keyfiles are not accidentally lost or published when the blockchain database is backed up or restored.

## Running a full node

<Tabs
groupId="exec-strategy"
defaultValue="Binary"
values={[
{label: 'Binary', value: 'Binary'},
{label: 'Docker', value: 'Docker'},
]}>

<TabItem value="Binary">

### Building the full node

Below is the command to build the KILT full node executable.
The command must be run from the root directory of the repository after it has been cloned.

```bash
# Set up the build environment by installing the Rust compiler.
./scripts/init.sh
# Build the executable from source enabling all the optimisations with --release.
cargo build --release -p kilt-parachain
```

:::info

We discourage to use the `develop` branch to build the executable. Instead, the latest commit from `master` should be used.

:::

### An archive node

The compiled executable can be found in `./target/release/kilt-parachain` after the build process completes successfully. To run an Archive full node add the option `--pruning archive` to the command.

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
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  --state-cache-size=1 \
  -- \
  --chain=kusama \
  --execution=wasm
```
</TabItem>
<TabItem value="Peregrine">

```bash
./target/release/kilt-parachain \
  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \
  --runtime=peregrine \
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  --state-cache-size=1 \
  -- \
  --chain=kusama \
  --execution=wasm
```
</TabItem>
</Tabs>

</TabItem>
<TabItem value="Docker">

### An archive node from Docker

The full node can also be started inside a container.
To expose the websockets please ensure to enable the following options `--rpc-external` and `--ws-external`.

To run an Archive full node add the option `--pruning archive` to the command.

First, you can fetch the pre-built image:

```bash
docker pull kiltprotocol/kilt-node:latest
```

Once you have the image, you can spin up the container.
Make sure to choose whether you want to start a full node for Peregrine or Spiritnet by selected the correct runtime and chain.

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
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  --state-cache-size=1 \
  -- \
  --base-path=/data/relay \
  --chain=kusama \
  --execution=wasm
```
</TabItem>
<TabItem value="Peregrine">

```bash
docker run -v kilt-node-data:/data kiltprotocol/kilt-node:latest \
  --base-path=/data/para \
  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \
  --runtime=peregrine \
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  --state-cache-size=1 \
  -- \
  --base-path=/data/relay \
  --chain=kusama \
  --execution=wasm
```
</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Sync the blockchain state

The node needs to fully sync up with both the parachain and the relaychain.
Depending on the size of the blockchain state and your hardware, it may take a number of hours to few days for the node to catch up.
More details can be found in the [Polkadot network documentation](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data).
