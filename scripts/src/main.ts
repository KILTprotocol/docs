import * as nacl from 'tweetnacl'
import { mkdir, writeFile } from 'fs/promises'
import { normalize } from 'path'

import { Keyring } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAttesterDid, generateClaimerDid, resolveKey } from './dids'

//@ts-ignore Hacking tweetnacl randomBytes & UUID generate to produce deterministic output
nacl.randomBytes = (n: number) => new Uint8Array(n).fill(1)
Kilt.Utils.UUID.generate = () => Kilt.Utils.Crypto.hashStr("look ma I'm random")
// set timestamp to always create the same message object
Date.now = () => Date.UTC(2024, 4, 20, 4, 20, 24, 420)

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
  const drivingLicenseCtype = Kilt.CType.fromProperties(
    `Drivers License by ${kiltAttesterDid.uri}`,
    {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      },
      id: {
        type: 'string'
      }
    }
  )

  // Claim
  const claimContents: Kilt.IClaimContents = {
    name: 'Alice',
    age: 29
  }
  const claimExample = Kilt.Claim.fromCTypeAndClaimContents(
    drivingLicenseCtype,
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
            cTypeHash: Kilt.CType.idToHash(drivingLicenseCtype.$id)
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
      `${outDir}/ctype.json`,
      JSON.stringify(drivingLicenseCtype, null, 2)
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
