import { config as envConfig } from 'dotenv'

import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from '../attester/ctypeSchema'

// create and return a Credential from claim
async function credentialFromClaim(
  lightDid: Kilt.DidDocument,
  claim: Kilt.IClaim
): Promise<Kilt.ICredential> {
  const credential = Kilt.Credential.fromClaim(claim)
  return credential
}

export async function generateCredential(
  keyring: Keyring,
  claimAttributes: Kilt.IClaim['contents']
): Promise<Kilt.ICredential> {
  const { authenticationKey, encryptionKey } = await generateKeypairs(
    keyring,
    process.env.CLAIMER_MNEMONIC
  )

  // create the DID
  const lightDid = Kilt.Did.createLightDidDocument({
    authentication: [authenticationKey as Kilt.NewLightDidVerificationKey],
    keyAgreement: [encryptionKey]
  })

  // create claim
  const ctype = getCtypeSchema()
  const claim = await createClaim(lightDid, ctype, claimAttributes)

  // create credential and request attestation
  console.log('claimer -> create request')
  return await credentialFromClaim(lightDid, claim)
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    await Kilt.connect(process.env.WSS_ADDRESS as string)
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })

    try {
      const request = await generateCredential(keyring, {
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
