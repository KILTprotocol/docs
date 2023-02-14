import * as Kilt from '@kiltprotocol/sdk-js'

export async function verifyCredential(
  credential: Kilt.IPublicCredential,
  cType?: Kilt.ICType
): Promise<void> {
  await Kilt.PublicCredential.verifyCredential(credential, { cType })
}
