---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import CodeBlock from '@theme/CodeBlock';
import Index from '!!raw-loader!../../../code-examples/workshop/index-1.js';

## Node.js

You need to have [Node.js](https://nodejs.org/) installed. Any stable (LTS) version is sufficient.

## Project Folder

Create a new folder, named for example `kilt-rocks`. 
Create `attester`, `claimer`, `verifier` folders. 
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

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js @polkadot/util-crypto dotenv
```

## Connection

Before you call any SDK functionality, you need to connect to a full node. 
For this workshop we'll be using [Peregrine Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2F#/explorer). Add the address to your `.env` file.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io
```

## Index

Finally, we'll setup our `index.js` file. This will be the main script we use to run through the workshop. Copy the code below, we'll go through it step by step later. 

<CodeBlock className="language-js" title="index.js">
  {Index}
</CodeBlock>

That's it for the basic setup - We're good to go!
