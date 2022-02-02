---
id: claimer
title: 👤 Claimer
---

In this section you will walk though all processes done by the <span class="label-role claimer">Claimer</span>.

1. You will [create an account](./account) for the <span class="label-role claimer">Claimer</span>.
2. Next step is to [create a DID](./did) which is the identity that is used to interact with <span class="label-role attester">Attesters</span> and <span class="label-role verifier">Verifiers</span>.
3. We will create a claim, request a credential and present our credneital to a <span class="label-role verifier">Verifier</span>

## Folder Structure

Create the following files in the <span class="label-role claimer">Claimer</span> folder.
This folders serves to mimic a <span class="label-role claimer">Claimer</span>'s perspective,
we'll interact with `claimer/index.js` from our main project file.

```bash
└─ kilt-rocks # project
    └─ claimer # all attester code
      ├─ createClaim.js # creates a claim object
      ├─ createPresentiation.js # creates a credential presentation for Verifiers
      ├─ createRequest.js # creates a claim request for Attesters
      ├─ generateKeypairs.js # generates your private keypairs for the light DID
      ├─ getAccount.js # loads the Claimer account
      ├─ getLightDid.js # loads the Claimer light DID
      └─ index.js # main entry for project index
  ...
```
