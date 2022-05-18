---
id: collator-benchmarking
title: Benchmarking
---

To enable benchmarking, the collator must enable the benchmarking feature from a new build of the `kilt-parachain`.

:::caution

Don't use this binary for running the collator!

:::

```bash=
cargo build --release -p kilt-parachain --features=runtime-benchmarks
```

The benchmarks can be run to compare the server's hardware capabilities against the referenced hardware.
At the moment, we have benchmarked the Spiritnet and Peregrine runtimes on an AMD Ryzen 7 1700X with 64GB RAM and an NVMe SSD.
After executing the benchmarks on a server compare the weights to the official KILT weights.
Your weight results should at least be similar to the official ones and the lower yours are, the better.

The commands executed to benchmark the KILT runtimes can be found in the official benchmark files for both [spiritnet](https://github.com/KILTprotocol/mashnet-node/tree/master/runtimes/spiritnet/src/weights) and [peregrine](https://github.com/KILTprotocol/mashnet-node/tree/master/runtimes/peregrine/src/weights).

Below is an example of benchmarking for the the `balances` pallet.

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