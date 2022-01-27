---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import CodeBlock from '@theme/CodeBlock';
import Index from '!!raw-loader!../../../code-examples/workshop/index-1.js';

## Node.js

You need to have [Node.js](https://nodejs.org/) installed.
Any stable (LTS >= 14.0) version is sufficient.

## Project Folder

Create a new folder, named for example `kilt-rocks`.
Create  <span class="label-role attester">Attester</span>,  <span class="label-role claimer">Claimer</span>,  <span class="label-role verifier">Verifier</span> folders.
Create `.env` and our main entry files `index.js`.

```bash
└─ kilt-rocks # project
    ├─ attester # all attester code
    ├─ claimer # all claimer code
    ├─ verifier # all verifier code
    ├─ .env # environment variables
    └─ index.js # main entry file
```

## Dependencies

Navigate into your newly created folder `kilt-rocks`, initialize the project and install dependencies.<br/>
- [KILT SDK-JS](https://github.com/KILTprotocol/sdk-js#readme) - for KILT functionality
- [PolkadotJS Crypto-Utils](https://github.com/polkadot-js/common/tree/master/packages/util-crypto#readme) - for a few crypto utilities
- [dotenv](https://github.com/motdotla/dotenv#readme) - to help us load variables from `.env`

<!-- When updating this version also update 00-welcome.md! -->
```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js@0.25.0 @polkadot/util-crypto@8.1.2 dotenv
```

## PILT Tokens

In this workshop you will interact with the Peregrine blockchain.
You are required to pay for each transaction with PILT coins.
But worry not!
PILT coins don't have any value and can easily be requested through our communication channels ([Element](https://matrix.to/#/%23kilt-general:matrix.org) and [Discord](https://discord.gg/5VZnPdTZMy)).

## Blockchain Connection

Before you call any SDK functionality, you need to initialise the crypto libraries and configure the SDK.
For this workshop we'll be using [Peregrine Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws#/explorer).
This is done calling `await Kilt.init({ address })` where `address` is the address of the full node you want to connect to.
For this workshop use `wss://peregrine.kilt.io/parachain-public-ws`.
Add the address to your `.env` file.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws
```

## Index

Finally, we'll setup our `index.js` file.
This will be the main script we use to run through the workshop.
Copy the code below, we'll go through it step by step later.

<CodeBlock className="language-js" title="index.js">
  {Index}
</CodeBlock>

That's it for the basic setup - We're good to go!
