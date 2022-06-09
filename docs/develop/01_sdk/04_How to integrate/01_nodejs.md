---
id: howto-integrate-nodejs
title: NodeJS
---

NodeJS is natively supported and doesn't require any additional setup.

Have a look at these example `package.json` and `index.js` files for reference:

```json
{
  "name": "kilt-sdk-node-test",
  "type": "module",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@kiltprotocol/sdk-js": "0.27.0"
  }
}
```

```js
import * as Kilt from '@kiltprotocol/sdk-js';

async function main() {
    await Kilt.init({address: 'wss://spiritnet.kilt.io:443'});
    const name = 'john_doe';
    let did = await Kilt.Did.Web3Names.queryDidForWeb3Name(name);        
    console.log(`${name} is ${did}`);
    process.exit(0);
}

main();
```