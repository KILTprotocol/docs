import * as Kilt from '@kiltprotocol/sdk-js'

export async function createFullDid(keystore, keypairs, account) {
  // build the Attester keys object
  const keys = {
    authentication: {
      publicKey: keypairs.signing.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.signing.alg),
    },
    keyAgreement: {
      publicKey: keypairs.encryption.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.encryption.alg),
    },
    capabilityDelegation: {
      publicKey: keypairs.signing.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.signing.alg),
    },
    assertionMethod: {
      publicKey: keypairs.signing.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.signing.alg),
    },
  }

  // get extrinsic and didUri
  const { extrinsic, did: didUri } = await Kilt.Did.DidUtils.writeDidFromPublicKeys(keystore, account.address, keys)

  // write the DID to blockchain
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    reSign: true,
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })

  // save the didUri so we don't attempt to write it to chain again
  console.log('\nsave following to .env to continue\n')
  console.error(`ATTESTER_DID_URI=${didUri}\n`)
  process.env.ATTESTER_DID_URI = didUri
}
