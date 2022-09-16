import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(api: ApiPromise): Promise<Kilt.DidUri | null> {
  const johnDoeOwner = await api.query.web3Names.owner('john_doe')

  let owner: Kilt.DidUri = null
  try {
    // This function will throw if johnDoeOwner is None
    ;({ owner } = Kilt.Did.Web3Names.web3NameOwnerFromChain(johnDoeOwner))
    console.log(`My name is john_doe and this is my DID: "${owner}"`)
  } catch {
    console.log(`john_doe doesn't exist`)
  }

  return owner
}
