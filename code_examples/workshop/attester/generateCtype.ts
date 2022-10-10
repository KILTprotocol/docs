import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAccount } from './generateAccount'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from './ctypeSchema'

export async function ensureStoredCtype(
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.ICType> {
  const api = Kilt.ConfigService.get('api')

  // get the CTYPE and see if it's stored, if yes return it
  const ctype = getCtypeSchema()
  try {
    await Kilt.CType.verifyStored(ctype)
    console.log('Ctype already stored. Skipping creation')
    return ctype
  } catch {
    console.log('Ctype not present. Creating it now...')
    // authorize the extrinsic
    const encodedCtype = Kilt.CType.toChain(ctype)
    const tx = api.tx.ctype.add(encodedCtype)
    const extrinsic = await Kilt.Did.authorizeExtrinsic(
      attesterDid,
      tx,
      signCallback,
      attesterAccount.address
    )

    // write to chain then return ctype
    await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)

    return ctype
  }
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string
      const { account } = generateAccount(accountMnemonic)

      const didMnemonic = process.env.ATTESTER_DID_MNEMONIC as string
      const { authentication, attestation } = generateKeypairs(didMnemonic)
      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)

      await ensureStoredCtype(account, attesterDidUri, async ({ data }) => ({
        signature: attestation.sign(data),
        keyType: attestation.type
      }))
    } catch (e) {
      console.log('Error while checking on chain ctype')
      throw e
    }
  })()
}
