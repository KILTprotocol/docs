---
id: identity
title: 👤 Identity
---

Let's create the <span class="label-role claimer">claimer</span> identity and the <span class="label-role attester">attester</span> identity. You'll see that the <span class="label-role verifier">verifier</span> identity won't be needed.

In KILT, an identity is an object that represents an entity - for example a person, an organization or even a machine.

An identity contains multiple properties.  
One of them is the `address` : it's the entity's unique and public identifier.

> 💡 A KILT identity is a set of cryptographic elements:
>
> - A signing keypair, used to sign claims;
> - The address, which is generated from the signing public key;
> - An encryption keypair, used to encrypt messages between participants of the system;
> - A user secret, used for privacy enhanced attestations;

All we need to create an identity is a mnemonic.

> 💡 In cryptography, a mnemonic is a random series of words. For example, `gold upset segment cake universe` is a mnemonic. It's used to generate keypairs. What's great about a mnemonic is that it's **human-readable**. A person can memorize it, and use it later to re-generate their keypairs and address.

## Create a file

Create a new file `identity.js`.
All of the code for this step needs to go into this file.

## Code

To generate an identity, two methods from the KILT SDK are needed:

- `generateMnemonic()`
- `buildFromMnemonic(mnemonic)` // takes a mnemonic as an input, and outputs an `Identity` instance.

Open `identity.js` and paste the following code:

<!-- copy and paste 🚧 1️⃣ identity_example from 1_identity.ts -->

<!-- IMPORTANT ❗️ Respect the UNCOMMENT-LINE and REMOVE-LINE comments -->

```javascript
// import the KILT SDK
const Kilt = require('@kiltprotocol/sdk-js')

// wrap call inside async function
async function main() {
  await Kilt.init()
  const mnemonic = Kilt.Identity.generateMnemonic()
  console.log('Mnemonic: ', mnemonic)

  const identity = Kilt.Identity.buildFromMnemonic(mnemonic)
  console.log('Address: ', identity.address)
}

// execute calls
main()
```

You're now ready to generate an identity.

## Run

To generate an identity, run this command in your terminal, still within your `kilt-rocks` directory:

```bash
node identity.js
```

Your output should look like this (but it won't be identical since the mnemonic is randomly generated):

```bash
Mnemonic: gold upset segment cake universe carry demand comfort dawn invite element capital
Address: 5CUoo2vAegeaZHPNdxZyuMesR3RWYBKHj4jfVyj4FXzpXPuR
```

You want to run this command twice, in order to generate 2 identities: the <span class="label-role attester">attester</span>'s and the <span class="label-role claimer">claimer</span>'s. Hence, replace the content of `identity.js` with the following code:

<!-- copy and paste 🚧 2️⃣ identities_example from 1_identity.ts -->

<!-- IMPORTANT ❗️ Respect the UNCOMMENT-LINE and REMOVE-LINE comments -->

```javascript
// import the KILT SDK
const Kilt = require('@kiltprotocol/sdk-js')

// wrap call inside async function
async function identities() {
  await Kilt.init()

  const claimerMnemonic = Kilt.Identity.generateMnemonic()
  console.log('Claimer mnemonic: ', claimerMnemonic)
  const claimer = Kilt.Identity.buildFromMnemonic(claimerMnemonic)
  console.log('Claimer address: ', claimer.address)

  const attesterMnemonic = Kilt.Identity.generateMnemonic()
  console.log('Attester mnemonic: ', attesterMnemonic)
  const attester = Kilt.Identity.buildFromMnemonic(attesterMnemonic)
  console.log('Attester address: ', attester.address)
}

// execute calls
identities()
```

Copy and paste the two mnemonics and addresses somewhere, you'll need them soon.

In the next steps, we'll refer to the so-generated identities as follows:

- `<claimerMnemonic>` is the mnemonic for the claimer and `<claimerAddress>` the claimer's associated address;
- `<attesterMnemonic>` is the mnemonic for the attester and `<attesterAddress>` the attester's associated address.

That's it - You've successfully generated two new identities and their associated addresses!
