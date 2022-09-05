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
import { createPresentation } from './claimer/createPresentation'
import { generateKeypairs } from './claimer/generateKeypairs'
function getChallenge() {
  return Kilt.Utils.UUID.generate()
}
// verifies validity, ownership & attestation
function verifyPresentation(presentation, challenge) {
  return __awaiter(this, void 0, void 0, function* () {
    const credential = new Kilt.Credential(presentation)
    const isValid = yield credential.verify({ challenge })
    const isRevoked = credential.attestation.revoked
    // Custom logic
    // e.g., only allow access if age >= 18
    return isValid && !isRevoked
  })
}
export function verificationFlow() {
  return __awaiter(this, void 0, void 0, function* () {
    yield Kilt.init({ address: process.env.WSS_ADDRESS })
    // Load credential and claimer DID
    const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL)
    const keystore = new Kilt.Did.DemoKeystore()
    const keys = yield generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)
    const lightDid = Kilt.Did.LightDidDetails.fromDetails(
      Object.assign(Object.assign({}, keys), {
        authenticationKey: {
          publicKey: keys.authenticationKey.publicKey,
          type: Kilt.VerificationKeyType.Sr25519
        }
      })
    )
    // Verifier sends a unique challenge to the claimer 🕊
    const challenge = getChallenge()
    // create a presentation and send it to the verifier 🕊
    const presentation = yield createPresentation(
      credential,
      lightDid,
      keystore,
      challenge
    )
    // The verifier checks the presentation
    const isValid = yield verifyPresentation(presentation, challenge)
    if (isValid) {
      console.log(
        'Verification successful! You are allowed to enter the club 🎉'
      )
    } else {
      console.log('Verification failed! 🚫')
    }
  })
}
// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  verificationFlow()
    .catch((e) => {
      console.log('Error in the verification flow', e)
      process.exit(1)
    })
    .then(() => {
      process.exit()
    })
}
