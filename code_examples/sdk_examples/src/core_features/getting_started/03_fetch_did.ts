import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<Kilt.DidUri | null> {
  const api = Kilt.ConfigService.get('api')

  const encodedJohnDoeDetails = await api.call.did.queryByWeb3Name('john_doe')

  // This function will throw if johnDoeOwner does not exist
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)
  console.log(`My name is john_doe and this is my DID: "${uri}"`)

  return uri
}
