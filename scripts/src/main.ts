import 'dotenv/config'
import { mkdir, writeFile } from 'fs/promises'
import { normalize } from 'path'

import { encodeAddress } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

async function main() {
  console.log('Generating JSON files for documentation')
  const keystore = new Kilt.Did.DemoKeystore()

  const kiltAttesterAuthKey: Kilt.DidVerificationKey =
    await keystore.generateKeypair({ alg: Kilt.Did.SigningAlgorithms.Sr25519 }).then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.VerificationKeyType.Sr25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltAttesterEncKey: Kilt.DidEncryptionKey =
    await keystore.generateKeypair({ alg: Kilt.Did.EncryptionAlgorithms.NaclBox }).then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.EncryptionKeyType.X25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltAttesterIdentifier: Kilt.IIdentity['address'] = encodeAddress(kiltAttesterAuthKey.publicKey, 38)
  const kiltAttesterDid = new Kilt.Did.FullDidDetails({
    identifier: kiltAttesterIdentifier,
    keys: {
      [kiltAttesterAuthKey.id]: kiltAttesterAuthKey,
      [kiltAttesterEncKey.id]: kiltAttesterEncKey,
    },
    keyRelationships: {
      'authentication': new Set([kiltAttesterAuthKey.id]),
      'keyAgreement': new Set([kiltAttesterEncKey.id])
    },
    uri: Kilt.Did.Utils.getKiltDidFromIdentifier(kiltAttesterIdentifier, 'full')
  })

  const kiltClaimerAuthKey: Kilt.DidVerificationKey =
    await keystore.generateKeypair({ alg: Kilt.Did.SigningAlgorithms.Sr25519 }).then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.VerificationKeyType.Sr25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltClaimerEncKey: Kilt.DidEncryptionKey =
    await keystore.generateKeypair({ alg: Kilt.Did.EncryptionAlgorithms.NaclBox }).then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.EncryptionKeyType.X25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltClaimerIdentifier: Kilt.IIdentity['address'] = encodeAddress(kiltClaimerAuthKey.publicKey, 38)
  const kiltClaimerDid = new Kilt.Did.FullDidDetails({
    identifier: kiltClaimerIdentifier,
    keys: {
      [kiltClaimerAuthKey.id]: kiltClaimerAuthKey,
      [kiltClaimerEncKey.id]: kiltClaimerEncKey,
    },
    keyRelationships: {
      'authentication': new Set([kiltClaimerAuthKey.id]),
      'keyAgreement': new Set([kiltClaimerEncKey.id])
    },
    uri: Kilt.Did.Utils.getKiltDidFromIdentifier(kiltClaimerIdentifier, 'full')
  })

  const resolve = async (didUri: Kilt.DidUri): Promise<Kilt.DidResolvedDetails | null> => {
    const { did: uriWithNoFragment } = Kilt.Did.Utils.parseDidUri(didUri)
    if (uriWithNoFragment === kiltClaimerDid.uri) {
      return {
        metadata: { deactivated: false },
        details: kiltClaimerDid
      }
    } else if (uriWithNoFragment === kiltAttesterDid.uri) {
      return {
        metadata: { deactivated: false },
        details: kiltAttesterDid
      }
    } else {
      return null
    }
  }

  const mockResolver: Kilt.IDidResolver = {
    resolve,
    resolveDoc: resolve,
    resolveKey: async (didUri: Kilt.DidPublicKey['uri']) => {
      const { did, fragment } = Kilt.Did.Utils.parseDidUri(didUri)
      console.log(fragment)
      const doc = await resolve(didUri)
      console.log(doc)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = doc!.details!.getKey(fragment!)
      console.log(key)
      if (!key) return null
      return {
        controller: did,
        uri: didUri,
        publicKey: key.publicKey,
        type: key.type,
      }
    },
    resolveServiceEndpoint: async () => null
  }

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
  const ctypeDrivingsLicense: Kilt.CType = Kilt.CType.fromSchema(drivingLicenseCtypeSchema, kiltAttesterDid.uri)

  // Claim
  const claimContents: Kilt.IClaimContents = {
    name: 'Alice',
    age: 29
  }
  const claimExample = Kilt.Claim.fromCTypeAndClaimContents(ctypeDrivingsLicense, claimContents, kiltClaimerDid.uri)

  // Encrypted message
  const message = new Kilt.Message({
    type: Kilt.MessageBodyType.REQUEST_CREDENTIAL,
    content: {
      cTypes: [{
        cTypeHash: ctypeDrivingsLicense.hash
      }]
    }
  }, kiltClaimerDid.uri, kiltAttesterDid.uri)
  const encrypted =
    await message.encrypt(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      kiltClaimerDid.encryptionKey!.id,
      kiltClaimerDid,
      keystore,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Kilt.Did.Utils.assembleKeyUri(kiltAttesterDid.uri, kiltAttesterDid.encryptionKey!.id),
      { resolver: mockResolver }
    )

  const outDir = normalize(`${__dirname}/../out`)

  console.log(`Creating output directory at ${outDir}...`)
  await mkdir(outDir, { recursive: true })

  await writeFile(`${outDir}/ctype-schema.json`, JSON.stringify(drivingLicenseCtypeSchema, null, 2))
  await writeFile(`${outDir}/ctype.json`, JSON.stringify(ctypeDrivingsLicense, null, 2))
  await writeFile(`${outDir}/claim.json`, JSON.stringify(claimExample, null, 2))
  await writeFile(`${outDir}/encrypted-message.json`, JSON.stringify(encrypted, null, 2))

  console.log('Generation completed successfully!')
}

main().then(() => process.exit(0)).catch((e) => {
  console.error(e)
  process.exit(1)
})
