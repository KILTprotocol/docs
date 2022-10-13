import * as Kilt from '@kiltprotocol/sdk-js'

export async function claimWeb3Name(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  name: Kilt.Did.Web3Name,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const web3NameClaimTx = api.tx.web3Names.claim(name)
  const authorizedWeb3NameClaimTx = await Kilt.Did.authorizeTx(
    did,
    web3NameClaimTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedWeb3NameClaimTx,
    submitterAccount
  )
}
