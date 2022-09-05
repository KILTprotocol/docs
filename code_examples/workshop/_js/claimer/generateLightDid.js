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
import { mnemonicGenerate } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
import { generateKeypairs } from './generateKeypairs'
export function generateLightDid() {
  return __awaiter(this, void 0, void 0, function* () {
    // init
    yield Kilt.init({ address: process.env.WSS_ADDRESS })
    // create secret and DID public keys
    const keystore = new Kilt.Did.DemoKeystore()
    const mnemonic = mnemonicGenerate()
    const keys = yield generateKeypairs(keystore, mnemonic)
    // create the DID
    const lightDid = Kilt.Did.LightDidDetails.fromDetails(
      Object.assign(Object.assign({}, keys), {
        authenticationKey: {
          publicKey: keys.authenticationKey.publicKey,
          type: Kilt.VerificationKeyType.Sr25519
        }
      })
    )
    return {
      lightDid,
      mnemonic
    }
  })
}
// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  generateLightDid()
    .catch((e) => {
      console.log('Error while setting up claimer DID', e)
      process.exit(1)
    })
    .then(({ lightDid, mnemonic }) => {
      console.log('\nsave following to .env to continue\n')
      console.log(`CLAIMER_MNEMONIC="${mnemonic}"`)
      console.log(`CLAIMER_DID_URI="${lightDid.uri}"`)
    })
}
