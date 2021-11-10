import Keyring from '@polkadot/keyring'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'
import {
  DefaultResolver,
  DemoKeystore,
  DidUtils,
  SigningAlgorithms,
} from '@kiltprotocol/did'
import { KeyRelationship } from '@kiltprotocol/types'

export async function main() {
  const resolveOn =
    process.env.NODE_ENV === 'production'
      ? BlockchainUtils.IS_FINALIZED
      : BlockchainUtils.IS_IN_BLOCK

  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  const aliceKiltAccount = new Keyring({
    type: 'ed25519',
    ss58Format: 38,
  }).createFromUri('//Alice')

  const keystore = new DemoKeystore()

  const authenticationSeed = '0x123456789'

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
  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeys(
    keystore,
    aliceKiltAccount.address,
    {
      [KeyRelationship.authentication]: {
        publicKey: authenticationKeyPublicDetails.publicKey,
        type: DemoKeystore.getKeypairTypeForAlg(
          authenticationKeyPublicDetails.alg
        ),
      },
      [KeyRelationship.keyAgreement]: {
        publicKey: encryptionKeyPublicDetails.publicKey,
        type: DemoKeystore.getKeypairTypeForAlg(encryptionKeyPublicDetails.alg),
      },
    }
  )
  // Will print `did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar`.
  console.log(did)

  await BlockchainUtils.signAndSubmitTx(extrinsic, aliceKiltAccount, {
    resolveOn,
  })

  const fullDid = await DefaultResolver.resolveDoc(did)
}
