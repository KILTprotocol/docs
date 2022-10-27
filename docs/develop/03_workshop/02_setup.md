---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Node.js

You need to have [Node.js](https://nodejs.org/) installed.
Any stable (LTS >= 14.0) version is sufficient.

## Dependencies

Navigate into your newly created folder `kilt-rocks`, initialize the project and install dependencies.<br/>
- [KILT SDK-JS](https://github.com/KILTprotocol/sdk-js#readme) - for KILT functionality
- [dotenv](https://github.com/motdotla/dotenv#readme) - to help us load variables from `.env`
- (Only in case you are using Typescript and not Javascript) [ts-node](https://www.npmjs.com/package/ts-node) and [Typescript](https://www.typescriptlang.org/) - to execute our TS code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Install the needed packages:
  
  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js@0.29.0-rc.4 dotenv ts-node typescript
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Install the needed packages:
  
  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js@0.29.0-rc.4 dotenv
  ```

  </TabItem>
</Tabs>

## Project Folder

The project structure looks like the following:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

    └─ kilt-rocks/ # project
        ├─ attester/ # all attester code
        ├─ claimer/ # all claimer code
        ├─ verify.ts # all verifier code
        ├─ .env # environment variables
        ├─ package.json # the project file
        └─ yarn.lock # dependency lock file

  </TabItem>
  <TabItem value='js' label='Javascript'>

    └─ kilt-rocks/ # project
        ├─ attester/ # all attester code
        ├─ claimer/ # all claimer code
        ├─ verify.js # all verifier code
        ├─ .env # environment variables
        ├─ package.json # the project file
        └─ yarn.lock # dependency lock file

  </TabItem>
</Tabs>

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
