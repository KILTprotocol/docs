---
id: overview
title: 👓 Overview
---

import Mermaid from '@theme/Mermaid';

In this tutorial, we'll run through the full story of a claim.

To do so, three actors will be involved: a <span class="label-role claimer">Claimer</span>, an <span class="label-role attester">Attester</span> and a <span class="label-role verifier">Verifier</span>.
You'll be playing all three roles. In the real world, these actors would be running different services, so we set up different folders to mimic this separation.

These three actors will be exchanging various objects.
The most important one is the `credential`.
This is how a `credential` is created:

<Mermaid
chart={`graph TD;
CType --> claim;
claimContents[Claim Content] --> claim;
claimerDid[Claimer DID] --> claim;
claim --> requestForAttestation;
requestForAttestation --> attestation;
requestForAttestation --> credential;
AttesterDID[Attester DID] --> attestation;
attestation --> credential;
`}
/>

That's a mouthful, but don't worry - we'll dig deeper into the elements of this diagram in the next steps! For now, just keep in mind:

- A credential has a certain type (CType);
- Obtaining a credential is a multiple-step process that involves a <span class="label-role claimer">Claimer</span> - such as a citizen who makes a claim about themselves - and an <span class="label-role attester">Attester</span> - such as a government agency that certifies this claim. A <span class="label-role verifier">Verifier</span> - such as a government officer - will later on check the validity of the credential.

OK, let's start by generating KILT <span class="label-role attester">Attester</span> account, and then we'll go on and create a claim.
