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

To get a credential, a Claimer needs to go through following process:

1. Find a **CType** a claim should be based on. Potential Attesters and Verifiers might advertise this information themselves.
2. Make a **claim** containing a set of properties about themselves.
3. Potentially request and receive **Terms** and agree on a **Quote** with the potential Attester.
4. **Request a (credential) attestation** from the Attester.
5. Wait for the claim to be **attested** by the Attester.

To verify a credential, a Claimer can generate a presentation of it to a Verifier, with the following process:

1. The Verifier may request a **credential** as the first step, along with with properties to reveal from such Credential.
2. The Claimer selectively **discloses** the requested properties and signs the generated presentation.
3. The Verifier **checks** the presentation structure, content and signature, and decides whether they trust the Attester of the presented credential.

Each step is described in more detail in the next sections.

If you want to learn about how implement the above flow in a dapp that interacts with a browser extension, please refer to the [Credential API specification](https://github.com/KILTprotocol/credential-api/blob/master/readme.md).
