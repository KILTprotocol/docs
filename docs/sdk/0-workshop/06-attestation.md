---
id: attestation
title: 🔖 Attestation
---

In this section, you'll play the role of the <span class="label-role attester">attester</span>:

- You'll take a `RequestForAttestation` object;
- Attest it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `AttestedClaim` object which will be send back to the <span class="label-role claimer">claimer</span>.

## Request KILT tokens

When writing the hash of attestations on the blockchain, <span class="label-role attester">attesters</span> have to pay the angel’s
share (gas or transaction fee) in KILT Tokens. So you'll need tokens to attest a claim.

Go to the [faucet] and request tokens for your `<attesterAddress>`.

Sadly these are just play tokens, not real money.

## Create a file

Create a new file `attestation.js`.
All of the code for this step needs to go into this file.

## Code: validate the `RequestForAttestation` object

In a real-life setup, as an <span class="label-role attester">attester</span> you would directly receive a `RequestForAttestation` from a <span class="label-role claimer">claimer</span>.

In this tutorial, you can either:

- Take the `RequestForAttestation` object you've generated in the previous step as a <span class="label-role claimer">claimer</span>;
- Or if you're in a workshop, ask another participant to send you their `RequestForAttestation` object.

In the following, we'll refer to it as `<requestForAttestationJSONString>`.

Paste the following code in `attestation.js` (make sure to replace `<attesterMnemonic>` and `<requestForAttestationJSONString>` with the relevant objects):

<!-- copy and paste 1️⃣ requestForAttestation_example from 4_attestation.ts -->

<!-- IMPORTANT! Respect the UNCOMMENT-LINE and REMOVE-LINE comments -->

```javascript
const Kilt = require('@kiltprotocol/sdk-js')

async function main() {
  // use the attester mnemonic you've generated in the Identity step
  const attester = Kilt.Identity.buildFromMnemonic('<attesterMnemonic>')

  // use the JSON string representation of the request attestation generated in the previous step
  const requestForAttestationStruct = JSON.parse(
    '<requestForAttestationJSONString>'
  )
  const requestForAttestation = Kilt.RequestForAttestation.fromRequest(
    requestForAttestationStruct
  )
}

// execute calls
main()
```

To check if the object is valid, you can check the data against the CTYPE
and check if the signature is valid.

<!-- copy and paste 2️⃣ attestationVerify_example from 4_attestation.ts -->

```javascript
const isDataValid = requestForAttestation.verifyData()
const isSignatureValid = requestForAttestation.verifySignature()
console.log('isDataValid: ', isDataValid)
console.log('isSignatureValid: ', isSignatureValid)
```

## Code: create an `Attestation`

Now is time to interact with the chain, in order to store an attestation on there.  
Append the following code to your `main` function inside `attestation.js`.

<!-- copy and paste 3️⃣ attestClaim_example from 4_attestation.ts -->

```javascript
// build the attestation object
const attestation = await Kilt.Attestation.fromRequestAndPublicIdentity(
  requestForAttestation,
  attester.getPublicIdentity()
)

// connect to the chain (this is one KILT testnet node)
await Kilt.init({ address: 'wss://full-nodes.kilt.io:9944' })
await Kilt.connect()
console.log(
  'Successfully connected to KILT testnet, storing attestation next...'
)

// store the attestation on chain
const tx = await attestation.store()
await Kilt.BlockchainUtils.signAndSubmitTx(tx, attester, {
  resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK,
})
console.log('Attestation saved on chain.')

// the attestation was successfully stored on the chain, so you can now create the AttestedClaim object
const attestedClaim = Kilt.AttestedClaim.fromRequestAndAttestation(
  requestForAttestation,
  attestation
)
// log the attestedClaim so you can copy/send it back to the claimer
console.log('attestedClaimJSONString:\n', JSON.stringify(attestedClaim))

// disconnect from the chain
await Kilt.disconnect()
console.log('Disconnected from KILT testnet')
```

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node attestation.js
```

You should see in your logs:

- `true` and `true` if the signature and data are valid (they should be);
- The block hash in which the transaction was finalized;
- The `AttestedClaim` object.

Copy the `AttestedClaim` object, you'll need it soon.

Your job as an <span class="label-role attester">attester</span> is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `AttestedClaim` object for the <span class="label-role claimer">claimer</span>.

[faucet]: https://faucet.kilt.io/
