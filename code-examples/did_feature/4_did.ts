import { KeyringPair } from '@polkadot/keyring/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init, disconnect } from '@kiltprotocol/core'
import { DefaultResolver, DemoKeystore, DidUtils, SigningAlgorithms, EncryptionAlgorithms } from '@kiltprotocol/did'
import { KeyRelationship, SubscriptionPromise, IDidResolvedDetails } from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  // Generate seed for the authentication key.
  authenticationSeed: string,
  encryptionSeed: string
): Promise<IDidResolvedDetails> {
  await init({ address: 'wss://peregrine.kilt.io' })

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

  // Generate the DID-signed creation extrinsic with the provided keys.
  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeysAndServices(
    keystore,
    kiltAccount.address,
    {
      [KeyRelationship.authentication]: {
        publicKey: authenticationKeyPublicDetails.publicKey,
        type: DemoKeystore.getKeypairTypeForAlg(authenticationKeyPublicDetails.alg),
      },
      [KeyRelationship.keyAgreement]: {
        publicKey: encryptionKeyPublicDetails.publicKey,
        type: DemoKeystore.getKeypairTypeForAlg(encryptionKeyPublicDetails.alg),
      },
    },
    [
      {
        id: 'my-service',
        types: ['service-type'],
        urls: ['https://www.example.com'],
      },
    ]
  )
  // Will print `did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar`.
  console.log(did)

  await BlockchainUtils.signAndSubmitTx(extrinsic, kiltAccount, {
    resolveOn,
  })

  const fullDid = await DefaultResolver.resolveDoc(did)

  await disconnect()
  if (fullDid === null) {
    throw 'Could not find DID document for the given identifier'
  }
  return fullDid
}
