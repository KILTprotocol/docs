import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim'
import { getCtypeSchema } from '../attester/ctypeSchema'
import { getLightDid } from './generateLightDid'

export function generateCredential(
  claimerDid: Kilt.DidUri,
  claimAttributes: Kilt.IClaim['contents']
): Kilt.ICredential {
  // Create claim
  const ctype = getCtypeSchema()
  const claim = createClaim(claimerDid, ctype, claimAttributes)

  // Create credential and request attestation
  console.log('Claimer -> create request')
  return Kilt.Credential.fromClaim(claim)
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.init()
      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const claimerDid = getLightDid(claimerDidMnemonic)

      const request = generateCredential(claimerDid.uri, {
        age: 28,
        name: 'Max Mustermann'
      })
      console.log(
        '⚠️  save this to ./claimer/_credential.json for testing  ⚠️\n\n'
      )
      console.log(JSON.stringify(request, null, 2))
      process.exit(0)
    } catch (e) {
      console.log('Error while building credential', e)
      process.exit(1)
    }
  })()
}
