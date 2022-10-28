import * as Kilt from '@kiltprotocol/sdk-js'

export function createSimpleLightDid({
  authentication
}: {
  authentication: Kilt.NewLightDidVerificationKey
}): Kilt.DidDocument {
  // Create a light DID from the generated authentication key.
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authentication]
  })
  console.log(lightDID.uri)

  return lightDID
}
