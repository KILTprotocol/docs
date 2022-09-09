import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getCtypeSchema } from './ctypeSchema'
import { getFullDid } from './generateDid'

export async function ensureStoredCtype(
  keyring: Keyring,
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICType> {
  const mnemonic = process.env.ATTESTER_MNEMONIC as string
  const did = process.env.ATTESTER_DID_URI as Kilt.DidUri

  // Load Account
  const account = await getAccount(keyring, mnemonic)

  // Load DID
  await generateKeypairs(keyring, mnemonic)
  const fullDid = await getFullDid(did)

  // get the CTYPE and see if it's stored, if yes return it
  const ctype = getCtypeSchema()
  const isStored = await Kilt.CType.verifyStored(ctype)
  if (isStored) {
    console.log('Ctype already stored. Skipping creation')
    return ctype
  }
  console.log('Ctype not present. Creating it now...')

  // authorize the extrinsic
  const tx = await Kilt.CType.getStoreTx(ctype)
  const extrinsic = await Kilt.Did.authorizeExtrinsic(
    fullDid,
    tx,
    signCallback,
    account.address
  )

  // write to chain then return ctype
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, account)

  return ctype
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    await Kilt.connect(process.env.WSS_ADDRESS as string)
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })
    const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
      return async ({ data, alg, publicKey }) => {
        const address = encodeAddress(
          alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey,
          Kilt.Utils.ss58Format
        )
        const key = keyring.getPair(address)

        return { data: key.sign(data), alg }
      }
    }

    try {
      await ensureStoredCtype(keyring, signCallbackForKeyring(keyring))
      process.exit(0)
    } catch (e) {
      console.log('Error while checking on chain ctype', e)
      process.exit(1)
    }
  })()
}
