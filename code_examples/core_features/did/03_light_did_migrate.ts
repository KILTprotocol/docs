import type { KeyringPair } from '@polkadot/keyring/types'

import {
  DemoKeystore,
  FullDidDetails,
  LightDidDetails
} from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function migrateLightDid(
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  lightDid: LightDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  // Generate the DID migration extrinsic.
  const migratedFullDid = await lightDid.migrate(
    submitterAccount.address,
    keystore,
    async (migrationTx) => {
      // The extrinsic can then be submitted by the authorized account as usual.
      await BlockchainUtils.signAndSubmitTx(migrationTx, submitterAccount, {
        resolveOn
      })
    }
  )

  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
