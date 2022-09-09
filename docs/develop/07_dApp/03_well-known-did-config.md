---
id: well-known-did-config
title: Well Known DID Configuration
---

import SnippetBlock from '@site/src/components/SnippetBlock';
import DomainLinkageCtype from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageCtype.ts';
import DomainLinkageClaim from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageClaim.ts';
import SignCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/signCredential.ts';
import AttestCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/attestCredential.ts';
import FormatCredential from '!!raw-loader!@site/code_examples/dapp/src/dapp/formatCredential.ts';

The Well Known DID Configuration is implemented as a security measure when setting up the communication session between dApp and extension.

The implementation is based on the [Well Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) specified by the Decentralized Identity Foundation:

## DApp Steps

Add the following URI to your dApp's root. The extension will make an HTTP GET request to this URI, and your dApp will respond with the domain configuration resource.

`/.well-known/did-configuration.json`

### Attesting the Domain Linkage Credential

Upon receiving the GET request from the extension, your dApp will make a claim that contains its domain origin and DID. Then it will self-attest the claim. This self-attestation is referred to as a Domain Linkage Credential.

#### Making the claim

Your dApp's claim is based on the domain linkage CType, which can be created from the existing CType schema:

<SnippetBlock className="language-ts">
  {DomainLinkageCtype}
</SnippetBlock>

The claim is built from the CType, claim contents, and your dApp's unique DID:

<SnippetBlock className="language-ts">
  {DomainLinkageClaim}
</SnippetBlock>

#### Adding the signature

Your dApp creates a Credential based on the claim and signs the request's root hash with its assertion key. The resulting signature is then added to the to-be-attested Credential.

<SnippetBlock className="language-ts">
  {SignCredential}
</SnippetBlock>

#### Self-attesting the credential

Finally, your dApp creates the self-attestation and credential

<SnippetBlock className="language-ts">
  {AttestCredential}
</SnippetBlock>

### Formatting the Domain Linkage Credential

The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential. Here's how you can present your credential to the extension in the expected format.

<SnippetBlock className="language-ts">
  {FormatCredential}
</SnippetBlock>
