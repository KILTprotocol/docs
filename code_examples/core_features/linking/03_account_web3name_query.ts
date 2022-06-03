import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryAccountWeb3Name(
  lookupAccountAddress: KeyringPair['address']
): Promise<Kilt.Did.Web3Names.Web3Name | null> {
  // Only function to call to perform the lookup.
  const accountWeb3Name = await Kilt.Did.AccountLinks.queryWeb3Name(
    lookupAccountAddress
  )
  if (accountWeb3Name) {
    console.log(
      `web3name for account "${lookupAccountAddress}" -> "${accountWeb3Name}"`
    )
  } else {
    console.log(
      `Account "${lookupAccountAddress}" does not have a linked web3name.`
    )
  }

  return accountWeb3Name
}
