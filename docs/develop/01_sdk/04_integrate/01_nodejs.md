---
id: howto-integrate-nodejs
title: NodeJS
---

import CodeBlock from '@theme/CodeBlock';
import JsonSnippet from '@site/src/components/JsonSnippet';
import QueryAccountName from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';

import ViteJsPackageConfig from '@site/static/json/vitejs-package.json';

NodeJS is natively supported and doesn't require any additional setup.

Have a look at these example `package.json` and `index.js` files for reference:

<JsonSnippet obj={ViteJsPackageConfig} />

<CodeBlock className="language-ts">
  {QueryAccountName}
</CodeBlock>