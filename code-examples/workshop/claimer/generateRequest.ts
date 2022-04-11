import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from '../attester/ctypeSchema'

// create and return a RequestForAttestation from claim
async function requestFromClaim(
  lightDid: Kilt.Did.LightDidDetails,
  keystore: Kilt.Did.DemoKeystore,
  claim: Kilt.IClaim
): Promise<Kilt.IRequestForAttestation> {
  const request = Kilt.RequestForAttestation.fromClaim(claim)
  await request.signWithDidKey(
    keystore,
    lightDid,
    lightDid.authenticationKey.id
  )

  return request
}

export async function generateRequest(
  claimAttributes: Kilt.IClaim['contents']
): Promise<Kilt.IRequestForAttestation> {
  // init
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  const keystore = new Kilt.Did.DemoKeystore()
  const keys = await generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)

  // create the DID
  const lightDid = Kilt.Did.LightDidDetails.fromDetails({
    ...keys,
    authenticationKey: {
      publicKey: keys.authenticationKey.publicKey,
      type: Kilt.VerificationKeyType.Sr25519
    }
  })

  // create claim
  const ctype = getCtypeSchema()
  const claim = await createClaim(lightDid, ctype, claimAttributes)

  // create request
  console.log('claimer -> create request')
  return await requestFromClaim(lightDid, keystore, claim)
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
