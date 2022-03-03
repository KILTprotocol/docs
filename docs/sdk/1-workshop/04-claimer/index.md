---
id: claimer
title: 👤 Claimer
---

In this section you will walk though all processes done by the <span class="label-role claimer">Claimer</span>.

1. First step is to [create a DID](./did) which is the identity that is used to interact with <span class="label-role attester">Attesters</span> and <span class="label-role verifier">Verifiers</span>.
2. Next we will create a claim, request a credential and present it to a <span class="label-role verifier">Verifier</span>

## Folder Structure

Create the following files in the <span class="label-role claimer">Claimer</span> folder.
This folders serves to mimic a <span class="label-role claimer">Claimer</span>'s perspective.

```bash
└─ kilt-rocks/ # project
  └─ claimer/ # all claimer code
    ├─ createClaim.js # creates a claim
    ├─ createPresentation.js # creates a presentation for verifiers
    ├─ generateKeypairs.js # create keypairs for the light DID
    ├─ generateLightDid.js # create the light DID for the claimer
    └─ generateRequest.js # create the request for attestation that is sent to the attester
```
