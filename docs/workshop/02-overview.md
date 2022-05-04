---
id: overview
title: 👓 Overview
---

In this tutorial, we'll run through the full story of a claim.

To do so, three actors will be involved: a <span class="label-role claimer">Claimer</span>, an <span class="label-role attester">Attester</span> and a <span class="label-role verifier">Verifier</span>.
You'll be playing all three roles. In the real world, these actors would be running different services, so we set up different folders to mimic this separation.

Both the <span class="label-role verifier">Verifier</span> and the <span class="label-role attester">Attester</span> have to interact with the KILT blockchain.
But only the <span class="label-role attester">Attester</span> is required to own KILTs since they have to pay for storing attestation on chain.
The <span class="label-role verifier">Verifier</span> only needs to query the KILT blockchain to ensure that the attestation is still valid and was not revoked.
The <span class="label-role claimer">Claimer</span> is not required to query the blockchain, but they might do so to check whether their credential is still valid or the attester has revoked it in the meantime.

## Request an Attestation

Before the <span class="label-role claimer">Claimer</span> can receive an attestation, they need to generate a [light DID](../0-core-feature/0_did.md#light-dids), which they can do completely off-chain.
The <span class="label-role attester">Attester</span> has to register their DID on chain and therefore needs KILT coins.

After both the <span class="label-role attester">Attester</span> as well as the <span class="label-role claimer">Claimer</span> have set up their identities, the <span class="label-role claimer">Claimer</span> can start the attestation process by requesting an attestation from the <span class="label-role attester">Attester</span>.

```mermaid
sequenceDiagram
actor C as Claimer
actor A as Attester
participant B as KILT Blockchain
    C->>+C: Setup request for attestation
    C->>+A: Transmit request for attestation
    A->>A: Validate received attributes
    A->>+B: Store attestation
    B-->>-A: Attestation hash
    A-->>-C: Attestation Hash
    C->>C: Build Credential
```

## Verify an Attestation

The <span class="label-role verifier">Verifier</span> requests a presentation from the  <span class="label-role claimer">Claimer</span> for a specific CType.
Without a specific CType, the presentation is meaningless.
Thus, it is important to require this.
We will [explain CTypes in more detail](attester/ctype) in a later chapter.
A presentation is derived from a credential and does not need to contain all attributes.
A <span class="label-role claimer">Claimer</span> could choose to hide their address from their passport if the <span class="label-role verifier">Verifier</span> is only interested in their age.

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
