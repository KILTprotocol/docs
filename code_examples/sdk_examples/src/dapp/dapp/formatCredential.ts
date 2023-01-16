import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export type Parameter = {
  api: ApiPromise
  domainLinkagePresentation: Kilt.ICredentialPresentation
}

export async function main({ api, domainLinkagePresentation }: Parameter) {
  const credentialSubject = {
    ...domainLinkagePresentation.claim.contents,
    rootHash: domainLinkagePresentation.rootHash
  }

  const encodedAttestationDetails = await api.query.attestation.attestations(
    domainLinkagePresentation.rootHash
  )
  const issuer = Kilt.Attestation.fromChain(
    encodedAttestationDetails,
    domainLinkagePresentation.claim.cTypeHash
  ).owner

  const issuanceDate = new Date().toISOString()

  const claimerSignature = domainLinkagePresentation.claimerSignature
  if (!claimerSignature) {
    throw new Error('Claimer signature is required.')
  }

  const proof = {
    type: 'KILTSelfSigned2020',
    proofPurpose: 'assertionMethod',
    verificationMethod: claimerSignature.keyUri,
    signature: claimerSignature.signature,
    challenge: claimerSignature.challenge
  }

  const wellKnownDidconfig = {
    '@context': 'https://identity.foundation/.well-known/did-configuration/v1',
    linked_dids: [
      {
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
    ]
  }

  return wellKnownDidconfig
}
