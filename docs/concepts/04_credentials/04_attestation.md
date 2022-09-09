---
id: attestation
title: Attestations
---

In KILT, the terms Attestation and Credential are often used interchangeably, albeit their meaning is slightly different.
Precisely a *Credential* includes the original claimer's data and all the information linked to it, while an *Attestation* only refers to the on-chain proof that a given Credential has been attested.

To write an Attestation on the blockchain, the Attester checks the validity of the received to-be-attested `Credential`, ensuring that the data inside the Claim match the requirements of the Attestation (e.g., that the user's name is indeed Alice).

After that, the Attester writes the `Credential`'s root hash on the KILT blockchain, basically certifying that a set of Claims identified by that root hash is valid.
The Claimer can hence monitor the blockchain themselves to listen for the event resulting from the attestation process, marking the moment in which the Credential is attested and hence becomes usable.

After the Credential has been attested, the Claimer can store it in their own wallet and can now use it with Verifiers that trust credentials issued by the Attester.

For a detailed developer-oriented guide to KILT Attestations, please refer to our [Attestation Cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md).
