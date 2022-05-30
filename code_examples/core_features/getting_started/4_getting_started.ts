import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  const johnDoeDid = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
  if (!johnDoeDid) {
    return console.log(`john_doe doesn't exist`)
  }

  console.log(
    `Hello world, my name is john_doe and this is my DID ${johnDoeDid}`
  )

  return johnDoeDid
}
