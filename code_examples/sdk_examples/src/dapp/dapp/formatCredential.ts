import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

let api: ApiPromise
let domainLinkageCredential: Kilt.ICredentialPresentation

export async function main() {
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
  const expirationDate = new Date(
    Date.now() + 1000 * 60 * 60 * 24 * 365 * 5
  ).toISOString() // 5 years, for example

  const claimerSignature = domainLinkageCredential.claimerSignature
  if (!claimerSignature) {
    return
  }

  const proof = {
    type: 'KILTSelfSigned2020',
    proofPurpose: 'assertionMethod',
    verificationMethod: claimerSignature.keyUri,
    signature: claimerSignature.signature,
    challenge: claimerSignature.challenge
  }

  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://identity.foundation/.well-known/did-configuration/v1'
    ],
    issuer,
    issuanceDate,
    expirationDate,
    type: [
      'VerifiableCredential',
      'DomainLinkageCredential',
      'KiltCredential2020'
    ],
    credentialSubject,
    proof
  }
}
