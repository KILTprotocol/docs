import { AccountLinks } from '@kiltprotocol/did'
import { KeyringPair } from '@kiltprotocol/types'

export async function main(linkedAccount: KeyringPair['address']) {
  const accountWeb3Name = await AccountLinks.queryWeb3Name(linkedAccount)
  if (accountWeb3Name) {
    console.log(
      `Web3 name for account "${linkedAccount}" -> "${accountWeb3Name}"`
    )
  } else {
    console.log(`Account "${linkedAccount}" does not have a linked Web3 name.`)
  }
}
