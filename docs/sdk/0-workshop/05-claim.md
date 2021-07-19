---
id: claim
title: 💬 Claim
---

In this section, you'll play the role of a <span class="label-role claimer">claimer</span>.

- You'll first make a claim about yourself in the form of a `Claim` object;
- But a claim in itself has no value. To become valid in the eyes of <span class="label-role verifier">verifiers</span>, it needs to be attested by an entity that <span class="label-role verifier">verifiers</span> trust: an <span class="label-role attester">attester</span>. So you'll create a `RequestForAttestation` object from your `Claim` object, so that an <span class="label-role attester">attester</span> can attest it.
- The claim will eventually be attested **without privacy enhancement**, i.e. you cannot hide properties from a <span class="label-role verifier">verifier</span> at the verification step with zero knowledge.

We'll look into the attestation in the next steps - for now, let's just focus on your claim.

> 💡 KILT is an open system.
> Anyone/anything can make a claim about themselves. But a claim only has value if the verifier trusts the attester.

## Create a file

Create a new file `claim.js`.
All of the code for this step needs to go into this file.

## Code: create a `Claim`

In the previous step, you've generated two mnemonics and identities.
You'll now need the first mnemonic you've created; it's referred to as `<claimerMnemonic>` in the code snippet below.

We'll create a claim using the provided CTYPE and the <span class="label-role claimer">claimer</span> identity.  
Paste the following in `claim.js`. Make sure to replace the `<claimerMnemonic>`.

<!-- copy and paste 🚧 1️⃣ claim_example from 3_claim.ts -->

<!-- IMPORTANT ❗️ Respect the UNCOMMENT-LINE and REMOVE-LINE comments -->

```javascript
const Kilt = require('@kiltprotocol/sdk-js')

// import the claim type file we've created previously
const ctype = require('./ctype.json')

// wrap call inside async function
async function main() {
  await Kilt.init()
  
  // <claimerMnemonic> is for example 'gold upset segment cake universe carry demand comfort dawn invite element capital'

  const mnemonic = '<claimerMnemonic>'
  const claimer = Kilt.Identity.buildFromMnemonic(mnemonic)

  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimer.address
  )
}

// execute calls
main()

```

**Don't run the code just yet!** One more thing to add...

## Code: create a `RequestForAttestation`

Once your claim will be built, you will want to sign it and prepare it for the <span class="label-role attester">attester</span>.
To do so, let's build a `RequestForAttestation` object from your `Claim`.

Append the following code to your `main` function inside `claim.js`:

<!-- copy and paste 🚧 2️⃣ requestForAttestation_example from 3_claim.ts -->

<!-- IMPORTANT ❗️ Respect the UNCOMMENT-LINE and REMOVE-LINE comments -->

```javascript
const requestForAttestation = Kilt.RequestForAttestation.fromClaimAndIdentity(claim, claimer)

// log this so you can paste it locally
console.log(
  'requestForAttestationJSONString:\n',
  JSON.stringify(requestForAttestation)
)
```

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node claim.js
```

This outputs your `RequestForAttestation` object.

Copy and paste it somewhere: we'll need it in the next step to get it attested by an <span class="label-role attester">attester</span>.

> In a real-life setup, the different actors - claimer, attester and verifier - communicate with each other via a messaging system and can rely on the KILT SDK's messaging capabilities.
>
> We don't need to do this here.
>
> If you're following this tutorial on your own, you're playing all three KILT roles: claimer, attester and verifier. So you can simply copy the outputs of the different functions you're calling and use them as inputs for the other actors.
>
> If you're following this as a workshop, you can simulate message exchange by exchanging your requests via chat, email, or simply by pasting requests for attestations or attested claims in a shared document such as [this hackmd](https://hackmd.io/c6OBNgWWR8yWJhMj7WICUA?edit).

OK, you've made a claim as a <span class="label-role claimer">claimer</span> and created a request for attestation.

Let's switch roles and get this attested!
