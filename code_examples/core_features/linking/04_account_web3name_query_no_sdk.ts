import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryAccountWeb3Name(
  api: ApiPromise,
  lookupAccountAddress: KeyringPair['address']
): Promise<Kilt.Did.Web3Names.Web3Name | null> {
  // First RPC call to `api.query.didLookup.connectedDids` for account -> DID lookup.
  const accountDid = await api.query.didLookup.connectedDids(
    lookupAccountAddress
  )
  if (accountDid.isNone) {
    throw `No DID for the KILT account "${lookupAccountAddress}".`
  }
  const accountDidIdentifier = accountDid.unwrap()?.did.toHuman()
  console.log(
    `The provided account has been linked to the following DID: "did:kilt:${accountDidIdentifier}"`
  )

  // Second RPC call to `api.query.web3Names.names` for DID -> web3name lookup.
  const didName = await api.query.web3Names.names(accountDidIdentifier)
  if (didName.isNone) {
    throw `No web3name for the KILT account "${lookupAccountAddress}".`
  }
  const web3Name = didName.unwrap()?.toUtf8()
  console.log(
    `The provided account is identifiable by the following web3name: "w3n:${web3Name}"`
  )

  return web3Name
}
