---
id: v29-backwards-compatibility
title: Backwards Compatibility / Interoperability with Previous Versions
---

Beside the breaking code changes we have identified two data format changes which might affect interoperability.
The didsign.io and w3n.id already accept bare requests for attestation, which are effectively the new Credentials,
so nothing should break there.

In the attester flow the `request-attestation` message is affected.
In the verifier flow the `submit-credential` message is affected.
Both these changes relate to the Credentials API and will require a new version of it released.
The current specification defines the way for the extension to announce the version of specification it adheres to.
This makes it possible for the DApp to detect the version mismatch.
Unfortunately, the extension cannot detect the version mismatch.
The new specification version should also require the DApp to announce the version of specification it adheres to.
(This will be a non-enumerable property: `Object.defineProperty(window.kilt, 'meta', { value: { versions: { credentials: '3.0' } }, enumerable: false })`)

With the versions known the apps might choose to either bail on version mismatch, or attempt to be compatible.
Bailing will result in a bad user experience without recourse, so we want to avoid that.
Backwards compatibility is not straightforward though, and we want to limit its scope.
While we only have one extension published, there are already several DApp implementations,
so we will try to handle the compatibility in the extension: the Sporran.
This will address the case when the extension speaks the newer version,
and we will try to avoid the opposite case by releasing the upgraded Sporran much earlier.
We will not handle the case when the user manually disabled Sporran updates.

Sporran should achieve compatibility by translating the messages sent to the previous versions of DApps.

For `request-attestation` credential as requestForAttestation (claimerSignature is not required by SKYC?).

```
// before
{
  requestForAttestation: { claim, ..., claimerSignature? }
  quote?: IQuoteAgreement
}

// after:
{
  credential: { claim, ... }
  quote?: IQuoteAgreement
}
```

For `submit-credential` content as request, add attestation.

```
// before:
Array<{
  attestation: { claimHash, owner, ... }
  request: { claim, ..., claimerSignature }
}>

// after:
Array<{ claim, ..., claimerSignature }>
```
