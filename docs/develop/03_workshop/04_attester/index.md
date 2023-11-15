---
id: attester
title: 🏢 Attester
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section of the workshop covers creating the <span className="label-role attester">Attester</span> code. The steps are the following:

1. [Create an account](./01_account.md) to pay for all transactions and storage deposits.
2. [Create a DID](./02_did.md), which is the identity used to create attestations.

  While you can always switch the KILT account and pay deposits and fees with any account you like, your DID stays the same and is the way Claimers identify and trust you.

1. Before you can attest claims, [you need a CType](./03_ctype.md) that describes and gives context to what you attest.
2. Once you have a way to pay fees and deposits, have an identity, and a CType, [you can create attestations](../06_attestation.md).

## Folder Structure

Create the following files in the `attester` folder.
These folders mimics an <span className="label-role attester">Attester</span> service.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  └─ kilt-rocks/ # project
    └─ attester/ # all attester code
       ├─ attestCredential.ts # issues attestations
       ├─ ctypeSchema.ts # create a local CType definition
       ├─ generateAccount.ts # functions for setting up and loading the attester's account
       ├─ generateCtype.ts # register the CType on chain
       ├─ generateDid.ts # registers the attester's on-chain DID
       └─ generateKeypairs.ts # setup the keys for the attester's DID
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ attester/ # all attester code
       ├─ attestCredential.js # issues attestations
       ├─ ctypeSchema.js # create a local CType definition
       ├─ generateAccount.js # functions for setting up and loading the attester's account
       ├─ generateCtype.js # register the CType on chain
       ├─ generateDid.js # registers the attester's on-chain DID
       └─ generateKeypairs.js # setup the keys for the attester's DID
  ```

  </TabItem>
</Tabs>
