import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  uri: Kilt.DidUri
): Promise<Kilt.DidServiceEndpoint[]> {
  const johnDoeDidDocument = await Kilt.Did.resolve(uri)
  console.log(`John Doe's DID Document:`)
  console.log(JSON.stringify(johnDoeDidDocument, null, 2))

  const endpoints = johnDoeDidDocument?.document?.service
  if (!endpoints) {
    console.log('No endpoints for the DID.')
    return []
  }

  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, null, 2))

  return endpoints
}
