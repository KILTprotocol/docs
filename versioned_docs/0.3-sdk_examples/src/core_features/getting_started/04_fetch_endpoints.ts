import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  uri: Kilt.DidUri
): Promise<Kilt.DidServiceEndpoint[]> {
  const kiltnerd123DidDocument = await Kilt.Did.resolve(uri)
  console.log(`kiltnerd123's DID Document:`)
  console.log(JSON.stringify(kiltnerd123DidDocument, null, 2))

  const endpoints = kiltnerd123DidDocument?.document?.service
  if (!endpoints) {
    console.log('No endpoints for the DID.')
    return []
  }

  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, null, 2))

  return endpoints
}
