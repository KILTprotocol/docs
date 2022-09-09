import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimAttestationDeposit(
  depositPayer: Kilt.KiltKeyringPair,
  credential: Kilt.ICredential,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  const depositReclaimTx = await Kilt.Attestation.getReclaimDepositTx(
    credential.rootHash
  )

  // Submit the revocation tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, depositPayer, {
    resolveOn
  })
}
