/* eslint-disable prefer-const */
import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<Kilt.DidUri | null> {
  let apiConfig = Kilt.ConfigService.get('api')
  const encodedJohnDoeDetails =
    await apiConfig.call.did.queryByWeb3Name('john_doe')

  // This function will throw if johnDoeOwner does not exist
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)
  console.log(`My name is john_doe and this is my DID: "${uri}"`)

  return uri
}
