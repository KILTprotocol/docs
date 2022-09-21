import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

export async function queryAccountWeb3Name(
  api: ApiPromise,
  lookupAccountAddress: KeyringPair['address']
): Promise<string | null> {
  // Call to the KILT RPC endpoint `did.queryByAccount`
  const didDetails = await api.rpc.did.queryByAccount(lookupAccountAddress)
  if (didDetails.isNone) {
    throw `No DID for the KILT account "${lookupAccountAddress}".`
  }

  const { w3n } = didDetails.unwrap()
  if (w3n.isNone) {
    throw `No web3name for the KILT account "${lookupAccountAddress}".`
  }

  const web3Name = w3n.unwrap().toHuman()
  console.log(
    `The provided account is identifiable by the following web3name: "w3n:${web3Name}"`
  )

  return web3Name
}
