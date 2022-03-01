import { KeyringPair } from '@polkadot/keyring/types'

import { DemoKeystore, LightDidDetails, SigningAlgorithms, FullDidDetails } from '@kiltprotocol/did'
import { init, disconnect } from '@kiltprotocol/core'
import { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  authenticationSeed: string,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_IN_BLOCK
): Promise<FullDidDetails> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // create a light DID
  const lightDidDetails = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519,
    },
  })

  // Generate the DID migration extrinsic.
  const migratedFullDid = await lightDidDetails.migrate(kiltAccount.address, keystore, async (migrationTx) => {
    // The extrinsic can then be submitted by the authorised account as usual.
    await BlockchainUtils.signAndSubmitTx(migrationTx, kiltAccount, {
      reSign: true,
      resolveOn,
    })
  })

  await disconnect()
  if (migratedFullDid === null) {
    throw `Could not find the migrated DID ${migratedFullDid.did}`
  }
  return migratedFullDid
}
