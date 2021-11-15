---
id: overview
title: 👓 Overview
---

In this tutorial, we'll run through the full story of a claim.

To do so, three actors will be involved: a <span class="label-role claimer">claimer</span>, an <span class="label-role attester">attester</span> and a <span class="label-role verifier">verifier</span>. You'll be playing all three roles (unless you're in a KILT workshop and different participants are playing different roles).

These three actors will be exchanging various objects; the most important one is the `credential`.
This is how an `credential` is created:

```mermaid
graph TD
CTYPE --> claim[claim]
claimContents --> claim
claimerAddress --> claim
claimerIdentity[claimerIdentity] --> requestForAttestation
claim --> requestForAttestation
requestForAttestation --> attestation[attestation]
attesterPublicIdentity --> attestation
attestation --> credential[credential]
requestForAttestatIon --> credential[credential]
```

That's a mouthful, but don't worry - we'll dig deeper in the elements of this diagram in the next steps! For now, just keep in mind:

- A credential has a certain type (CTYPE);
- Obtaining a credential is a multiple-step process that involves a <span class="label-role claimer">claimer</span> - such as a citizen who makes a claim about themselves - and an <span class="label-role attester">attester</span> - such as a government agency that certifies this claim. A <span class="label-role verifier">verifier</span> - such as a government officer - will later on check the validity of the credential.

OK, let's start by generating KILT identities, and then we'll go on and create a claim.
