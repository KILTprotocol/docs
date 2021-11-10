import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeystoreSigner } from '@kiltprotocol/types'

export async function main(fullDid, keystore, aliceKiltAccount, resolveOn) {
  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const endpointsCountForDid = await queryEndpointsCounts(fullDid.did)
  const didDeletionExtrinsic = await getDeleteDidExtrinsic(endpointsCountForDid)

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorised in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await fullDID.authorizeExtrinsic(
    didDeletionExtrinsic,
    keystore as KeystoreSigner<string>,
    aliceKiltAccount.address
  )

  await BlockchainUtils.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    aliceKiltAccount,
    {
      resolveOn,
    }
  )
}
