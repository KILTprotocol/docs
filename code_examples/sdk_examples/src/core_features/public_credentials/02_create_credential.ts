import * as Kilt from '@kiltprotocol/sdk-js'

export function createNftCollectionCredential(
  ctype: Kilt.ICType,
  assetDid: Kilt.AssetDidUri,
  artistDid: Kilt.DidUri,
): Kilt.IPublicCredentialInput {
  const claims: Kilt.IClaimContents = {
    name: 'Awesome NFT drop',
    // NFT collection only has 100 pieces in total
    pieces: 100,
    // NFT collection was released on Jan 1st, 2023
    creationDate: new Date(2023, 0, 1).toISOString(),
    artistIdentity: artistDid
  }

  return {
    claims,
    cTypeHash: Kilt.CType.idToHash(ctype.$id),
    delegationId: null,
    subject: assetDid
  }
}
