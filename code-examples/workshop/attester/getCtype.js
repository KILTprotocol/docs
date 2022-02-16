import * as Kilt from '@kiltprotocol/sdk-js'
import { createCtype } from './createCtype.js'

export async function getCtype(fullDid, keystore, account) {
  // get the CTYPE and see if it's stored, if yes return it
  const ctype = createCtype()
  const isStored = await ctype.verifyStored()
  if (isStored) return ctype

  // authorize the extrinsic
  const tx = await ctype.store()
  const extrinsic = await fullDid.details.authorizeExtrinsic(tx, keystore, account.address)

  // write to chain then return ctype
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
    reSign: true,
  })

  return ctype
}
