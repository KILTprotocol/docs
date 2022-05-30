import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<string | null> {
  const johnDoeDid = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
  if (!johnDoeDid) {
    console.log(`john_doe doesn't exist`)
    return null
  }

  console.log(`My name is john_doe and this is my DID: "${johnDoeDid}"`)

  return johnDoeDid
}
