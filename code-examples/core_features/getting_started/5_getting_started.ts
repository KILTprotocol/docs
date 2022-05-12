import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(johnDoeDidId: string) {
 
  if (!johnDoeDidId) return console.log(`john_doe doesn't exist`)

  const johnDoeDid = await Kilt.Did.DidResolver.resolveDoc(johnDoeDidId)
  const endPoints = johnDoeDid?.details?.getEndpoints()

  if (!endPoints) return console.log('no endpoints')

  return endPoints
}
