import * as Kilt from '@kiltprotocol/sdk-js'
let selfSignedCredential
let did
let dappAccount
export async function main() {
  const attestation = await Kilt.Attestation.fromCredentialAndDid(
    selfSignedCredential,
    did
  )
  const submitTx = await Kilt.Attestation.getStoreTx(attestation)
  await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)
}
