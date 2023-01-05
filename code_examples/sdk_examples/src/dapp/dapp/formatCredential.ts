import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(api: ApiPromise, domainLinkageCredential: Kilt.ICredentialPresentation) {
  const credentialSubject = {
    ...domainLinkageCredential.claim.contents,
    rootHash: domainLinkageCredential.rootHash
  }

  const encodedAttestationDetails = await api.query.attestation.attestations(
    domainLinkageCredential.rootHash
  )
  const issuer = Kilt.Attestation.fromChain(
    encodedAttestationDetails,
    domainLinkageCredential.claim.cTypeHash
  ).owner

  const issuanceDate = new Date().toISOString()

  const claimerSignature = domainLinkageCredential.claimerSignature
  if (!claimerSignature) {
    throw "Claimer signature is required,"
  }

  const proof = {
    type: 'KILTSelfSigned2020',
    proofPurpose: 'assertionMethod',
    verificationMethod: claimerSignature.keyUri,
    signature: claimerSignature.signature,
    challenge: claimerSignature.challenge
  }

  const wellKnownDidconfig = {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://identity.foundation/.well-known/did-configuration/v1'
    ],
    issuer,
    issuanceDate,
    type: [
      'VerifiableCredential',
      'DomainLinkageCredential',
      'KiltCredential2020'
    ],
    credentialSubject,
    proof
  }

  console.log(JSON.stringify(wellKnownDidconfig))
  return wellKnownDidconfig
}
