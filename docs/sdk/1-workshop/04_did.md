---
id: did
title: 👤 Did
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/2_1_did.ts';
import Example2 from '!!raw-loader!../../../code-examples/2_2_did.ts';

Time to make a DID using the previously created accounts for the <span class="label-role claimer">claimer</span> and the <span class="label-role attester">attester</span>.

In KILT, there is a DID may represents an entity - for example a person, an organization or even a machine.

A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.
The DID can contain multiple different keys, it can be thought of a controller account for the DID subject.

:::info KILT DID

- An authentication keypair that is used to sign claims and attestations
- An encryption keypair, used to encrypt messages between participants of the system
- An attestation keypair, used to write ctypes and attestations on chain
- A delegation keypair, used to write delegations on the blockchain
- Keypairs can be replaced over time, even if the key has been compromised

:::

There are different types of DIDs that can perform different actions, either a light or full DID.

:::info Light DID

A light DIDs are less flexible and are suitable for lower-security use cases.

- Sign claims and attestations with the authentication keys
- Encrypting messages with the encryption keys

:::

A full DID requires interaction with the KILT blockchain. The DID creation operation requires funds from the assoicated KILT address with enough funds to pay the transaction fees and the required deposit.

:::info Full DID

Full DID is robust and allows for more use cases.

- Store multiple different keys and key types
- Has all features of a light DID
- Write deelgations on the blockchain with the key type
- Creation of ctypes and attestations to be stored on the chain.

:::

In order for the <span class="label-role attester">attesters</span> to create the DID they have to pay the angel’s share (gas or transaction fee) and despoit in KILT Tokens. So you'll need tokens to create a full DID.

Go to the [faucet@kilt.io] and request tokens for your `<attesterAddress>`.

Sadly these are just play tokens, not real money.

## Code

Taking the claimer and attester accounts to generate the DID and the assoicated keys.

Create a new file `claimersDid.js`
To generate a light DID, you will need the claimers account:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

Create a new file `attestersDid.js`
To generate a full DID, you will need the claimers account and creation of the corresponding keypairs:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

Now its time to make the DID's
