---
id: well-known-did-config
title: Well Known DID Configuration
---

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

```ts
import { CType } from '@kiltprotocol/core'

const domainLinkageCType = CType.fromCType({
  schema: {
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Domain Linkage Credential',
    properties: {
      id: {
        type: 'string',
      },
      origin: {
        type: 'string',
      },
    },
    type: 'object',
    $id: 'kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',
  },
  owner: null,
  hash: '0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',
})
```

The claim is built from the CType, claim contents, and your dapp's unique DID:

```ts
import { Claim } from '@kiltprotocol/core'

const did = 'did:kilt:example'

const claimContents = {
  id: did,
  origin: 'https://example-dApp.com',
}

const claim = Claim.fromCTypeAndClaimContents(
  domainLinkageCType,
  claimContents,
  did
)
```

#### Adding the signature

Your dapp creates a request for attestation based on the claim and signs the request's root hash with its assertion key.
The resulting signature is then added to the request for attestation.

```ts
import { RequestForAttestation } from '@kiltprotocol/core'
import { FullDidDetails } from '@kiltprotocol/did'
import { Crypto } from '@kiltprotocol/utils'

const requestForAttestation = RequestForAttestation.fromClaim(claim)

const fullDid = await FullDidDetails.fromChainInfo(did)

const { signature, keyUri } = await fullDid.signPayload(
  Crypto.coToUInt8(requestForAttestation.rootHash),
  assertionKeystore,
  fullDid.attestationKey.id
)

const selfSignedRequest = await requestForAttestation.addSignature(
  signature,
  keyUri
)
```

#### Self-attesting the credential

Finally, your dapp creates the self-attestation and credential

```ts
import { Attestation, Credential } from '@kiltprotocol/core'

const attestation = Attestation.fromRequestAndDid(selfSignedRequest, did)

const domainLinkageCredential = Credential.fromRequestAndAttestation(
  selfSignedRequest,
  attestation
)
```

### Formatting the Domain Linkage Credential

The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential.
Here's how you can present your credential to the extension in the expected format.

```ts
const credentialSubject = {
  ...domainLinkageCredential.request.claim.contents,
  rootHash: domainLinkageCredential.request.rootHash,
}

const issuer = domainLinkageCredential.attestation.owner

const issuanceDate = new Date().toISOString()
const expirationDate = new Date(
  Date.now() + 1000 * 60 * 60 * 24 * 365 * 5
).toISOString() // 5 years, for example

const claimerSignature = domainLinkageCredential.request.claimerSignature

const proof = {
  type: 'KILTSelfSigned2020',
  proofPurpose: 'assertionMethod',
  verificationMethod: claimerSignature.keyUri,
  signature: claimerSignature.signature,
  challenge: claimerSignature.challenge,
}

return {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://identity.foundation/.well-known/did-configuration/v1',
  ],
  issuer,
  issuanceDate,
  expirationDate,
  type: [
    'VerifiableCredential',
    'DomainLinkageCredential',
    'KiltCredential2020',
  ],
  credentialSubject,
  proof,
}
```
