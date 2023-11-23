---
id: claimer
title: 👤 Claimer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section covers the steps undertaken by the <span className="label-role claimer">Claimer</span>.

Here's an overview:

1. [Create a DID](./01_did.md), which is the identity used to interact with <span className="label-role attester">Attesters</span> and <span className="label-role verifier">Verifiers</span>.
2. Create a claim, request an attestation, and generate a credential using the attestation for our claim.
3. Present the claim to a <span className="label-role verifier">Verifier</span>.

## What is a Claimer?

A Claimer is an individual or institution that makes a claim or statement about their identity or abilities.
They can use their identity credentials to prove these claims, and third-party institutions verify them.

Anyone can be a Claimer.
All you need to do is complete a CType and create a claim.
Then, you can send these claims to Attesters for verification.

Claimers are crucial in the Self-Sovereign Identity system.
They have full control over their data and decide which data to share, where, and how.

They store their identity credentials in their digital wallets, so they decide which information to provide to which service.

You don't need to create a DID on the chain, meaning you are entirely independent!

Claimers can use their accounts without needing a chain connection.


## Folder Structure

Create the following files in the <span className="label-role claimer">Claimer</span> folder.
This folders serves to mimic a <span className="label-role claimer">Claimer</span>'s perspective.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  └─ kilt-rocks/ # project
    └─ claimer/ # all claimer code
      ├─ createClaim.ts # creates a claim
      ├─ createPresentation.ts # creates a presentation for verifiers
      ├─ generateCredential.ts # create the credential object that is sent to the attester for attestation
      ├─ generateKeypairs.ts # create keypairs for the light DID
      └─ generateLightDid.ts # create the light DID for the claimer
  ```

  ```bash
  mkdir claimer && touch claimer/createClaim.ts && touch claimer/createPresentation.ts && touch claimer/generateCredential.ts && touch claimer/generateKeypairs.ts && touch claimer/generateLightDid.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ claimer/ # all claimer code
      ├─ createClaim.js # creates a claim
      ├─ createPresentation.js # creates a presentation for verifiers
      ├─ generateCredential.js # create the credential object that is sent to the attester for attestation
      ├─ generateKeypairs.js # create keypairs for the light DID
      └─ generateLightDid.js # create the light DID for the claimer
  ```

  ```bash
  mkdir claimer && touch claimer/createClaim.js && touch claimer/createPresentation.js && touch claimer/generateCredential.js && touch claimer/generateKeypairs.js && touch claimer/generateLightDid.js
  ```

  </TabItem>
</Tabs>
