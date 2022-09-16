import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

let api: ApiPromise
let selfSignedCredential: Kilt.ICredential
let did: Kilt.DidUri
let dappAccount: Kilt.KiltKeyringPair

export async function main() {
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    selfSignedCredential,
    did
  )
  const submitTx = api.tx.attestation.add(cTypeHash, claimHash, null)
  await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)
}
