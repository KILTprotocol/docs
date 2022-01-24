---
id: attester-account
title: 👤 Attester Account
---

import CodeBlock from '@theme/CodeBlock';
import Index from '!!raw-loader!../../../code-examples/workshop/attester/index-1.js';
import GetAccount from '!!raw-loader!../../../code-examples/workshop/attester/getAccount.js';

Now we'll create our `Attester` account. In KILT, there is an account 
which is an object that interacts with the blockchain. An accounts contains 
multiple properties. One of them is the `address` : it's the entity's unique and public on-chain identifier.

:::info KILT Account

A KILT account is a set of cryptographic elements:

- The address, which is generated from the public key
- A signing keypair write transactions on-chain

:::

All we need to create an account is a mnemonic.

:::info mnemonic

In cryptography, a mnemonic usually consists of 12 or 24 random series of words.
For example, `gold upset segment cake universe` is a mnemonic.
It's used to generate signing keypairs.
What's great about a mnemonic is that it's **human-readable**.
A person can memorize it, and use it later to re-generate their keypairs and address.

:::

## Folder

Create the following files in the `attester` folder. 
This folders serves to mimi an `Attester` service, the
outside world will interact with `index.js` from out main project file.

```bash
└─ kilt-rocks # project
    └─ attester # all attester code 
      ├─ attestCredentials.js # issues credentials
      ├─ getAccount.js # loads the Attester account
      ├─ getCtype.js # returns a specific ctype
      ├─ getFullDid.js # loads the Attester on chain DID
      └─ index.js # main entry for outside world (Claimer, Verifier)
  ...
```

## Account

To generate an account, one method from the KILT SDK is needed and one method from the polkadot crypto utility:

- `mnemonicGenerate()` // Generates a mnemonic
- `addFromMnemonic(mnemonic)` // takes a mnemonic as an input, and outputs an `Account` instance.

You'll note we're getting a mnemonic from `.env`. This is because we want to keep our seed phrase safe,
and it may vary when moving environments (`development`, `production`). You'll be prompted to save it after the first run.

Open `attester/getAccount.js` and paste the following code:

<CodeBlock className="language-js" title="attester/getAccount.js">
  {GetAccount}
</CodeBlock>

## Index

Let's setup our `Attester` index. Copy the below into `attester/index.js`

<CodeBlock className="language-js" title="attester/index.js">
  {Index}
</CodeBlock>

Now run it to get your `Attester` `<address>` and `<mnenomic>`. 
```bash
node ./attester/index.js
```

Your output will provide you with `ATTESTER_MNEMONIC` and `ATTESTER_ADDRESS`. Be sure to save it in your `.env` 
file, it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io

ATTESTER_MNEMONIC="gold upset segment ca... 
ATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...
```

## PILT Tokens

When writing the hash of attestations on the blockchain, `Attesters` have to pay the angel’s
share (gas or transaction fee) and the deposit in KILT Tokens. So you'll need tokens to attest a claim.
While testing you can use PILT Testnet Tokens.

If you haven't already requested PILT, go to the ([Element](https://matrix.to/#/%23kilt-general:matrix.org) and [Discord](https://discord.gg/5VZnPdTZMy)) and request tokens for your `<address>`.

[faucet]: https://faucet.kilt.io/

Sadly these are just play tokens, not real money.

That's it - You've successfully generated your `Attester` account! Let's setup the `Attester`'s on-chain `DID` next!
