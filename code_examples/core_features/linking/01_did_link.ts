import type { KeyringPair } from '@polkadot/keyring/types'

import { u8aToHex } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  linkedAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (
    signaturePayload: string | Uint8Array
  ) => u8aToHex(linkedAccount.sign(signaturePayload))

  // Authorizing the extrinsic with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAuthorizeLinkWithAccountExtrinsic(
      linkedAccount.address,
      did.identifier,
      linkingAccountSignatureGeneration
    ).then((tx) =>
      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )

  await Kilt.BlockchainUtils.signAndSubmitTx(
    accountLinkingTx,
    submitterAccount,
    {
      resolveOn
    }
  )
}
