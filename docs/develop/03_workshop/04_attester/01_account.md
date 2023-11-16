---
id: account
title: Account
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateAccount from '!!raw-loader!@site/code_examples/sdk_examples/src/workshop/attester/generateAccount.ts';

With the [project structure setup](./) in the last step, you can create your <span className="label-role attester">Attester</span> account.

With KILT, an account is an object that interacts with the blockchain.

:::info KILT Account

A KILT account is a set of cryptographic elements:

-   The address, generated from the public key, is the entity's unique and public on-chain identifier, used to pay fees and deposits.
-   A signing key pair to write transactions on-chain

:::

To create an account, you need a mnemonic.

:::info Mnemonic

In cryptography, a mnemonic consists of a series of 12 or 24 random words.

For example, `waste frown beach save hidden bar inmate oil mind member junk famous` is a mnemonic.

You use a mnemonic to generate signing key pairs.
What's great about a mnemonic is that it's **human-readable**, and a person could memorize it to later re-generate their key pairs and address.
A mnemonic is critical for security, so it's crucial to keep it safe!

:::

## Create the Account

To generate an account, use the `addFromMnemonic()` function on the [`KiltKeyringPair`](https://kiltprotocol.github.io/sdk-js/interfaces/types_src.KiltKeyringPair.html) interface of the SDK.
The function uses the underlying polkadot `mnemonicGenerate()` function to generate a 12-word mnemonic.

:::info polkadot.js

The KILT SDK is built on top of the [polkadot.js](https://polkadot.js.org/) library, so this workshop uses several functions from the library.

The library provides tools to interact with the KILT blockchain and other Substrate-based blockchains.

In addition, the polkadot.js library offers cryptographic primitives and a serialization framework to encode/decode data sent to and received from the blockchain.
Read the [API documentation](https://polkadot.js.org/docs/) to learn more about the functions available.

:::

Add the following code to the `generateAccount` file.

<TsJsBlock fileName="attester/generateAccount">
  {GenerateAccount}
</TsJsBlock>

The `generateAccount` method returns an object with the following two properties:

- A key `account` with the type `Kilt.KiltKeyringPair`.
- A key `mnemonic` with the type `string`.

Generating these values takes two steps:

1. Create the `mnemonic` value using the `mnemonicGenerate()` method from the `Utils.Crypto` package.
2. The `account` value first needs a `keyring` value defined, which is a data structure for defining the key pair type with the following parameters:

   1. `ss58Format`: Specifies the encoding format for the key. Substrate-based blockchains commonly use [SS58](https://docs.substrate.io/reference/address-formats/).
   The value `38` represents the KILT blockchain.
   2. `type`: Specifies the user's cryptographic algorithm.
   Substrate-based blockchains commonly use sr25519.

  The function then returns the value using the `addFromMnemonic()` method to create a key pair for the address using the given mnemonic.

The rest of the code runs the `generateAccount` function and logs the results to the console.

## Run code

Run the code above to receive your <span className="label-role attester">Attester</span> `<address>` and `<mnenomic>`.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

```bash
yarn ts-node ./attester/generateAccount.ts
```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

```bash
node ./attester/generateAccount.js
```

  </TabItem>
</Tabs>

The output provides you with an `ATTESTER_ACCOUNT_MNEMONIC` and `ATTESTER_ACCOUNT_ADDRESS`.
Save both values in your `.env` file, which should look similar to the below.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry..."
ATTESTER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
```

:::warning Get PILT coins!

You now have a blockchain account to use to pay fees and deposits.
If you haven't already requested PILT, go to the [faucet](https://faucet.peregrine.kilt.io) and request tokens for your `<address>`.

:::
