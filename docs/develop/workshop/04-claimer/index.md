---
id: claimer
title: 👤 Claimer
---

In this section you will walk though all processes done by the <span className="label-role claimer">Claimer</span>.

1. First step is to [create a DID](./did) which is the identity that is used to interact with <span className="label-role attester">Attesters</span> and <span className="label-role verifier">Verifiers</span>.
2. Next we will create a claim, request a credential and present it to a <span className="label-role verifier">Verifier</span>

## Folder Structure

Create the following files in the <span className="label-role claimer">Claimer</span> folder.
This folders serves to mimic a <span className="label-role claimer">Claimer</span>'s perspective.

```bash
└─ kilt-rocks/ # project
  └─ claimer/ # all claimer code
    ├─ createClaim.ts # creates a claim
    ├─ createPresentation.ts # creates a presentation for verifiers
    ├─ generateKeypairs.ts # create keypairs for the light DID
    ├─ generateLightDid.ts # create the light DID for the claimer
    └─ generateRequest.ts # create the request for attestation that is sent to the attester
```
