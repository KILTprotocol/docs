import { assert } from 'console'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyNameAndDidEquality(
  web3Name: Kilt.Did.Web3Names.Web3Name,
  did: Kilt.IDidDetails['uri']
): Promise<void> {
  console.log(
    `Querying the blockchain for the web3name "${web3Name}" and the DID "${did}"...`
  )
  // Query the owner of the provided web3name
  const web3NameOwner = await Kilt.Did.Web3Names.queryDidForWeb3Name(web3Name)
  // Assert that it is the right owner
  assert(web3NameOwner === did)

  // Query the web3name of the provided DID
  const didName = await Kilt.Did.Web3Names.queryWeb3NameForDid(did)
  // Assert that it is the right web3name
  assert(didName === web3Name)
}
