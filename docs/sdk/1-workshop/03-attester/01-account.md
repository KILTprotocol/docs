---
id: account
title: Account
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../../src/components/SnippetBlock';
import GenerateAccount from '!!raw-loader!../../../../code-examples/workshop/attester/generateAccount.ts';

After you have [setup the project structure](./) in the last step, we'll create our <span class="label-role attester">Attester</span> account.
In KILT, there is an account which is an object that interacts with the blockchain.
An accounts contains multiple properties.
One of them is the `address`: it's the entity's unique and public on-chain identifier, that is used to pay fees and deposits.
All we need to create an account is a mnemonic.

:::info KILT Account

A KILT account is a set of cryptographic elements:

- The address, which is generated from the public key
- A signing keypair write transactions on-chain

:::

:::info mnemonic

In cryptography, a mnemonic usually consists of 12 or 24 random series of words.
For example, `gold upset segment cake universe` is a mnemonic.
It's used to generate signing keypairs.
What's great about a mnemonic is that it's **human-readable**.
A person can memorize it, and use it later to re-generate their keypairs and address.

:::

## Create the Account

To generate an account, one method from the KILT SDK is needed and one method from the polkadot crypto utility:

- `mnemonicGenerate()` - Generates a mnemonic
- `addFromMnemonic(mnemonic)` - takes a mnemonic as an input, and outputs an `Account` instance.

Open `attester/generateAccount.ts` and paste the following code:

<CodeBlock className="language-js" title="attester/generateAccount.ts">
  {GenerateAccount}
</CodeBlock>

The code contains two methods.
`generateAccount` create and returns a new account while `getAccount` loads an existing secret and creates an account from it.
We will use `getAccount` later to load the account that we will create and store in the next step.

## Execute

Now run it to get your <span class="label-role attester">Attester</span> `<address>` and `<mnenomic>`.
```bash
yarn ts-node ./attester/generateAccount.ts
```

Your output will provide you with `ATTESTER_MNEMONIC` and `ATTESTER_ADDRESS`.
Be sure to save it in your `.env` file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="warrior icon use cry..."
ATTESTER_ADDRESS="4ohMvUHsyeDhMVZF..."
```

:::warning Get PILT coins!

You now have a blockchain account, which will be used to pay fees and deposits.
If you haven't already requested PILT, go to the [faucet](https://faucet.peregrine.kilt.io). and request tokens for your `<address>`.

:::
