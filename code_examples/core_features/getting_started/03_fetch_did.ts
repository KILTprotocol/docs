import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(api: ApiPromise): Promise<Kilt.DidUri | null> {
  const encodedJohnDoeDetails = await api.call.did.queryByWeb3Name('john_doe')

  // This function will throw if johnDoeOwner does not exist
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)
  console.log(`My name is john_doe and this is my DID: "${uri}"`)

  return uri
}
