import * as Kilt from '@kiltprotocol/sdk-js'
export async function linkAccountToDid(
  did,
  submitterAccount,
  linkedAccount,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (signaturePayload) =>
    linkedAccount.sign(signaturePayload)
  // Authorizing the extrinsic with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAuthorizeLinkWithAccountExtrinsic(
      linkedAccount.address,
      did.uri,
      linkingAccountSignatureGeneration
    )
  const authorisedAccountLinkingTx = await Kilt.Did.authorizeExtrinsic(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedAccountLinkingTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
