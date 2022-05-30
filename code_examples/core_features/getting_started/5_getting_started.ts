import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(johnDoeDidId: string) {
  const johnDoeDidDocument = await Kilt.Did.DidResolver.resolveDoc(johnDoeDidId)
  console.log(`John Doe's DID Document:`)
  console.log(JSON.stringify(johnDoeDidDocument, undefined, 2))
  
  const endpoints = johnDoeDidDocument?.details?.getEndpoints()
  if (!endpoints) {
    return console.log('No endpoints for the DID.')
  }
  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, undefined, 2))

  return endpoints
}
