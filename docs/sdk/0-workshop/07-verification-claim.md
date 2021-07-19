---
id: verification
title: 🔐 Verify a Claim
---

In this section, you'll play the role of a <span class="label-role verifier">verifier</span>:

- You'll take an `AttestedClaim` object given to you by a <span class="label-role claimer">claimer</span>;
- You'll verify that its data is correct;
- You'll verify that the attestation is valid, i.e. its hash exists on-chain and the attestation has not been revoked.

> 💡 An `AttestedClaim` object is also called a Credential: It is what <span class="label-role claimer">claimers</span> present to <span class="label-role verifier">verifiers</span> upon request.

## Get an `AttestedClaim` object

You can either:

- Take the `AttestedClaim` object you've generated in the previous step as an <span class="label-role attester">attester</span>;
- Or if you're in a workshop, ask another participant to send you their `AttestedClaim` object.

In the following, we'll refer to it as `<attestedClaimJSONString>`.

## Create a file

Create a new file `verification.js`.  
All of the code for this step needs to go into this file.

## Code: verify

Paste the following code in `verification.js`:

<!-- copy and paste verifyClaim_example from 5_verification.ts -->

```javascript
const Kilt = require('@kiltprotocol/sdk-js')

async function main() {
  // create an attested claim from the JSON string
  const attestedClaimStruct = JSON.parse('<attestedClaimJSONString>')
  const attestedClaim =
    Kilt.AttestedClaim.fromAttestedClaim(attestedClaimStruct)

  await Kilt.init({ address: 'wss://full-nodes.kilt.io:9944' })
  await Kilt.connect()
  console.log(
    'Successfully connected to KILT testnet, verifying attested claim next...'
  )

  // The `verify()` method does two things:
  // 1. verifies that the data is valid for the given CTYPE
  // 2. verifies that the attestation hash is present on the Kilt blockchain and that the attestation has not been revoked
  const isValid = await attestedClaim.verify()
  console.log('Is the attested claim valid?', isValid)

  // disconnect from the chain
  await Kilt.disconnect()
  console.log('Disconnected from KILT testnet')
}

// execute calls
main()
```

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node verification.js
```

In your logs, you should see chain queries and successful verification (`isValid: true`).

That's it!
You've successfully verified a claim as a <span class="label-role verifier">verifier</span>.

Or... did you? 😈
