import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim.js'
import { getCtypeSchema } from '../attester/ctypeSchema.js'
import { generateKeypairs } from './generateKeypairs.js'

const { WSS_ADDRESS: address, CLAIMER_MNEMONIC: mnemonic } = process.env

// create and return a RequestForAttestation from claim
export async function createRequest(lightDid, keystore, claim) {
  const request = Kilt.RequestForAttestation.fromClaim(claim)
  await request.signWithDid(keystore, lightDid)

  console.log('⚠️  save this to ./claimer/_request.json for testing  ⚠️\n\n')
  console.log(JSON.stringify(request, null, 2))
  return request
}

export async function main() {
  // init
  await cryptoWaitReady()
  await Kilt.init({ address })

  const keystore = new Kilt.Did.DemoKeystore()
  const keys = await generateKeypairs(keystore, mnemonic)

  // create the DID
  const lightDid = new Kilt.Did.LightDidDetails(keys)

  // create claim
  const ctype = getCtypeSchema()
  const claim = await createClaim(lightDid, ctype, {
    age: 28,
    name: 'Max Mustermann',
  })

  // create request
  return await createRequest(lightDid, keystore, claim)
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
    .catch((e) => {
      console.log('Error while building request for attestation', e)
      process.exit(1)
    })
    .then(() => process.exit())
}
