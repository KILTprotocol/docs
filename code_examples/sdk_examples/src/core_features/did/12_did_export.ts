import * as Kilt from '@kiltprotocol/sdk-js'

export async function exportDid(
  did: Kilt.DidDocument,
  exportType: 'application/json' | 'application/ld+json'
) {
  const conformingDidDocument = Kilt.Did.exportToDidDocument(did, exportType)

  // Will print the DID URI.
  console.log(conformingDidDocument.id)

  // Will print all the public keys associated with the DID.
  console.log(conformingDidDocument.verificationMethod)

  // Will print all the assertion keys IDs.
  console.log(conformingDidDocument.assertionMethod)

  // Will print all the encryption keys IDs.
  console.log(conformingDidDocument.keyAgreement)

  // Will print all the delegation keys IDs.
  console.log(conformingDidDocument.capabilityDelegation)

  // Will print all the external services referenced inside the `DidDocument` instance.
  console.log(conformingDidDocument.service)

  return conformingDidDocument
}
