---
id: attestation
title: Attestations
---

In KILT, the terms attestation and credential are often used interchangeably, albeit their meaning is slightly different.
Precisely, an *attestation* includes the on-chain proof that a given claim has been attested, while a *credential* includes the attestation information but also everything else that was included in the `RequestForAttestation`.

To write an attestation on the blockchain, the Attester checks the validity of the received `RequestForAttestation`, ensuring that the data inside the claim match the requirements of the attestation (e.g., that the user's name is indeed Alice).

After that, the Attester writes the `RequestForAttestation`'s root hash on the KILT blockchain, basically certifying that a claim with that root hash is valid.
The information about the on-chain attestation and the original `RequestForAttestation` is what composes the final credential object.
Optionally, the Attester can send the credential back to the Claimer.
Alternatively, the Claimer can monitor the blockchain themselves to listen for the event resulting from the attestation process, and then re-create the credential object.

After the Claimer has either received or re-created the credential, they store it in their own wallet and can now use it with Verifiers that trust credentials issued by that Attester.

For a detailed developer-oriented guide to KILT attestations, see our [Attestation Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md).
