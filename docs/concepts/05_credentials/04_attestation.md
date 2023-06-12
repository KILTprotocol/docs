---
id: attestation
title: Attestations
---

In KILT, the terms Attestation and Credential are often used interchangeably, albeit their meaning is slightly different.
Precisely a *credential* includes the original claimer's data and all the information linked to it, while an *attestation* only refers to the on-chain proof that a given credential has been attested.

To write an attestation on the blockchain, the Attester checks the validity of the received to-be-attested `Credential`, ensuring that the data inside it match the requirements of the attestation (e.g., that the user's name is indeed Alice).

After that, the Attester writes the `Credential`'s root hash on the KILT blockchain, basically certifying that a credential with that root hash is valid.
The Claimer can hence monitor the blockchain themselves to listen for the event resulting from the attestation process, marking the moment in which the credential is attested and hence becomes usable.

After the credential has been attested, the Claimer can store it in their own wallet and can now use it with Verifiers that trust credentials issued by that Attester.

For a detailed developer-oriented guide to KILT attestations, see our [Attestation Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md).

### Storaging Attestations

Storing a attestation in the blockchain requires providing a constant deposit, which is currently around 0.12 KILT. The deposit amount is calculated based on the worst-case scenario for a attestation, where the maximum storage for one attestation reaches 179 bytes.
The deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their attestation responsibly. By requiring a deposit, it discourages spamming or unnecessary creation of attestation.
The deposit can be reclaimed by the attester by deleting their attestation. Revoking them is not sufficient.
