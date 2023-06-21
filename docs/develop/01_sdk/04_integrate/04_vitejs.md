---
id: howto-integrate-vitejs
title: ViteJS
---

import CodeBlock from '@theme/CodeBlock';
import App from '!!raw-loader!@site/code_examples/vitejs/src/App.tsx';

[ViteJS](https://vitejs.dev/guide/) is a great tool to bootstrap your project.

Bootstrap using the template of your choice and install the KILT sdk:

```bash
yarn create vite my-app --template react-ts
cd my-app
yarn add @kiltprotocol/sdk-js
```

After that you can initialize and use the SDK as usual.

<CodeBlock className="language-tsx">
  {App}
</CodeBlock>