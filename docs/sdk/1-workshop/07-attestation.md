---
id: attestation
title: 🔖 Attestation
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/5_1_attestation.ts';
import Example2 from '!!raw-loader!../../../code-examples/5_2_attestation.ts';
import Example3 from '!!raw-loader!../../../code-examples/5_3_attestation.ts';

In this section, you'll play the role of the <span class="label-role attester">attester</span>:

- You'll take a `RequestForAttestation` object;
- Attest it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `Credential` object which will be send back to the <span class="label-role claimer">claimer</span>.

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

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

To check if the object is valid, you can check the data against the CTYPE
and check if the signature is valid.

<CodeBlock className="language-ts">
  {Example2}
</CodeBlock>

## Code: create an `Attestation`

Now is time to interact with the chain, in order to store an attestation on there.  
Append the following code to your `main` function inside `attestation.js`.

<CodeBlock className="language-ts">
  {Example3}
</CodeBlock>

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node attestation.js
```

You should see in your logs:

- `true` and `true` if the signature and data are valid (they should be);
- The block hash in which the transaction was finalized;
- The `Credential` object.

Copy the `Credential` object, you'll need it soon.

Your job as an <span class="label-role attester">attester</span> is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `Credential` object for the <span class="label-role claimer">claimer</span>.

[faucet]: https://faucet.kilt.io/
