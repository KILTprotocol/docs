import 'dotenv/config'
import { mkdir, writeFile } from 'fs/promises'
import { normalize } from 'path'

import { Keyring } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'
import { randomAsHex } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

async function main() {
  console.log('Generating JSON files for documentation')
  const keyring = new Keyring({ ss58Format: 38 })
  const kiltAttesterAddress = keyring.addFromSeed(hexToU8a(randomAsHex(32)))
  const kilClaimerAddress = keyring.addFromSeed(hexToU8a(randomAsHex(32)))
  const exampleAttesterDidUri: Kilt.DidUri = `did:kilt:${kiltAttesterAddress.address}`
  console.log(`Random attester DID: ${exampleAttesterDidUri}`)
  const exampleClaimerDidUri: Kilt.DidUri = `did:kilt:${kilClaimerAddress.address}`
  console.log(`Random claimer DID: ${exampleClaimerDidUri}`)

  const drivingLicenseCtypeSchema: Kilt.CTypeSchemaWithoutId = {
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${exampleAttesterDidUri}`,
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
  const ctypeDrivingsLicense: Kilt.CType = Kilt.CType.fromSchema(drivingLicenseCtypeSchema, exampleAttesterDidUri)
  const claimContents: Kilt.IClaimContents = {
    name: 'Alice',
    age: 29
  }
  const claimExample = Kilt.Claim.fromCTypeAndClaimContents(ctypeDrivingsLicense, claimContents, exampleClaimerDidUri)

  const outDir = normalize(process.env.OUT_DIR || `${__dirname}/../out`)
  const spacing = parseInt(process.env.SPACING || "2")

  console.log(`Creating output directory at ${outDir}...`)
  await mkdir(outDir, { recursive: true })

  await writeFile(`${outDir}/ctype-schema.json`, JSON.stringify(drivingLicenseCtypeSchema, null, spacing))
  await writeFile(`${outDir}/ctype.json`, JSON.stringify(ctypeDrivingsLicense, null, spacing))
  await writeFile(`${outDir}/claim.json`, JSON.stringify(claimExample, null, spacing))

  console.log('Generation completed successfully!')
}

main().then(() => process.exit(0)).catch(() => process.exit(1))
