import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  const johnDoeDidId = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
  
  console.log(`Hello world, my name is john_doe and this is my DID ${johnDoeDidId}`)

  if (!johnDoeDidId) return console.log(`john_doe doesn't exist`)

  return johnDoeDidId
}
