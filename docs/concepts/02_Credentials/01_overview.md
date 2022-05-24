---
id: overview
title: Overview
---

**Credentials** are attested claims which are owned by a **Claimer**, attested by an **Attester** and can be verified by a **Verifier**.

To get a Credential a Claimer needs to go through following process:
1. Find a **CType**, a Claim should be based on (Can be advertised by the potential Attester and Verifier)
2. Make a **Claim**
3. Potentially request and receive **Terms** and agree on a **Quote** with an Attester
4. **Request an Attestation**
5. Wait for the Claim to be **attested** on-chain by the Attester

To verify the Credential a Claimer can send a presentation of it to a Verifier

1. The Verifier may request a **Credential** as the first step, providing a nonce for security reasons
2. The Claimer selects properties he wants to **disclose** and signs the Presentation of the Credential including the nonce
3. The Claimer sends the **Presentation** to the Verifier
4. The Verifier **checks** the signature, nonce, claim contents and decides, if he trusts the Attester

The next sections explain these steps in detail.

If you want to learn about how it would work with a browser extension, refer to the [Credential API](https://github.com/KILTprotocol/credential-api/blob/master/readme.md)
