import * as Kilt from '@kiltprotocol/sdk-js'

export async function createAttestation(
  attester: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  credential: Kilt.ICredential,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // Create an attestation object and write its root hash on the chain
  // using the provided attester's full DID.
  const attestation = await Kilt.Attestation.fromCredentialAndDid(
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
