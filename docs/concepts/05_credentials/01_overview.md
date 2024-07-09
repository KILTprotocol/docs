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

To get a credential, a Claimer needs to take the following steps:

1. Find a **CType** to base a claim on. Potential Attesters and Verifiers might advertise this information themselves.
2. Make a **claim** containing a set of properties about themselves.
3. Fulfil any requirement from your Attester; e.g. accepting their **Terms** and paying a **Quote**. 
4. **Request an attestation** from the Attester.
5. Wait for the Attester to **attest** claims.

Once attested, the claims are considered to be a valid credential.

To use a Credential, the Claimer can generate a Credential-Presentation for a Verifier.
The verification would follow this process:

1. The Verifier may request a **Credential** of a CType, along with with properties to reveal.
He would also provide a **challenge** to ensure the presentations are not recycled. 
2. The Claimer selectively **discloses** the requested properties and signs them along with the challenge to generate a presentation.
3. The Verifier **verify** the presentation structure, content and signature, and decides whether they trust the Attester of the presented credential.

The next sections describe each step in more detail.

:::info

To learn about how to implement the flow above in a dapp that interacts with a browser extension, read the [Credential API specification](https://github.com/KILTprotocol/spec-ext-credential-api).

:::
