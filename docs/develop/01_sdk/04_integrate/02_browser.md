---
id: howto-integrate-browser
title: Browser
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Our javascript SDK (`@kiltprotocol/sdk-js`) is ready to be used in a browser context. For rapid prototyping of simple web apps, we provide a code bundle of the entire SDK which you can add embed in a site by adding the following script tag:

```html
<script src="https://unpkg.com/@kiltprotocol/sdk-js@0.33.1/dist/sdk-js.min.umd.js"></script>
```

The SDK's functions then become available via a new `kilt` property on the global `window` object.

To get started with your first __React application__ using Kilt, we recommend using either the [KILT Distillery](./03_distillery.md) CLI tool or bootstrapping tools like [Create React App](https://create-react-app.dev) or [ViteJS](https://vitejs.dev) that take away some of the complexity in building and testing a React application.

After completing the respective tool's recommended steps to initialize your project, simply add the sdk to its dependencies and you are ready to hack away!

:::info

You should of course familiarize yourself with the tool of your choice, but these commands have served us well in the past:  
<Tabs
  groupId="vite-cra"
>
<TabItem value="vite" label="ViteJS" default>

```bash
yarn create vite my-kilt-app --template react-ts
cd my-kilt-app
yarn add @kiltprotocol/sdk-js
```

</TabItem>
<TabItem value="cra" label="Create React App">

```bash
yarn create react-app my-kilt-app --template typescript
cd my-kilt-app
yarn add @kiltprotocol/sdk-js
```

</TabItem>
</Tabs>

:::