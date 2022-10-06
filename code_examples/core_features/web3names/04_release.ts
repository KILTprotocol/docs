import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const web3NameReleaseTx = api.tx.web3Names.releaseByOwner()
  const authorizedWeb3NameReleaseTx = await Kilt.Did.authorizeExtrinsic(
    did,
    web3NameReleaseTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedWeb3NameReleaseTx,
    submitterAccount
  )
}
