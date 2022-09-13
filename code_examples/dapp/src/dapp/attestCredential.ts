import * as Kilt from '@kiltprotocol/sdk-js'

let selfSignedCredential: Kilt.ICredential
let did: Kilt.DidUri
let dappAccount: Kilt.KiltKeyringPair

export async function main() {
  const attestation = Kilt.Attestation.fromCredentialAndDid(
    selfSignedCredential,
    did
  )
  const submitTx = await Kilt.Attestation.getStoreTx(attestation)
  await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)
}
