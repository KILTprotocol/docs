import * as Kilt from '@kiltprotocol/sdk-js'
let domainLinkageCredential
export async function main() {
  const credentialSubject = {
    ...domainLinkageCredential.claim.contents,
    rootHash: domainLinkageCredential.rootHash
  }
  const issuer = await Kilt.Attestation.query(
    domainLinkageCredential.rootHash
  ).then((att) => att?.owner)
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
