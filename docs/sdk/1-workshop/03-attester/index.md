---
id: attester
title: 🏢 Attester
---

In this section you will walk though all processes done by the <span class="label-role attester">Attester</span>.

1. You will [create an account](./account) that is used to pay for all transactions and the storage deposits.
2. Next step is to [create a DID](./did) which is the identity that is used to create attestations.
   While you always can switch the KILT account and pay deposits and fees with any account you like, your DID is the way claimers will identify you and put trust in you.
3. Before we can attest claims, [we need a CType](./ctype) which describes and gives context to what we attest.
4. After we can pay fees and deposits, have an identity and a CType [we can create attestations](../attestation).

## Folder Structure

Create the following files in the <span class="label-role attester">Attester</span> folder.
This folders serves to mimic an <span class="label-role attester">Attester</span> service.

```bash
└─ kilt-rocks/ # project
  └─ attester/ # all attester code
    ├─ attestClaim.js # issues attestations
    ├─ ctypeSchema.js # create a local ctype definition
    ├─ generateAccount.js # functions for setting up and loading the attesters account
    ├─ generateCtype.js # register the ctype on chain
    ├─ generateDid.js # registers the attesters on chain DID
    └─ generateKeypairs.js # setup the keys for the attesters DID
```
