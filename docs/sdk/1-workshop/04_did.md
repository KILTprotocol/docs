---
id: did
title: 👤 Did
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/2_1_did.js';
import Example2 from '!!raw-loader!../../../code-examples/workshop/2_2_did.js';
import Example3 from '!!raw-loader!../../../code-examples/workshop/2_3_did.js';

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
- Write delegations on the blockchain with the key type
- Creation of ctypes and attestations to be stored on the chain

:::

Before the creation of a DID there needs to be a keystore.

:::info Keystore

A keystore has multiple purposes:

- The keystore can hold multiple DID keypairs and key types
- The keystore stores the keys encrypted
- The keystore can be used to encrypt and decrypt data

:::

## Code

First, the construction of the keystore.

:::danger

Caution the following keystore is only for demo purposes and considered unsafe.

:::

Create a new file `keystore.js` and copy the following code:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

Taking the claimer and attester accounts to generate the DID and the assoicated keys.

Create a new file `claimersDid.js`.
To generate a light DID, you will need the claimers account:

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

Create a new file `attestersDid.js`.
To generate a full DID, you will need the claimers account and creation of the corresponding keypairs:

**Don't forget you need play tokens as an Attester mention in the setup step**

<CodeBlock className="language-ts">
  {Example3}
</CodeBlock>

Now its time to make the DID's.

## Run

The keystore should be instantiated once and used within the workshop passing it through the different stages of the workshop. Import the `keystore.js`, `claimersDid.js` and `attestersDid.js` into the `index.js`. Run this command in your terminal, still within your `kilt-rocks` directory:

```bash
node index.js
```

Your output should look like this (but it won't be identical since the DIDs are constructed from your account):

Example of a light DID Identifier:
`did:kilt:light:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS:oWFlomlwdWJsaWNLZXlYIBsVppuQ2fi/beBdYf50+n/36FnCjMw+KLSu3AmW9DEGZHR5cGVmeDI1NTE5`

Example of a full DID Identifier:
`did:kilt:014ons5NFdNeaVfxCkcXhPc9Hv2pWNR5muzuxW3iGTHUKuMnCS`

The keystore and the two DID's need to be stored for re-use.

Well done - You've successfully generated a light and full DID!
