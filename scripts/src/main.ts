import { mkdir, writeFile } from 'fs/promises'
import { normalize } from 'path'

import { Keyring } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAttesterDid, generateClaimerDid, resolveKey } from './dids'

function encryptCallbackForKey({
  secretKey,
  keyId
}: {
  secretKey: Uint8Array
  keyId: `#${string}`
}): Kilt.EncryptCallback {
  return async function encryptCallback({ data, did, peerPublicKey }) {
    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      secretKey
    )
    return { nonce, data: box, keyUri: `${did}${keyId}` }
  }
}

async function main() {
  console.log('Generating JSON files for documentation')
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })
  await cryptoWaitReady()

  const kiltAttesterDid = generateAttesterDid(keyring)
  const kiltClaimerDid = generateClaimerDid(keyring)

  // CType schema
  const drivingLicenseCtypeSchema: Kilt.CTypeSchemaWithoutId = {
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${kiltAttesterDid.uri}`,
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      },
      id: {
        type: 'string'
      }
    },
    type: 'object'
  }

  // CType
  const ctypeDrivingsLicense: Kilt.ICType = Kilt.CType.fromSchema(
    drivingLicenseCtypeSchema,
    kiltAttesterDid.uri
  )

  // Claim
  const claimContents: Kilt.IClaimContents = {
    name: 'Alice',
    age: 29
  }
  const claimExample = Kilt.Claim.fromCTypeAndClaimContents(
    ctypeDrivingsLicense,
    claimContents,
    kiltClaimerDid.uri
  )

  // Encrypted message
  const message = Kilt.Message.fromBody(
    {
      type: 'request-credential',
      content: {
        cTypes: [
          {
            cTypeHash: ctypeDrivingsLicense.hash
          }
        ]
      }
    },
    kiltClaimerDid.uri,
    kiltAttesterDid.uri
  )

  const encrypted = await Kilt.Message.encrypt(
    message,
    encryptCallbackForKey({
      secretKey: kiltClaimerDid.keyAgreement[0].secretKey,
      keyId: kiltClaimerDid.keyAgreement[0].id
    }),
    `${kiltAttesterDid.uri}${kiltAttesterDid.keyAgreement[0].id}`,
    { resolveKey }
  )

  const outDir = normalize(`${__dirname}/../out`)

  console.log(`Creating output directory at ${outDir}...`)
  await mkdir(outDir, { recursive: true })

  await Promise.all([
    writeFile(
      `${outDir}/ctype-schema.json`,
      JSON.stringify(drivingLicenseCtypeSchema, null, 2)
    ),
    writeFile(
      `${outDir}/ctype.json`,
      JSON.stringify(ctypeDrivingsLicense, null, 2)
    ),
    writeFile(`${outDir}/claim.json`, JSON.stringify(claimExample, null, 2)),
    writeFile(
      `${outDir}/encrypted-message.json`,
      JSON.stringify(encrypted, null, 2)
    )
  ])

  console.log('Generation completed successfully!')
}

;(async () => {
  await main()
})()
