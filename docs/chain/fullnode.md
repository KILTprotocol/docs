---
id: fullnode
title: How to set up a Full Node
---

We will guide you through the process of connecting to a full node.
A full node acts differently from a collator node. A full node can't author blocks though the acts as a backend, checks the state of the chain to submit and validate extrinsicis directly on the network.

## Setup

There are currently two different runtimes (i.e., two different parachain environments) that a KILT full node can be part of:

- peregrine: the public test network whose runtime is as close to the official chain as possible. It can be used to try stuff out before executing them on the live chain, which involves spending tokens that have real monetary value.
- spiritnet: the official public network, which contains only stable features.

:::info
The remainder of the guide explaining how to run a full node is for the official spiritnet. Nevertheless, we recommend to try out the setup on our peregrine testnet first. Hence, at each step where it is applicable, we indicate what differs between the peregrine and spiritnet configuration for the full node to join either network.
:::

### WASM runtime execution

A KILT full node should use the `--execution=wasm` parameter for both the relaychain and parachain collation.
The alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.
When this happens the full node will crash and will stop producing blocks.
Since the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic.

### Specify the right chain spec

The `--chain` parameter decides which blockchain the KILT full node will join.
This parameter must be specified for both the parachain and the relaychain, since both chains are, as a matter of fact, separate blockchains.
The KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.
This can either be `peregrine` or `spiritnet`.

Hence, to start a full node for the spiritnet network, the parameter would be `--chain=spiritnet`, while for peregrine would be `--chain=peregrine`.

### Where are all the files stored?

The `--base-path` parameter specifies where all the persistent files must be stored.
By default the session keys will also be stored in the _base path_, but we recommend to separate them from the other files.
This makes sure that the keyfiles are not accidentally lost or published when the blockchain database is backed up or restored.

## Running an Archive Node

We recommend following the instructions in the KILT chain repository. Below is the command to build the KILT full node executable. The command must be run from the root directory of the repository after it has been cloned.

```bash
# Set up the build environment by installing the Rust compiler.
./scripts/init.sh
# Build the executable from source enabling all the optimisations with --release.
cargo build --release -p kilt-parachain
```

:::info

We discourage to use the `develop` branch to build the executable. Instead, the latest commit from `master` should be used.

:::

The compiled executable can be found in `./target/release/kilt-parachain` after the build process completes successfully.

```bash
./target/release/kilt-parachain \
  --chain={spiritnet, peregrine} \
  --runtime={spiritnet, peregrine} \
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --chain=kusama \
  --execution=wasm
```

## Sync the Blockchain State

The node needs to fully sync up with both the parachain and the relaychain.
Depending on the size of the blockchain states, it may take a number of hours to few days for the node to catch up.
More details can be found on the [Polkadot network docs](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data).

## From Docker

A container can be used to run a node. To expose the websockets please ensure to enable the following options `--rpc-external` and `--ws-external`. First, you can fetch the pre-built image or if you have built and complied the chain yourself you will need to create an image of it, the documentation will not go into detail how to create your own image:

```bash
docker pull kiltprotocol/kilt-node:latest
```

Once you have the image, you can spin up the container. Similar options are used as the previous steps.

```bash
docker run data:/data kiltprotocol/kilt-node:latest \
  --chain={spiritnet, peregrine} \
  --runtime={spiritnet, peregrine} \
  --rpc-port=9933 \
  --rpc-cors=all \
  --rpc-external \
  --ws-external \
  --name="name of full node" \
  --execution=wasm \
  --pruning archive \
  -- \
  --chain=kusama \
  --execution=wasm
```
