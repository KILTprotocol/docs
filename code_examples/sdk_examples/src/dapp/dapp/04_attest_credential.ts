import * as Kilt from '@kiltprotocol/sdk-js'

export async function main({
  didUri,
  dappAccount,
  assertionMethodKey,
  domainLinkageCredential
}: {
  didUri: Kilt.DidUri
  dappAccount: Kilt.KiltKeyringPair
  assertionMethodKey: Kilt.KiltKeyringPair
  domainLinkageCredential: Kilt.ICredential
}) {
  const api = Kilt.ConfigService.get('api')
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    domainLinkageCredential,
    didUri
  )
  const attestationTx = api.tx.attestation.add(claimHash, cTypeHash, null)

  // We authorize the call using the attestation key of the Dapps DID.
  const extrinsic = api.tx.did.dispatchAs(dappAccount.address, attestationTx)

  // const submitTx = await Kilt.Did.authorizeTx(
  //   didUri,
  //   attestationTx,
  //   async ({ data }) => ({
  //     signature: assertionMethodKey.sign(data),
  //     keyType: assertionMethodKey.type
  //   }),
  //   dappAccount.address
  // )

  // Since DIDs can not hold any balance, we pay for the transaction using our blockchain account
  const result = await Kilt.Blockchain.signAndSubmitTx(extrinsic, dappAccount)

  if (result.isError) {
    console.log('Attestation failed')
  } else {
    console.log('Attestation successful')
  }
  return result
}
