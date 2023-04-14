import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  did: Kilt.DidUri,
  submitterKeyPair: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const web3NameReleaseTx = api.tx.web3Names.releaseByOwner()
  const authorizedWeb3NameReleaseTx = await Kilt.Did.authorizeTx(
    did,
    web3NameReleaseTx,
    signCallback,
    submitterKeyPair.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedWeb3NameReleaseTx,
    submitterKeyPair
  )
}
