import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimDeposit(
  submitterAddress: Kilt.KiltKeyringPair,
  credential: Kilt.IPublicCredential
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Generate the tx to claim the deposit back.
  const credentialId = Kilt.PublicCredential.getIdForCredential(
    credential,
    credential.attester
  )
  const depositReclaimTx = api.tx.publicCredentials.reclaimDeposit(credentialId)

  // Submit the revocation tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, submitterAddress)
}
