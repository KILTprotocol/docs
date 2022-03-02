import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim.js'
import { getCtypeSchema } from '../attester/ctypeSchema.js'
import { generateKeypairs } from './generateKeypairs.js'

// create and return a RequestForAttestation from claim
export async function requestFromClaim(lightDid, keystore, claim) {
  const request = Kilt.RequestForAttestation.fromClaim(claim)
  await request.signWithDidKey(
    keystore,
    lightDid,
    lightDid.authenticationKey.id
  )

  return request
}

export async function generateRequest(claimAttributes) {
  // init
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  const keystore = new Kilt.Did.DemoKeystore()
  const keys = await generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)

  // create the DID
  const lightDid = Kilt.Did.LightDidDetails.fromDetails(keys)

  // create claim
  const ctype = getCtypeSchema()
  const claim = await createClaim(lightDid, ctype, claimAttributes)

  // create request
  console.log('claimer -> create request')
  return await requestFromClaim(lightDid, keystore, claim)
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
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
