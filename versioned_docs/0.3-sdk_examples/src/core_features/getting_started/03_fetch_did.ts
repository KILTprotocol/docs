/* eslint-disable prefer-const */
import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<Kilt.DidUri | null> {
  let apiConfig = Kilt.ConfigService.get('api')
  const encodedKiltnerd123Details =
    await apiConfig.call.did.queryByWeb3Name('kiltnerd123')

  // This function will throw if kiltnerd123 does not exist
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedKiltnerd123Details)
  console.log(`My name is kiltnerd123 and this is my DID: "${uri}"`)

  return uri
}
