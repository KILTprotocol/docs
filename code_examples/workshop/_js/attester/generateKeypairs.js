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
import * as Kilt from '@kiltprotocol/sdk-js'
export function generateKeypairs(keystore, mnemonic) {
  return __awaiter(this, void 0, void 0, function* () {
    // signing keypair
    const signing = yield keystore.generateKeypair({
      alg: Kilt.Did.SigningAlgorithms.Sr25519,
      seed: mnemonic
    })
    // encryption keypair
    const encryption = yield keystore.generateKeypair({
      alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
      seed: mnemonic
    })
    // build the Attester keys object
    const keys = {
      authentication: {
        publicKey: signing.publicKey,
        type: Kilt.VerificationKeyType.Sr25519
      },
      keyAgreement: {
        publicKey: encryption.publicKey,
        type: Kilt.EncryptionKeyType.X25519
      },
      capabilityDelegation: {
        publicKey: signing.publicKey,
        type: Kilt.VerificationKeyType.Sr25519
      },
      assertionMethod: {
        publicKey: signing.publicKey,
        type: Kilt.VerificationKeyType.Sr25519
      }
    }
    return keys
  })
}
