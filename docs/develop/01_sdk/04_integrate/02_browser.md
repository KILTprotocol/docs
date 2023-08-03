---
id: howto-integrate-browser
title: Browser
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Our JavaScript SDK (`@kiltprotocol/sdk-js`) is ready to be used in a browser context. For rapid prototyping of simple web apps, we provide a code bundle of the entire SDK which you can embed in a site by adding the following script tag:

```html
<script src="https://unpkg.com/@kiltprotocol/sdk-js@0.34.0-rc.0/dist/sdk-js.min.umd.js"></script>
```

The SDK's functions then become available via a new `kilt` property on the global `window` object.

To get started with your first **React application** using KILT, we recommend using either the [KILT Distillery](./03_distillery.md) CLI tool for bootstrapping or a framework like [Vite](https://vitejs.dev) or [Next.js](https://nextjs.org) that takes away some of the complexity in building and testing a React application. You can find a broader selection of popular React-powered frameworks on the [React project's homepage](https://react.dev/learn/start-a-new-react-project).

After completing the respective tool's recommended steps to initialize your project, simply add the SDK to your dependencies and you are ready to hack away!

:::info

You should of course familiarize yourself with the tool of your choice, but these commands have served us well in the past:
<Tabs groupId="vite-nextjs">
<TabItem value="vite" label="Vite" default>

```bash
yarn create vite my-kilt-app --template react-ts
cd my-kilt-app
yarn add @kiltprotocol/sdk-js
```

</TabItem>
<TabItem value="nextJS" label="NextJS">

```bash
yarn create next-app my-kilt-app
cd my-kilt-app
yarn add @kiltprotocol/sdk-js
```

</TabItem>
</Tabs>

:::
