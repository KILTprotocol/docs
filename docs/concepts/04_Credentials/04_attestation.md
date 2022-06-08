---
id: attestation
title: Attestations
---

In KILT, the terms Attestation and Credential are often used interchangeably, albeit their meaning is slightly different.
Precisely, an *Attestation* includes the on-chain proof that a given Claim has been attested, while a *Credential* includes the Attestation information but also everything else that was included in the `RequestForAttestation`.

To write an Attestation on the blockchain, the Attester checks the validity of the received `RequestForAttestation`, ensuring that the data inside the Claim match the requirements of the Attestation (e.g., that the user's name is indeed Alice).

After that, the Attester writes the `RequestForAttestation`'s root hash on the KILT blockchain, basically certifying that a Claim with that root hash is valid.
The information about the on-chain Attestation and the original `RequestForAttestation` is what composes the final Credential object.
Optionally, the Attester can send the Credential back to the Claimer.
Alternatively, the Claimer can monitor the blockchain themselves to listen for the event resulting from the attestation process, and then re-create the Credential object.

After the Claimer has either received or re-created the Credential, they store it in their own wallet and can now use it with Verifiers that trust credentials issued by the Attester.

