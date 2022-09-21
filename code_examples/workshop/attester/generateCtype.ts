import type { ApiPromise } from '@polkadot/api'

import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getCtypeSchema } from './ctypeSchema'
import { getFullDid } from './generateDid'

export async function ensureStoredCtype(
  api: ApiPromise,
  keyring: Keyring
): Promise<Kilt.ICType> {
  const mnemonic = process.env.ATTESTER_MNEMONIC as string
  const did = process.env.ATTESTER_DID_URI as Kilt.DidUri

  // Load Account
  const account = getAccount(keyring, mnemonic)

  // Load DID
  generateKeypairs(keyring, mnemonic)
  const fullDid = await getFullDid(did)
  const signCallback: Kilt.SignCallback = async ({ data, keyRelationship }) => {
    const { publicKey, type, id } = fullDid[keyRelationship][0]
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address)

    return {
      data: key.sign(data),
      keyType: type,
      keyUri: `${fullDid.uri}${id}`
    }
  }

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
      fullDid.uri,
      tx,
      signCallback,
      account.address
    )

    // write to chain then return ctype
    await Kilt.Blockchain.signAndSubmitTx(extrinsic, account)

    return ctype
  }
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    const api = await Kilt.connect(process.env.WSS_ADDRESS as string)
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })

    try {
      await ensureStoredCtype(api, keyring)
      process.exit(0)
    } catch (e) {
      console.log('Error while checking on chain ctype', e)
      process.exit(1)
    }
  })()
}
