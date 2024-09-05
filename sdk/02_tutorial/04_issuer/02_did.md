---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import SnippetBlock from '@site/src/components/SnippetBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairs from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/issuer/generateKeypairs.ts';
import GenerateDid from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/issuer/generateDid.ts';

The next step is to generate a KILT decentralized identifier (DID) using the account you created for the <span className="label-role issuer">Issuer</span> in [the previous step](./01_account.md).

A DID may represent any entity, such as a person, an organization, or a machine.

A DID is a string uniquely identifying each KILT user.
You can store information about a DID on the KILT chain, which is useful for different use cases.

One use case is messaging.
You could store a public encryption key and a service on chain, and a user can query both using a DID.
Other users can now encrypt messages using your public encryption key and send a message to your service.

## Light and full DIDs

Kilt supports two DID types: **light** and **full**.

There are differences between the two types, but the most crucial is that you can use a light DID offline, but a full DID needs access to the blockchain to work.
Read the [DID documentation](/develop/sdk/cookbook/dids/light-did-creation) to learn more about the difference between the light and full types.

:::info KILT DID

A DID supports four different key types:

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

As an <span className="label-role issuer">Issuer</span> needs to interact with the chain, you must create a full DID.

### Write DID to chain

The KILT SDK provides multiple methods to create DIDs, this workshop highlights the `createFromAccount` method, that creates a DID from any pre-existing substrate-compatible account.

<!-- TODO: Add other methods -->
<!-- TODO: Add how -->

:::info Bring your own account

This workshop assumes you followed the [create account step](./01_account.md), but if you have a pre-existing account, you can use that instead.

:::

Create and submit the extrinsic (aka transaction) that registers the DID.

<TsJsBlock fileName="issuer/generateDid">
  {GenerateDid}
</TsJsBlock>

The `publicKeyToChain` helper method returns a public key of the correct type.

The `txs` array holds the two transactions containing the extrinsics needed to submit to the chain for the Issuer's DID creation.

The `createFromAccount` method takes the authenticated key of the account to attach the DID to, and the `setAttestationKey` method takes the same parameter to set the attestation key the DID needs and uses.

An Issuer account needs to have an attestation key to write CTypes and attestations on chain. Use the `setAttestationKey` method to set this. For this example transaction, the Issuer account uses the `dispatchAs` proxy method to assign the attestation key to the same account. However, you can also use this method to assign the attestation key to another account.

The `signAndSubmitTx` method then takes those transactions and submits them as a batch to the chain.

## Run the code

Now run the code with:

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./issuer/generateDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./issuer/generateDid.js
  ```

  </TabItem>
</Tabs>

Once you have run the script, the output should provide you with the `ATTESTER_DID_URI`.

The output should look like the following, but not identical since the code creates the DIDs from your account:

```
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD…"
```

Save the values in the `.env` file, which should now look like the following:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...
ATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ATTESTER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Well done - You've generated a full DID! The next step is to create a CType!

## Generate Keys

Add the following code to the `generateKeypairs` file.

<TsJsBlock fileName="issuer/generateKeypairs">
  {GenerateKeypairs}
</TsJsBlock>

