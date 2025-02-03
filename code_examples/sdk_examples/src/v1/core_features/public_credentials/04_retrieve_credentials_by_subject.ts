import * as Kilt from '@kiltprotocol/sdk-js'

export async function retrieveAllAssetCredentials(
  assetDid: Kilt.AssetDidUri
): Promise<Kilt.IPublicCredential[]> {
  return Kilt.PublicCredential.fetchCredentialsFromChain(assetDid)
}
