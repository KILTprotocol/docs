import { assert } from 'console'

import type { IDidDetails } from '@kiltprotocol/types'
import { Web3Names } from '@kiltprotocol/did'

export async function verifyNameAndDidEquality(
  web3Name: Web3Names.Web3Name,
  did: IDidDetails['did']
): Promise<void> {
  console.log(
    `Querying the blockchain for the Web3 name "${web3Name}" and the DID "${did}"...`
  )
  // Query the owner of the provided Web3 name
  const web3NameOwner = await Web3Names.queryDidForWeb3Name(web3Name)
  // Assert that it is the right owner
  assert(web3NameOwner === did)

  // Query the Web3 name of the provided DID
  const didName = await Web3Names.queryWeb3NameForDid(did)
  // Assert that it is the right Web3 name
  assert(didName === web3Name)
}
