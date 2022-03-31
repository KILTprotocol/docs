import { assert } from 'console'

import type { IDidDetails } from '@kiltprotocol/types'
import { Web3Names } from '@kiltprotocol/did'

export async function main(
  web3Name: Web3Names.Web3Name,
  ownerDid: IDidDetails['did']
) {
  console.log(
    `Querying the blockchain for the Web3 name "${web3Name}" and the DID "${ownerDid}"...`
  )
  // Query the owner of the provided Web3 name
  const web3NameOwner = await Web3Names.queryDidForWeb3Name(web3Name)
  // Assert that it is the right owner
  assert(web3NameOwner === ownerDid)

  // Query the Web3 name of the provided DID
  const didName = await Web3Names.queryWeb3NameForDid(ownerDid)
  // Assert that it is the right Web3 name
  assert(didName === web3Name)
}
