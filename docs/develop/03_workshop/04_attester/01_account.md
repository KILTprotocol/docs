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

-   The address, generated from the public key and is the entity's unique and public on-chain identifier, used to pay fees and deposits.
-   A signing keypair to write transactions on-chain

:::

To create an account, you need a mnemonic.

:::info Mnemonic

In cryptography, a mnemonic usually consists of a series of 12 or 24 random words.

For example, `gold upset segment cake universe…` is a mnemonic.

You use a mnemonic to generate signing keypairs.
What's great about a mnemonic is that it's **human-readable** and a person could memorize it to use later to re-generate their keypairs and address.

:::

## Create the Account

To generate an account, use the `addFromMnemonic()` function on the [`KiltKeyringPair`](https://kiltprotocol.github.io/sdk-js/interfaces/types_src.KiltKeyringPair.html) interface of the SDK.

The function uses the polkadot function `mnemonicGenerate()` to generate a 12-word mnemonic.

:::info polkadot.js

The KILT SDK is built on top of the [polkadot.js](https://polkadot.js.org/) library. Therefore you will find various uses of it in this workshop.

The library provides a set of tools to interact with the KILT blockchain and other substrate-based blockchains.
In addition, the polkadot.js library offers cryptographic primitives and a serialization framework to encode/decode data sent to and received from the blockchain.

<!-- TODO: Unpack this, why, what? -->

We recommend developers to familiarize themselves with their [API documentation](https://polkadot.js.org/docs/) to learn more about the functions available.

:::

Add the following code to the `generateAccount` file.

<TsJsBlock fileName="attester/generateAccount">
  {GenerateAccount}
</TsJsBlock>

The `generateAccount` method generates the account address and mnemonic key using the value structure definition to return the following:

-   A key `account` with the type `Kilt.KiltKeyringPair`.

    Generating the account address takes a couple of steps. First define a `keyring` value, which is a data structure for defining the keypair type with the following parameters:

-   A key `mnemonic` with the type `string`.

    The `mnemonicGenerate()` method from the `Utils.Crypto` package generates the value for the mnemonic.

<!-- TODO: Why 38? -->

-   `ss58Format`: Specifies the encoding format for the key. SS58 is commonly used in Substrate-based blockchains.
-   `type`: Specifies the user's cryptographic algorithm. It uses sr25519, which is commonly used in Substrate-based blockchains.

Finally, the function returns the structure using the `addFromMnemonic()` method to create an address key pair using the given mnemonic passphrase along with the mnemonic value.

The remainder of the code runs the `generateAccount` function and logs the results to the console.

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

The output provides you with a `ATTESTER_ACCOUNT_MNEMONIC` and `ATTESTER_ACCOUNT_ADDRESS`.
Save both values in your `.env` file, which should now look similar to the below.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry..."
ATTESTER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
```

:::warning Get PILT coins!

You now have a blockchain account to use to pay fees and deposits.
If you haven't already requested PILT, go to the [faucet](https://faucet.peregrine.kilt.io) and request tokens for your `<address>`.

:::
