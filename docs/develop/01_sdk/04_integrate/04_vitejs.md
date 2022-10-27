---
id: howto-integrate-vitejs
title: ViteJS
---

import CodeBlock from '@theme/CodeBlock';
import ViteConfig from '!!raw-loader!@site/code_examples/vitejs/vite.config.ts';
import App from '!!raw-loader!@site/code_examples/vitejs/src/App.tsx';

[ViteJS](https://vitejs.dev/guide/) is a great tool to bootstrap your project.
As for all browser based projects, you have to make sure that NodeJS polyfills are in place to make the SDK work in such an environment.
If you start from any ViteJS template, you only have to make sure to install and enable those polyfills.

Bootstrap using the template of your choice and install KILT + NodeJS polyfills:

<!-- TODO: Update the SDK version using the CI action triggered on SDK releases. -->

```bash
yarn create vite my-app --template react-ts
cd my-app
yarn add @kiltprotocol/sdk-js@0.29.0-rc.4
yarn add --dev @esbuild-plugins/node-globals-polyfill
yarn add --dev @esbuild-plugins/node-modules-polyfill
```

Adjust the `vite.config.ts` file to activate the polyfills:

<CodeBlock className="language-ts">
  {ViteConfig}
</CodeBlock>

After that you can initialize and use the SDK as usual.

<CodeBlock className="language-tsx">
  {App}
</CodeBlock>