---
id: attestation
title: Attestations
---

KILT uses the terms Attestation and Credential interchangeably, but their meaning is different.
A _Credential_ includes the original claimer's data and all the information linked to it, while an _Attestation_ only refers to the on-chain proof that a given credential has been attested.

To write an attestation on the KILT blockchain, the Attester checks the validity of the received to-be-attested `Credential` data, ensuring that the data inside it matches the requirements of the attestation. For example, that the user's name is indeed Alice.

After that, the Attester writes the `Credential`'s root hash on the KILT blockchain, certifying that a credential with that root hash is valid.
The Claimer can monitor the blockchain to listen for the event resulting from the attestation process, marking when the credential is attested and usable.

After the credential has been attested, the Claimer can store it in their wallet and can now use it with Verifiers that trust credentials issued by that Attester.

:::info

For a detailed developer-oriented guide to KILT attestations, read the [Attestation cookbook section](../../develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md).

:::

### Storing attestations

Storing a attestation in the blockchain requires providing a constant deposit, which is currently around 0.12 KILT. The deposit amount is calculated based on the worst-case scenario for a attestation, where the maximum storage for one attestation reaches 179 bytes.
The deposit serves as a security measure to ensure the integrity of the blockchain and incentivize users to manage their attestation responsibly.
By requiring a deposit, it discourages spamming or unnecessary creation of attestation.
The attester can reclaim the deposit by deleting their attestation.
Revoking them isn't sufficient as the deposit still shows in chain storage, but marked as invalid.