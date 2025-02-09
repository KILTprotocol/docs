import * as Kilt from '@kiltprotocol/sdk-js'

export async function fetchCType(
  ctypeId: Kilt.ICType['$id']
): Promise<Kilt.CType.ICTypeDetails> {
  // Example CType ID: kilt:ctype:0x329a2a5861ea63c250763e5e4c4d4a18fe4470a31e541365c7fb831e5432b940
  return Kilt.CType.fetchFromChain(ctypeId)
}
