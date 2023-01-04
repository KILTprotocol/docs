import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  api: ApiPromise,
  didUri: Kilt.DidUri,
  dappAccount: Kilt.KiltKeyringPair,
  attestationKey: Kilt.KiltKeyringPair,
  selfSignedCredential: Kilt.ICredential
) {
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    selfSignedCredential,
    didUri
  )
  const attestationTx = api.tx.attestation.add(claimHash, cTypeHash, null)

  // We authorize the call using the attestation key of the Dapps DID.
  const submitTx = await Kilt.Did.authorizeTx(
    didUri,
    attestationTx,
    async ({ data }) => ({
      signature: attestationKey.sign(data),
      keyType: attestationKey.type
    }),
    dappAccount.address
  )

  // Since DIDs can not hold any balance, we pay for the transaction using our blockchain account
  const result = await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)

  if (result.isError) {
    console.log("Attestation failed")
  } else {
    console.log("Attestation successful")
  }
  return result
}
