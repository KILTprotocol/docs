import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryFullDid(
  didUri: Kilt.DidUri
): Promise<Kilt.DidDocument | null> {
  const { metadata, document } = await Kilt.Did.resolve(didUri)
  if (metadata.deactivated) {
    console.log(`DID ${didUri} has been deleted.`)
    return null
  } else if (document === undefined) {
    console.log(`DID ${didUri} does not exist.`)
    return null
  } else {
    return document
  }
}
