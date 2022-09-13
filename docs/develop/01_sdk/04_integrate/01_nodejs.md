---
id: howto-integrate-nodejs
title: NodeJS
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import QueryAccountNameTs from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';
import QueryAccountNameJs from '!!raw-loader!@site/code_examples/core_features/_js/linking/03_account_web3name_query.js';

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
    "@kiltprotocol/sdk-js": "0.29.0-rc.1"
  }
}
```

<TsJsBlock tsSnippet={QueryAccountNameTs} jsSnippet={QueryAccountNameJs} />