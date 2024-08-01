---
id: v29-backward-compatibility
title: Backward Compatibility with Pre-0.29.x Versions
---

Depending on how exactly your application interacts with other applications, changes to some data formats and interfaces might mean that conversions are required for them to remain compatible.

To align with breaking changes to data structures in messaging, credentials, and CTypes, we published version 3.0 of the [Credentials API specification](https://github.com/KILTprotocol/spec-ext-credential-api) that specifies how browser extensions like the [Sporran credential wallet](https://github.com/BTE-Trusted-Entity/sporran-extension) interact with web applications that produce or consume credentials.

When upgrading to a 0.29.x version of the SDK and to the Credentials API version 3.0, we recommend backward support of Credentials API version 2.0, as supporting only the latest version may result in poor user experience. In what follows, we outline an upgrade strategy for implementers of the Credentials API specification.

These instructions will also help with translating from and to data types of pre-0.29 SDK versions in other scenarios, such as when sending messages between clients, or when importing older data (e.g. credentials).

## General Strategy

Since version 3.0, the specification requires conformant web apps as well as extensions to announce the versions of the API they use, allowing for version negotiation.
Because extensions inject themselves into web pages that signal support for kilt features via the `window.kilt` property, the recommended strategy is to handle backward compatibility on the extension side.
This way, extensions can be upgraded ahead of time, and implement a fallback to a version 2.0 compatible interface if a web application does not signal version 3.0 support.
Following this strategy, backward compatibility on the application side is not strictly necessary.
We recommend notifying users of web apps that have upgraded to version 3.0 if they try to connect with an older extension, pointing them to the need to upgrade their extension to use this app.

## Message Conversion

Breaking changes introduced with version 3.0 of the Credential Api exclusively affect selected data types of messages passed between the application backend and extension.
In the attester (credential issuance) flow the message types `submit-terms` and `request-attestation` have changed.
In the verifier (presentation exchange) flow the message type `submit-credential` message is affected.

Version 3.0 extensions can achieve backward compatibility by translating messages received from and sent to the application which implements an earlier version of the specification.
Below you can find brief descriptions of how these conversions can be implemented.

<!--TODO: After Sporran release, replace with the following
Below you can find links to the code examples of how this is achieved in the Sporran extension, but we also provide brief descriptions of how you can implement these steps yourself.
-->

### `submit-terms`

When receiving a `submit-terms` message from the old web app, replace the items of the `cTypes` content property with the values of their `schema` properties:

```ts
interface Old {
  cTypes: Array<{
    schema: ICTypeSchema
    hash: HexString // duplicates `schema.$id`
    owner: DidUri | null // apparently unused
  }>
  ...
}

interface New {
  cTypes: Array<ICTypeSchema> // Note that 0.29 renames ICTypeSchema to ICType
  ...
}
```

<!--TODO: After Sporran release, and add link to code example here and for the other 2 message types
[> Code Example in the Sporran Extension Repository]()
-->

### `request-attestation`

Before encrypting a `request-attestation` type message destined for an older web app, rename `credential` to `requestForAttestation`:

```ts
interface New {
  credential: { claim, ... }
  quote?: IQuoteAgreement
}

interface Old {
  requestForAttestation: { claim, ... }
  quote?: IQuoteAgreement
}
```

:::info
The old `IRequestForAttestation` interface optionally allowed claimers to attach a signature for authentication.
There is no property intended for this purpose on the new interface, as the message encryption scheme already takes care of authentication.
What has changed is that this form of authentication is __not publicly verifiable__.
Attesters can instead require claimers to sign a quote agreement for the purpose of bookkeeping, which contains the credential hash and thus represents a commitment to any claims made.
:::

### `submit-credential`

Before encrypting a `submit-credential` message for the older application, replace every item with an object having the property `request` with the value of item itself, and the property `attestation` with the attestation for this credential.

```ts
interface New extends Array<{ claim, ..., claimerSignature }> {}

interface Old extends Array<{
  attestation: { claimHash, owner, ... }
  request: { claim, ..., claimerSignature }
}> {}
```
