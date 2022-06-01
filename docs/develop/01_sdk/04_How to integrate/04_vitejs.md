---
id: howto-integrate-vitejs
title: ViteJS
---

ViteJS is a great tool to bootstrap your project. 
As for all browser based projects, you have to make sure that nodejs polyfills are in place to make the SDK work.
If you start from any ViteJS template, you only have to make sure to install and enable the polyfills.

Bootstrap using the template of your choice and install KILT + NodeJS polyfills:

```
yarn create vite my-app --template react-ts
cd my-app
yarn add @kiltprotocol/sdk-js@0.27.0
yarn add --dev @esbuild-plugins/node-globals-polyfill
yarn add --dev @esbuild-plugins/node-modules-polyfill
```

Adjust the `vite.config.ts` file to activate the polyfills:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill()
      ]
    }
  }
})
```

After that you can initialize and use the SDK as usual.

```tsx
import { useState, useEffect } from 'react'

import * as Kilt from '@kiltprotocol/sdk-js';

function App() {
  const [did, setDid] = useState('');
  useEffect(() => {
    const resolveWeb3Name = async () => {
      await Kilt.init({ address: "wss://spiritnet.kilt.io:443" });
      let did = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe');
      setDid(did);  
    };
    resolveWeb3Name();
  });   
  
  
  return (
    <div className="App">
        john_doe is {did}
    </div>
  )
}
```