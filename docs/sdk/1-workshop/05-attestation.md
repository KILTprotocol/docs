---
id: attestation
title: 🧾 Attestation
---

import CodeBlock from '@theme/CodeBlock';
import SnippetBlock from '../../../src/components/SnippetBlock';
import AttestClaim from '!!raw-loader!../../../code-examples/workshop/attester/attestClaim.ts';

In this section, your <span class="label-role attester">Attester</span> will receive and process a `RequestForAttestation` where you'll

- Attest or deny it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `Attestation` object which will be send back to the <span class="label-role claimer">Claimer</span>.

## Attest a Claim

The `attestClaim` function first initialized all libraries, as always.
After that we can load the account and DID of the <span class="label-role attester">Attester</span>.
When everything is prepared, we can create an attestation using the request we received from the <span class="label-role claimer">Claimer</span>.
The attestation becomes valid once it is submitted to the chain.

<CodeBlock className="language-js" title="attester/attestClaim.ts">
  {AttestClaim}
</CodeBlock>

The function `attestingFlow` shows the process from the beginning to the end.
First the <span class="label-role claimer">Claimer</span> generates the request and sends it to the <span class="label-role attester">Attester</span>.
After that the <span class="label-role attester">Attester</span> checks the attributes and either issues an attestation or denies the attestation because the attributes are invalid.
The once the attestation is written on chain and send back to the <span class="label-role claimer">Claimer</span>, they can build a credential from the request they send and the attestation they received.

## Run

run it from command line:

```bash
yarn ts-node attester/attestClaim.ts
```

You can copy the `Credential` object if you want to test with other `Verifiers` in the workshop :-)

Your job as an <span class="label-role attester">Attester</span> is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `Credential` object for the <span class="label-role claimer">Claimer</span>.

Let's move on to setup our <span class="label-role verifier">Verifier</span>!
