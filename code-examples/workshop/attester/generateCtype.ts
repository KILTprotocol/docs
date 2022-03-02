import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { getCtypeSchema } from './ctypeSchema'
import { getAccount } from './generateAccount'
import { getFullDid } from './generateDid'
import { generateKeypairs } from './generateKeypairs'

export async function ensureStoredCtype(): Promise<Kilt.CType> {
  // Init
  await Kilt.init({ address: process.env.WSS_ADDRESS })
  const mnemonic = process.env.ATTESTER_MNEMONIC as string
  const did = process.env.ATTESTER_DID_URI as string

  // Load Account
  const account = await getAccount(mnemonic)

  // Load DID
  const keystore = new Kilt.Did.DemoKeystore()
  await generateKeypairs(keystore, mnemonic)
  const fullDid = await getFullDid(Kilt.Did.DidUtils.getIdentifierFromKiltDid(did))

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
    resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK,
    reSign: true
  })

  return ctype
}

// don't execute if this is imported by another files
if (require.main === module) {
  envConfig()
  ensureStoredCtype()
    .catch((e) => {
      console.log('Error while checking on chain ctype', e)
      process.exit(1)
    })
    .then(() => process.exit())
}
