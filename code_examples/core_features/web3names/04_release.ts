import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback
): Promise<void> {
  const web3NameReleaseTx = await Kilt.Did.Web3Names.getReleaseByOwnerTx()
  const authorisedWeb3NameReleaseTx = await Kilt.Did.authorizeExtrinsic(
    did,
    web3NameReleaseTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedWeb3NameReleaseTx,
    submitterAccount
  )
}
