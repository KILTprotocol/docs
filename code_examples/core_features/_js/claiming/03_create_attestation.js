import * as Kilt from '@kiltprotocol/sdk-js'
export async function createAttestation(
  attester,
  submitterAccount,
  signCallback,
  credential,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Create an attestation object and write its root hash on the chain
  // using the provided attester's full DID.
  const attestation = Kilt.Attestation.fromCredentialAndDid(
    credential,
    attester.uri
  )
  // Write the attestation info on the chain.
  const attestationTx = await Kilt.Attestation.getStoreTx(attestation)
  const authorisedAttestationTx = await Kilt.Did.authorizeExtrinsic(
    attester,
    attestationTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedAttestationTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
