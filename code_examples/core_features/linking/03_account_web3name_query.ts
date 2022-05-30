import type { KeyringPair } from '@kiltprotocol/types'

import { AccountLinks, Web3Names } from '@kiltprotocol/did'

export async function queryAccountWeb3Name(
  lookupAccountAddress: KeyringPair['address']
): Promise<Web3Names.Web3Name | null> {
  // Only function to call to perform the lookup.
  const accountWeb3Name = await AccountLinks.queryWeb3Name(lookupAccountAddress)
  if (accountWeb3Name) {
    console.log(
      `Web3 name for account "${lookupAccountAddress}" -> "${accountWeb3Name}"`
    )
  } else {
    console.log(
      `Account "${lookupAccountAddress}" does not have a linked Web3 name.`
    )
  }

  return accountWeb3Name
}
