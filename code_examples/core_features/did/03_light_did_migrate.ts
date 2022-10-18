import * as Kilt from '@kiltprotocol/sdk-js'

export async function migrateLightDid(
  lightDid: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
  const api = Kilt.ConfigService.get('api')

  // Generate the DID migration extrinsic.
  const migrationTx = await Kilt.Did.getStoreTx(
    lightDid,
    submitterAccount.address,
    signCallback
  )

  // The extrinsic can then be submitted by the authorized account as usual.
  await Kilt.Blockchain.signAndSubmitTx(migrationTx, submitterAccount)

  // The new information is fetched from the blockchain and returned
  const migratedFullDidUri = Kilt.Did.getFullDidUri(lightDid.uri)
  const encodedUpdatedDidDetails = await api.call.did.query(
    Kilt.Did.toChain(migratedFullDidUri)
  )
  const { document } = Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails)

  if (!document) {
    throw 'Could not find the DID just migrated.'
  }
  return document
}
