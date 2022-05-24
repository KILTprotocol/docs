---
id: attestation
title: Attestation
---

To create an attestation, the attester first receives a message with a `RequestForAttestation` object from the claimer.

The attester then decrypts the message and checks the validity of the content, ensuring that:

- the structure of the `RequestForAttestation` object is correct
- the owner of the `RequestForAttestation` is the sender of the message

To create the attestation, the attester:

- manually verifies the data inside the claim by checking that all the data fields match the requirements of the attestation
- creates an attestation object from the root hash of the RequestForAttestation and the attester’s address.
- stores the attestation hash on the chain by submitting a new transaction with the attester’s signature.

Once this is done, the attester:

- creates an `AttestedClaim` object from the `RequestForAttestation` and the attestation objects
- encrypts the `AttestedClaim` object
- sends the encrypted `AttestedClaim` object back to the claimer.

The claimer then stores the attestation in their own wallet and can use it as they wish.
