---
id: quickstart
title: Quickstart
---
import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PrintHelloWorld from '!!raw-loader!@site/code_examples/core_features/getting_started/01_print_hello_world.ts';
import InitSDK from '!!raw-loader!@site/code_examples/core_features/getting_started/02_init_sdk.ts';
import Connect from '!!raw-loader!@site/code_examples/core_features/getting_started/03_connect.ts';
import FetchDid from '!!raw-loader!@site/code_examples/core_features/getting_started/04_fetch_did.ts';
import FetchEndpoints from '!!raw-loader!@site/code_examples/core_features/getting_started/05_fetch_endpoints.ts';
import FetchEndpointData from '!!raw-loader!@site/code_examples/core_features/getting_started/06_fetch_endpoint_data.ts';
import BuildCredential from '!!raw-loader!@site/code_examples/core_features/getting_started/07_build_credential.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/core_features/getting_started/08_verify_credential.ts';
import Disconnect from '!!raw-loader!@site/code_examples/core_features/getting_started/09_disconnect.ts';

The following guide will give you a starting point to begin with KILT.
You will learn how to:

1. Import the **KILT SDK** into a project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to get its **DID**
4. Verify a **credential**, published via a **DID service endpoint**

After completing the quickstart guide, you should have gained a better understanding of KILT through hands-on experience.
The guide requires some experience with javascript and command-line tools.
We will recommend guides to other tutorials to dive deeper into some of the topics.

## Setup

We will focus on creating a new project from scratch, which will require a little setup.
First, we need to create a new project in a new directory.
For this, we run `mkdir kilt-rocks && cd kilt-rocks`.

From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Node** and **Axios**:

```bash npm2yarn
npm install @kiltprotocol/sdk-js node axios
```

After you have imported the SDK you will be able to access the functionalities that KILT provides.
With all the required dependencies set, just create a new (empty) script file with `touch quickstart.js`.
Inside the `package.json` add in the value `"type": "module"`.

Let's first declare our `main` function that will execute our script:

<CodeBlock className="language-ts">
  {PrintHelloWorld}
</CodeBlock>

If the setup is correct you can execute the script by calling the name of the file using Node.

<Tabs>
  <TabItem value='npm' label='npm' default>
    <CodeBlock className="language-bash">
      npm node quickstart.js
    </CodeBlock>
  </TabItem>
  <TabItem value='yarn' label='Yarn'>
    <CodeBlock className="language-bash">
      yarn node quickstart.js
    </CodeBlock>
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

Connecting to and disconnecting from the KILT blockchain is required for any operation that relies on the KILT blockchain, such as **querying and verifying a credential**.

Still within the same `main` function, you need to configure the SDK to connect to a **KILT node**.
For this, the SDK exposes **`Kilt.init()`** to configure the address of the node to connect to.

We will use the official **Spiritnet** address:

<SnippetBlock
  className="language-ts"
>
  {InitSDK}
</SnippetBlock>

Once the node address has been configured, we can establish a connection with the Spiritnet node.
Again, the SDK makes this process very easy to follow, by exposing a `Kilt.connect()` function:

<SnippetBlock
  className="language-ts"
>
  {Connect}
</SnippetBlock>

After establishing a connection, you have access to the chain, but let's not forget to **close** any connections when we are done!
Connections to blockchain nodes should be dropped when no longer needed: to do that simply call the `Kilt.disconnect()` function at the bottom of `main` function.

<SnippetBlock
  className="language-ts"
>
  {Disconnect}
</SnippetBlock>

**Congratulations!
You have connected to a Spiritnet node. Let's now start querying some data from the chain!**

## Query the KILT Blockchain

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

A **KILT DID** can expose service endpoints, which allow external resources to be linked to the DID.
One type of external resource is represented by, you guessed it, **KILT credentials**!
Therefore, let's see how we can retrieve the **service endpoints** of John Doe's DID and see if they link to any public credentials for us to **query** and **verify**.

We will keep adding code below what we just added.
The code snippet retrieves the service endpoints exposed by the DID we found for `john_doe`:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchEndpoints}
</SnippetBlock>

If the snippet printed some endpoints, congratulations!
Let's see if we can find a credential among them.

We can select one of the endpoints and query the URL to see if it returns a credential:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {FetchEndpointData}
</SnippetBlock>

If the script completes with no errors, it means that we were able to retrieve a credential using the URL specified in the service endpoint.

We will now have to make sure the credential is **valid** and has a valid **structure**.
To do that, we need to query the credential's `rootHash` from the blockchain to see if it has been **attested** by someone:

<SnippetBlock
  className="language-ts"
  funcEnd="return"
>
  {BuildCredential}
</SnippetBlock>

Execute the script and see if you get a valid attestation for John Doe's credential!

If so, it is then time to verify the credential.
This will be indicated by the result of the **verification** process as shown in the snippet below:

<SnippetBlock
  className="language-ts"
>
  {VerifyCredential}
</SnippetBlock>

Now, the last step is to excute the complete script and wait to see whether we can successfully retrieve **and** verify one of John Doe's credentials!

Was it successful? Nice Job!

If you want to explore more of KILT's features, check out our [Concepts section](../../concepts/01_what_is_kilt.md).
If you want to dive deeper into the SDK, please advance to the next section: [the KILT Cookbook](./02_cookbook/01_dids/01_light_did_creation.md).
