---
id: claimer-request
title: 👤 Claimer Request
---

import CodeBlock from '@theme/CodeBlock';
import CreateClaim from '!!raw-loader!../../../code-examples/workshop/claimer/createClaim.js';
import CreateRequest from '!!raw-loader!../../../code-examples/workshop/claimer/createRequest.js';
import ClaimerIndex from '!!raw-loader!../../../code-examples/workshop/claimer/index-3.js';
import Index from '!!raw-loader!../../../code-examples/workshop/index-3.js';

In this section we'll create a `Claim` and request a `RequestForAttestation`.
But a claim in itself has no value. To become valid in the eyes of `Verifiers`, 
it needs to be attested by an entity they can trust: an `Attester`.

> 💡 KILT is an open system.
> Anyone/anything can make a claim about themselves. But a claim only has value if the verifier trusts the attester.

## Create Claim

 We'll use provided `light DID`, `ctype` and `Claimer` provided `content` to generate the `Claim` object. Create a file `claimer/createClaim.js` and copy the code below.

<CodeBlock className="language-js" title="claimer/createClaim.js">
  {CreateClaim}
</CodeBlock>

## Create Request

We don't want to send our `Claim` object plainly over the internet. Instead
we'll form a `RequestForAttestation` object that we can send to the `Attester`.
Create a file `claimer/createRequest.js` and copy the code below.

When `Attestations` are given by `Attesters`, they are written to chain which requires a deposit. Each new `RequestForAttestation` is unique. While we're testing, we can store and reuse requests to avoid to avoid
multiple attestations. To do this store the output into `./claimer/_request.json`. You can also share this
request to others in the workshop to see how they get denied from fraudulent senders. 

<CodeBlock className="language-js">
  {CreateRequest}
</CodeBlock>

## Claimer Index

Ok, let's continue our `claimer/index.js`. This will serve to export to convenience functions.
First we'll import our helper functions we made above, then export `createClaim` and `createRequest`. 

<CodeBlock className="language-js">
  {ClaimerIndex}
</CodeBlock>

## Index

Alright update our `index.js`, we'll run it from there. 

<CodeBlock className="language-js">
  {Index}
</CodeBlock>

run it from command line
```bash
node index.js
```

OK, you've made a claim as a <span class="label-role claimer">claimer</span> and 
created a request for attestation. Let's finish up our `Attester` and get a credential!
