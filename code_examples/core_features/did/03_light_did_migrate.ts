import * as Kilt from '@kiltprotocol/sdk-js'

export async function migrateLightDid(
  lightDid: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
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
  const migratedFullDid = await Kilt.Did.fetch(migratedFullDidUri)

  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
