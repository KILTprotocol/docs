import { KeyringPair } from '@polkadot/keyring/types'

import type { Option, Struct } from "@polkadot/types"
import type { ApiPromise } from '@polkadot/api'

export async function main(api: ApiPromise, linkedAccount: KeyringPair['address']) {
  // First RPC call to `api.query.didLookup.connectedDids` for account -> DID lookup.
  const maybeAccountDid = await api.query.didLookup.connectedDids<Option<Struct>>(linkedAccount)
  if (maybeAccountDid.isNone) {
    throw `No DID for the KILT account "${linkedAccount}".`
  }
  const accountDidIdentifier = maybeAccountDid.unwrap()?.get('did')?.toHuman()
  console.log(`The provided account has been linked to the following DID: "did:kilt:${accountDidIdentifier}"`)

  // Second RPC call to `api.query.web3Names.names` for DID -> Web3 name lookup.
  const maybeDidName = await api.query.web3Names.names<Option<Struct>>(accountDidIdentifier)
  if (maybeDidName.isNone) {
    throw `No DID for the KILT account "${linkedAccount}".`
  }
  const web3Name = maybeDidName.unwrap()?.toHuman()
  console.log(`The provided account is identifiable by the following Web3 name: "w3n:${web3Name}"`)
}
