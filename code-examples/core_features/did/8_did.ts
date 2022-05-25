import { KeyringPair } from '@polkadot/keyring/types'

import {
  DemoKeystore,
  FullDidDetails,
  LightDidDetails
} from '@kiltprotocol/did'
import {
  disconnect as kiltDisconnect,
  init as kiltInit
} from '@kiltprotocol/core'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  lightDidDetails: LightDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  // Generate the DID migration extrinsic.
  const migratedFullDid = await lightDidDetails.migrate(
    kiltAccount.address,
    keystore,
    async (migrationTx) => {
      // The extrinsic can then be submitted by the authorized account as usual.
      await BlockchainUtils.signAndSubmitTx(migrationTx, kiltAccount, {
        resolveOn
      })
    }
  )

  await kiltDisconnect()
  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
