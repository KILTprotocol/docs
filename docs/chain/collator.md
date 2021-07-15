---
id: collator
title: Become a Collator
---

## Standard Hardware

The details of spiritnets benchmarks can be found [here](https://github.com/KILTprotocol/mashnet-node/tree/develop/runtimes/spiritnet/src/weights). Running your own [benchmarks](#Benchmarking-(optional))


- OS - Ubuntu 20.04.2
- CPU - AMD Ryzen 7 1700X
- Storage - A NVMe solid state drive. Should be reasonably sized to deal with blockchain growth. Starting around 80GB - 160GB will be okay for the first six months of KILT's parachain and kusama relay chain, but will need to be re-evaluated every six months.
- Memory - 16GB.

The specs posted above are by no means the minimum specs that you could use when running a Collator, however you should be aware that if you are using less you may need to toggle some extra optimizations in order to be equal to other Collator that are running the standard.

## Build

There are several ways to build and test a collator node. **These commands are based of commits.** The time needed to start a node depends on the method choosen. We will go through how to use a Docker image or compile directly from our mashnet-node repositry. Below are the following `chain_spec`:

- The `peregrine` chain will be matching the closest to our final chain
- The `spiritnet` chain will be the actual network after launch

Each has their own benchmarks to track the weight of transactions of the given networks.

### Walkthrough How to do the Setup

#### Run the Docker Image for a Collator

Docker can be used to run a collator.

<details>
  <summary>Peregrine network pull command</summary>

```bash=
docker pull kiltprotocol/peregrine:c82cb51b
```

</details>

<details>
  <summary>Westend WILT network pull command</summary>

```bash=
docker pull kiltprotocol/peregrine:0.2.0-d03db82
```

</details>

<!-- The docker image can be run with existing commands, these can be found within the mashnet-net repositery [here](https://github.com/KILTprotocol/mashnet-node/blob/develop/docs/run-node.md#node-commands). -->

The Collators will need to enable the following:

- External Remote Procedure Calls
- Remote Procedure Calls cors Specify browser Origins allowed to access the HTTP & WS RPC servers.
- External WebSocket
- Unsafe RPC methods needs to be enabled, **but make sure that you are the only one that has access to the rpc endpoint!**
- Bootnodes

**Beware to not path the `keystore` or others to `/data/` in a local setup. Running from docker using `/data/` is fine**


The docker commands will also map the database files for the relay and parachain as well as the keystore directory to `~/data` on your host system using the flag `-v ~/data:/data`. That way you can make sure to not lose those files when you remove the container. You should also consider to backup the database files, since it will probably take more than a day to sync up with the Kusama blockchain


<details>
  <summary>Peregrine Command</summary>

```bash=
docker run -p 127.0.0.1:9944:9944 -v ~/data:/data \
    kiltprotocol/peregrine:0.2.0-72a6684 \
    --ws-port=9944 \
    --ws-external \
    --rpc-external \
    --rpc-cors=all \
    --unsafe-rpc-external \
    --rpc-methods=unsafe \
    --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \
    --runtime=peregrine \
    --execution=wasm \
    --bootnodes \
    /dns4/bootnode.kilt.io/tcp/30340/p2p/12D3KooWALJtiCZzcUPVsCa5f5egGfQyFhPY67kKosDw95bJqK7M \
    /dns4/bootnode.kilt.io/tcp/30341/p2p/12D3KooWCRgcGtFRsvqxqgysiR6Ah9SAzUNkM12Ef9sy59ZEspSQ \
    --listen-addr=/ip4/0.0.0.0/tcp/30336 \
    --name "name of collator" \
    --base-path /data/parachain \
    --keystore-path /data/keystore \
    --collator \
    -- \
    --listen-addr=/ip4/0.0.0.0/tcp/30333 \
    --base-path /data/relay \
    --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \
    --execution=wasm \
    --bootnodes \
    /dns4/bootnode.kilt.io/tcp/30350/p2p/12D3KooWEeezCpJauUmWw3zfgEtYzhZTc5LgukQYtGTMaZfzgVfE \
    /dns4/bootnode.kilt.io/tcp/30351/p2p/12D3KooWHq5j9tLdZEu4tnr6ii2k33zp5DCoKREQ6KzuabC9Gihu \
    /dns4/bootnode.kilt.io/tcp/30352/p2p/12D3KooWQ8iTGLH98zLz9BZmq5FXDmR1NytDsJ2VToXvcjvHV16a \
    /dns4/bootnode.kilt.io/tcp/30353/p2p/12D3KooWNWNptEoH443LVUgwC5kd7DBVoNYwQtJh6dp4TQxUsAST
```
</details>

<details>
<summary>WILT Command</summary>

```bash=
docker run -p 127.0.0.1:9944:9944 -v ~/data:/data \
  kiltprotocol/peregrine:0.2.0-d03db82 \
  --ws-port=9944 \
  --rpc-cors=all \
  --rpc-methods=unsafe \
  --ws-external \
  --rpc-external \
  --unsafe-rpc-external \
  --chain=/node/dev-specs/kilt-parachain/kilt-westend.json \
  --runtime=spiritnet \
  --name "name of collator" \
  --bootnodes \
  /dns4/bootnode.kilt.io/tcp/30360/p2p/12D3KooWRPR7q1Rgwurd4QGyUUbVnN4nXYNVzbLeuhFsd9eXmHJk \
  /dns4/bootnode.kilt.io/tcp/30361/p2p/12D3KooWDAEqpTRsL76itsabbh4SeaqtCM6v9npQ8eCeqPbbuFE9 \
  --listen-addr=/ip4/0.0.0.0/tcp/30336 \
  --base-path ./db/parachain \
  --keystore-path ./keystore \
  --collator \
  -- \
  --listen-addr=/ip4/0.0.0.0/tcp/30333 \
  --chain=westend \
  --execution=wasm \
  --base-path ./db/relay
```
</details>


#### Compile Build

We recommend following the [repositry](https://github.com/KILTprotocol/mashnet-node). Below is the command to connect as a Collator in the root directory of the mashnet-node repository.

***Do not use master branch to compile the build. Either use `develop` or the following commit `c82cb51b3c8e20f13aa2f9dbd587890f5e31da97`.***

```bash
cargo build --release -p kilt-parachain
```

You can find the executable file in `./target/release/kilt-parachain` after you build the project.

<details>
<summary>Peregrine Command</summary>

```bash=
./target/release/kilt-parachain \
--chain=dev-specs/kilt-parachain/peregrine-kilt.json \
--runtime=peregrine \
--ws-port=9944 \
--rpc-cors=all \
--rpc-methods=unsafe \
--ws-external \
--rpc-external \
--unsafe-rpc-external \
--name "name of collator" \
--execution=wasm \
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30340/p2p/12D3KooWALJtiCZzcUPVsCa5f5egGfQyFhPY67kKosDw95bJqK7M \
/dns4/bootnode.kilt.io/tcp/30341/p2p/12D3KooWCRgcGtFRsvqxqgysiR6Ah9SAzUNkM12Ef9sy59ZEspSQ \
--listen-addr=/ip4/0.0.0.0/tcp/30336 \
--base-path ./db/parachain \
--keystore-path ./keystore \
--collator \
-- \
--listen-addr=/ip4/0.0.0.0/tcp/30333 \
--chain=./dev-specs/kilt-parachain/peregrine-relay.json \
--execution=wasm \
--base-path ./db/relay \
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30350/p2p/12D3KooWEeezCpJauUmWw3zfgEtYzhZTc5LgukQYtGTMaZfzgVfE \
/dns4/bootnode.kilt.io/tcp/30351/p2p/12D3KooWHq5j9tLdZEu4tnr6ii2k33zp5DCoKREQ6KzuabC9Gihu \
/dns4/bootnode.kilt.io/tcp/30352/p2p/12D3KooWQ8iTGLH98zLz9BZmq5FXDmR1NytDsJ2VToXvcjvHV16a \
/dns4/bootnode.kilt.io/tcp/30353/p2p/12D3KooWNWNptEoH443LVUgwC5kd7DBVoNYwQtJh6dp4TQxUsAST
```

</details>

<details>
<summary>WILT Command</summary>

```bash=
./target/release/kilt-parachain \
-- \
--chain=dev-specs/kilt-parachain/kilt-westend.json \
--runtime=spiritnet \
--ws-port=9944 \
--rpc-cors=all \
--rpc-methods=unsafe \
--ws-external \
--rpc-external \
--unsafe-rpc-external \
--name "name of collator" \
--execution=wasm \
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30360/p2p/12D3KooWRPR7q1Rgwurd4QGyUUbVnN4nXYNVzbLeuhFsd9eXmHJk \
/dns4/bootnode.kilt.io/tcp/30361/p2p/12D3KooWDAEqpTRsL76itsabbh4SeaqtCM6v9npQ8eCeqPbbuFE9 \
--listen-addr=/ip4/0.0.0.0/tcp/30336 \
--base-path ./db/parachain \
--keystore-path ./keystore \
--collator \
-- \
--listen-addr=/ip4/0.0.0.0/tcp/30333 \
--chain=westend \
--execution=wasm \
--base-path ./db/relay \
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30360/p2p/12D3KooWRPR7q1Rgwurd4QGyUUbVnN4nXYNVzbLeuhFsd9eXmHJk \
/dns4/bootnode.kilt.io/tcp/30361/p2p/12D3KooWDAEqpTRsL76itsabbh4SeaqtCM6v9npQ8eCeqPbbuFE9 
```

</details>


#### Bootnodes

Our different bootnodes for KILT.

The Peregrines Parachain bootnodes:

```bash=
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30340/p2p/12D3KooWALJtiCZzcUPVsCa5f5egGfQyFhPY67kKosDw95bJqK7M \
/dns4/bootnode.kilt.io/tcp/30341/p2p/12D3KooWCRgcGtFRsvqxqgysiR6Ah9SAzUNkM12Ef9sy59ZEspSQ
```

The Peregrines relay chain bootnodes:

```bash=
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30350/p2p/12D3KooWEeezCpJauUmWw3zfgEtYzhZTc5LgukQYtGTMaZfzgVfE \
/dns4/bootnode.kilt.io/tcp/30351/p2p12D3KooWHq5j9tLdZEu4tnr6ii2k33zp5DCoKREQ6KzuabC9Gihu \
/dns4/bootnode.kilt.io/tcp/30352/p2p/12D3KooWQ8iTGLH98zLz9BZmq5FXDmR1NytDsJ2VToXvcjvHV16a \
/dns4/bootnode.kilt.io/tcp/30353/p2p/12D3KooWNWNptEoH443LVUgwC5kd7DBVoNYwQtJh6dp4TQxUsAST
```

The WILT parachain bootnodes:

```bash=
--bootnodes \
/dns4/bootnode.kilt.io/tcp/30360/p2p/12D3KooWRPR7q1Rgwurd4QGyUUbVnN4nXYNVzbLeuhFsd9eXmHJk \
/dns4/bootnode.kilt.io/tcp/30361/p2p/12D3KooWDAEqpTRsL76itsabbh4SeaqtCM6v9npQ8eCeqPbbuFE9 
```


### Benchmarking (optional)

To enable benchmarking, the collator must enable the benchmarking feature from a new build of the `kilt-parachain`. 

***Don't use this binary for running a collator!***

```bash=
cargo build --release -p kilt-parchain --features=runtime-benchmark
```

The benchmarking can be run on to compare your hardware to our reference hardware. At the moment, we have benchmarked our Runtime on an AMD Ryzen 7 1700X with 64GB RAM and a NVMe SSD. After you executed the benchmarks on your Server you can compare the weights to the official weights. Lower weights are always better.

The commands to excute the benchmarking can be found [here](https://github.com/KILTprotocol/mashnet-node/tree/develop/runtimes/spiritnet/src/weights) inside each file.

Below is an example of the `pallet_balances`.

```bash=
./target/release/kilt-parachain \
benchmark \
--chain=spiritnet-dev \
--execution=wasm \
--wasm-execution=Compiled \
--heap-pages=4096 \
--extrinsic=* \
--pallet=parachain_staking \
--steps=50 \
--repeat=20 \
--output \
 ./runtimes/spiritnet/src/weights/parachain_staking.rs \
--template \
 ./.maintain/weight-template.hbs
```

## Sync Data

Before you can author blocks with your collator, your node needs to fully sync up with the blockchain. Depending on which chain and the size of it may take a number of minutes to several hours maybe even a day. 

More details can be found at the [Polkadot network](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data)

## Session Keys

Once the chain has fully synced. The collator will need sessions keys to begin collating on the network. The session keys are important for collating within the network. A Collator can call a RPC to check whether the account has session keys with the following calls `hasKey` and `hasSessionKeys` in `author`.

![](/img/chain/author-hasKey.png)

**The Session keys associate a collator node with an account on KILT**

### Generate Session Keys

There are two ways to create the session keys. We recommend using the polkadot apps, but the session keys can also be created manually.


#### Option 1: Curl command

Running a remote node, a Collator can use the following command to rotate the session key.

WARNING: you should not be able to run this command from a remote machine, since the RPC endpoints must not be exposed!

```bash=
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9944
```

#### Option 2: Polkodat.js apps & Rotate Session Keys

Fist you need to connect to your node using the polkadot apps. For that you need to use ssh port forwarding. The RPC endpoints must not be publicly available!

You can forward the RPC port using `ssh -L 127.0.0.1:9944:127.0.0.1:9944 <user>@<server>`.

![](/img/chain/chain-menu.png)

![](/img/chain/chain-selection.png)


Collators need to connect a running node to the [polkadot.js apps](https://polkadot.js.org/apps/#/explorer). 

After connecting, a Collator must use an RPC with the associated Collator account to generate the keys.

The Extrinsic call in `author` and `rotateKeys`. The method is used to generate a session key and rotate the existing key.

![](/img/chain/author-rotateKeys.png)

The rotation of the session key should be done periodically to ensure that the collator can remain secure and safe from attack.

#### Option 3: subkey

A key pair can be created using the [`subkey` tool](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) and following the steps. The corresponding private and public key can be used within the keystore folder of the local or remote server for the session key.

```bash=
❯ subkey generate -n kilt
Secret phrase `very secure private key you should not use the example private key` is account:
  Secret seed:      0xcafe97b4b8f0adc1adeb3feef30bf2e5b9d49ddd897f268c8027c850DeadBEEF
  Public key (hex): 0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010
  Account ID:       0xda3861a45e0197f3ca145c2c209f9126e5053asdg03e459af4255cf8011d51010
  SS58 Address:     4srC1aowD94H9UH9xsnfv7XV6oHU6dhCymKYZHWKsdddaP29
```

The name of the file must be the public key prepended with `61757261` (hex representation of `aura`) and the content has to be the private key.

![](/img/chain/session-key-file.png)

Pathing in the root chain folder `./keystores/61757261da3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010`

### Set Session Keys

The collator has a session key by following the previous steps. The collator must then make an extrinsic by signing and submiting a transaction before the collator can begin collating on the network.

`Developer -> Extrinsics -> Submission`

1. Using the selected account: Select the Collator Account
2. Submit the following extrinsic: session -> setKeys(keys, proof)
3. Insert the key which was generated in the step "Generate Session Keys"

The proof of the `setKeys` is not used currently and can be set to `0x00`. 

The Collator Account binds to the node.

![](/img/chain/session-setKeys.png)

***A session takes 600 blocks or around 120~ minutes***

## Add collator

**It is recommended to set the session keys before doing the following steps.**

The current number of collators is 17.

Once the session keys has been set, the collator can join the pool of collators.

A collator staking amount:
- minimum 10,000 KILT tokens 
- maximum 200,000 KILT tokens.

### Join collators

The collator must make an extrinsic call from the `parachainStaking` pallet with the method `joinCandidates` with the desired stake entering the `candidatePool`.

`Developer -> Extrinsics -> Submission`

1. Using the selected account: Select the Collator Account 
2. Submit the following extrinsic: parachainStaking -> joinCandidates(stake)
3. Insert the staked KILT amount for the collator 

![](/img/chain/parachainStaking-joinCandidates.png)

A collator can check the current `SelectedCandidates` to see the position and required staked amount to join the network. 

`Developer -> Chain state -> Storage`

1. Selected state query: `parachainStaking -> selectedCandidates(): Vec<AccountId>`
2. Add the item with the "+" on the right side

If the collator has enough self-stake and delegator stake they can be selected to collate. Once the collator has been choosen, the collator will be added to the `SelectedCandidate` pool. A time period of two sessions must pass before the collator will be authoring blocks, e.g. after the rest of current session and the entire next one.

![](/img/chain/session-validators.png)

### Stake on collator

A collator can increase/decrease their stake. The corresponding methods can be found as an extrinisc under `parachainStaking > candidateStakeMore / candidateStakeLess`.

![](/img/chain/parachainStaking.png)

## Prometheus & Grafana

A collator can follow the steps below to set up monitoring of the nodes. 

## Known Issues

The following are known issues and the possible solutions:

- running "cargo update -p environmental" could fix something
- Using the commands create a `/Data/` directory the folder could possibly be owned by the root user. Switching the ownership of the folder with `chown [options] username:groupname filename`. Solution found [here](https://serverfault.com/questions/106713/how-to-change-ownership-of-a-folder-using-terminal)