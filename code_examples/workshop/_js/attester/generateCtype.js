var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { config as envConfig } from 'dotenv'
import * as Kilt from '@kiltprotocol/sdk-js'
import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getCtypeSchema } from './ctypeSchema'
import { getFullDid } from './generateDid'
export function ensureStoredCtype() {
  return __awaiter(this, void 0, void 0, function* () {
    // Init
    yield Kilt.init({ address: process.env.WSS_ADDRESS })
    const mnemonic = process.env.ATTESTER_MNEMONIC
    const did = process.env.ATTESTER_DID_URI
    // Load Account
    const account = yield getAccount(mnemonic)
    // Load DID
    const keystore = new Kilt.Did.DemoKeystore()
    yield generateKeypairs(keystore, mnemonic)
    const fullDid = yield getFullDid(did)
    // get the CTYPE and see if it's stored, if yes return it
    const ctype = getCtypeSchema()
    const isStored = yield ctype.verifyStored()
    if (isStored) {
      console.log('Ctype already stored. Skipping creation')
      return ctype
    }
    console.log('Ctype not present. Creating it now...')
    // authorize the extrinsic
    const tx = yield ctype.getStoreTx()
    const extrinsic = yield fullDid.authorizeExtrinsic(
      tx,
      keystore,
      account.address
    )
    // write to chain then return ctype
    yield Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
      resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
    })
    return ctype
  })
}
// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  ensureStoredCtype()
    .catch((e) => {
      console.log('Error while checking on chain ctype', e)
      process.exit(1)
    })
    .then(() => process.exit())
}
