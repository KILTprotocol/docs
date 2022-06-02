---
id: verification
title: Verification
---

KILT allows a verifier to check if the information in a credential presented by a claimer is correct and valid.
With the presentation of the credential, the claimer also presents evidence to the validator that a third party (attester) ensured the correctness of the claimer’s attributes.

The verifier trusts this third party (attester) either because they trust the reputation of the attester directly or they trust a delegation hierarchy that the attester is part of (e.g. State department issuing driving licenses.)

For the verification process:

- The claimer needs their credential and the private key associated with their identifier.
- The verifier needs the identifier of the trusted attester

During the verification process the claimer wants to prove three things to the verifier:

- The attestation for the claim is valid
- The claim actually belongs to the claimer presenting it
- The claim contains the information that the verifier is interested in

## Requesting a Credential from a Claimer
The verifier may request a credential from a claimer, providing following data:
- **CTypes**: Here the verifier can define which CTypes they can work with for their use-case. They can provide multiple options, which have to be regarded as alternatives.
- **TrustedAttesters**: Per CType, the verifier can define which attesters they would automatically trust.
- **RequiredProperties**: Per CType, the verifier can define which properties they would at least need to see, to fulfill the verification. More on "Selective Disclosure" later.
- **Challenge**: The verifier can provide a nonce, which the claimer would have to sign to prove ownership of the presented credential. More on that later.

## Presenting a Credential with Selective Disclosure

The claimer can decide how much of the information in their credential they wish to reveal before they send it to the verifier.
They can choose to hide attributes and thus only disclose a subset of the data.

For example, if sending a driving license to confirm their age, they may want to show only their name and date of birth, while withholding their address and any other details.

This improves the privacy of the claimer since they only need to show attributes that are required in the specific context.

:::caution
The presentations can still be correlated, since the hash of the credential always stays the same, even when creating new presentations and selecting different attributes to show.
:::

## Verifying a Credential

The verifier receives the credential from the claimer, calculates the attestation hash and queries the attestation on-chain, including the revocation status.

If the claimer tampered with the credential, the hash won’t match any attestation on the chain
On the other hand, if the attestation hash is on the chain and has not been revoked, the credential is valid.

However, this does not verify that the claimer is the rightful/legitimate owner of the credential presented.
So please read on for how to check that.

## Verifying the Owner of the Credential

A credential is linked to the did (decentralized identifier) of the claimer.
This did can be used to obtain the public key of the claimer.

The verifier assumes that the private key for this public key is only known to the legitimate owner of the credential.
Therefore, when sending the request for the credential, the verifier challenges the claimer to sign a nonce (a random number that is used once) that the verifier sends together with his request.

If the claimer can sign both the nonce and the credential with the private key that corresponds to the public key in the credential, the verifier can be sure that the claimer is indeed the legitimate owner of the credential.

## Verifying the Content of the Credential

After the verifier has checked that the credential is valid and belongs to the claimer, they still need to verify that they have received all the information they require as the credential received could contain the right values, but not the right semantics.
For example, the _age_ property could have different meanings depending on whether it was for a passport CType or a Whisky Certificate CType.
Therefore, the verifier has to check if the CType matches the CType expected.

As the claimer can choose to only disclose a subset of the attributes that are contained in the credential, the verifier also needs to check that they have received all the attributes they requested.
