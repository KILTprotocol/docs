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
What will you be able to do after this guide:

1. Import the **KILT SDK** into a project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to get a **DID**
4. Verify a **credential**, fetched from **DID service endpoints**

After completing the quickstart guide, you should have learn a little about KILT and a guide to learn by doing.
The guide requires some experience with javascript and command-line tools.
We will have recommended guides to other tutorials for further learnings.

## Setup

We will focus on creating a new project from stratch, which will require a little setup.
First, we need to create a new project in a new directory. For this, we run `mkdir kilt-rocks && cd kilt-rocks`.

From inside the `kilt-rocks` project directory, install the **SDK**, **node** and **axios** with either of the following package managers:

```bash npm2yarn
npm install @kiltprotocol/sdk-js node axios
```

After you have imported the SDK, you are now able to access the functionality of KILT.
With all the required dependencies set, just create a new (empty) script file with `touch quickstart.js`.
Inside the `package.json` add in the object `"type": "module"`.

Lets first create an asynchronous function called `main` in order to excute the script.
Underneath the first line add the following:

<CodeBlock className="language-js">
  {PrintHelloWorld}
</CodeBlock>

If the setup is correct you can excute the script by calling the name of the file using node.

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

You can always excute this file with the command.
It will refer to this command when requested to excute.

**Let's get started 🔥.**

### Importing KILT's SDK into a project

Lets begin by importing the **SDK** and **axios** into the `quickstart.js`.

```js
import * as Kilt from '@kiltprotocol/sdk-js'
import axios from 'axios'
```

Now you are able to access the SDK and all its functionality.
We will move onto connecting to the **KILT blockchain**.

### Connecting to KILT blockchain

Connecting and disconnecting to the KILT is an important step requiring a setup of the configurations.
The connection allows to **query**, **verify** and **interact** with the chain.

**Let's get connected.**

Inside the `quickstart.js` inside the `main` function, you will need to begin by connecting to a **KILT node**.
Using the imported SDK, it exposes **`Kilt.init()`** to initalise the connection to the KILT blockchain via an address.

We will initalise the **KILT blockchain** named the **Spiritnet**.  

<SnippetBlock
  className="language-js"
>
  {InitSDK}
</SnippetBlock>

Now you have initialised the connection, lets connect to the chain.
Inside the `main` function, lets get the connection using an asynchronous call that creates a connection, or checks if an existing connection is available and connects directly.

<SnippetBlock
  className="language-js"
>
  {Connect}
</SnippetBlock>

Now you have connected you have access to the chain, but lets not forget to **close** any connections.
Its best practice not to leave an connections open, add `Kilt.disconnect()` at the bottom of `main` function.

<SnippetBlock
  className="language-js"
>
  {Disconnect}
</SnippetBlock>

The `Kilt.disconnect()` will close any established connections.

**Congratulations!
You have done connected, lets start querying and fetching data from the chain!**

## Let's query the chain

Now you have a connection to the chain to query a variety of information using the exposed KILT SDK functionality.
We will be looking at the **web3names** (`john_doe`) and using them to fetch the corresponding **DID identifier**.
Underneath the blockchain connection, add the following lines.

<SnippetBlock
  className="language-js"
  funcEnd="return"
>
  {FetchDid}
</SnippetBlock>

Try executing it and see what comes out.

Did you get the DID? Nice work! You have `john_doe`'s DID.
Now let's see if they have any credentials availale to verify!

## Verifying a credential

**DIDs** are great tools for identification.
A DID can have service endpoints on the DID linking to public data.
Therefore, you can take your credentials and display them for others to see!
Lets see how we can check a **DIDs endpoints** and see if `john_doe` has any public credentials for us to **query** and **verify**.

Let's take the DID that was fetch and see if we can retreives the contents.
We will add a new line under the `console.log` let's resolve and see the DID with the **DID identifier** fetched with the **web3name**.

<SnippetBlock
  className="language-js"
  funcEnd="return"
>
  {FetchEndpoints}
</SnippetBlock>

Try executing it and see what comes out.

Now we have the **endpoints**! Lets see if we can find a credential among them.
We can select one of the endpoints and query the url to see if it returns a credential!

A new line after `endpoints` add the following:

<SnippetBlock
  className="language-js"
  funcEnd="return"
>
  {FetchEndpointData}
</SnippetBlock>

Try executing it and see what comes out.
Did you get a partial credential object?

We will have to make sure the credential is **valid** and **structured** correctly.
Lets query with `rootHash` to see if an **attestation** has been written on-chain.
The attestation associated with the `rootHash` is on-chain.
Lets see if we can validate the data to reconstruct the Credential.

<SnippetBlock
  className="language-js"
  funcEnd="return"
>
  {BuildCredential}
</SnippetBlock>

Execute the script and see if you get John Doe's Credential!

Time to verify the credential and make sure it is valid.
If the **verification** returns true it is **valid**!

<SnippetBlock
  className="language-js"
>
  {VerifyCredential}
</SnippetBlock>

Last step is to excute the code and see what is returned at the end of it!

Was it successful?
Nice Job! Want to explore more of KILT's features, check out the DID and Verification guide!
