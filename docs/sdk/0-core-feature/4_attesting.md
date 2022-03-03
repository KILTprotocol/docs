---
id: attesting
title: Attesting
---

There are three actors in the KILT workflow: Claimers, Attesters and Verifiers.

To create an attestation, the attester first receives a message with a `RequestForAttestation` object from the claimer.

The attester then decrypts the message and the KILT SDK automatically checks the validity of the encrypted content, ensuring that:

- the hash of the encrypted object matches the concatenation of the message, nonce (a number that is used once) and date of creation fields of the encrypted object
- the address of the sender matches the signature of the encrypted message

These ensure that the sender of the message is the owner of the encapsulated claim.

There are several steps to creating the attestation. The attester:

- manually verifies the data inside the claim by checking that all the data fields match the requirements of the attestation
- creates an attestation object from the extracted RequestForAttestation and the attester’s address.
- stores the attestation hash on the chain by preparing an unsigned transaction and then submitting it with the attester’s signature.

Once this is done, the attester:

- creates an `AttestedClaim` object from the `RequestForAttestation` and the attestation objects
- encrypts the `AttestedClaim` object
- sends the encrypted `AttestedClaim` object back to the claimer.

The claimer then stores the attestation in their own wallet and can use it as they wish.
