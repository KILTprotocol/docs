import type { KeyringPair } from '@kiltprotocol/sdk-js'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryAccountWeb3Name(
  lookupAccountAddress: KeyringPair['address']
): Promise<Kilt.Did.Web3Name | null> {
  const api = Kilt.ConfigService.get('api')

  const encodedLinkedDetails = await api.call.did.queryByAccount(
    Kilt.Did.accountToChain(lookupAccountAddress)
  )
  const { web3Name } = Kilt.Did.linkedInfoFromChain(encodedLinkedDetails)
  if (web3Name) {
    console.log(
      `web3name for account "${lookupAccountAddress}" -> "${web3Name}"`
    )
  } else {
    console.log(
      `Account "${lookupAccountAddress}" does not have a linked web3name.`
    )
  }

  return web3Name
}
