---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import GenerateKeypairs from '!!raw-loader!../../../../code-examples/workshop/attester/generateKeypairs.js';
import CreateFullDid from '!!raw-loader!../../../../code-examples/workshop/attester/createFullDid.js';
import GetFullDid from '!!raw-loader!../../../../code-examples/workshop/attester/getFullDid.js';
import Index from '!!raw-loader!../../../../code-examples/workshop/attester/index-2.js';

Time to make a DID using the previously created account for the <span class="label-role attester">attester</span>.

A DID may represents any entity, may it be a person, an organization or a machine.

A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.
You can store information about your DID on the KILT chain.
This is useful for many different use cases.
One example would be messaging.
You would store a public encryption key and a service endpoint on chain, that can both be queried using your DID.
Other users can now encrypt messages using your public encryption key and send the message to your service endpoint.

There are light and full DIDs.
I this workshop we will only talk about full DIDs.
Take a look at our [DID documentation](/docs/sdk/core-feature/did) if you want to learn more about DIDs and the difference between their light and full versions.

:::info KILT DID

There are currently four different key types that a DID supports:

- An _authentication keypair_ (for signing) that is used to sign claims and attestations
- A _key-agreement keypair_ (fpr encryption), used to encrypt messages
- An _assertion-method keypair_ (for signing), used to write ctypes and attestations on chain
- A _capability-delegation keypair_ (for signing), used to write delegations on the blockchain

Keypairs can be replaced over time, even if the key has been compromised.

:::

## Account vs DID

A full DID needs to be registered on the blockchain.
For that an account has to submit the create-did-call.
There is always an account that submits the transactions and pays for the fees and the DID that authorized the call.
Because the DID and the account are not connected, DIDs can't hold any coins.

## Create a DID

:::info Keystore

A keystore has multiple purposes:

The keystore ...
- stores private keys that belong to a DID
- creates new keys
- encrypts and decrypts arbitrary data

:::

In order to create a DID we need a keystore.
For our <span class="label-role attester">attester</span> we'll need all four types of keys.
Since three of the key types use are used for signatures, we can use the same key for these.
We'll use a demo keystore to generate them.
Create a file `attester/generateKeypairs.js` and copy the code below.

<CodeBlock className="language-js" title="attester/generateKeypairs.js">
  {GenerateKeypairs}
</CodeBlock>

Here we use the `keystore`, `keypairs` and `account` to create the required `keys`.
We then get the `didUri` and `extrinsic` to write the `DID` on the chain.
You will also be prompted to save the `didUri` to `.env`.
Once you done this, we can then resolve the `DID` from chain and don't need a new one.

<CodeBlock className="language-js">
  {CreateFullDid}
</CodeBlock>

## Get DID

Once our `keypairs` are generated we can create our on chain DID.
This only needs to happen once.
After created, DIDs have a `didUri` that can be used to resolve DIDs.

<CodeBlock className="language-js" title="attester/getFullDid.js">
  {GetFullDid}
</CodeBlock>


## Execute

Ok let's update our `attester/index.js`.
We bring in the `ATTESTER_DID_URI` form `.env` and our `getFullDid` function.
Finally we'll return the `keystore`, `account` and `fullDid` for use elsewhere later.

<CodeBlock className="language-js">
  {Index}
</CodeBlock>

You can now execute the script with:

```bash
node ./attester/index.js
```

Once you executed the script, the output should provide you with your `ATTESTER_DID_URI`.
Your output should look like this (but it won't be identical since the DIDs are constructed from your account):

<!-- TODO: Add example output -->

Example of a light DID Identifier:
`did:kilt:light:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS:oWFlomlwdWJsaWNLZXlYIBsVppuQ2fi/beBdYf50+n/36FnCjMw+KLSu3AmW9DEGZHR5cGVmeDI1NTE5`

Example of a full DID Identifier:
`did:kilt:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS`

Be sure to save it in your `.env` file, it should now look similar to this:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="gold upset segment ca...
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
ATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...
```

Well done - You've successfully generated a full DID! Let's create a CType!
