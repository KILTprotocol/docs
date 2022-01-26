---
id: account
title: Account
---

import CodeBlock from '@theme/CodeBlock';
import Index from '!!raw-loader!../../../../code-examples/workshop/attester/index-1.js';
import GetAccount from '!!raw-loader!../../../../code-examples/workshop/attester/getAccount.js';

After you have [setup the project structure](./) in the last step, we'll create our <span class="label-role attester">attester</span> account.
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

You'll note we're getting a mnemonic from `.env`.
This is because we want to keep our seed phrase safe, and it may vary when moving environments (`development`, `production`).
You'll be prompted to save it after the first run.

Open `attester/getAccount.js` and paste the following code:

<CodeBlock className="language-js" title="attester/getAccount.js">
  {GetAccount}
</CodeBlock>

## Execute

Let's setup our <span class="label-role attester">attester</span> index. Copy the below into `attester/index.js`

<CodeBlock className="language-js" title="attester/index.js">
  {Index}
</CodeBlock>

Now run it to get your <span class="label-role attester">attester</span> `<address>` and `<mnenomic>`.
```bash
node ./attester/index.js
```

Your output will provide you with `ATTESTER_MNEMONIC` and `ATTESTER_ADDRESS`. Be sure to save it in your `.env`
file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_MNEMONIC="gold upset segment ca...
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
```

:::warning Get PILT coins!

You now have a blockchain account, which will be used to pay fees and deposits.
If you haven't already requested PILT, go to the ([Element](https://matrix.to/#/%23kilt-general:matrix.org) and [Discord](https://discord.gg/5VZnPdTZMy)) and request tokens for your `<address>`.

:::
