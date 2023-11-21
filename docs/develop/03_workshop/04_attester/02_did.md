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
You could store a public encryption key and a service on chain, and a user can query both using a DID.
Other users can now encrypt messages using your public encryption key and send a message to your service.

## Light and full DIDs

Kilt supports two DID types: **light** and **full**.

There are many differences between the two types, but the most crucial is that you can use a light DID offline, but a full DID needs access to the blockchain to work.
Read the [DID documentation](../../../develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md) to learn more about the difference between the light and full types.

:::info KILT DID

There are four different key types that a DID supports:

- An _authentication key pair_, used to sign claims and present authenticated credentials 
- A _key-agreement key pair_, used to encrypt/decrypt messages
- An _assertion-method key pair_, used to write CTypes and attestations on chain
- A _capability-delegation key pair_, used to write delegations on chain

You can replace keys over time, e.g., if a key becomes compromised.

:::

## What's the difference between a DID and an account?

A DID and an account sound quite similar, but there are some differences:

- You record both to chain
- You can have a DID without an account
- You can have an account without a DID
- Only an account can pay deposits and fees and attest claims
- DIDs don't hold any coins

In summary, you register a DID on the blockchain by an account submitting the DID creation transaction and paying the fees.

## Create a DID

As an <span className="label-role attester">Attester</span> needs to interact with the chain, you must create a full DID.

### Generate key pairs

An <span className="label-role attester">Attester</span> needs all four types of key.
Since three of the key types sign transactions, you can use the same key for them using the default KILT keyring to generate them, which is the same keyring used to generate accounts.

Add the following code to the `attester/generateKeypairs` file.

<TsJsBlock fileName="attester/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

<!-- TODO: Is this enough? -->

Throughout the code are `account.derive` methods that use key derivation syntax. You can read more about this syntax in [the Substrate documentation](https://docs.substrate.io/reference/command-line-tools/subkey/#working-with-derived-keys).

The `generateKeypairs` function code derives base and sub keys from a particular path relevant to the use case for each key.
It uses the sr25519 key type, which is the default key type for KILT.

This method works for three of the four key types needed, so the `generateKeyAgreement` function helps generate the key-agreement key pair using the mnemonic.
The function takes the mnemonic and creates another key pair from it using the `sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic))` combination of functions.
The function then creates a secret key based on the earlier temporary key pair and a derivation path relevant to key agreement.

The function returns the key pair needed by generating one more key pair suitable for encryption and decryption using the secret key.

### Write DID to chain

Once you have created all the necessary keys for a DID, you can create the on-chain DID.
To create a DID, load the account created in the [last section](./01_account.md) and use it to pay for the DID registration.
Create and submit the extrinsic (aka transaction) that registers the DID.

<TsJsBlock fileName="attester/generateDid">
  {GenerateDid}
</TsJsBlock>

The `createFullDid` function takes the key pair generated for the submitter in the previous step and creates a full DID. It returns a mnemonic as a string and DID document.
Inside the function, the `getStoreTx` method creates a DID creation operation based on the four key pairs created earlier.
It returns the extrinsic (aka transaction) that registers the DID.

The `signAndSubmitTx` method takes that extrinsic and submits it to the chain, also passing the submitter's account.

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
ATTESTER_DID_MNEMONIC="beyond large galaxy…
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD…"
```

Save it in the `.env` file, which should now look like the following:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...
ATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_MNEMONIC="beyond large galaxy...
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Well done - You've generated a full DID! The next step is to create a CType!
