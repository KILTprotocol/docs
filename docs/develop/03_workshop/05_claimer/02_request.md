---
id: request
title: Request an Attestation
---

import CodeBlock from '@theme/CodeBlock';
import CreateClaim from '!!raw-loader!@site/code_examples/workshop/claimer/createClaim.ts';
import GenerateRequest from '!!raw-loader!@site/code_examples/workshop/claimer/generateRequest.ts';

In this section, we'll create a `Claim` and a `RequestForAttestation`.
But a claim in itself has no value.
To become valid in the eyes of <span className="label-role verifier">Verifiers</span>, it needs to be attested by an entity they can trust: an <span className="label-role attester">Attester</span>.

:::info

 KILT is an open system.
 Anyone/anything can make a claim about themselves and attest this claim.
 But a claim only has value if the verifier _trusts_ the attester.

:::

## Create Claim

We'll use provided `light DID`, `ctype` and <span className="label-role claimer">Claimer</span> provided `content` to generate the `Claim` object.
Create a file `claimer/createClaim.ts` and copy the code below.

<CodeBlock className="language-js" title="claimer/createClaim.ts">
  {CreateClaim}
</CodeBlock>

The magic is happening in the `createRequest` function.
There we create a request for attestation from a claim.
Attestations can only be created for attributes that the <span className="label-role claimer">Claimer</span> wants to publish.
To ensure that the Claimer also approves of the attributes in the claim, he has to digitally sign the request for attestation.
The signature makes sure that the Attester doesn't change the attributes and the attestation is created for the agreed values.

The `main` function puts it all together.
There we load our light DID, create a claim and finally the request for attestation.

## Create Request

A claim is composed of attributes that we claim to be true about us.
Since we want to receive an attestation for that claim, we build a `RequestForAttestation`.
The request contains all necessary information, so that the <span className="label-role attester">Attester</span> can create an attestation for us.
Create a file `claimer/generateRequest.ts` and copy the code below.

<CodeBlock className="language-js" title="claimer/generateRequest.ts">
  {GenerateRequest}
</CodeBlock>

When `Attestations` are given by <span className="label-role attester">Attesters</span>, they are written to chain which requires a deposit.
Each new `RequestForAttestation` is unique.
While we're testing, we can store and reuse requests to avoid
multiple attestations.
To do this store the output into `./claimer/_request.json`.
You can also share this
request with others in the workshop to see how they get denied from fraudulent senders.

## Run

Run it from command line:

```bash
yarn ts-node claimer/generateRequest.ts
```

OK, you've made a claim as a <span className="label-role claimer">Claimer</span> and created a request for attestation.
Let's finish up our <span className="label-role attester">Attester</span> and get a Credential!
