import { hexToString } from '@polkadot/util'
export async function queryAccountWeb3Name(api, lookupAccountAddress) {
  // First RPC call to `api.query.didLookup.connectedDids` for account -> DID lookup.
  const maybeAccountDid = await api.query.didLookup.connectedDids(
    lookupAccountAddress
  )
  if (maybeAccountDid.isNone) {
    throw `No DID for the KILT account "${lookupAccountAddress}".`
  }
  const accountDidIdentifier = maybeAccountDid.unwrap()?.get('did')?.toHuman()
  console.log(
    `The provided account has been linked to the following DID: "did:kilt:${accountDidIdentifier}"`
  )
  // Second RPC call to `api.query.web3Names.names` for DID -> web3name lookup.
  const maybeDidName = await api.query.web3Names.names(accountDidIdentifier)
  if (maybeDidName.isNone) {
    throw `No web3name for the KILT account "${lookupAccountAddress}".`
  }
  const web3Name = hexToString(maybeDidName.unwrap()?.toHex())
  console.log(
    `The provided account is identifiable by the following web3name: "w3n:${web3Name}"`
  )
  return web3Name
}
