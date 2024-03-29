import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkDidToAccount(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Authorizing the tx with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx = api.tx.didLookup.associateSender()
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}
