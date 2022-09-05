import * as Kilt from '@kiltprotocol/sdk-js'
export async function reclaimFullDidDeposit(
  depositPayerAccount,
  didIdentifier,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Generate the submittable extrinsic to claim the deposit back.
  // It includes the DID identifier for which the deposit needs to be returned
  // and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await Kilt.Did.Chain.queryEndpointsCounts(
    didIdentifier
  )
  const depositClaimExtrinsic = await Kilt.Did.Chain.getReclaimDepositExtrinsic(
    didIdentifier,
    endpointsCountForDid
  )
  // The submission will fail if `depositPayerAccount` is not the owner of the deposit associated with the given DID identifier.
  await Kilt.BlockchainUtils.signAndSubmitTx(
    depositClaimExtrinsic,
    depositPayerAccount,
    {
      resolveOn
    }
  )
}
