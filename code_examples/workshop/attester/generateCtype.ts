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

  // Get the CTYPE and see if it's stored, if yes return it.
  const ctype = getCtypeSchema()
  try {
    await Kilt.CType.verifyStored(ctype)
    console.log('Ctype already stored. Skipping creation')
    return ctype
  } catch {
    console.log('Ctype not present. Creating it now...')
    // Authorize the tx.
    const encodedCtype = Kilt.CType.toChain(ctype)
    const tx = api.tx.ctype.add(encodedCtype)
    const extrinsic = await Kilt.Did.authorizeTx(
      attesterDid,
      tx,
      signCallback,
      attesterAccount.address
    )

    // Write to chain then return the CType.
    await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)

    return ctype
  }
}

// Don't execute if this is imported by another file.
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

      const newCType = await ensureStoredCtype(account, attesterDidUri, async ({ data }) => ({
        signature: attestation.sign(data),
        keyType: attestation.type
      }))
      
      console.log(`your ctype was succsesfully created\n\n${ JSON.stringify( newCType, null, 2 ) }`)
    } catch (e) {
      console.log('Error while checking on chain ctype')
      throw e
    }
  })()
}
