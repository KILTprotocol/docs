---
id: well-known-did-config
title: Well Known DID Configuration
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';

import DomainLinkageCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageCtype.ts';
import DomainLinkageClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageClaim.ts';
import SignPresentation from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/signPresentation.ts';
import AttestCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/attestCredential.ts';
import FormatCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/formatCredential.ts';

The *Well-Known DID Configuration* is implemented as a security measure when setting up the communication session between the dapp and extension.
It ensures that the DID that the browser extension is communicating is linked to the domain that is visited by the browser.
This rule is currently enforced by the KILT DID Wallet reference implementation (Sporran Extension), but might be relaxed in the future.
The implementation is based on the [*Well-Known DID Configuration*](https://identity.foundation/.well-known/resources/did-configuration/) specified by the Decentralized Identity Foundation.

Once a communication session between a dapp and an extension is opened, the extension will query `<domain-name>/.well-known/did-configuration.json`.
This JSON-file must contain a credential presentation that conforms to the [Domain Linkage CType][CType-Domain-Linkage].


## Setup the Well-Known DID Configuration

For the *Well-Known DID Configuration* you need to go through the following steps:

0. Create a full DID
1. Create a claim
2. Attest the claim
3. Create a presentation
4. Host the presentation on your website at `https://<your domain>/.well-known/did-configuration.json`

### Create a DID

Your dapp needs a DID to identify itself to the extension.
If you don't have a DID yet, follow the [*create a full DID* guide](/docs/develop/sdk/cookbook/dids/full-did-creation).

### Making the claim

After you got a DID, we can make a claim about that DID.
The claim has to be based on the [Domain Linkage CType][CType-Domain-Linkage]:

<TsJsBlock>
  {DomainLinkageCtype}
</TsJsBlock>

The credential is built from the CType, claim contents, and your dapp's unique DID:

<TsJsSnippet>
  {DomainLinkageClaim}
</TsJsSnippet>

The credential isn't attested yet and is therefore not valid yet.

### Self-attesting the credential

A valid credential requires an attestation.
Since we want to signal that the DID whats to link itself to the website, the DID has to attest to the claim itself.

In order to attest the credential we go through the following steps:

1. calculating the claim hash
2. creating the attest transaction
3. authorizing the transaction with your DID
4. paying for the transaction with a KILT account and submitting it to the chain

<TsJsSnippet>
  {AttestCredential}
</TsJsSnippet>

If you want to learn more about attestations you can refer to our [concept guide](/docs/concepts/credentials/attestation) or the [cookbook](/docs/develop/sdk/cookbook/claiming/attestation-creation)

### Presenting the credential

Before we can host the credential on the website, we need to derive a presentation from it.

<TsJsSnippet>
  {SignPresentation}
</TsJsSnippet>


The Well Known DID Configuration specification requires a specific format (JSON-LD) for the domain linkage credential.
For now we have to manually convert our credential into the required format.

<TsJsSnippet>
  {FormatCredential}
</TsJsSnippet>

### Host the Presentation

Now that you generated a presentation, you need to host it in your web app, so that the extension can query the presentation.
The extension will make an HTTP GET request to the following URI, and your dapp must respond with the presentation.

`/.well-known/did-configuration.json`

How the file is hosted depends on your project setup and is out of scope for this guide.

[CType-Domain-Linkage]: https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643
