import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function migrateLightDid(
  keystore: Kilt.Did.DemoKeystore,
  submitterAccount: KeyringPair,
  lightDid: Kilt.Did.LightDidDetails,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<Kilt.Did.FullDidDetails> {
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
