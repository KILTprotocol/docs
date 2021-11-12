import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attester: Kilt.KeyringPair,
  attesterMnemonic: string,
  keystore: Kilt.Did.DemoKeystore
) {
  await Kilt.connect()

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
  await Kilt.disconnect()

  return [attesterFullDid, keystore]
}
