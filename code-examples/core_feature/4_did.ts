import { KeyringPair } from '@polkadot/keyring/types'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'
import { DefaultResolver, DemoKeystore, DidUtils, SigningAlgorithms, EncryptionAlgorithms } from '@kiltprotocol/did'
import { KeyRelationship, SubscriptionPromise } from '@kiltprotocol/types'

export async function main(
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  // Generate seed for the authentication key.
  authenticationSeed: string
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  const keystore = new DemoKeystore()

  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Generate seed for the encryption key.
  const encryptionSeed = '0x987654321'

  // Ask the keystore to generate a new keypar to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    seed: encryptionSeed,
    alg: EncryptionAlgorithms.NaclBox,
  })

  // Generate the DID-signed creation extrinsic with the provided keys.
  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeys(keystore, kiltAccount.address, {
    [KeyRelationship.authentication]: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(authenticationKeyPublicDetails.alg),
    },
    [KeyRelationship.keyAgreement]: {
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(encryptionKeyPublicDetails.alg),
    },
  })
  // Will print `did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar`.
  console.log(did)

  await BlockchainUtils.signAndSubmitTx(extrinsic, kiltAccount, {
    resolveOn,
  })

  const fullDid = await DefaultResolver.resolveDoc(did)
}
