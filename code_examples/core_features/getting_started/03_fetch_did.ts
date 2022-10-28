import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

// TODO: Replace api.call.didApi with api.call.did once it's deployed on Spiritnet
export async function main(api: ApiPromise): Promise<Kilt.DidUri | null> {
  const encodedJohnDoeDetails = await api.call.didApi.queryDidByW3n('john_doe')

  // This function will throw if johnDoeOwner does not exist
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)
  console.log(`My name is john_doe and this is my DID: "${uri}"`)

  return uri
}
