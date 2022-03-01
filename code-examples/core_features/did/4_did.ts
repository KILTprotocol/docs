import { KeyringPair } from '@polkadot/keyring/types'
import { BlockchainUtils, BlockchainApiConnection } from '@kiltprotocol/chain-helpers'
import { init, disconnect } from '@kiltprotocol/core'
import {
  DemoKeystore,
  SigningAlgorithms,
  EncryptionAlgorithms,
  FullDidDetails,
  FullDidCreationBuilder
} from '@kiltprotocol/did'
import {
  SubscriptionPromise,
  VerificationKeyType,
  EncryptionKeyType
} from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  // Generate seed for the authentication key.
  authenticationSeed: string,
  encryptionSeed: string,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_IN_BLOCK
): Promise<FullDidDetails> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Ask the keystore to generate a new keypar to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    seed: encryptionSeed,
    alg: EncryptionAlgorithms.NaclBox,
  })

  const fullDid = await new FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ed25519
  }).addEncryptionKey({
    publicKey: encryptionKeyPublicDetails.publicKey,
    type: EncryptionKeyType.X25519
  }).addServiceEndpoint({
    id: 'my-service',
    types: ['service-type'],
    urls: ['https://www.example.com'],
  }).consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {
    await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {
      reSign: true,
      resolveOn
    })
  })


  await disconnect()
  if (fullDid === null) {
    throw `Could not find the created DID ${fullDid.did}`
  }
  return fullDid
}
