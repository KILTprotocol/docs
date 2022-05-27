import type { KeyringPair } from '@kiltprotocol/types'

import { u8aToHex } from '@polkadot/util'

import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function linkAccountToDid(
  keystore: DemoKeystore,
  did: FullDidDetails,
  submitterAccount: KeyringPair,
  linkedAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (signaturePayload: string | Uint8Array) =>
    u8aToHex(linkedAccount.sign(signaturePayload))

  // Authorizing the extrinsic with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingTx = await AccountLinks.authorizeLinkWithAccount(
    linkedAccount.address,
    did.identifier,
    linkingAccountSignatureGeneration
  ).then((tx) => did.authorizeExtrinsic(tx, keystore, submitterAccount.address))

  await BlockchainUtils.signAndSubmitTx(accountLinkingTx, submitterAccount, {
    resolveOn
  })
}
