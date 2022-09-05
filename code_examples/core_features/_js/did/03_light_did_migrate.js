import * as Kilt from '@kiltprotocol/sdk-js'
export async function migrateLightDid(
  keystore,
  submitterAccount,
  lightDid,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Generate the DID migration extrinsic.
  const migratedFullDid = await lightDid.migrate(
    submitterAccount.address,
    keystore,
    async (migrationTx) => {
      // The extrinsic can then be submitted by the authorized account as usual.
      await Kilt.BlockchainUtils.signAndSubmitTx(
        migrationTx,
        submitterAccount,
        {
          resolveOn
        }
      )
    }
  )
  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
