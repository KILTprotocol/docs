---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairs from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/generateKeypairs.ts';
import GenerateDid from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/generateDid.ts';

Now it's time to generate a DID using the previously created account for the <span className="label-role attester">Attester</span>.

A DID may represent any entity, which could be a person, an organization or a machine.

A KILT decentralized identifier (DID) is a string uniquely identifying each KILT user.
You can store information about your DID on the KILT chain.
This is useful for many different use cases.
One example would be messaging.
You would store a public encryption key and a service endpoint on-chain, which can both be queried using your DID.
Other users can now encrypt messages using your public encryption key and send the message to your service endpoint.

There are two types of DIDs: light and full.
Take a look at our [DID documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md) to learn more about DIDs and the difference between the light and full versions.

:::info KILT DID

There are currently four different key types that a DID supports:

- An _authentication keypair_, used to sign claims and create authenticated credential presentations
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
Since three of the key types are used for signatures, we can use the same key for these.
We'll use the default KILT keyring to generate them.

<TsJsBlock fileName="attester/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

Once we have created all the necessary keys for a DID we can create the on-chain DID.
To create a DID we first initialize everything.
After that, we load the account that we created in the [last section](./01_account.md).
The account will be used to pay for the DID registration.
Finally, we create and submit the extrinsic (aka transaction) that will register our DID.

<TsJsBlock fileName="attester/generateDid">
  {GenerateDid}
</TsJsBlock>

## Execute

You can now execute the script with:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./attester/generateDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./attester/generateAccount.js
  ```

  </TabItem>
</Tabs>

Once you have executed the script, the output should provide you with your `ATTESTER_DID_MNEMONIC`.
Your output should look like this (but it won't be identical since the DIDs are constructed from your account):

```
ATTESTER_DID_URI=did:kilt:4rgeGJNgHNiZ9TngzQTwmSAYXxMJCUFVbMCcwqwGobwQvc9X
```

Be sure to save it in your `.env` file.
It should now look similar to this:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...
ATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_MNEMONIC="beyond large galaxy...
```

Well done - You've successfully generated a full DID! Let's create a CType!
