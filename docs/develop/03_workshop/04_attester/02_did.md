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

The next step is to generate a KILT decentralized identifier (DID) using the account you created for the <span className="label-role attester">Attester</span> in [the previous step](./01_account.md).

A DID may represent any entity, such as a person, an organization, or a machine.

A DID is a string uniquely identifying each KILT user.
You can store information about a DID on the KILT chain, which is useful for different use cases.

One use case is messaging.
You could store a public encryption key and a service on-chain, and a user can query both using a DID.
Other users can now encrypt messages using your public encryption key and send a message to your service.

There are two types of DIDs: **light** and **full**.

Read the [DID documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md) to learn more about the difference between the light and full types.

:::info KILT DID

There are four different key types that a DID supports:

- An _authentication keypair_, used to sign claims and create authenticated credential presentations
- A _key-agreement keypair_, used to encrypt/decrypt messages
- An _assertion-method keypair_, used to write CTypes and attestations on chain
- A _capability-delegation keypair_, used to write delegations on chain

You can replace keys over time, e.g., if a key is compromised.

:::

## Account vs. DID
<!-- TODO: ? -->
You need to register a full DID on the blockchain by an account submitting the DID creation transaction.
An account submits the transactions and pays the fees and the DID that authorized the call.
Because the DID and the account are not connected, DIDs do not hold any coins.

## Create a DID
<!-- TODO: ?? -->
To create a DID, you use the same keyring used to generate accounts.
For the <span className="label-role attester">Attester</span> you need all four types of key.
Since three of the key types are used for signatures, you can use the same key for these using the default KILT keyring to generate them.

Add the following code to the `attester/generateKeypairs` file.

<TsJsBlock fileName="attester/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

Once you have created all the necessary keys for a DID, you can create the on-chain DID.
To create a DID, load the account created in the [last section](./01_account.md) and use it to pay for the DID registration.
Create and submit the extrinsic (aka transaction) that registers the DID.

<TsJsBlock fileName="attester/generateDid">
  {GenerateDid}
</TsJsBlock>

## Run the code

Now run the code with:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./attester/generateDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./attester/generateDid.js
  ```

  </TabItem>
</Tabs>

Once you have run the script, the output should provide you with your `ATTESTER_DID_MNEMONIC` and `ATTESTER_DID_URI`.
The output should look like the following, but not identical since the DIDs are constructed from your account:

```
ATTESTER_DID_MNEMONIC="beyond large galaxy...
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Save it in the `.env` file, which should now look similar to the following:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...
ATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_MNEMONIC="beyond large galaxy...
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Well done - You've generated a full DID! The next step is to create a CType!
