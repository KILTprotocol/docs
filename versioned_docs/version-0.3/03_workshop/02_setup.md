---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Project setup

Create a new project in a fresh directory and navigate into it by running `mkdir kilt-rocks && cd kilt-rocks`.

<!-- TODO: When MDX v2, can move these into tabs -->

The dependencies needed are the following:

- [KILT SDK-JS](https://github.com/KILTprotocol/sdk-js#readme) - for KILT functionality
- [dotenv](https://github.com/motdotla/dotenv#readme) - to load environment variables
- If you use Typescript and not JavaScript [ts-node](https://www.npmjs.com/package/ts-node) and [Typescript](https://www.typescriptlang.org/) - to execute TS code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Initialize the project and install dependencies.

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js dotenv ts-node typescript
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  Initialize the project and install dependencies.

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js dotenv
  ```

  </TabItem>
</Tabs>

## Project Folder

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Create the following remaining files and folders to end up with the folder structure below:

  ```
  └─ kilt-rocks/ # project
      ├─ attester/ # all attester code
      ├─ claimer/ # all claimer code
      ├─ verify.ts # all verifier code
      └─ .env # environment variables
  ```
  ```
  mkdir attester claimer && touch verify.ts .env
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>


  Create the following remaining files and folders to end up with the folder structure below:

  ```
  └─ kilt-rocks/ # project
      ├─ attester/ # all attester code
      ├─ claimer/ # all claimer code
      ├─ verify.js # all verifier code
      └─ .env # environment variables
  ```
  ```
  mkdir attester claimer && touch verify.js .env
  ```

  </TabItem>
</Tabs>

## PILT Tokens

This workshop interacts with the Peregrine test blockchain, which requires you to pay for each transaction with Peregrine Kilt (PILT) tokens.

But don't worry. PILT tokens have no value, and you can request them from the [faucet](https://faucet.peregrine.kilt.io).

## Blockchain Connection

Before using any SDK functionality, you must initialize and configure the Kilt SDK.

As this workshop uses the [Peregrine Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws%2F#/explorer) you use its address whenever using the SDK to interact with the Kilt blockchain.

You do this by calling the following function:

```JavaScript
await Kilt.connect({address})
```

Where `address` is the address of the full node you want to connect to, which for this workshop, is `wss://peregrine.kilt.io`.

For convenience, add the address to the `.env` file.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io
```

That's it for the basic setup - You're good to go!