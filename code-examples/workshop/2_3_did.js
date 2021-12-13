const Kilt = require('@kiltprotocol/sdk-js')

exports = async function attesterFullDid(attester, attesterMnemonic, keystore) {
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

  const keys = {
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

  if (Kilt.Did.resolveDoc(did)) {
    // The DID has already been written on-chain
    const attesterFullDid = await Kilt.Did.DefaultResolver.resolveDoc(did)
    console.log('Attesters Full DID:', attesterFullDid)

    await Kilt.disconnect()

    return [attesterFullDid.details, keystore]
  }

  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, attester, {
    reSign: true,
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })

  const attesterFullDid = await Kilt.Did.DefaultResolver.resolveDoc(did)
  console.log('Attesters Full DID:', attesterFullDid)

  await Kilt.disconnect()

  return [attesterFullDid.details, keystore]
}
