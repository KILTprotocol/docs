import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  api: ApiPromise,
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccount: KeyringPair,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (
    signaturePayload: string | Uint8Array
  ) => linkedAccount.sign(signaturePayload)

  // Authorizing the extrinsic with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingParameters =
    await Kilt.Did.AccountLinks.associateAccountToChainArgs(
      linkedAccount.address,
      did.uri,
      linkingAccountSignatureGeneration
    )
  const accountLinkingTx = await api.tx.didLookup.associateAccount(
    ...accountLinkingParameters
  )
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeExtrinsic(
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
