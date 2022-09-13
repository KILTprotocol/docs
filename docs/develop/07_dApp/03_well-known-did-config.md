---
id: well-known-did-config
title: Well Known DID Configuration
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';

import DomainLinkageCtypeTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageCtype.ts';
import DomainLinkageCtypeJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/domainLinkageCtype.js';
import DomainLinkageClaimTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/domainLinkageClaim.ts';
import DomainLinkageClaimJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/domainLinkageClaim.js';
import SignCredentialTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/signCredential.ts';
import SignCredentialJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/signCredential.js';
import AttestCredentialTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/attestCredential.ts';
import AttestCredentialJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/attestCredential.js';
import FormatCredentialTs from '!!raw-loader!@site/code_examples/dapp/src/dapp/formatCredential.ts';
import FormatCredentialJs from '!!raw-loader!@site/code_examples/dapp/_js/dapp/formatCredential.js';

The Well Known DID Configuration is implemented as a security measure when setting up the communication session between dApp and extension.

The implementation is based on the [Well Known DID Configuration](https://identity.foundation/.well-known/resources/did-configuration/) specified by the Decentralized Identity Foundation:

## DApp Steps

Add the following URI to your dApp's root. The extension will make an HTTP GET request to this URI, and your dApp will respond with the domain configuration resource.

`/.well-known/did-configuration.json`

### Attesting the Domain Linkage Credential

Upon receiving the GET request from the extension, your dApp will make a claim that contains its domain origin and DID. Then it will self-attest the claim. This self-attestation is referred to as a Domain Linkage Credential.

#### Making the claim

Your dApp's claim is based on the domain linkage CType, which can be created from the existing CType schema:

<!-- <TsJsSnippet tsSnippet={DomainLinkageCtypeTs} jsSnippet={DomainLinkageCtypeJs} /> -->

The claim is built from the CType, claim contents, and your dApp's unique DID:

<!-- <TsJsSnippet tsSnippet={DomainLinkageClaimTs} jsSnippet={DomainLinkageClaimJs} /> -->

#### Adding the signature

Your dApp creates a Credential based on the claim and signs the request's root hash with its assertion key. The resulting signature is then added to the to-be-attested Credential.

<!-- <TsJsSnippet tsSnippet={SignCredentialTs} jsSnippet={SignCredentialJs} /> -->

#### Self-attesting the credential

Finally, your dApp creates the self-attestation and credential

<!-- <TsJsSnippet tsSnippet={AttestCredentialTs} jsSnippet={AttestCredentialJs} /> -->

### Formatting the Domain Linkage Credential

The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential. Here's how you can present your credential to the extension in the expected format.

<!-- <TsJsSnippet tsSnippet={FormatCredentialTs} jsSnippet={FormatCredentialJs} /> -->
