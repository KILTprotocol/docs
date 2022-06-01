import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createDriversLicenseCType(
  keystore: Kilt.Did.DemoKeystore,
  creatorDid: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<Kilt.CType> {
  const ctype = Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${creatorDid.did}`,
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      }
    },
    type: 'object'
  })

  const ctypeCreationTx = await ctype
    .getStoreTx()
    .then((tx) =>
      creatorDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  await Kilt.BlockchainUtils.signAndSubmitTx(
    ctypeCreationTx,
    submitterAccount,
    { resolveOn }
  )

  return ctype
}
