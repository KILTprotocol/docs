---
id: well-known-did-config
title: Well Known DID Configuration
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import DomainLinkageCtype from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageCtype.ts';
import DomainLinkageClaim from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageClaim.ts';
import SignCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/signCredential.ts';
import AttestCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/attestCredential.ts';
import FormatCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/formatCredential.ts';

The Well Known DID Configuration is implemented as a security measure when setting up the communication session between the dapp and extension.

The implementation is based on the [Well Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) specified by the Decentralized Identity Foundation:

## Dapp Steps

Add the following URI to your dapp's root.
The extension will make an HTTP GET request to this URI, and your dapp will respond with the domain configuration resource.

`/.well-known/did-configuration.json`

### Attesting the Domain Linkage Credential

Upon receiving the GET request from the extension, your dapp will make a claim that contains its domain origin and DID.
Then it will self-attest the claim.
This self-attestation is referred to as a Domain Linkage Credential.

#### Making the claim

Your dapp's claim is based on the domain linkage CType, which can be created from the existing CType schema:

<TsJsSnippet>
  {DomainLinkageCtype}
</TsJsSnippet>

The claim is built from the CType, claim contents, and your dapp's unique DID:

<TsJsSnippet>
  {DomainLinkageClaim}
</TsJsSnippet>

#### Adding the signature

Your dapp creates a credential based on the claim and signs the request's root hash with its assertion key.
The resulting signature is then added to the to-be-attested credential.

```ts
import { RequestForAttestation } from '@kiltprotocol/core'
import { FullDidDetails } from '@kiltprotocol/did'
import { Crypto } from '@kiltprotocol/utils'

const requestForAttestation = RequestForAttestation.fromClaim(claim)

<TsJsSnippet>
  {SignCredential}
</TsJsSnippet>

#### Self-attesting the credential

Finally, your dapp creates the self-attestation and credential

<TsJsSnippet>
  {AttestCredential}
</TsJsSnippet>

### Formatting the Domain Linkage Credential

The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential.
Here's how you can present your credential to the extension in the expected format.

<TsJsSnippet>
  {FormatCredential}
</TsJsSnippet>
