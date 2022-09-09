---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';

## Node.js

You need to have [Node.js](https://nodejs.org/) installed.
Any stable (LTS >= 14.0) version is sufficient.

## Dependencies

Navigate into your newly created folder `kilt-rocks`, initialize the project and install dependencies.<br/>
- [KILT SDK-JS](https://github.com/KILTprotocol/sdk-js#readme) - for KILT functionality
- [dotenv](https://github.com/motdotla/dotenv#readme) - to help us load variables from `.env`
- [ts-node](https://www.npmjs.com/package/ts-node) and [Typescript](https://www.typescriptlang.org/) - to execute our TS code

<!-- When updating this version also update 00-welcome.md! -->
```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js@0.28.2 dotenv ts-node typescript
```

## Project Folder

The project structure looks like the following:

```bash
└─ kilt-rocks/ # project
    ├─ attester/ # all attester code
    ├─ claimer/ # all claimer code
    ├─ verify.ts # all verifier code
    ├─ .env # environment variables
    ├─ package.json # the project file
    └─ yarn.lock # dependency lock file
```

You can set up the directories now or later when we need them.

## PILT Tokens

In this workshop, you will interact with the Peregrine blockchain.
You are required to pay for each transaction with PILT coins.
But worry not!
PILT coins don't have any value and can be requested from the [faucet](https://faucet.peregrine.kilt.io).


## Blockchain Connection

Before you call any SDK functionality, you need to initialize the crypto libraries and configure the SDK.
For this workshop, we'll be using [Peregrine Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws%2F#/explorer).
This is done by calling `await Kilt.connect(address)` where `address` is the address of the full node you want to connect to.
For this workshop, use `wss://peregrine.kilt.io/parachain-public-ws`.
Add the address to your `.env` file.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws
```

That's it for the basic setup - We're good to go!
