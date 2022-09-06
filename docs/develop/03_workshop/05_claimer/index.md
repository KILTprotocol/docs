---
id: claimer
title: 👤 Claimer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will walk though all processes done by the <span className="label-role claimer">Claimer</span>.

1. First step is to [create a DID](./did) which is the identity that is used to interact with <span className="label-role attester">Attesters</span> and <span className="label-role verifier">Verifiers</span>.
2. Next we will create a claim, request a Credential and present it to a <span className="label-role verifier">Verifier</span>

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
      └─ generateCredential.ts # create the credential object that is sent to the attester for attestation
      ├─ generateKeypairs.ts # create keypairs for the light DID
      ├─ generateLightDid.ts # create the light DID for the claimer
    ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ claimer/ # all claimer code
      ├─ createClaim.js # creates a claim
      ├─ createPresentation.js # creates a presentation for verifiers
      └─ generateCredential.js # create the credential object that is sent to the attester for attestation
      ├─ generateKeypairs.js # create keypairs for the light DID
      ├─ generateLightDid.js # create the light DID for the claimer
  ```

  </TabItem>
</Tabs>