---
id: did
title: DID
---

import CodeBlock from '@theme/CodeBlock';
import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateKeypairs from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/holder/generateKeypairs.ts';
import GenerateLightDid from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/holder/generateLightDid.ts';

This section covers creating a DID using the account you created for the <span className="label-role holder">Holder</span>.

## Create a DID

A <span className="label-role holder">Holder</span> needs a DID to attach their credentials to and identify the subject of any claims.

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

<!-- TODO: Add other methods -->

:::info Bring your own account

This workshop assumes you followed the [create account step](./01_account.md), but if you have a pre-existing account, you can use that instead.

:::

<TsJsBlock>
  {GenerateHolderDid}
</TsJsBlock>

<TsJsBlock>

```typescript
export async function runAll() {
  …
  let holderDid = await generateHolderDid(submitterAccount, holderAccount)
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

Once you have run the script, the output should provide you with the `HOLDER_DID_URI`.

The output should look like the following, but not identical since the code creates the DIDs from your account:

```
HOLDER_DID_URI="did:kilt:4ohMvUHsyeD…"
```

Save the values in the `.env` file, which should now look like the following:

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ISSUER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
ISSUER_DID_URI="did:kilt:4ohMvUHsyeD..."
HOLDER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...
HOLDER_DID_URI="did:kilt:4ohMvUHsyeD..."
```

Now the Holder has a DID! The next step is to create a claim and a credential.
