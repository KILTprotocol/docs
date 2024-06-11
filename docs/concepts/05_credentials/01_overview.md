---
id: overview
title: Overview
---

import ThemedImage from '@theme/ThemedImage';

**Credentials** consist of a set of claims which belong to a **Claimer**, are attested by an **Attester**, and that a **Verifier** can verify.

<center>
<ThemedImage
  alt="Credential Overview Diagram"
  sources={{
    light: '/img/concepts/credentials/overview.png',
    dark: '/img/concepts/credentials/overview_dark.png'
  }}
/>
</center>

To get a credential, a Claimer needs to take the following process:

1. Find a **CType** to base a claim on. Potential Attesters and Verifiers might advertise this information themselves.
2. Make a **claim** containing a set of properties about themselves.
3. Optionally request and receive **Terms** and agree on a **Quote** with the potential Attester.
4. **Request an attestation** from the Attester.
5. Wait for the Attester to **attest** claims.

Once attested, the claims are considered to be a valid credential.

To verify a credential, a Claimer can generate a presentation of it to a Verifier, with the following process:

1. The Verifier may request a **credential** as the first step, along with with properties to reveal from the Credential.
2. The Claimer selectively **discloses** the requested properties and signs the generated presentation.
3. The Verifier **checks** the presentation structure, content and signature, and decides whether they trust the Attester of the presented credential.

The next sections describe each step in more detail.

:::info

To learn about how to implement the flow above in a dapp that interacts with a browser extension, read the [Credential API specification](https://github.com/KILTprotocol/spec-ext-credential-api).

:::
