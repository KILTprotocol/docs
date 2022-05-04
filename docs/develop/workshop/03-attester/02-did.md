---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import GenerateKeypairs from '!!raw-loader!../../../../code-examples/workshop/attester/generateKeypairs.ts';
import generateDid from '!!raw-loader!../../../../code-examples/workshop/attester/generateDid.ts';

Time to make a DID using the previously created account for the <span class="label-role attester">Attester</span>.

A DID may represent any entity, may it be a person, an organization or a machine.

A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.
You can store information about your DID on the KILT chain.
This is useful for many different use cases.
One example would be messaging.
You would store a public encryption key and a service endpoint on-chain, that can both be queried using your DID.
Other users can now encrypt messages using your public encryption key and send the message to your service endpoint.

There are light and full DIDs.
Take a look at our [DID documentation](/docs/develop/sdk/core-feature/did) if you want to learn more about DIDs and the difference between their light and full versions.

:::info KILT DID

There are currently four different key types that a DID supports:

- An _authentication keypair_, used to sign claims and presented them when requested
- A _key-agreement keypair_, used to encrypt/decrypt messages
- An _assertion-method keypair_, used to write CTypes and attestations on chain
- A _capability-delegation keypair_, used to write delegations on chain

Keys can be replaced over time, e.g., if a key is compromised.

:::

## Account vs DID

A full DID needs to be registered on the blockchain.
For that, an account has to submit the DID creation transaction.
There is always an account that submits the transactions and pays for the fees and the DID that authorized the call.
Because the DID and the account are not connected, DIDs do not hold any coins.

## Create a DID

:::info Keystore

A keystore has multiple purposes:

The keystore ...
- stores private keys that belong to a DID
- creates new keys
- encrypts and decrypts arbitrary data

:::

To create a DID we need a keystore.
For our <span class="label-role attester">Attester</span> we'll need all four types of keys.
Since three of the key types use are used for signatures, we can use the same key for these.
We'll use a demo keystore to generate them.
Create a file `attester/generateKeypairs.ts` and copy the code below.

<CodeBlock className="language-js" title="attester/generateKeypairs.ts">
  {GenerateKeypairs}
</CodeBlock>

Once we have created all the necessary keys for a DID we can create the on-chain DID.
To create a DID we first initialize everything.
After that, we load the account that we created in the [last section](./01-account.md).
The account will be used to pay for the DID registration.
Finally, we create and submit the extrinsic (aka transaction) that will register our DID.

<CodeBlock className="language-js" title="attester/generateDid.ts">
  {generateDid}
</CodeBlock>

## Execute

You can now execute the script with:

```bash
yarn ts-node ./attester/generateDid.ts
```

Once you executed the script, the output should provide you with your `ATTESTER_DID_URI`.
Your output should look like this (but it won't be identical since the DIDs are constructed from your account):

```
ATTESTER_DID_URI=did:kilt:4rgeGJNgHNiZ9TngzQTwmSAYXxMJCUFVbMCcwqwGobwQvc9X
```

Be sure to save it in your `.env` file, it should now look similar to this:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="warrior icon use cry...
ATTESTER_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_URI=did:kilt:4ohMvUHsyeDhMVZF...
```

Well done - You've successfully generated a full DID! Let's create a CType!
