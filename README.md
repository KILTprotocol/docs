# KILT Protocol Documentation Website

The KILT Documentation website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

Hosted at https://docs.kilt.io

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Test

```
yarn test [dapp,workshop,core,staking]
```

Tests for code examples are located at `code_examples`.
If possible code for new sections should be added to the `sdk_examples` project as a subcommand.
When a subcommand is added, it also needs to be added to the [test setup](.github/workflows/test.yml) so that it will get executed.

### Where to put the code

To add a code example that is executed and tested, add the file to one of the code sections.
Depending on where the code example is used, the code has to be put into a different section in the `code_examples` folder.

* `docs/develop/01_sdk/` -> `code_examples/sdk_examples/src/core_features/...`
* `docs/develop/01_sdk/04_integrate/04_vitejs` -> `code_examples/vitejs`
  * ViteJS requires it's own `package.json` and was therefore put into its own project
* `docs/develop/03_workshop` -> `code_examples/sdk_examples/src/workshop/...`
* `docs/develop/07_dApp/` -> `code_examples/sdk_examples/src/dapp/...`
* `docs/participate/01_staking` -> `code_examples/sdk_examples/src/staking/...`

### How to write the examples

When writing code examples make sure that the script is as self explaining as possible.

* *Easy to understand*
  * If possible don't import helper functions that are not part of the SDK or polkadot-js
  * Ensure that there is no magic happening
  * Import SDK like this `import * as Kilt from '@kiltprotocol/sdk-js'` which avoids big import statements
* *Reusable*
  * Make sure the code could be copy pasted and would run with little effort in a different environment
* *Concise*
  * Only show what is relevant for the text you are writing
  * Prerequisites and setup should be done as much as possible outside of the code
    * Always link to other guides that explain the setup (e.g. DID creation, ...)
  * The code example should be wrapped in a function and anything that needs to be setup should be passed as parameters
* *Tested*
  * Your code should be executed (call the function in one of the `index.ts` or `test.ts` files)
  * If possible return something that could be checked to ensure that the function executed successfully

### How to include the code inside markdown

There are three options to include code into markdown files, `SnippetBlock`, `TsJsSnippet` and `TsJsBlock`.

`TsJsBlock` is the preferred option to display code since it shows the whole file and transpiles the typescript code to JavaScript.
The reader can than choose to either read the TS or JS code.
`TsJsBlock` can be used like this:

```md
import TsJsBlock from '@site/src/components/TsJsBlock';

import FullDidSimple from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/did/04_full_did_simple.ts';


# This is a markdown file

We imported `TsJsBlock` and the content `FullDidSimple` in the top of the file.

<TsJsBlock>
  {FullDidSimple}
</TsJsBlock>
```

Use `TsJsSnippet` and `SnippetBlock` if you only want to present the content of a function.
These components will look for a `main`-function in your code and only show the content of that function.
This is suitable for very short examples, usually only a few lines.
Since imports and the function signature is hidden, this code can become harder to understand and reuse.

```md
import SnippetBlock from '@site/src/components/SnippetBlock';
import TsJsSnippet from '@site/src/components/TsJsSnippet';

import Connect from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/02_connect.ts';
import FetchEndpointData from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/05_fetch_endpoint_data.ts';

# This is a markdown file

We imported `SnippetBlock` and the content `Connect` in the top of the file.

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {Connect}
</SnippetBlock>

A `TsJsSnippet` is preferred since it automatically generates JavaScript examples.

<TsJsSnippet funcEnd="return">
  {FetchEndpointData}
</TsJsSnippet>
```

## Deployment

This code is automatically deployed when pushed to master.
