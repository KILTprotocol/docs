---
id: attestation
title: Attestations
---

To create an attestation, the attester first receives a message with a `RequestForAttestation` object from the claimer.

The attester then decrypts the message (if needed) and checks the validity of the content, ensuring that:

- the structure of the `RequestForAttestation` object is correct
- the owner of the `RequestForAttestation` is the sender of the message

To create the attestation, the attester:

- manually verifies the data inside the claim by checking that all the data fields match the requirements of the attestation
- creates an attestation object from the root hash of the `RequestForAttestation` and the attester’s address.
- stores the attestation hash on the chain by submitting a new transaction with the attester’s signature.

Once this is done, the attester can optionally create a `Credential` object from the `RequestForAttestation` and the `Attestation` objects and send it back to the claimer.
This is a way to inform the claimer, that the attestation was done.
Otherwise the claimer can also just listen to changes on the blockchain, since they already know the attestation hash to listen to.

If the attester opts to send a message, we also recommend encrypting it, since it contains privacy concerning information.

After the claimer is informed (or informs themselves) about the attestation, they store the attestation information in their own wallet and can use it now to proof something about themselves to a verifier.
