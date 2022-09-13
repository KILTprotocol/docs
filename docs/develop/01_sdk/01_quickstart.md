---
id: quickstart
title: Quickstart
---
import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import TsJsSnippet from '@site/src/components/TsJsSnippet';

import PrintHelloWorld from '!!raw-loader!@site/code_examples/core_features/getting_started/01_print_hello_world.ts';
import Connect from '!!raw-loader!@site/code_examples/core_features/getting_started/02_connect.ts';
import FetchDid from '!!raw-loader!@site/code_examples/core_features/getting_started/03_fetch_did.ts';
import FetchEndpoints from '!!raw-loader!@site/code_examples/core_features/getting_started/04_fetch_endpoints.ts';
import FetchEndpointDataTs from '!!raw-loader!@site/code_examples/core_features/getting_started/05_fetch_endpoint_data.ts';
import FetchEndpointDataJs from '!!raw-loader!@site/code_examples/core_features/_js/getting_started/05_fetch_endpoint_data.js';
import VerifyAttestation from '!!raw-loader!@site/code_examples/core_features/getting_started/06_verify_attestation.ts';
import VerifyPresentation from '!!raw-loader!@site/code_examples/core_features/getting_started/07_verify_presentation.ts';
import Disconnect from '!!raw-loader!@site/code_examples/core_features/getting_started/08_disconnect.ts';

The following guide will give you a starting point to begin with KILT.
What you will have achieved at the end of this is the following:

1. Import the **KILT SDK** into a project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to get its **DID**
4. Verify a **Credential**, published via a **DID service endpoint**

After completing the quickstart guide, you should have learned a little about KILT by actually using it.
The guide requires some experience with javascript and command-line tools.
We will have recommended guides to other tutorials to dive deeper into some of the topics.

## Setup

We will focus on creating a new project from scratch, which will require a little setup.
First, we need to create a new project in a new directory.
For this, we run `mkdir kilt-rocks && cd kilt-rocks`.


<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Ts-node**, **Axios** and **Typescript**:

  ```bash npm2yarn
  npm install @kiltprotocol/sdk-js axios node
  ```

  With all the required dependencies set, just create a new (empty) script file with `touch quickstart.ts`.

  </TabItem>
  <TabItem value='js' label='Javascript'>

  From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Node** and **Axios**:

  ```bash npm2yarn
  npm install @kiltprotocol/sdk-js axios ts-node typescript
  ```

  With all the required dependencies set, just create a new (empty) script file with `touch quickstart.js`.

  </TabItem>
</Tabs>

After you have imported the SDK, you are now able to access the functionalities that KILT provides.
Inside the `package.json` add in the value `"type": "module"`.

Let's first declare our `main` function that will execute our script:

<CodeBlock className="language-ts">
  {PrintHelloWorld}
</CodeBlock>

If the setup is correct you can excute the script by calling the name of the file using Node.

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

As we will extend the code in this file, you can always excute it with the same command.

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

Connecting and disconnecting to the KILT blockchain is required for any operation that relies on the KILT blockchain, such as **querying and verifying a Credential**.

Still within the same `main` function, you need to configure the SDK to connect to a **KILT node**.
For this, the SDK exposes **`Kilt.connect()`** to configure the address of the node to connect to.

We will use the official **Spiritnet** address:

<SnippetBlock
  className="language-ts"
>
  {Connect}
</SnippetBlock>

After establishing a connection, you have access to the chain, but let's not forget to **close** any connections when we are done!
Connections to blockchain nodes should be dropped when not needed anymore, and to do that simply call the `Kilt.disconnect()` function at the bottom of `main` function.

<SnippetBlock
  className="language-ts"
>
  {Disconnect}
</SnippetBlock>

**Congratulations!
You have connected to a Spiritnet node, let's now start querying some data from the chain!**

## Query the KILT Blockchain

We will be querying information related to **web3names** (`john_doe`), and we will be using them to retrieve the **KILT DID** linked to it.
In between the `Kilt.connect()` and `Kilt.disconnect()` lines, add the following code:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchDid}
</SnippetBlock>

Try executing it and check the result.

Did you get the DID? Nice work! You now have `john_doe`'s DID.
Now let's see if John Doe has any public KILT Credentials that we could retrieve and verify!

## Retrieve and Verify a Credential

A **KILT DID** can expose service endpoints, which allow to link external resources to the DID.
One type of external resources is represented by, you guessed it, **KILT Credentials**!
Therefore, let's see how we can retrieve the **service endpoints** of John Doe's DID and see if it links to any public Credentials for us to **query** and **verify**.

We will keep adding code below what we just added.
The code snippet retrieves the service endpoints exposed by the DID we found for `john_doe`:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchEndpoints}
</SnippetBlock>

If the snippet printed some endpoints, congratulations!
Let's see if we can find a Credential among them.

We can select one of the endpoints and query the URL to see if it returns a signed Credential (i.e., a Presentation):

<TsJsSnippet tsSnippet={FetchEndpointDataTs} jsSnippet={FetchEndpointDataJs} funcEnd="return" />

If the script completes with no errors, it means that we were able to retrieve a Credential using the URL specified in the service endpoint.

We will now have to make sure the Credential is **valid** and has a valid **structure**.
To do that, we need to query the Credential's `rootHash` from the blockchain to see if it has been **attested** by someone:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {VerifyAttestation}
</SnippetBlock>

Execute the script and see if you get a valid attestation for John Doe's Credential!

If so, it is then time to verify the Credential.
This will be indicated by the result of the **verification** process as shown in the snippet below:

<SnippetBlock
  className="language-ts"
>
  {VerifyPresentation}
</SnippetBlock>

Now, the last step is to excute the complete script and wait to see whether we can successfully retrieve **and** verify one of John Doe's Credentials!

Was it successful? Nice Job!

If you want to explore more about KILT's features, please check out our [Concepts section](../../concepts/01_what_is_kilt.md).
If you want to dive deeper into the SDK, please advance to the next section: [the KILT Cookbook](./02_cookbook/01_dids/01_light_did_creation.md).
