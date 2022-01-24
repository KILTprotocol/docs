---
id: attestation
title: 🔖 Attestation
---

import CodeBlock from '@theme/CodeBlock';
import AttestCredential from '!!raw-loader!../../../code-examples/workshop/attester/attestCredential.js';
import AttesterIndex from '!!raw-loader!../../../code-examples/workshop/attester/index.js';
import Index from '!!raw-loader!../../../code-examples/workshop/index-4.js';

In this section, your `Attester` will recieve a `RequestForAttestation` where you'll

- Attest or deny it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `Credential` object which will be send back to the `Claimer`.

## Attest Credential

We'll use our `account`, `fullDid`, `keystore` and provided `RequestForAttestaion` to ensure
the request is `attested` and return a `Credential`.

<CodeBlock className="language-js">
  {AttestCredential}
</CodeBlock>

## Attester Index

Let's update our `attester/index.js` to bring in the helper function above and expose `attestCredential`
to the outside world!. This completes the `Attester` code!

<CodeBlock className="language-js">
  {AttesterIndex}
</CodeBlock>

## Index

Let's update our main `index.js`. Here we send our previous request to the `Attester`
and will recieve our `Credential`!

<CodeBlock className="language-js">
  {Index}
</CodeBlock>

run it from command line 

```bash
node index.js
```

You can copy the `Credential` object if you want to test with other `Verifiers` in the workshop :-) 

Your job as an `Attester` is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `Credential` object for the `Claimer`.

Let's move on to setup our `Verifier`!!