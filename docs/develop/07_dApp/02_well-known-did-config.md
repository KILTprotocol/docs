---
id: well-known-did-config
title: Well Known DID Configuration
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import DomainLinkageCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageCtype.ts';
import DomainLinkageClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageClaim.ts';
import SignPresentation from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/signPresentation.ts';
import AttestCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/attestCredential.ts';
import FormatCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/formatCredential.ts';

The Well Known DID Configuration is implemented as a security measure when setting up the communication session between the dapp and extension.

The implementation is based on the [Well Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) specified by the Decentralized Identity Foundation:

## Dapp Steps

Add the following URI to your dapp's root.
The extension will make an HTTP GET request to this URI, and your dapp will respond with the domain configuration resource.

`/.well-known/did-configuration.json`

### Attesting the Domain Linkage Credential

Upon receiving the GET request from the extension, your dapp will generate a self-issued credential containing its domain origin and DID.
This credential is referred to as a Domain Linkage Credential.

#### Making the claim

Your dapp's credential is based on the domain linkage CType, which can be created from the existing CType schema:

<TsJsSnippet>
  {DomainLinkageCtype}
</TsJsSnippet>

The credential is built from the CType, claim contents, and your dapp's unique DID:

<TsJsSnippet>
  {DomainLinkageClaim}
</TsJsSnippet>

#### Adding the signature

Your dapp creates a presentation based on the credential and signs it with its assertion key.

<TsJsSnippet>
  {SignPresentation}
</TsJsSnippet>

#### Self-attesting the credential

Finally, your dapp self-attests the credential.

<TsJsSnippet>
  {AttestCredential}
</TsJsSnippet>

### Formatting the Domain Linkage Credential

The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential.
Here's how you can present your credential to the extension in the expected format.

<TsJsSnippet>
  {FormatCredential}
</TsJsSnippet>
