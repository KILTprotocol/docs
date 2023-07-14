---
id: well-known-did-config
title: Well-Known DID Configuration
---

import TsJsSnippet from '@site/src/components/TsJsSnippet';
import TsJsBlock from '@site/src/components/TsJsBlock';

import DomainLinkageCtype from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageCtype.ts';
import DomainLinkageClaim from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/domainLinkageClaim.ts';
import SignPresentation from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/signPresentation.ts';
import AttestCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/attestCredential.ts';
import FormatCredential from '!!raw-loader!@site/code_examples/sdk_examples/src/dapp/dapp/formatCredential.ts';

:::danger This is a working draft

The KILT support of the *Well-Known DID Configuration* uses unpublished specifications and will change in the future.

:::

The *Well-Known DID Configuration* is implemented as a security measure when setting up the communication session between the dapp and extension.
It ensures that the DID the browser extension is communicating to is linked to the domain that is visited by the browser.
This rule is currently enforced by the KILT Wallet reference implementation (Sporran Extension), but might be relaxed in the future.
The implementation is based on the [*Well-Known DID Configuration*][well-known-spec] specified by the Decentralized Identity Foundation.

Once a communication session between a dapp and an extension is opened, the extension will query `<domain-name>/.well-known/did-configuration.json`.
This JSON-file must contain a credential presentation that conforms to the [Domain Linkage CType][CType-Domain-Linkage].


## Set up the Well-Known DID Configuration

For the *Well-Known DID Configuration* you need to go through the following steps:

0. Create a full DID
    * You will need the `assertionMethodKey` a.k.a. `attestationKey` for signing the credential
    * The `authenticationKey` is required for signing the transaction
1. Create a claim
2. Attest the claim
3. Create a presentation
4. Host the presentation on your website at `https://<your domain>/.well-known/did-configuration.json`

### Create a DID

Your dapp needs a DID to identify itself to the extension.
If your dapp does not have a DID yet, follow the [*create a full DID* guide][create-full-did].
Make sure to create the DID with an `assertionMethodKey` so that you are able to issue attestations.

### Making the claim

After you get a DID, you can make a claim about that DID.
The claim has to be based on the [Domain Linkage CType][CType-Domain-Linkage], whose definition you can get from the linked GitHub repository, or fetch from the blockchain using the CType's id:

<TsJsSnippet funcEnd="return">
  {DomainLinkageCtype}
</TsJsSnippet>

The credential is built from the CType, claim contents, and your dapp's unique DID:

<TsJsSnippet funcEnd="return">
  {DomainLinkageClaim}
</TsJsSnippet>

The credential isn't attested yet and is therefore not valid yet.

### Self-attesting the credential

A valid credential requires an attestation.
Since the website wants to link itself to the DID just created, it has to self-attest the domain linkage credential, i.e., write the credential attestation on chain using the same DID it is trying to link to.

In order to attest the credential we go through the following steps:

1. calculating the claim hash
2. creating the attest transaction
3. authorizing the transaction with your DID
4. paying for the transaction with a KILT account and submitting it to the chain

<TsJsSnippet funcEnd="return">
  {AttestCredential}
</TsJsSnippet>

If you want to learn more about attestations you can refer to our [concept guide][concept-attestations] or the [cookbook][cookbook-attestations].

### Presenting the credential

To use the newly attested credential, we need to derive a presentation from it to host on the dapp website.

<TsJsSnippet funcEnd="return">
  {SignPresentation}
</TsJsSnippet>


The Well-Known DID Configuration specification requires a verifiable credential.
For now we have to manually convert our KILT credential into the required format.

<TsJsSnippet funcEnd="return">
  {FormatCredential}
</TsJsSnippet>

### Host the Presentation

Now that you generated a presentation, you need to host it in your web app, so that the extension can query the presentation.
The extension will make an HTTP GET request to the following URI, and your dapp must respond with the presentation.

`/.well-known/did-configuration.json`

How the file is hosted depends on your project setup and is out of scope for this guide.

[concept-attestations]: ../../concepts/05_credentials/04_attestation.md
[cookbook-attestations]: ../01_sdk/02_cookbook/04_claiming/03_attestation_creation.md
[create-full-did]: ../01_sdk/02_cookbook/01_dids/02_full_did_creation.md
[well-known-spec]: https://identity.foundation/.well-known/resources/did-configuration/
[CType-Domain-Linkage]: https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643
