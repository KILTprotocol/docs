import * as Kilt from '@kiltprotocol/sdk-js'

export function createCompleteLightDid({
  authentication,
  encryption
}: {
  authentication: Kilt.NewLightDidVerificationKey
  encryption: Kilt.NewDidEncryptionKey
}): Kilt.DidDocument {
  // Example service for the DID.
  const service: Kilt.DidServiceEndpoint[] = [
    {
      id: '#my-service',
      type: ['KiltPublishedCredentialCollectionV1'],
      serviceEndpoint: ['http://example.domain.org']
    }
  ]

  // Create the KILT light DID with the information generated.
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authentication],
    keyAgreement: [encryption],
    service
  })
  console.log(lightDID.uri)

  return lightDID
}
