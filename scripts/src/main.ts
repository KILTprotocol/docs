import { mkdir, writeFile } from 'fs/promises'
import { normalize } from 'path'

import { cryptoWaitReady } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAttesterDid, generateClaimerDid, resolver } from './dids'

async function main() {
  console.log('Generating JSON files for documentation')
  await cryptoWaitReady
  const keystore = new Kilt.Did.DemoKeystore()

  const kiltAttesterDid = await generateAttesterDid(keystore)
  const kiltClaimerDid = await generateClaimerDid(keystore)

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
  const ctypeDrivingsLicense: Kilt.CType = Kilt.CType.fromSchema(
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
  const message = new Kilt.Message(
    {
      type: Kilt.MessageBodyType.REQUEST_CREDENTIAL,
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
  const encrypted = await message.encrypt(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    kiltClaimerDid.encryptionKey!.id,
    kiltClaimerDid,
    keystore,
    Kilt.Did.Utils.assembleKeyUri(
      kiltAttesterDid.uri,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      kiltAttesterDid.encryptionKey!.id
    ),
    { resolver }
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

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
