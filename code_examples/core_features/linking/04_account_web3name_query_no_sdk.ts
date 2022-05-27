import type { Option, Struct } from '@polkadot/types'
import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import { Web3Names } from '@kiltprotocol/did'

export async function queryAccountWeb3Name(
  api: ApiPromise,
  lookupAccountAddress: KeyringPair['address']
): Promise<Web3Names.Web3Name | null> {
  // First RPC call to `api.query.didLookup.connectedDids` for account -> DID lookup.
  const maybeAccountDid = await api.query.didLookup.connectedDids<
    Option<Struct>
  >(lookupAccountAddress)
  if (maybeAccountDid.isNone) {
    throw `No DID for the KILT account "${lookupAccountAddress}".`
  }
  const accountDidIdentifier = maybeAccountDid.unwrap()?.get('did')?.toHuman()
  console.log(
    `The provided account has been linked to the following DID: "did:kilt:${accountDidIdentifier}"`
  )

  // Second RPC call to `api.query.web3Names.names` for DID -> Web3 name lookup.
  const maybeDidName = await api.query.web3Names.names<Option<Struct>>(
    accountDidIdentifier
  )
  if (maybeDidName.isNone) {
    throw `No Web3 name for the KILT account "${lookupAccountAddress}".`
  }
  const web3Name = maybeDidName.unwrap()?.toString()
  console.log(
    `The provided account is identifiable by the following Web3 name: "w3n:${web3Name}"`
  )

  return web3Name
}
