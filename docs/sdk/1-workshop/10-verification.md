---
id: verification
title: 🔐 Verification
---

import CodeBlock from '@theme/CodeBlock';
import VerifierIndex from '!!raw-loader!../../../code-examples/workshop/verifier/index.js';
import CreatePresentation from '!!raw-loader!../../../code-examples/workshop/claimer/createPresentation.js';
import ClaimerIndex from '!!raw-loader!../../../code-examples/workshop/claimer/index.js';
import Index from '!!raw-loader!../../../code-examples/workshop/index.js';

In this section, you'll play the role of a <span class="label-role verifier">verifier</span>:

- You'll take an `Credential` object given to you by a <span class="label-role claimer">claimer</span>;
- You'll verify that its data is correct;
- You'll verify that the attestation is valid, i.e. its hash exists on-chain and the attestation has not been revoked.
- You'll verify that the `Credential` is owned by the `Claimer` sending it

:::info Credential

A `Credential` object is also called an Attested Claim: It is what <span class="label-role claimer">claimers</span> present to <span class="label-role verifier">verifiers</span> upon request.

:::

## Verifier Index

Let's create our `verifier/index.js`. Here we'll expose `getChallenge` which returns a random and unique
challenge for the `Claimer` to sign, this is used to prove ownership. We'll also expose `verifyCredential`
which will do the actual verification. Copy the code below, this completes the `Verifier` code!

<CodeBlock className="language-js" title="verifier/index.js">
  {VerifierIndex}
</CodeBlock>

## Claimer Create Presentation

It's not enough to just send our credential as a `Claimer` as we also need to prove our ownership.
This is done by creating a presentation by signing the `Verifier`'s challenge.

Create `claimer/createPresentation.js` helper and copy the following code.

<CodeBlock className="language-js" title="claimer/createPresentation.js">
  {CreatePresentation}
</CodeBlock>

## Claimer Index

Let's update our main `claimer/index.js`

<CodeBlock className="language-js" title="claimer/index.js">
  {ClaimerIndex}
</CodeBlock>

## Index

Let's update our main `index.js` and bring this all together. Here we get a `challenge` from the `Verifier`, 
create a `presentation` and have it send if for verification!

<CodeBlock className="language-js">
  {Index}
</CodeBlock>

run the workshop on command line 

```bash
node index.js
```

That's it! all done :-)


