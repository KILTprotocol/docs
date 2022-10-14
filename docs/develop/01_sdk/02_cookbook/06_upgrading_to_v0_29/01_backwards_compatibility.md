---
id: v29-backwards-compatibility
title: Backwards Compatibility / Interoperability with Previous Versions
---

Depending on how exactly your application interacts with other applications, the changed data formats might make them incompatible.
Supporting only the latest version will result in poor user experience and therefore is not recommended.

We have only identified the Credentials API as definitely having breaking changes. 
The new version 3.0 of [Credentials API specification](https://github.com/KILTprotocol/spec-ext-credential-api) uses the data types from the SDK version 0.29.
Since the specification requires the dApp and the extension to announce the versions of the API they use,
it is relatively simple to make your application backwards compatible.
Note that we anticipate the extensions to be upgraded first, so the dApps will not have to be backwards compatible.

In the attester flow the messages `submit-terms` and `request-attestation` are affected.
In the verifier flow the `submit-credential` message is affected.
The extension can achieve compatibility by translating the messages received from and sent to the previous versions of DApps.
We will link here to the code examples to achieve that, but you can also implement the following steps yourself.

When receiving `submit-terms` from the old dApp, replace the items of the `cTypes` content property with the values of their `schema` properties:

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

Before sending the `request-attestation` to the old dApp rename `credential` to `requestForAttestation`:

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

Before sending the `submit-credential` to the old dApp, 
for every item replace it with an object having the property `request` with the value of item itself,
and the property `attestation` being the attestation for this credential.

```ts
interface New extends Array<{ claim, ..., claimerSignature }> {}

interface Old extends Array<{
  attestation: { claimHash, owner, ... }
  request: { claim, ..., claimerSignature }
}> {}
```
