import { config as envConfig } from 'dotenv'

import { Keyring } from '@polkadot/api'
import { blake2AsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from '../attester/ctypeSchema'

// create and return a RequestForAttestation from claim
async function credentialFromClaim(
  lightDid: Kilt.DidDetails,
  claim: Kilt.IClaim,
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICredential> {
  const credential = Kilt.Credential.fromClaim(claim)
  await Kilt.Credential.sign(
    credential,
    signCallback,
    lightDid,
    lightDid.authentication[0].id
  )

  return credential
}

export async function generateCredential(
  keyring: Keyring,
  claimAttributes: Kilt.IClaim['contents'],
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICredential> {
  // init
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  const { authenticationKey, encryptionKey } = await generateKeypairs(
    keyring,
    process.env.CLAIMER_MNEMONIC
  )

  // create the DID
  const lightDid = Kilt.Did.createLightDidDetails({
    authentication: [
      {
        publicKey: authenticationKey.publicKey,
        type: 'sr25519'
      }
    ],
    keyAgreement: [
      {
        publicKey: encryptionKey.publicKey,
        type: 'x25519'
      }
    ]
  })

  // create claim
  const ctype = getCtypeSchema()
  const claim = await createClaim(lightDid, ctype, claimAttributes)

  // create credential and request attestation
  console.log('claimer -> create request')
  return await credentialFromClaim(lightDid, claim, signCallback)
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format, type: 'sr25519' })
  const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
    return async ({ data, alg, publicKey }) => {
      const address =
        alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
      const key = keyring.getPair(address)

      return { data: key.sign(data), alg }
    }
  }

  generateCredential(
    keyring,
    {
      age: 28,
      name: 'Max Mustermann'
    },
    signCallbackForKeyring(keyring)
  )
    .catch((e) => {
      console.log('Error while building credential', e)
      process.exit(1)
    })
    .then((request) => {
      console.log(
        '⚠️  save this to ./claimer/_credential.json for testing  ⚠️\n\n'
      )
      console.log(JSON.stringify(request, null, 2))
      process.exit()
    })
}
