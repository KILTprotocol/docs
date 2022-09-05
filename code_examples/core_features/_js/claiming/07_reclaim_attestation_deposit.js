import * as Kilt from '@kiltprotocol/sdk-js'
export async function reclaimAttestationDeposit(
  depositPayer,
  credential,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Generate the submittable extrinsic to claim the deposit back.
  const depositReclaimTx = await credential.attestation.getReclaimDepositTx()
  // Submit the revocation tx to the KILT blockchain.
  await Kilt.BlockchainUtils.signAndSubmitTx(depositReclaimTx, depositPayer, {
    resolveOn
  })
}
