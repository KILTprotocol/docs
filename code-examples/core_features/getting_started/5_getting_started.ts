import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(johnDoeDidId: string) {
  const johnDoeDid = await Kilt.Did.DidResolver.resolveDoc(johnDoeDidId)

  console.log(`John Doe's DID`, johnDoeDid)

  const endPoints = johnDoeDid?.details?.getEndpoints()

  if (!endPoints) return console.log('no endpoints')

  console.log('Endpoints:', endPoints[0].urls[0])

  return endPoints
}
