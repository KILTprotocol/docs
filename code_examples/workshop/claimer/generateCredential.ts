import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createClaim } from './createClaim'
import { generateKeypairs } from './generateKeypairs'
import { getCtypeSchema } from '../attester/ctypeSchema'

// create and return a RequestForAttestation from claim
async function credentialFromClaim(
  lightDid: Kilt.DidDocument,
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
  return await credentialFromClaim(lightDid, claim, signCallback)
}

// don't execute if this is imported by another file
if (require.main === module) {
  ; (async () => {
    envConfig()
    await Kilt.connect(process.env.WSS_ADDRESS as string)
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })
    const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
      return async ({ data, alg, publicKey }) => {
        const address = encodeAddress(
          alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey,
          Kilt.Utils.ss58Format
        )
        const key = keyring.getPair(address)

        return { data: key.sign(data), alg }
      }
    }

    try {
      const request = await generateCredential(
        keyring,
        {
          age: 28,
          name: 'Max Mustermann'
        },
        signCallbackForKeyring(keyring)
      )
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
