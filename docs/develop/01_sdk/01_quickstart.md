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

Get started with KILT by following this guide.
You'll learn to:

1. Import the **KILT SDK** into your project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to retrieve its **DID**
4. Verify a **credential** using a **DID service**

This quickstart guide provides hands-on experience to enhance your understanding of KILT.
Basic knowledge of JavaScript and command-line tools is recommended.
For more in-depth tutorials, we'll suggest additional guides.

## Setup

Let's start by creating a new project from scratch.
Create a new project in a fresh directory by running `mkdir kilt-rocks && cd kilt-rocks`.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Typescript**, **ts-node** and **Axios**:

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js ts-node typescript axios
  ```

  With all the required dependencies set, just create a new (empty) script file with `touch quickstart.ts`.

  </TabItem>
  <TabItem value='js' label='Javascript'>

  From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Node** and **Axios**:

  ```bash npm2yarn
  npm init -y
  npm install @kiltprotocol/sdk-js node axios
  ```

  With all the required dependencies set, just create a new (empty) script file with `touch quickstart.js`.

  </TabItem>
</Tabs>

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  Once you've imported the SDK, you'll gain access to KILT's functionalities.
  Now, let's create a new file containing the TypeScript compiler configuration.

  ```bash
  touch tsconfig.json
  ```

  Inside the `tsconfig.json` file, include the following configuration:

  ```json
  {
    "compilerOptions": {
        "module": "CommonJS"
    }
  }
  ```

  This will set the `module` option to "CommonJS" for TypeScript compilation.

  </TabItem>
  <TabItem value='js' label='Javascript'>

  After importing the SDK, you'll have access to KILT's functionalities.
  To enable ES modules in your project, add `"type": "module"` to the `package.json` file.

  </TabItem>
</Tabs>

Let's first declare our `main` function that will execute our script:

<CodeBlock className="language-ts">
  {PrintHelloWorld}
</CodeBlock>

If the setup is correct you can execute the script by calling the name of the file using Node.

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

As we will extend the code in this file, you can always execute it with the same command.

**Let's get started! 🔥**

### Import the KILT SDK

Let's begin by importing the **KILT SDK** and **Axios**:

```js
import * as Kilt from '@kiltprotocol/sdk-js'
import axios from 'axios'
```

Now you are able to access the SDK and all its functionality.
We will move onto connecting to the **KILT blockchain**.

### Connect to the KILT Blockchain

To perform operations that rely on the KILT blockchain, such as querying and verifying a credential, it's essential to connect to the KILT blockchain.
Within the same `main` function, configure the SDK to connect to a KILT node using the `Kilt.connect()` method:

<Tabs groupId="chain-choice">
  <TabItem value='pere' label='Peregrine (Testnet)' default>
    Peregrine is the development blockchain.
    For testing and development purposes connect to this network.
    <SnippetBlock
      className="language-ts"
      funcEnd="return"
      >
      {ConnectPere}
    </SnippetBlock>
  </TabItem>
  <TabItem value='spirit' label='Spiritnet (Production)'>
    Spiritnet is the production blockchain.
    When you are ready to publish your DApp, connect to the Spiritnet network for production purposes.
    <SnippetBlock
      className="language-ts"
      funcEnd="return"
      >
      {ConnectSpirit}
    </SnippetBlock>
  </TabItem>
</Tabs>

To ensure proper cleanup, call the `Kilt.disconnect()` function at the bottom of the main function:

<SnippetBlock
  className="language-ts"
>
  {Disconnect}
</SnippetBlock>

By adding `await Kilt.disconnect()` at the end of the main function, you ensure that the connection to the blockchain node is properly closed when the script finishes executing.
This helps maintain the integrity of your application and is a good practice to follow.


Congratulations!
You have connected to a KILT blockchain node.
Let's now start querying some data from the chain!

## Query a KILT Identity

We will be querying information related to a **web3name** (`john_doe`), and using them to retrieve the **KILT DID** linked to it.
In between the `Kilt.connect()` and `Kilt.disconnect()` lines, add the following code:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchDid}
</SnippetBlock>

Try executing it and check the result.

Did you get the DID? Nice work! You now have `john_doe`'s DID.
Now let's see if John Doe has any public KILT credentials that we could retrieve and verify!

## Retrieve and Verify a Credential

A **KILT DID** can expose services, which allow external resources to be linked to the DID.
One type of external resource is represented by, you guessed it, **KILT credentials**!
Therefore, let's see how we can retrieve the **services** of John Doe's DID and see if they link to any public credentials for us to **query** and **verify**.

We will keep adding code below what we just added.
The code snippet retrieves the services exposed by the DID we found for `john_doe`:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchEndpoints}
</SnippetBlock>

If the snippet printed some endpoints, congratulations!
Let's see if we can find a credential among them.

We can select one of the endpoints and query the URL to see if it returns a KILT credential collection as described in the [KiltPublishedCredentialCollectionV1 specification](https://github.com/KILTprotocol/spec-KiltPublishedCredentialCollectionV1):

<TsJsSnippet funcEnd="return">
  {FetchEndpointData}
</TsJsSnippet>

If the script completes with no errors, it means that we were able to retrieve the published credential using the URL specified in the service.

We will now have to make sure the credential is **valid** and has a valid **structure**.

It is then time to verify the credential.
This will be indicated by the result of the **verification** process as shown in the snippet below:

<SnippetBlock
  className="language-ts"
>
  {VerifyCredential}
</SnippetBlock>

Now execute the script wait to see whether we can successfully retrieve **and** verify one of John Doe's credentials!

Was it successful? Nice Job!

If you want to explore more of KILT's features, check out our [Concepts section](../../concepts/01_what_is_kilt.md).
If you want to dive deeper into the SDK, please advance to the next section: [the KILT Cookbook](./02_cookbook/01_dids/01_full_did_creation.md).
