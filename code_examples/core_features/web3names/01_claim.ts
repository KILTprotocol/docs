import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function claimWeb3Name(
  api: ApiPromise,
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  name: Kilt.Did.Web3Names.Web3Name,
  signCallback: Kilt.SignCallback
): Promise<void> {
  const web3NameClaimTx = await api.tx.web3Names.claim(name)
  const authorisedWeb3NameClaimTx = await Kilt.Did.authorizeExtrinsic(
    did,
    web3NameClaimTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedWeb3NameClaimTx,
    submitterAccount
  )
}
