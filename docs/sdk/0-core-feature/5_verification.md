---
id: verification
title: Verification
---

KILT allows a verifier to check if the information in an attested claim (credential) presented by a claimer is correct and valid as, in addition to the credential, the claimer also presents evidence to the validator that a third party (attester) ensured the correctness of the claimer’s attributes.

The verifier trusts this third party (attester) either because they trust the reputation of the attester directly or they trust a delegation hierarchy that the attester is part of (e.g. State department issuing driving licences.)

For the verification process:

- The claimer needs their credential and the private key associated with their identifier.
- The verifier needs the the identifier of the trusted attester

During the verification process the claimer wants to prove three things to the verifier:

- The attestation for the claim is valid
- The claim actually belongs to the claimer presenting it
- The claim contains the information that the verifier is interested in

## Presenting a Credential

The claimer can decide how much of the information in their credential they wish to reveal before they send it to the verifier. They can choose to hide attributes and thus only disclose a subset of the data. For example, if sending a driving licence to confirm their age, they may want to show only their name and date of birth, while withholding their address and any other details. This improves the privacy of the claimer, since they only need to show attributes that are required in the specific context.

```js
const credential = Kilt.AttestedClaim.fromAttestedClaim(AttestedClaimObject)

const presentation = credential.createPresentation([publicAttributes])
```

## Verifying a Credential

The verifier receives the credential from the claimer, then calculates the attestation hash and queries the revocation status.

```js
const presentation = Kilt.AttestedClaim.fromAttestedClaim(AttestedClaimObject)

presentation.verify()
```

If the claimer tampered with the credential, the hash won’t match an attestation on chain. If the attestation hash is on chain and has not been revoked, the credential is valid.

However, this does not verify that the claimer is the rightful/legitimate owner of the credential presented.

## Verifying the Owner of the Credential

A credential is linked to the identifier of the claimer via the owner field in the claim. This identifier can be used to obtain the public key of the claimer.

The verifier assumes that the private key for this public key is only known to the legitimate owner of the credential. Therefore, when sending the request for the credential, the verifier challenges the claimer to sign a nonce (a number that is used once) that the verifier sends together with his request.

If the claimer is able to sign both the nonce and the credential with the private key that corresponds to the public key in the credential, the verifier can be sure that the claimer is indeed the legitimate owner of the credential.

Note: A nonce is used to ensure that every message is unique, as if the same number was reused the second message would look the same as the first. This means that a malicious party with access to the first message could use it to impersonate the legitimate owner.

## Verifying the Content of the Credential

After the verifier has checked that the credential is valid and belongs to the claimer, they still need to verify that they have received all the information they require as the credential received could contain the right values, but not the right semantics. For example, the _age_ property could have different meanings depending on whether it was for a passport-Ctype or a Whisky Certificate Ctype. Therefore, the verifier has to check if the CType matches the CType expected.

As the claimer can choose to only disclose a subset of the attributes that are contained in the credential, the verifier also needs to check that they have received all the attributes they requested.
