---
id: overview
title: Overview
---
import ThemedImage from '@theme/ThemedImage';

**Credentials** consist of a set of claims which belong to a **Claimer**, are attested by an **Attester** and can be verified by **Verifiers**.

<center>
<ThemedImage
  alt="Credential Overview Diagram"
  sources={{
    light: '/img/concepts/credentials/overview.png',
    dark: '/img/concepts/credentials/overview_dark.png'
  }}
/>
</center>

To get a Credential, a Claimer needs to go through following process:

1. Find a **CType** a Claim should be based on. Potential Attesters and Verifiers might advertise this information themselves.
2. Make a **Claim** containing a set of properties about themselves.
3. Potentially request and receive **Terms** and agree on a **Quote** with the potential Attester.
4. **Request a (Credential) Attestation** from the Attester.
5. Wait for the Claim to be **attested** by the Attester.

To verify a Credential, a Claimer can generate a Presentation of it to a Verifier, with the following process:

1. The Verifier may request a **Credential** as the first step, along with with properties to reveal from such Credential.
2. The Claimer selectively **disclose** the requested properties and signs the generated Presentation.
3. The Verifier **checks** the Presentation structure, content and signature, and decides whether they trust the Attester of the presented Credential.

Each step is described in more detail in the next sections.

If you want to learn about how implement the above flow in a Dapp that interacts with a browser extension, please refer to the [Credential API specification](https://github.com/KILTprotocol/credential-api/blob/master/readme.md).
