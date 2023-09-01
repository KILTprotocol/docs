---
id: claimer
title: 👤 Claimer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will walk though all processes done by the <span className="label-role claimer">Claimer</span>.

1. You will [create an account](./01_account.md) that is used to pay for all transactions and the storage deposits.
2. The nex step is to [create a DID](./02_did.md), which is the identity that is used to interact with <span className="label-role attester">Attesters</span> and <span className="label-role verifier">Verifiers</span>.
3. Next, we will create a claim, request an attestation and generate a credential using the attestation for our claim.
4. Finally we will present it to a <span className="label-role verifier">Verifier</span>.

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
      ├─ generateAccount.ts # functions for setting up and loading the claimers account
      ├─ generateDid.ts # registers the claimer on-chain DID
      └─ generateKeypairs.ts # create keypairs for the DID
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ claimer/ # all claimer code
      ├─ createClaim.js # creates a claim
      ├─ createPresentation.js # creates a presentation for verifiers
      ├─ generateCredential.js # create the credential object that is sent to the attester for attestation
      ├─ generateAccount.js # functions for setting up and loading the claimers account
      ├─ generateDid.js # registers the claimer on-chain DID
      └─ generateKeypairs.js # create keypairs for the DID
  ```

  </TabItem>
</Tabs>
