import * as Kilt from '@kiltprotocol/sdk-js'

export async function migrateLightDid(
  lightDid: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<Kilt.DidDetails> {
  // Generate the DID migration extrinsic.
  const migrationTx = await Kilt.Did.Chain.getStoreTx(
    lightDid,
    submitterAccount.address,
    signCallback
  )

  // The extrinsic can then be submitted by the authorized account as usual.
  await Kilt.Blockchain.signAndSubmitTx(migrationTx, submitterAccount, {
    resolveOn
  })

  // The new information is fetched from the blockchain and returned
  const migratedFullDidUri = Kilt.Did.Utils.getFullDidUri(lightDid.uri)
  const migratedFullDid = await Kilt.Did.query(migratedFullDidUri)

  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
