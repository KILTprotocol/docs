---
id: claimer
title: 👤 Claimer
---

In this section you will walk though all processes done by the <span class="label-role claimer">Claimer</span>.

1. First step is to [create a DID](./did) which is the identity that is used to interact with <span class="label-role attester">Attesters</span> and <span class="label-role verifier">Verifiers</span>.
2. Next we will create a claim, request a credential and present it to a <span class="label-role verifier">Verifier</span>

## Folder Structure

Create the following files in the <span class="label-role claimer">Claimer</span> folder.
This folders serves to mimic a <span class="label-role claimer">Claimer</span>'s perspective,
we'll interact with `claimer/index.js` from our main project file.

```bash
└─ kilt-rocks/ # project
  └─ claimer/ # all claimer code
    ├─ generateKeypairs.js # create keypairs for the light DID
    ├─ createClaim.js # creates a claim
    ├─ createPresentation.js # creates a presentation for verifiers
    ├─ createRequest.js # creates a request for attestation
    ├─ getAccount.js # returns Claimer account
    ├─ getLightDid.js # returns Claimer's light DID
    ├─ index.js # main entry for out test script
    └─ _request.json # development request to prevent dupe attestations
  ...
```
