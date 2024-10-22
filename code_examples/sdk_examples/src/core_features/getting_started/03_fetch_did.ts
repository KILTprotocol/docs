/* eslint-disable prefer-const */
import * as Kilt from '@kiltprotocol/sdk-js'
import * as Did from '@kiltprotocol/did'

export async function main(): Promise<String | null> {
  let apiConfig = Kilt.ConfigService.get('api')
  const encodedKiltnerd123Details =
    await apiConfig.call.did.queryByWeb3Name('kiltnerd123')

  const {
    document: { id }
  } = Did.linkedInfoFromChain(encodedKiltnerd123Details)
  console.log(`My name is kiltnerd123 and this is my DID: "${id}"`)

  return id
}
