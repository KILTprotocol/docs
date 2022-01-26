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

In KILT, there is a DID may represents an entity - for example a person, an organization or even a machine.

A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.
The DID can contain multiple different keys, it can be thought of a controller account for the DID subject.

:::info KILT DID

- An authentication keypair that is used to sign claims and attestations
- An encryption keypair, used to encrypt messages between participants of the system
- An attestation keypair, used to write ctypes and attestations on chain
- A delegation keypair, used to write delegations on the blockchain
- Keypairs can be replaced over time, even if the key has been compromised

:::

There are different types of DIDs that can perform different actions, either a light or full DID.

:::info Light DID

A light DIDs are less flexible and are suitable for lower-security use cases.

- Sign claims and attestations with the authentication keys
- Encrypting messages with the encryption keys

:::

A full DID requires interaction with the KILT blockchain. The DID creation operation requires funds from the assoicated KILT address with enough funds to pay the transaction fees and the required deposit.

:::info Full DID

Full DID is robust and allows for more use cases.

- Store multiple different keys and key types
- Has all features of a light DID
- Write delegations on the blockchain with the key type
- Creation of ctypes and attestations to be stored on the chain

:::

Before the creation of a DID there needs to be a keystore.

:::info Keystore

A keystore has multiple purposes:

- The keystore can hold multiple DID keypairs and key types
- The keystore stores the keys encrypted
- The keystore can be used to encrypt and decrypt data

:::

## Key Pairs

For our `Attester` we'll need signing and encryption `keypairs`. We'll use an inbound keystore to generate them.
Create a file `attester/generateKeypairs.js` and copy the code below.

<CodeBlock className="language-js" title="attester/generateKeypairs.js">
  {GenerateKeypairs}
</CodeBlock>

## Create DID

Here we use the `keystore`, `keypairs` and `account` to create the required `keys`.
We then get the `didUri`, `extrinsic` and write the `DID` to the chain.
You will also be promtped to save the `didUri` to `.env`. Once you do this once,
we can then resolve the `DID` instead of creating one.

<CodeBlock className="language-js">
  {CreateFullDid}
</CodeBlock>

## Get DID

Once our `keypairs` are generated we can create our on chain DID. This only needs
to happen once. After created, DIDs have a `didUri` that can be used to resolve DIDs.

<CodeBlock className="language-js" title="attester/getFullDid.js">
  {GetFullDid}
</CodeBlock>


## Index

Ok let's update our `attester/index.js`. We bring in the `ATTESTER_DID_URI` form `.env` and our `getFullDid` function.
Finally we'll return the `keystore`, `account` and `fullDid` for use elsewhere later.

<CodeBlock className="language-js">
  {Index}
</CodeBlock>

## Run

```bash
node ./attester/index.js
```

Your output will provide you with `ATTESTER_DID_URI`. Your output should look like this (but it won't be identical since the DIDs are constructed from your account):

Example of a light DID Identifier:
`did:kilt:light:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS:oWFlomlwdWJsaWNLZXlYIBsVppuQ2fi/beBdYf50+n/36FnCjMw+KLSu3AmW9DEGZHR5cGVmeDI1NTE5`

Example of a full DID Identifier:
`did:kilt:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS`

Be sure to save it in your `.env` file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="gold upset segment ca...
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
ATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...
```

Well done - You've successfully generated a full DID! Let's create a CType!
