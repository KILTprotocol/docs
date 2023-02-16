import * as Kilt from '@kiltprotocol/sdk-js'

export default function getExtrinsic(): Kilt.SubmittableExtrinsic {
  const api = Kilt.ConfigService.get('api')

  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = Kilt.Utils.UUID.generate()
  return api.tx.ctype.add(Kilt.CType.toChain(Kilt.CType.fromProperties(`CType ${randomFactor}`, {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  })))
}
