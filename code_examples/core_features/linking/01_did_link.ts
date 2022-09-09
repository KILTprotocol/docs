import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  did: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccount: KeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (
    signaturePayload: string | Uint8Array
  ) => linkedAccount.sign(signaturePayload)

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
