import { KeyringPair } from '@polkadot/keyring/types'

import {
  BlockchainApiConnection,
  BlockchainUtils
} from '@kiltprotocol/chain-helpers'
import {
  DemoKeystore,
  EncryptionAlgorithms,
  FullDidCreationBuilder,
  FullDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import {
  EncryptionKeyType,
  SubscriptionPromise,
  VerificationKeyType
} from '@kiltprotocol/types'
import {
  disconnect as kiltDisconnect,
  init as kiltInit
} from '@kiltprotocol/core'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  // Generate seed for the authentication key.
  authenticationSeed: string,
  encryptionSeed: string,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519
  })

  // Ask the keystore to generate a new keypar to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    seed: encryptionSeed,
    alg: EncryptionAlgorithms.NaclBox
  })

  const fullDid = await new FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ed25519
  })
    .addEncryptionKey({
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: EncryptionKeyType.X25519
    })
    .addServiceEndpoint({
      id: 'my-service',
      types: ['service-type'],
      urls: ['https://www.example.com']
    })
    .consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {
      await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {
        resolveOn
      })
    })

  await kiltDisconnect()
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
