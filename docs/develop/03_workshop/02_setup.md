---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Prerequisites

- [Node.js](https://nodejs.org/) installed. Any stable LTS version >= 16.0.

:::

## Project setup

Create a new project in a fresh directory and navigate into it by running `mkdir kilt-rocks && cd kilt-rocks`.

Initialize the project and install dependencies. The dependencies needed are the following:

<!-- TODO: Any kind of preference here for list style? -->

- [KILT SDK-JS](https://github.com/KILTprotocol/sdk-js#readme) - for KILT functionality
- [dotenv](https://github.com/motdotla/dotenv#readme) - to load environment variables
- If you use Typescript and not JavaScript [ts-node](https://www.npmjs.com/package/ts-node) and [Typescript](https://www.typescriptlang.org/) - to execute our TS code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Install the needed packages:

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js dotenv ts-node typescript
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Install the needed packages:

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js dotenv
  ```

  </TabItem>
</Tabs>

## Project Folder
<!-- TODO: Or maybe add as we go and say, this will be the final structure -->
Create the following folder structure. You will add the code later:

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

## PILT Tokens

In this workshop, you will interact with the Peregrine blockchain.
You are required to pay for each transaction with PILT coins.
But worry not!
PILT coins don't have any value and can be requested from the [faucet](https://faucet.peregrine.kilt.io).


## Blockchain Connection

Before you call any SDK functionality, you need to initialize the crypto libraries and configure the SDK.
For this workshop, we'll be using [Peregrine Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws%2F#/explorer).
This is done by calling `await Kilt.connect(address)` where `address` is the address of the full node you want to connect to.
For this workshop, use `wss://peregrine.kilt.io`.
Add the address to your `.env` file.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io
```

That's it for the basic setup - We're good to go!
