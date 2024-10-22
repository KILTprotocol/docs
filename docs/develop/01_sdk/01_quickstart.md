---
id: quickstart
title: Quickstart
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PrintHelloWorld from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/01_print_hello_world.ts';
import ConnectSpirit from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/02_connect_spirit.ts';
import ConnectPere from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/02_connect_pere.ts';
import FetchDid from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/03_fetch_did.ts';
import FetchEndpoints from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/04_fetch_endpoints.ts';
import FetchEndpointData from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/05_fetch_endpoint_data.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/06_verify_credential.ts';
import Disconnect from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/getting_started/07_disconnect.ts';

Get started with KILT by following this guide, which teaches you to:

1. Import the **KILT SDK** into your project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to retrieve its **DID**
4. Verify a **credential** using a **DID service**

:::info Prerequisites

This quickstart guide provides hands-on experience to enhance your understanding of KILT.
Basic knowledge of JavaScript and command-line tools is recommended.

:::

## Setup

Create a new project and directory and move into the directory by running `mkdir kilt-rocks && cd kilt-rocks`.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

Inside the `kilt-rocks` project directory, install the **KILT SDK**, **Typescript**, **ts-node**, and **Axios** dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js ts-node typescript axios
```

With the required dependencies installed, create a TypeScript file with `touch quickstart.ts`.

  </TabItem>
  <TabItem value='js' label='Javascript'>

From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Node**, and **Axios** dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js node axios
```

With the required dependencies installed, create a JavaScript file with `touch quickstart.js`.

To enable ES modules in your project, add `"type": "module"` to the `package.json` file.

  </TabItem>
</Tabs>

Declare an `async main` function in the `quickstart.ts` file that executes the rest of the code in this quickstart and call the `main()` function by default:

{/_ TODO: Do we need to test this or provide JS/TS equivalent? _/}

```js
async function main() {}

main()
```

**With the setup completed, let's get started! 🔥**

### Import the KILT SDK

Begin by importing the **KILT SDK** and **Axios** at the top of the file:

```js
import * as Kilt from '@kiltprotocol/sdk-js'
import axios from 'axios'
```

Now, you can access the SDK and all its functionality.
The next step is connecting to the **KILT blockchain**.

### Connect to the KILT Blockchain

To perform operations that rely on the **KILT blockchain**, such as querying and verifying a credential, you must first connect to the **KILT blockchain**.

Within the `main` function, configure the SDK to connect to a KILT node using the `Kilt.connect()` method:

<Tabs groupId="chain-choice">
  <TabItem value='pere' label='Peregrine (Testnet)' default>
    <p>Peregrine is the development blockchain.
    Connect to this network for testing and development purposes.</p>
    <SnippetBlock
      className="language-ts"
      dropTail="1"
      >
      {ConnectPere}
    </SnippetBlock>
  </TabItem>
  <TabItem value='spirit' label='Spiritnet (Production)'>
    <p>Spiritnet is the production blockchain.
    When you are ready to publish your DApp, connect to the Spiritnet network for production purposes.</p>
    <SnippetBlock
      className="language-ts"
      dropTail="1"
      >
      {ConnectSpirit}
    </SnippetBlock>
  </TabItem>
</Tabs>

To ensure proper cleanup, call the `Kilt.disconnect()` function at the bottom of the `main()` function.
You should add all other code before this function call:

<SnippetBlock
className="language-ts"

> {Disconnect}
> </SnippetBlock>

By adding `await Kilt.disconnect()`, you ensure that the connection to the blockchain node is properly closed when the script finishes executing, which helps maintain the integrity of your application and is a good practice to follow.

Run the code by calling the name of the file.
If you set up everything correctly, you should see no output showing that your code connected to the **KILT blockchain**.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

```bash
yarn ts-node quickstart.ts
```

  </TabItem>
  <TabItem value='js' label='Javascript'>

```bash
node quickstart.js
```

  </TabItem>
</Tabs>

As you add to the code in this file, you can always run it with the same command.

**Congratulations! 🔥**

You have connected to a KILT blockchain node.
The next step is to start querying data from the blockchain.

## Query a KILT Identity

The following code queries information related to a **web3name** (`kiltnerd123`) and uses it to retrieve the **KILT DID** linked to it.

Between the `Kilt.connect()` and `Kilt.disconnect()` lines, add the following code:

<SnippetBlock
className="language-ts"
dropTail="1"

> {FetchDid}
> </SnippetBlock>

Try running the code and check the result.

Did you get the DID? You now have `kiltnerd123`'s DID.
The next step is to see if `kiltnerd123` has any publicly linked KILT credentials to retrieve and verify.

## Retrieve and Verify a Credential

A **KILT DID** can expose services that allow external resources to be linked to the DID.
**KILT credentials** represent one type of external resource.

You can retrieve the **services** attached to kiltnerd123's DID and see if they link to any public credentials to **query** and **verify**.

Add the following code after the code you added in the previous step but before the `await Kilt.disconnect()`.
It retrieves the services exposed by the DID found for `kiltnerd123`:

<SnippetBlock
className="language-ts"
dropTail="1"

> {FetchEndpoints}
> </SnippetBlock>

The code should print endpoints as JSON.

The next step is to see if you can find a credential among them.
You do this by selecting one of the endpoints and querying the URL to see if it returns a KILT credential collection as described in the [KiltPublishedCredentialCollectionV1 specification](https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1).

Add the following code after the code you added in the previous step but before `await Kilt.disconnect()`:

<TsJsSnippet dropTail="1">
  {FetchEndpointData}
</TsJsSnippet>

If the script completes without errors, you retrieved the published credential using the URL specified in the service.

The next step is to make sure the credential is **valid** and has a valid **structure**.

The following code outputs a string depending on whether the credential is valid, revoked, or not valid.
Add it before `await Kilt.disconnect()`:

<SnippetBlock
className="language-ts"

> {VerifyCredential}
> </SnippetBlock>

Run the code and wait to see if you can retrieve **and** verify one of kiltnerd123's credentials!

:::info Next steps

-   If you want to explore more of KILT's features, read our [Concepts section](../../concepts/01_what_is_kilt.md).
-   If you want to dive deeper into the SDK, read the next section, [the KILT Cookbook](./02_cookbook/01_dids/01_light_did_creation.md).

:::
