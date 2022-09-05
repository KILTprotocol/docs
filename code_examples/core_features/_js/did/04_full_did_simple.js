import * as Kilt from '@kiltprotocol/sdk-js'
export async function createSimpleFullDid(
  keystore,
  api,
  submitterAccount,
  authenticationSeed = undefined,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Ask the keystore to generate a new keypair to use for authentication.
  // If no `authenticationSeed` is provided, a random one will be generated.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: Kilt.Did.SigningAlgorithms.Ed25519
  })
  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.
  // The submitter account parameter, ensures that only an entity authorized by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const fullDid = await new Kilt.Did.FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: Kilt.VerificationKeyType.Ed25519
  }).buildAndSubmit(keystore, submitterAccount.address, async (creationTx) => {
    await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {
      resolveOn
    })
  })
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
