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

A DID is a string uniquely identifying each KILT user.
A DID may represent any entity, such as a person, an organization, or a machine.

You can store information about a DID on the KILT chain, which is useful for different use cases.

One use case is messaging.
You could store a public encryption key and a service on chain, and a user can query both using a DID.
Other users can now encrypt messages using your public encryption key and send a message to your service.

:::info KILT DID

A DID supports four different key types:

- An _authentication key pair_, used to sign claims and present authenticated credentials 
- A _key-agreement key pair_, used to encrypt/decrypt messages
- An _assertion-method key pair_, used to write CTypes and attestations on chain
- A _capability-delegation key pair_, used to write delegations on chain

You can replace keys over time, for example if a key becomes compromised.

:::

## The difference between a DID and an account

A DID and an account sound similar, but there are differences:

- You record both to chain
- You can have a DID without an account
- You can have an account without a DID
- Only an account can pay deposits and fees and attest claims
- DIDs don't hold any coins

In summary, you register a DID on the blockchain by an account submitting the DID creation transaction and paying the fees.

## Create a DID

As an <span className="label-role issuer">Issuer</span> needs to interact with the chain, you must create a DID.

### Write DID to chain

The KILT SDK provides the `createDid` method from the `DidHelpers` class to create a DID on the chain. It takes the following parameters:

- `api`: The connection to the KILT blockchain.
- `signers`: An array of keys used for verification methods in the DID Document. For creating a DID, you only need the key for the authentication verification method.
- `submitter`: The account used to submit the transaction to the blockchain.

  :::caution

  The submitter account must have enough funds to cover the required storage deposit.

  :::

- `fromPublicKey`: The public key that features as the DID's initial authentication method and determines the DID identifier.

The method returns a `TransactionHandler` type, which includes two methods:

- `submit`: Submits a transaction for inclusion in a block on the blockchain.

  :::info

  The `submit()` method by default, waits for the block to be finalized. [You can override this behavior](https://kiltprotocol.github.io/sdk-js/interfaces/types_src.TransactionHandlers.html) by passing `false` as the second parameter.

  :::

- `getSubmittable`: Produces a transaction that you can submit to a blockchain node for inclusion, or to be signed and submitted by an external service.

In this case, the example uses the `submit` method to submit the transaction to the chain.

:::info Bring your own account

This workshop assumes you followed the [create account step](./01_account.md), but if you have a pre-existing account, you can use that instead.

:::

<TsJsBlock>
  {GenerateDid}
</TsJsBlock>

<TsJsBlock>

```typescript
export async function runAll() {
  …
  let issuerDid = await generateIssuerDid(submitterAccount, issuerAccount)
}
```

</TsJsBlock>

## Run code

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

```bash
yarn ts-node ./index.ts
```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

```bash
node ./index.js
```

  </TabItem>
</Tabs>

Once you have run the script, the output should provide you with the `ISSUER_DID_URI`.

The output should look like the following, but not identical since the code creates the DIDs from your account:

```
ISSUER_DID_URI="did:kilt:4ohMvUHsyeD…"
```

Save the values in the `.env` file, which should now look like the following:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ISSUER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ISSUER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Well done - You've generated a full DID! The next step is to issue a credential.
