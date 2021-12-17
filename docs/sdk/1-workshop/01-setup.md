---
id: setup
title: 🎒 Setup
---

import Tabs from '@theme/Tabs';
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/main.js';

## Node.js

You need to have [Node.js](https://nodejs.org/) installed. Any stable (LTS) version is sufficient.

## Your working folder

Easy one: create a new folder, named for example `kilt-rocks`. This is where we'll be doing work for the rest of this tutorial.

## KILT-SDK

Navigate into your newly created folder `kilt-rocks`.

Install the KILT-SDK by running the following commands:

```bash
yarn init -y
yarn add @kiltprotocol/sdk-js
```

Or with `npm`:

```bash
npm init -y
npm install @kiltprotocol/sdk-js
```

:::caution

Before you call any SDK functionality, you need to initialise the crypto libraries and configure the SDK.
This is done calling `await Kilt.init({ address })` where `address` is the address of the full node you want to connect to.
For this workshop use `wss://peregrine.kilt.io`.

:::

Finally, it is a good idea to create a script to run through the workshop. Let's call it `index.js`. We have prepared a file incase you need help here.

<details><summary>Reveal how to run the examples</summary>
<p>

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

</p>
</details>

That's it for the basic setup - We're good to go!
