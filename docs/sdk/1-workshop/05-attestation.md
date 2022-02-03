---
id: attestation
title: 🧾 Attestation
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../src/components/SnippetBlock';
import AttestCredential from '!!raw-loader!../../../code-examples/workshop/attester/attestCredential.js';
import AttesterIndex from '!!raw-loader!../../../code-examples/workshop/attester/index.js';
import Index from '!!raw-loader!../../../code-examples/workshop/index.js';

In this section, your <span class="label-role attester">Attester</span> will recieve and process a `RequestForAttestation` where you'll

- Attest or deny it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `Credential` object which will be send back to the  <span class="label-role claimer">Claimer</span>.

## Attest Credential

We'll use our `account`, `fullDid`, `keystore` and provided `RequestForAttestaion` to ensure
the request is `attested` and return a `Credential`.

<CodeBlock className="language-js" title="attester/attestCredential.js">
  {AttestCredential}
</CodeBlock>

## Attester Index

Let's update our `attester/index.js` to bring in the helper function above and expose `attestCredential`
to the outside world!. This completes the <span class="label-role attester">Attester</span> code!

<CodeBlock className="language-js" title="attester/index.js">
  {AttesterIndex}
</CodeBlock>

## Index

Let's update our main `index.js`. Here we send our previous request to the <span class="label-role attester">Attester</span>
and will recieve our `Credential`!

<SnippetBlock
  title="index.js"
  className="language-js"
  snippets='[
    [0, 13],
    [14,35],
    "  console.log(credentialJSON);",
    [48,54]
  ]'
>
  {Index}
</SnippetBlock>

run it from command line

```bash
node index.js
```

You can copy the `Credential` object if you want to test with other `Verifiers` in the workshop :-)

Your job as an <span class="label-role attester">Attester</span> is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `Credential` object for the  <span class="label-role claimer">Claimer</span>.

Let's move on to setup our  <span class="label-role verifier">Verifier</span>!!
