import * as Kilt from '@kiltprotocol/sdk-js'
import { KeyringPair } from '@polkadot/keyring/types'

export async function main(
  attester: KeyringPair,
  attesterMnemonic: string,
  keystore: Kilt.DemoKeystore
) {
  await Kilt.init({ address: 'YOUR_CHAIN_ADDRESS' })
  // Signing keypair
  const attesterSigningKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519,
    seed: attesterMnemonic,
  })

  // Encryption keypair
  const attesterEncryptionKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
    seed: attesterMnemonic,
  })

  const keys: Partial<
    Record<Kilt.KeyRelationship, Kilt.Did.DidTypes.INewPublicKey<string>>
  > = {
    authentication: {
      publicKey: attesterSigningKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        attesterSigningKeypair.alg
      ),
    },
    keyAgreement: {
      publicKey: attesterEncryptionKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        attesterEncryptionKeypair.alg
      ),
    },
    capabilityDelegation: {
      publicKey: attesterSigningKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        attesterSigningKeypair.alg
      ),
    },
    assertionMethod: {
      publicKey: attesterSigningKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        attesterSigningKeypair.alg
      ),
    },
  }

  const { extrinsic, did } = await Kilt.Did.DidUtils.writeDidFromPublicKeys(
    keystore,
    attester.address,
    keys
  )

  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, attester, {
    reSign: true,
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })

  const attesterFullDid = await Kilt.Did.DefaultResolver.resolveDoc(did)

  console.log('Attesters Full DID:', attesterFullDid)

  console.log('Keystore:', keystore)

  await Kilt.disconnect()

  return { ...attesterFullDid, keystore }
}
