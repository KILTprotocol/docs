import * as Kilt from '@kiltprotocol/sdk-js'
export async function main(johnDoeDid) {
  const johnDoeDidDocument = await Kilt.Did.resolve(johnDoeDid)
  console.log(`John Doe's DID Document:`)
  console.log(JSON.stringify(johnDoeDidDocument, undefined, 2))
  const endpoints = johnDoeDidDocument?.document?.service
  if (!endpoints) {
    console.log('No endpoints for the DID.')
    return []
  }
  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, undefined, 2))
  return endpoints
}
