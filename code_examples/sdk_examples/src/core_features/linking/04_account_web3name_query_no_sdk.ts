import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise, WsProvider } from '@polkadot/api'

// Import needed to provide KILT Typescript support to the api object.
import '@kiltprotocol/augment-api'
import { typesBundle } from '@kiltprotocol/type-definitions'

export async function queryAccountWeb3Name(
  endpoint: string,
  lookupAccountAddress: KeyringPair['address']
): Promise<string | null> {
  const api = await ApiPromise.create({
    provider: new WsProvider(endpoint),
    typesBundle
  })
  // Call to the KILT runtime API `did.queryByAccount`
  const didDetails = await api.call.did.queryByAccount(lookupAccountAddress)
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
