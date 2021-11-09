---
id: account
title: 👤 Account
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/1_1_account.ts';
import Example2 from '!!raw-loader!../../../code-examples/1_2_account.ts';

Let's create the <span class="label-role claimer">claimer</span> and the <span class="label-role attester">attester</span> account.

In KILT, there is an account which is an object that interacts with the blockchain.

An accounts contains multiple properties.  
One of them is the `address` : it's the entity's unique and public on-chain identifier.

:::info KILT Account

A KILT account is a set of cryptographic elements:

- The address, which is generated from the public key
- A signing keypair write transactions on-chain

:::

All we need to create an account is a mnemonic.

:::info mnemonic

In cryptography, a mnemonic usually consists of 12 or 24 random series of words. For example, `gold upset segment cake universe` is a mnemonic. It's used to generate signing keypairs. What's great about a mnemonic is that it's **human-readable**. A person can memorize it, and use it later to re-generate their keypairs and address.

:::

## Create a file

Create a new file `account.js`.
All of the code for this step needs to go into this file.

## Code

To generate an account, one method from the KILT SDK is needed and one method from the polkadot crypto utility:

- `mnemonicGenerate()` // Generates a mnemonic
- `buildFromMnemonic(mnemonic)` // takes a mnemonic as an input, and outputs an `Account` instance.

Open `account.js` and paste the following code:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

You're now ready to generate an account.

## Run

To generate an account, run this command in your terminal, still within your `kilt-rocks` directory:

```bash
node account.js
```

Your output should look like this (but it won't be identical since the mnemonic is randomly generated):

```bash
Mnemonic: gold upset segment cake universe carry demand comfort dawn invite element capital
Address: 5CUoo2vAegeaZHPNdxZyuMesR3RWYBKHj4jfVyj4FXzpXPuR
```

You want to run this command twice, in order to generate 2 accounts: the <span class="label-role attester">attester</span>'s and the <span class="label-role claimer">claimer</span>'s. Hence, replace the content of `account.js` with the following code:

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

Copy and paste the two mnemonics and addresses somewhere, you'll need them soon.

In the next steps, we'll refer to the so-generated accounts as follows:

- `<claimerMnemonic>` is the mnemonic for the claimer and `<claimerAddress>` the claimer's associated address;
- `<attesterMnemonic>` is the mnemonic for the attester and `<attesterAddress>` the attester's associated address.

That's it - You've successfully generated two new on-chain accounts and their associated addresses!

🚧 Since there is no faucet for now, you have to request tokens from us directly ([element](https://matrix.to/#/%23kilt-general:matrix.org), [discord](https://discord.gg/hX4pc8rdHS))
