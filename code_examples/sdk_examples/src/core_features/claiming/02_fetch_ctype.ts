import * as Kilt from '@kiltprotocol/sdk-js'

export async function fetchCType(
  ctypeId: Kilt.ICType['$id']
): Promise<Kilt.CType.ICTypeDetails> {
  return Kilt.CType.fetchFromChain(ctypeId)
}
