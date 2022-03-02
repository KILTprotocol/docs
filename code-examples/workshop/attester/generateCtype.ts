import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { getCtypeSchema } from './ctypeSchema.js'
import { getAccount } from './generateAccount.js'
import { getFullDid } from './generateDid.js'
import { generateKeypairs } from './generateKeypairs.js'

export async function ensureStoredCtype() {
  // Init
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })
  const mnemonic = process.env.ATTESTER_MNEMONIC
  const didIdentifier = process.env.ATTESTER_DID_ID

  // Load Account
  const account = await getAccount(mnemonic)

  // Load DID
  const keystore = new Kilt.Did.DemoKeystore()
  await generateKeypairs(keystore, mnemonic)
  const fullDid = await getFullDid(didIdentifier)

  // get the CTYPE and see if it's stored, if yes return it
  const ctype = getCtypeSchema()
  const isStored = await ctype.verifyStored()
  if (isStored) {
    console.log('Ctype already stored. Skipping creation')
    return ctype
  }
  console.log('Ctype not present. Creating it now...')

  // authorize the extrinsic
  const tx = await ctype.getStoreTx()
  const extrinsic = await fullDid.authorizeExtrinsic(
    tx,
    keystore,
    account.address
  )

  // write to chain then return ctype
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
    reSign: true
  })

  return ctype
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  ensureStoredCtype()
    .catch((e) => {
      console.log('Error while checking on chain ctype', e)
      process.exit(1)
    })
    .then(() => process.exit())
}
