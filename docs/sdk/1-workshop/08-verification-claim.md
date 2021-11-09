---
id: verification
title: 🔐 Verify a Claim
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/6_verification.ts';

In this section, you'll play the role of a <span class="label-role verifier">verifier</span>:

- You'll take an `Credential` object given to you by a <span class="label-role claimer">claimer</span>;
- You'll verify that its data is correct;
- You'll verify that the attestation is valid, i.e. its hash exists on-chain and the attestation has not been revoked.

:::info Credential

An `Credential` object is also called a Credential: It is what <span class="label-role claimer">claimers</span> present to <span class="label-role verifier">verifiers</span> upon request.

:::

## Get an `Credential` object

You can either:

- Take the `Credential` object you've generated in the previous step as an <span class="label-role attester">attester</span>;
- Or if you're in a workshop, ask another participant to send you their `Credential` object.

In the following, we'll refer to it as `<credentialJSONString>`.

## Create a file

Create a new file `verification.js`.  
All of the code for this step needs to go into this file.

## Code: verify

Paste the following code in `verification.js`:

<CodeBlock className="language-ts">
  {Example1}
</CodeBlock>

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node verification.js
```

In your logs, you should see chain queries and successful verification (`isValid: true`).

That's it!
You've successfully verified a claim as a <span class="label-role verifier">verifier</span>.

Or... did you? 😈
