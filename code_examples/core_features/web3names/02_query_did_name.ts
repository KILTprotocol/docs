import { assert } from 'console'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyNameAndDidEquality(
  web3Name: Kilt.Did.Web3Names.Web3Name,
  did: Kilt.IDidDetails['did']
): Promise<void> {
  console.log(
    `Querying the blockchain for the Web3 name "${web3Name}" and the DID "${did}"...`
  )
  // Query the owner of the provided Web3 name
  const web3NameOwner = await Kilt.Did.Web3Names.queryDidForWeb3Name(web3Name)
  // Assert that it is the right owner
  assert(web3NameOwner === did)

  // Query the Web3 name of the provided DID
  const didName = await Kilt.Did.Web3Names.queryWeb3NameForDid(did)
  // Assert that it is the right Web3 name
  assert(didName === web3Name)
}
