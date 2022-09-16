import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(api: ApiPromise): Promise<Kilt.DidUri | null> {
  const johnDoeOwner = await api.query.web3Names.owner('john_doe')
  const { owner } = Kilt.Did.Web3Names.web3NameOwnerFromChain(johnDoeOwner)
  if (!owner) {
    console.log(`john_doe doesn't exist`)
    return null
  }

  console.log(`My name is john_doe and this is my DID: "${owner}"`)

  return owner
}
