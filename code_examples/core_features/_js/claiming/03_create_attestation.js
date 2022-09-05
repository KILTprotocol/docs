import * as Kilt from '@kiltprotocol/sdk-js'
export async function createAttestation(
  keystore,
  requestForAttestation,
  attester,
  submitterAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Create an attestation object and write its root hash on the chain
  // using the provided attester's full DID.
  const attestation = await Kilt.Attestation.fromRequestAndDid(
    requestForAttestation,
    attester.uri
  )
  const attestationTx = await attestation
    .getStoreTx()
    .then((tx) =>
      attester.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  await Kilt.BlockchainUtils.signAndSubmitTx(attestationTx, submitterAccount, {
    resolveOn
  })
  // Return the credential, which is the combination of the original request for attestation
  // plus the on-chain attestation info.
  return Kilt.Credential.fromRequestAndAttestation(
    requestForAttestation,
    attestation
  )
}
