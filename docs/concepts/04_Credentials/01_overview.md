---
id: overview
title: Overview
---
import ThemedImage from '@theme/ThemedImage';

**Credentials** are attested claims which are owned by a **Claimer**, attested by an **Attester** and can be verified by a **Verifier**.

<ThemedImage
  alt="Credential Overview Diagram"
  sources={{
    light: '/img/concepts/credentials/overview.png',
    dark: '/img/concepts/credentials/overview_dark.png'
  }}
/>

To get a Credential, a Claimer needs to go through following process:
1. Find a **CType**, a Claim should be based on (can be advertised by the potential Attester and Verifier)
2. Make a **Claim**
3. Potentially request and receive **Terms** and agree on a **Quote** with an Attester
4. **Request an Attestation**
5. Wait for the Claim to be **attested** by the Attester

To verify the Credential, a Claimer can send a presentation of it to a Verifier

1. The Verifier may request a **Credential** as the first step
2. The Claimer selects properties they want to **disclose** and signs the Presentation of the Credential
3. The Claimer sends the **Presentation** to the Verifier
4. The Verifier **checks** its structure, content and signature and decides, if they trust the Attester

The next sections explain these steps in detail.

If you want to learn about how it would work with a browser extension, refer to the [Credential API](https://github.com/KILTprotocol/credential-api/blob/master/readme.md)
