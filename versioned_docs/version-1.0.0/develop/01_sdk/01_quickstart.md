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

import PrintHelloWorld from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/01_print_hello_world.ts';
import ConnectSpirit from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/02_connect_spirit.ts';
import ConnectPere from '!!raw-loader!@site/code_examples/sdk_examples/src/v1//core_features/getting_started/02_connect_pere.ts';
import FetchDid from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/03_fetch_did.ts';
import FetchEndpoints from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/04_fetch_endpoints.ts';
import FetchEndpointData from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/05_fetch_endpoint_data.ts';
import VerifyCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/06_verify_credential.ts';
import Disconnect from '!!raw-loader!@site/code_examples/sdk_examples/src/v1/core_features/getting_started/07_disconnect.ts';

Get started with KILT by following this guide, which teaches you to:

1. Import the **KILT SDK** into your project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to retrieve its **DID**
4. Verify a **credential** using a **DID service**

:::info Prerequisites

This quickstart guide provides hands-on experience to enhance your understanding of KILT.
Basic knowledge of JavaScript and command-line tools is recommended.

:::

## Core Functions Explained

Throughout this guide, we use several key functions from the KILT SDK:

### Kilt.connect()
This function establishes a connection to a KILT blockchain node:
- Creates a WebSocket connection to the specified node
- Initializes the blockchain API interface
- Enables communication with the KILT network

### Did.linkedInfoFromChain()
This function processes blockchain data to extract DID information:
- Takes encoded blockchain data as input
- Decodes the DID document information
- Returns the structured DID document with its identifier

### Kilt.DidResolver.resolve()
The resolver function retrieves comprehensive DID information:
- Takes a DID identifier as input
- Queries the blockchain for the complete DID Document
- Returns service endpoints and other DID-related data
- Useful for finding where to query for credentials

### Kilt.Verifier.verifyCredential()
This crucial function performs comprehensive credential verification:
- Validates the credential's cryptographic signatures
- Checks if the credential has been revoked
- Verifies the credential's format and structure
- Returns a verification result object with detailed status

The verification result includes:
- `verified`: Boolean indicating overall validity
- Details about the verification process
- Any errors or issues encountered

## Setup

Create a new project and directory and move into the directory by running `mkdir kilt-rocks && cd kilt-rocks`.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

Inside the `kilt-rocks` project directory, install the **KILT SDK**, **Typescript**, **ts-node**, and **Axios** dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js @kiltprotocol/did @kiltprotocol/credentials ts-node typescript axios
```

With the required dependencies installed, create a TypeScript file with `touch quickstart.ts`.

  </TabItem>
  <TabItem value='js' label='Javascript'>

From inside the `kilt-rocks` project directory, install the **KILT SDK**, **Node**, and **Axios** dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js @kiltprotocol/did @kiltprotocol/credentials node axios
```

With the required dependencies installed, create a JavaScript file with `touch quickstart.js`.

To enable ES modules in your project, add `"type": "module"` to the `package.json` file.

  </TabItem>
</Tabs>

Declare an `async main` function that executes the rest of the code in this quickstart:

```js
async function main() {
}

main()
```

**With the setup completed, let's get started! 🔥**

### Import the KILT SDK

Begin by importing the required packages. Each package serves a specific purpose:
- `@kiltprotocol/sdk-js`: Core SDK functionality for blockchain interaction
- `@kiltprotocol/did`: Handles DID (Decentralized Identifier) operations
- `@kiltprotocol/credentials`: Manages credential types and verification
- `axios`: Used for HTTP requests to credential endpoints

```js
import * as Kilt from "@kiltprotocol/sdk-js";
import axios from "axios";
import * as Did from "@kiltprotocol/did";
import { types } from "@kiltprotocol/credentials";
```

### Connect to the KILT Blockchain

To perform operations that rely on the **KILT blockchain**, first establish a connection that allows you to query the blockchain state and interact with smart contracts.

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

## Query a KILT Identity

The following code demonstrates how to retrieve a DID associated with a web3name. Web3names are human-readable identifiers that map to DIDs on the KILT blockchain:

<SnippetBlock
className="language-ts"
dropTail="1"
>
{FetchDid}
</SnippetBlock>

Try running the code and check the result.

Did you get the DID? You now have `kiltnerd123`'s DID. The next step is to see if `kiltnerd123` has any publicly linked KILT credentials to retrieve and verify.

## Retrieve and Verify a Credential

A **KILT DID** can expose services that allow external resources to be linked to the DID. **KILT credentials** represent one type of external resource.

First, retrieve the services exposed by the DID:

<SnippetBlock
className="language-ts"
dropTail="1"
>
{FetchEndpoints}
</SnippetBlock>

The code should print endpoints as JSON.

Next, query the endpoint to retrieve a credential:

<TsJsSnippet dropTail="1">
  {FetchEndpointData}
</TsJsSnippet>

Finally, verify the credential using KILT's verification system:

<SnippetBlock
className="language-ts"
>
{VerifyCredential}
</SnippetBlock>

To ensure proper cleanup, make sure to disconnect at the end of your main function:

<SnippetBlock
className="language-ts"
>
{Disconnect}
</SnippetBlock>

## Running the Code

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

:::info Next step

- If you want to explore more of KILT's features, read our [Concepts section](../../concepts/01_what_is_kilt.md).
- If you want to dive deeper into the SDK, read the next section, [the KILT Cookbook](./02_cookbook/01_dids/01_light_did_creation.md).

:::
