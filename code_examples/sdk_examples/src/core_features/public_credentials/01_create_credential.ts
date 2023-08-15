import * as Kilt from '@kiltprotocol/sdk-js'

// CType definition.
const ctype = Kilt.CType.fromProperties(`NFT Collection Certification CType`, {
  name: {
    type: 'string'
  },
  pieces: {
    type: 'integer'
  },
  creationDate: {
    type: 'string'
  },
  artistIdentity: {
    type: 'string'
  }
})

export function createNftCollectionCredential(
  assetDid: Kilt.AssetDidUri,
  artistDid: Kilt.DidUri
): Kilt.IPublicCredentialInput {
  const claimProperties: Kilt.IClaimContents = {
    name: 'Awesome NFT drop',
    // NFT collection only has 100 pieces in total
    pieces: 100,
    // NFT collection was released on Jan 1st, 2023
    creationDate: new Date(2023, 0, 1).toISOString(),
    artistIdentity: artistDid
  }
  const fullClaim: Kilt.IAssetClaim = {
    contents: claimProperties,
    cTypeHash: Kilt.CType.idToHash(ctype.$id),
    subject: assetDid
  }

  return Kilt.PublicCredential.fromClaim(fullClaim)
}
