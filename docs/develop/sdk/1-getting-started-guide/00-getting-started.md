---
id: getting-started
title: Kilt Getting Started Guide
---

The following guide will give you a started point to begin with KILT.
What will you be able to do after this guide:

1. Import the **KILT SDK** into a project
2. Connect to the **KILT blockchain**
3. Query a **web3name** to get a **DID**
4. Verify a **credential**, fetched from **DID service endpoints**

After completing the getting started, you should have learn a little about KILT and a guide to learn by doing.
The guide requires some experience with javascript and command-line tools.
We will have recommended guides to other tutorials for further learnings.

## Setup

We will focus on creating a new project from stratch, which will require a little setup.
First, we need to create a new project in a new directory. For this, we run `mkdir kilt-rocks && cd kilt-rocks`.

From inside the `kilt-rocks` project directory, install the **SDK**, **node** and **node-fetch** with either of the following package managers:

```bash
npm install @kiltprotocol/sdk-js node node-fetch
```

Or with `yarn`:

```bash
yarn add @kiltprotocol/sdk-js node node-fetch
```

After you have imported the SDK, you are now able to access the functionality of KILT.
With all the required dependencies set, just create a new (empty) script file with `touch getting-started.js`.
Inside the `package.json` add in the object `"type": "module"`.

Lets first create an asynchronous function called `main` in order to excute the script.
Underneath the first line add the following:

``` js
async function main() {
    console.log('hello world')
}

main()
```

If the setup is correct you can excute the script by calling the name of the file using node.

```bash
npm node getting-started.js
```

Or with `yarn`:

``` bash
yarn node getting-started.js
```

You can always excute this file with the command.
It will refer to this command when requested to excute.

**Let's get started 🔥.**

### Importing KILT's SDK into a project

Lets begin by importing the **SDK** and **node-fetch** into the `getting-started.js`.

``` js
import * as Kilt from '@kiltprotocol/sdk-js'
import fetch from 'node-fetch'
```

Now you are able to access the SDK and all its functionality.
We will move onto connecting to the **KILT blockchain**.

### Connecting to KILT blockchain

Connecting and disconnecting to the KILT is an important step requiring a setup of the configurations.
The connection allows to **query**, **verify** and **interact** with the chain.

**Lets get connected.**

Inside the `getting-started.js` inside the `main` function, you will need to begin by connecting to a **KILT node**.
Using the imported SDK, it exposes **`Kilt.init()`** to initalise the connection to the KILT blockchain via an address.

We will initalise the **KILT blockchain** named the **Spiritnet**.  

``` js
async function main() {
...
    await Kilt.init({address: 'wss://spiritnet.kilt.io/'})
...
}
```

Now you have initalised the connection, lets connect to the chain.
Inside the `main` function, lets get the conncetion using an asynchronous call that creates a connection, or checks if an existing connection is available and connects directly.

``` js
...
    await Kilt.init({address: 'wss://spiritnet.kilt.io/'})
    
    await Kilt.ChainHelpers.BlockchainApiConnection.getConnectionOrConnect()
...
```

Now you have connected you have access to the chain, but lets not forget to **close** any connections.
Its best practice not to leave an connections open, add `Kilt.disconnect()` at the bottom of `main` function.

``` js
...
    await Kilt.disconnect()
    return
...
```

The `Kilt.disconncet()` will close any established connections.

**Congratulations!
You have done connected, lets start querying and fetching data from the chain!**

## Lets query the chain

Now you have a connection to the chain to query a variety of information using the exposed KILT SDK functionality.
We will be looking at the **web3names** (`john_doe`) and using them to fetch the corresponding **DID identifier**.
Underneath the blockchain connection, add the following lines.

``` js
...
    await Kilt.ChainHelpers.BlockchainApiConnection.getConnectionOrConnect()

    const johnDoeDidId = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
    
    console.log(`Hello world, my name is john_doe and this is my DID ${johnDoeDidId}`)
...
```

Try excuting it and see what comes out.

Did you get the DID? Nice work! You have `john_doe`'s DID.
Now let's see if they have any credentials availale to verify!

## Verifying a credential

**DIDs** are great tools for identification.
A DID can have service endpoints on the DID linking to public data.
Therefore, you can take your credentials and display them for others to see!
Lets see how we can check a **DIDs endpoints** and see if `john_doe` has any public credentials for us to **query** and **verify**.

Lets take the DID that was fetch and see if we can retreives the contents.
We will add a new line under the `console.log` and lets resolve the DID with the **DID identifier** fetched with the **web3name**.

``` js
...
    console.log(`Hello world, my name is john_doe and this is my DID ${johnDoeDidId}`)
    
    if (!johnDoeDidId) return 

    const johnDoeDid = await Kilt.Did.DidResolver.resolveDoc(johnDoeDidId)
    const endPoints = johnDoeDid?.details?.getEndpoints()

    if (!endPoints) return console.log('no endpoints')
...
```

Try excuting it and see what comes out.

Now we have the **endpoints**! Lets see if we can find a credential among them.
We can select one of the endpoints and query the url to see if it returns a credential!

A new line after `endPoints` add the following:

``` js
...
    if (!endPoints) return console.log('no endpoints')

    const request = await fetch(endPoints[0].urls[0]).then((request) =>
        request.json()
    )
...
```

Try excuting it and see what comes out.
Did you get a partial credential object?

**Wow! You have part of John Doe's credential!**

We will have to make sure the credential is **valid** and **structured** correctly.
Lets query with `rootHash` to see if an **attestation** has been writen on-chain.

``` js
...
    const request = await fetch(endPoints[0].urls[0]).then((request) =>
    request.json()
  )

  const attestation = await Kilt.Attestation.query(request.rootHash)
...
```

The attestation assoicated with the `rootHash` is on-chain.
Lets see if we can validate the data to reconstruct the Credential.

``` js
...

const attestation = await Kilt.Attestation.query(request.rootHash)

  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  console.log('John Doe:', credential)
...
```

Excute the script and see if you get John Doe's Credential!

Time to verify the credential and make sure it is valid.
If the **verification** returns true it is **valid**!

``` js
...
  console.log('John Doe:', credential)
  const verifiedCrdential = await credential.verify()

  await Kilt.disconnect()
  return console.log(`Is John Doe's credential valid: ${verifiedCrdential}`)
...
```

Last step is to excute the code and see what is returned at the end of it!

Was it successful?
Nice Job! Want to explore more of KILT's features, check out the DID guide!
