import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimFullDidDeposit(
  depositPayerAccount: Kilt.KiltKeyringPair,
  didUri: Kilt.DidUri,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  // It includes the DID identifier for which the deposit needs to be returned
  // and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await Kilt.Did.Chain.queryEndpointsCounts(didUri)
  const depositClaimExtrinsic = await Kilt.Did.Chain.getReclaimDepositExtrinsic(
    didUri,
    endpointsCountForDid
  )

  // The submission will fail if `depositPayerAccount` is not the owner of the deposit associated with the given DID identifier.
  await Kilt.Blockchain.signAndSubmitTx(
    depositClaimExtrinsic,
    depositPayerAccount,
    {
      resolveOn
    }
  )
}
