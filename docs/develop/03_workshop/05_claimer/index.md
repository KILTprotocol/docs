---
id: claimer
title: 👤 Claimer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will walk though all processes done by the <span className="label-role claimer">Claimer</span>.

1. The first step is to [create a DID](./01_did.md), which is the identity that is used to interact with <span className="label-role attester">Attesters</span> and <span className="label-role verifier">Verifiers</span>.
2. Next, we will create a claim, request an attestation and generate a credential using the attestation for our claim.
3. Finally we will present it to a <span className="label-role verifier">Verifier</span>.

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
      └─ generateKeypairs.ts # create keypairs for the light DID
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ claimer/ # all claimer code
      ├─ createClaim.js # creates a claim
      ├─ createPresentation.js # creates a presentation for verifiers
      ├─ generateCredential.js # create the credential object that is sent to the attester for attestation
      └─ generateKeypairs.js # create keypairs for the light DID
  ```

  </TabItem>
</Tabs>
