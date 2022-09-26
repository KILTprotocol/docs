import type { ApiPromise } from '@polkadot/api'

import { assert } from 'console'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyNameAndDidEquality(
  api: ApiPromise,
  web3Name: Kilt.Did.Web3Name,
  did: Kilt.DidUri
): Promise<void> {
  console.log(
    `Querying the blockchain for the web3name "${web3Name}" and the DID "${did}"...`
  )
  // Query the owner of the provided web3name
  const encodedWeb3NameOwner = await api.query.web3Names.owner(web3Name)
  const { owner } =
    Kilt.Did.web3NameOwnerFromChain(encodedWeb3NameOwner)
  // Assert that it is the right owner
  assert(owner === did)

  // Query the web3name of the provided DID
  const didIdentifier = Kilt.Did.toChain(did)
  const encodedDidName = await api.query.web3Names.names(didIdentifier)
  const didName = Kilt.Did.web3NameFromChain(encodedDidName)
  // Assert that it is the right web3name
  assert(didName === web3Name)
}
