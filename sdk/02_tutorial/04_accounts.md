---
id: account
title: Account
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateAccount from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/index.ts';

With the [project structure setup](./) in the last step, you can create your <span className="label-role issuer">Issuer</span> account.

With KILT, an account is an object that interacts with the blockchain.

:::info KILT Account

A KILT account is a set of cryptographic elements:

-   The address, generated from the public key, is the entity's unique and public on-chain identifier, used to pay fees and deposits.
-   A signing key pair to write transactions on-chain

:::

## Create the account

You can create an account with the `generateKeypair()` method. It takes the following parameters:

-   An optional `type`, which is a data structure for defining the key pair type. This example uses `ed25519`, but `sr25519` or `ecdsa` are also valid.
-   A `seed` string, such as a mnemonic or hex value, useful if you want an account you can recreate.

The method returns a `MultibaseKeyPair`, which is a public and private key pair encoded in a multikey format, a text-based encoding that indicates the key type defined by a W3C standard.

:::info Mnemonic

In cryptography, a mnemonic consists of a series of 12 or 24 random words.

For example, `waste frown beach save hidden bar inmate oil mind member junk famous` is a mnemonic.

You use a mnemonic to generate signing key pairs.
A mnemonic is **human-readable**, and a someone can memorize it to later re-generate their key pairs and address.
A mnemonic is critical for security, so it's crucial to keep it safe!

:::

Add the following code to the `generateAccount` file.

<TsJsBlock fileName="issuer/generateAccount">
  {GenerateAccount}
</TsJsBlock>

And add the code to call the method to the `runAll` method:

<TsJsBlock>

```typescript
export async function runAll() {
    const { issuerAccount, submitterAccount, holderAccount } = generateAccount()
}
```

</TsJsBlock>

The example code creates three accounts. One for the <span className="label-role issuer">Issuer</span>, one for the <span className="label-role submitter">Submitter</span>, and one for the <span className="label-role holder">Holder</span>.

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

Run the code and the output provides you with an `ISSUER_ACCOUNT_ADDRESS`, `SUBMITTER_ACCOUNT_ADDRESS`, and `HOLDER_ACCOUNT_ADDRESS`.
Save all values in your `.env` file, which should now look similar to the below.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ISSUER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
SUBMITTER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
HOLDER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
```

:::warning Get PILT coins!

You now have a blockchain account to use to pay fees and deposits.
If you haven't already requested PILT, go to the [faucet](https://faucet.peregrine.kilt.io) and request tokens for your `<address>`.

:::
