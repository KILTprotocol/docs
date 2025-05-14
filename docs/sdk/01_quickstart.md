---
id: quickstart
title: Quickstart
---

Get started with KILT by following this guide, which teaches you to:

1. Import the **KILT SDK** into your project  
2. Connect to the **KILT blockchain**  
3. Query a **web3name** to retrieve its **DID**  
4. Verify a **credential** using a **DID service**

> **Prerequisites:**  
> This quickstart guide provides hands-on experience to enhance your understanding of KILT.  
> Basic knowledge of JavaScript and command-line tools is recommended.

## Core Functions Explained

### `Kilt.connect()`

This function establishes a connection to a KILT blockchain node:

- Creates a WebSocket connection to the specified node  
- Initializes the blockchain API interface  
- Enables communication with the KILT network  

### `Did.linkedInfoFromChain()`

This function processes blockchain data to extract DID information:

- Takes encoded blockchain data as input  
- Decodes the DID document information  
- Returns the structured DID document with its identifier  

### `Kilt.DidResolver.resolve()`

The resolver function retrieves comprehensive DID information:

- Takes a DID identifier as input  
- Queries the blockchain for the complete DID Document  
- Returns service endpoints and other DID-related data  
- Useful for finding where to query for credentials  

### `Kilt.Verifier.verifyCredential()`

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

Create a new project and directory:

```bash
mkdir kilt-rocks && cd kilt-rocks
```

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

Install the dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js @kiltprotocol/did @kiltprotocol/credentials ts-node typescript axios
```

Create a TypeScript file:

```bash npm2yarn
touch quickstart.ts
```

  </TabItem>
  <TabItem value='js' label='Javascript'>

Install the dependencies:

```bash npm2yarn
npm init -y
npm install @kiltprotocol/sdk-js @kiltprotocol/did @kiltprotocol/credentials node axios
```

Create a TypeScript file:

```bash npm2yarn
touch quickstart.ts
```

  </TabItem>
</Tabs>

Enable ES modules by adding the following to your package.json:

```json
"type": "module"
```

Declare an async main function:

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

```ts
  import type { ApiPromise } from '@polkadot/api'

  import * as Kilt from '@kiltprotocol/sdk-js'

  export async function main(): Promise<ApiPromise> {
    let api = await Kilt.connect('wss://peregrine.kilt.io/')

    return api
  }
  ```

  </TabItem>
  <TabItem value='spirit' label='Spiritnet (Production)'>
    <p>Spiritnet is the production blockchain.
    When you are ready to publish your DApp, connect to the Spiritnet network for production purposes.</p>

```ts
import type { ApiPromise } from '@polkadot/api'

  import * as Kilt from '@kiltprotocol/sdk-js'

  export async function main(): Promise<ApiPromise> {
    let api = await Kilt.connect('wss://spiritnet.kilt.io/')

    return api
  }     
}
```

  </TabItem>
</Tabs>

## Query a KILT Identity

The following code demonstrates how to retrieve a DID associated with a web3name. Web3names are human-readable identifiers that map to DIDs on the KILT blockchain:

``` ts
import * as Kilt from '@kiltprotocol/sdk-js'
import * as Did from '@kiltprotocol/did'

export async function main(): Promise<string | null> {
  const apiConfig = Kilt.ConfigService.get('api')
  const encodedKiltnerd123Details = await apiConfig.call.did.queryByWeb3Name('kiltnerd123')

  const {
    document: { id }
  } = Did.linkedInfoFromChain(encodedKiltnerd123Details)

  console.log(`My name is kiltnerd123 and this is my DID: "${id}"`)
  return id
}
```

Try running the code and check the result.

Did you get the DID? You now have `kiltnerd123`'s DID. The next step is to see if `kiltnerd123` has any publicly linked KILT credentials to retrieve and verify.

## Retrieve and Verify a Credential

A **KILT DID** can expose services that allow external resources to be linked to the DID. **KILT credentials** represent one type of external resource.

First, retrieve the services exposed by the DID:

```ts
import * as Kilt from '@kiltprotocol/sdk-js'
import {Did} from "@kiltprotocol/types"

export async function main(id: Did): Promise<Object[]> {
  const kiltnerd123DidDocument = await Kilt.DidResolver.resolve(id)
  console.log(`kiltnerd123's DID Document:`)
  console.log(JSON.stringify(kiltnerd123DidDocument, null, 2))

  const endpoints = kiltnerd123DidDocument?.didDocument?.service
  if (!endpoints) {
    console.log('No endpoints for the DID.')
    return []
  }
  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, null, 2))

  return endpoints
}
```

The code should print endpoints as JSON.

Next, query the endpoint to retrieve a credential:

```ts
import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'
import { types } from '@kiltprotocol/credentials'

export async function main(
  endpoints: types.DidUrl[]
): Promise<types.VerifiableCredential> {
  const { data: credential } = await axios.get<types.VerifiableCredential>(
    endpoints[0].serviceEndpoint[0]
  )
  console.log(`Credentials: ${JSON.stringify(credential, null, 2)}`)
  return credential
}
```

Finally, verify the credential using KILT's verification system:

```ts
import * as Kilt from '@kiltprotocol/sdk-js'
import { VerifiableCredential } from '@kiltprotocol/credentials/lib/cjs/V1/types'

export async function main(credential: VerifiableCredential): Promise<void> {
  try {
    const result = await Kilt.Verifier.verifyCredential({ credential })
    console.log(JSON.stringify(result, null, 2))
    if (result.verified == false) {
      throw new Error("kiltnerd123's credential is not valid.")
    } else {
      console.log(`kiltnerd123's credential is valid`)
    }
  } catch {
    console.log("kiltnerd123's credential is not valid.")
  }
}
```

To ensure proper cleanup, make sure to disconnect at the end of your main function:

```ts
import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<void> {
  await Kilt.disconnect()
}
```

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

:::info Next steps

<!-- - If you want to explore more of KILT's features, read our [Concepts section](../../concepts/01_what_is_kilt.md).
- If you want to dive deeper into the SDK, read the next section, [the KILT Cookbook](./02_cookbook/01_dids/01_light_did_creation.md). -->

:::
