import * as Kilt from '@kiltprotocol/sdk-js'
export async function updateFullDid(
  keystore,
  api,
  submitterAccount,
  fullDid,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Ask the keystore to generate a new keypair to use for authentication.
  // With no seed specified, a random one will be used.
  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519
  })
  // Create and sign the DID operation to replace the authentication key with the new one generated.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didUpdateExtrinsic = await new Kilt.Did.FullDidUpdateBuilder(
    api,
    fullDid
  )
    .setAuthenticationKey({
      publicKey: newAuthenticationKeyPublicDetails.publicKey,
      type: Kilt.VerificationKeyType.Ed25519
    })
    .removeServiceEndpoint('my-service')
    .build(keystore, submitterAccount.address)
  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.
  await Kilt.BlockchainUtils.signAndSubmitTx(
    didUpdateExtrinsic,
    submitterAccount,
    {
      resolveOn
    }
  )
  // Get the updated DID Doc
  const updatedDidDetails = await Kilt.Did.FullDidDetails.fromChainInfo(
    fullDid.uri
  )
  if (!updatedDidDetails) {
    throw `Could not find the updated DID ${fullDid.uri}`
  }
  return updatedDidDetails
}
