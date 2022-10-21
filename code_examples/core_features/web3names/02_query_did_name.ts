import { assert } from 'console'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyNameAndDidEquality(
  web3Name: Kilt.Did.Web3Name,
  did: Kilt.DidUri
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  console.log(
    `Querying the blockchain for the web3name "${web3Name}" and the DID "${did}"...`
  )
  // Query the owner of the provided web3name
  const encodedWeb3NameOwner = await api.call.did.queryByWeb3Name(web3Name)
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedWeb3NameOwner)
  // Assert that it is the right owner
  assert(uri === did)
}
