import { getReclaimDepositExtrinsic } from '@kiltprotocol/did/src/Did.chain'

export async function main(fullDid, aliceKiltAccount, resolveOn) {
  // Generate the submittable extrinsic to claim the deposit back, by including the DID identifier for which the deposit needs to be returned and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await queryEndpointsCounts(fullDid.did)
  const depositClaimExtrinsic = await getReclaimDepositExtrinsic(
    fullDID.did,
    endpointsCountForDid
  )

  // The submission will fail if `aliceKiltAccount` is not the owner of the deposit associated with the given DID identifier.
  await BlockchainUtils.signAndSubmitTx(
    depositClaimExtrinsic,
    aliceKiltAccount,
    {
      resolveOn,
    }
  )
}
