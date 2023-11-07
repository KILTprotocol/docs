---
id: overview
title: 👓 Overview
---

This tutorial runs through the full story of a claim.

It involves three actors, which work together to create **distributed trust**:

-   A <span className="label-role claimer">Claimer</span> is an actor that claims to posses certain credentials, abilities, or other attributes.
-   An <span className="label-role attester">Attester</span> is an actor that verifies the claims of a <span className="label-role claimer">Claimer</span>.
-   A <span className="label-role verifier">Verifier</span> is an actor that asks for proof of a claim.

For the workshop you'll play all three roles.

In a real world use case, these actors would be different people and services, which this workshop simulates by using different folders for each service.
Each actor typically performs different roles:

-   Both the <span className="label-role verifier">Verifier</span> and the <span className="label-role attester">Attester</span> have to interact with the KILT blockchain.
-   But only the <span className="label-role attester">Attester</span> is required to own KILTs since they have to pay for storing the attestation on chain.
-   The <span className="label-role verifier">Verifier</span> only needs to query the KILT blockchain to ensure that the attestation is still valid and was not revoked.
-   The <span className="label-role claimer">Claimer</span> is not required to query the blockchain, but they might do so to check whether their credential is still valid or if the <span className="label-role attester">Attester</span> has revoked it in the meantime.

## Request an Attestation

Before the <span className="label-role claimer">Claimer</span> can attest a credential, they need to generate a [light DID](../01_sdk/02_cookbook/01_dids/01_light_did_creation.md), which can happen off-chain.

The <span className="label-role attester">Attester</span> has to register their DID on chain and needs KILT coins.

After both the <span className="label-role attester">Attester</span> and the <span className="label-role claimer">Claimer</span> have set up their identities, the <span className="label-role claimer">Claimer</span> can start the attestation process by requesting an attestation from the <span className="label-role attester">Attester</span>.

```mermaid
sequenceDiagram
actor C as Claimer
actor A as Attester
participant B as KILT Blockchain
    C->>+C: Create credential from provided claims
    C->>+A: Transmit credential to request attestation
    A->>A: Validate received attributes
    A->>+B: Store attestation
    B-->>-A: Attestation hash
    A-->>-C: Attestation Hash
```

1. The <span className="label-role claimer">Claimer</span> prepares the Credential to attest, along with some proof, for example, a bank statement and ID.
2. They send the document to the <span className="label-role attester">Attester</span> for attestation.
3. Upon receiving the credential, the <span className="label-role attester">Attester</span> decides whether the claim is valid by examining the proofs. If the <span className="label-role claimer">Attester</span> trusts the claim, they store the attestation document's hash value on the chain, which is a non-functional copy of the document.
4. The <span className="label-role attester">Attester</span> sends this hash value to the <span className="label-role claimer">Claimer</span>, which represents verification of a document.

## Verify an Attestation

The <span className="label-role verifier">Verifier</span> requests a presentation from the <span className="label-role claimer">Claimer</span> for a specific required CType. Without a specific CType, the presentation is meaningless.

<!-- TODO: Find out more link… -->

A presentation is derived from a credential and does not need to contain all attributes.

After the request, the <span className="label-role claimer">Claimer</span> can choose to hide elements of their credentials that aren't relevant to the claim. For example, hide their address from their ID if the <span className="label-role verifier">Verifier</span> is only interested in their age.

:::info

A later step in the workshop [explains CTypes in more detail](./04_attester/03_ctype.md).

:::

```mermaid
sequenceDiagram
actor C as Claimer
actor V as Verifier
participant B as KILT Blockchain
    V->>+C: Request presentation for CType
    C->>C: Derive a presentation from a credential
    C-->>-V: submit presentation
    V->>B: check validity of presentation
```

### Example: Requesting a travel visa

To take an example of applying for a travel visa:

1. The Embassy (analogous to the Verifier) asks a traveler (analogous to the Claimer), for a specific document or CType. For example, it could be a bank statement. The Embassy asks, "Provide proof of financial stability, and we'll grant you a visa." The traveller gets the bank statement from their bank, gets it attested by the bank (The Attester), and prepares the document.
2. The document is ready, but the Embassy doesn't need all the information in the document. The embassy wants to know if a traveller has sufficient funds, but they don't need to know any transaction details. So, the traveller redacts or hides these details while presenting.
3. The traveller presents the document to the embassy.
4. The embassy verified the document's authenticity by comparing its hash value with the one on their internal system or a decentralized ledger.
5. Since they trust the Attester (in this case, the bank that attested the bank statement), they approved the visa application.

:::tip Summary

As you can see, the Embassy didn't need to trust the Claimer directly in this system. They trusted the Attester, whom they had previously worked with or respected due to their position. And with that trust, they granted the visa.

Even though this process emerged due to the trust in the Attester, the Attester was not involved in the second stage, so they were unaware of it. Privacy was achieved with distributed trust.

:::