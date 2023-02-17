import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimAttestationDeposit(
  depositPayer: Kilt.KiltKeyringPair,
  credential: Kilt.ICredential
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Generate the tx to claim the deposit back.
  const depositReclaimTx = api.tx.attestation.reclaimDeposit(
    credential.rootHash
  )

  // Submit the revocation tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, depositPayer)
}
