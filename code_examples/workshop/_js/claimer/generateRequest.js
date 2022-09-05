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
import { createClaim } from './createClaim'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from '../attester/ctypeSchema'
// create and return a RequestForAttestation from claim
function requestFromClaim(lightDid, keystore, claim) {
  return __awaiter(this, void 0, void 0, function* () {
    const request = Kilt.RequestForAttestation.fromClaim(claim)
    yield request.signWithDidKey(
      keystore,
      lightDid,
      lightDid.authenticationKey.id
    )
    return request
  })
}
export function generateRequest(claimAttributes) {
  return __awaiter(this, void 0, void 0, function* () {
    // init
    yield Kilt.init({ address: process.env.WSS_ADDRESS })
    const keystore = new Kilt.Did.DemoKeystore()
    const keys = yield generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)
    // create the DID
    const lightDid = Kilt.Did.LightDidDetails.fromDetails(
      Object.assign(Object.assign({}, keys), {
        authenticationKey: {
          publicKey: keys.authenticationKey.publicKey,
          type: Kilt.VerificationKeyType.Sr25519
        }
      })
    )
    // create claim
    const ctype = getCtypeSchema()
    const claim = yield createClaim(lightDid, ctype, claimAttributes)
    // create request
    console.log('claimer -> create request')
    return yield requestFromClaim(lightDid, keystore, claim)
  })
}
// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  generateRequest({
    age: 28,
    name: 'Max Mustermann'
  })
    .catch((e) => {
      console.log('Error while building request for attestation', e)
      process.exit(1)
    })
    .then((request) => {
      console.log(
        '⚠️  save this to ./claimer/_request.json for testing  ⚠️\n\n'
      )
      console.log(JSON.stringify(request, null, 2))
      process.exit()
    })
}
