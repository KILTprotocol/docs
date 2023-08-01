import * as Kilt from '@kiltprotocol/sdk-js'

export function createCompleteLightDid({
  authentication,
  keyAgreement
}: {
  authentication: Kilt.NewLightDidVerificationKey
  keyAgreement: Kilt.NewDidEncryptionKey
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
    keyAgreement: [keyAgreement],
    service
  })
  console.log(lightDID.uri)

  return lightDID
}
