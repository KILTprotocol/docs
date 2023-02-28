import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccount: KeyringPair & { type: "ethereum" },
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Generate the parameters for the extrinsic that links account and DID.
  // This will contain the signature of the account that will be linked to the DID
  // and therefore signals the agreement of the account to be linked.
  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(
    linkedAccount.address,
    did,
    async (payload) => linkedAccount.sign(payload)
  )

  // Afterwards we build the extrinsic using the parameters from above.
  const accountLinkingTx = await api.tx.didLookup.associateAccount(
    ...(accountLinkingParameters as any as [any, any])
  )

  // Next the DID signs the extrinsic.
  // This signals the agreement of the DID owner to be linked to the account.
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  // finally we need to submit everything to the blockchain, so that the link gets
  // registered.
  // This account will provide the required deposit and pay the fees.
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}
