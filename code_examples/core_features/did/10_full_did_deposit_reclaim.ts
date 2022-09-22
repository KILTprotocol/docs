import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimFullDidDeposit(
  api: ApiPromise,
  depositPayerAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  // It includes the DID identifier for which the deposit needs to be returned
  // and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const identifier = Kilt.Did.Chain.didToChain(fullDid)
  const endpointsCountForDid = await api.query.did.didEndpointsCount(identifier)
  const depositClaimExtrinsic = api.tx.did.reclaimDeposit(
    identifier,
    endpointsCountForDid
  )

  // The submission will fail if `depositPayerAccount` is not the owner of the deposit associated with the given DID identifier.
  await Kilt.Blockchain.signAndSubmitTx(
    depositClaimExtrinsic,
    depositPayerAccount
  )
}
