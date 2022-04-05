import { KeyringPair } from '@polkadot/keyring/types'

import {
  DemoKeystore,
  FullDidDetails,
  LightDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'
import { BlockchainApiConnection } from '@kiltprotocol/chain-helpers'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init } from '@kiltprotocol/core'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  authenticationSeed: string,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519
  })

  // create a light DID
  const lightDidDetails = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519
    }
  })

  // Generate the DID migration extrinsic.
  const migratedFullDid = await lightDidDetails.migrate(
    kiltAccount.address,
    keystore,
    async (migrationTx) => {
      // The extrinsic can then be submitted by the authorized account as usual.
      await BlockchainUtils.signAndSubmitTx(migrationTx, kiltAccount, {
        reSign: true,
        resolveOn
      })
    }
  )

  await api.disconnect()
  if (!migratedFullDid) {
    throw 'Could not find the DID just migrated.'
  }
  return migratedFullDid
}
