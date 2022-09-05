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
import { generateRequest } from '../claimer/generateRequest'
import { getAccount } from './generateAccount'
import { getFullDid } from './generateDid'
export function attestClaim(request) {
  return __awaiter(this, void 0, void 0, function* () {
    // Init
    yield Kilt.init({ address: process.env.WSS_ADDRESS })
    // load account & DID
    const mnemonic = process.env.ATTESTER_MNEMONIC
    const attesterDid = process.env.ATTESTER_DID_URI
    const account = yield getAccount(mnemonic)
    const keystore = new Kilt.Did.DemoKeystore()
    yield generateKeypairs(keystore, mnemonic)
    const fullDid = yield getFullDid(attesterDid)
    // build the attestation object
    const attestation = Kilt.Attestation.fromRequestAndDid(request, fullDid.uri)
    // check the request content and deny based on your business logic.
    // e.g., verify age with other credentials (birth certificate, passport, ...)
    // form tx and authorized extrinsic
    const tx = yield attestation.getStoreTx()
    const extrinsic = yield fullDid.authorizeExtrinsic(
      tx,
      keystore,
      account.address
    )
    // write to chain
    console.log('Attester -> submit attestation...')
    yield Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
      resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
    })
    return attestation
  })
}
export function attestingFlow() {
  return __awaiter(this, void 0, void 0, function* () {
    // first the claimer
    const request = yield generateRequest({
      age: 27,
      name: 'Mia Musterfrau'
    })
    // send the request to the attester 🕊
    // the attester checks the attributes and issues an attestation
    const attestation = yield attestClaim(request)
    // send the attestation back to the claimer 🕊
    // build the credential and return it
    const credential = Kilt.Credential.fromRequestAndAttestation(
      request,
      attestation
    )
    return credential
  })
}
// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  attestingFlow()
    .catch((e) => {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    })
    .then((c) => {
      console.log('The claimer build their credential and now has to store it.')
      console.log('⚠️  add the following to your .env file. ⚠️')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(c)}'`)
      process.exit()
    })
}
