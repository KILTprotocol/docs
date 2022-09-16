import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function releaseWeb3Name(
  api: ApiPromise,
  did: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback
): Promise<void> {
  const web3NameReleaseTx = await api.tx.web3Names.releaseByOwner()
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
