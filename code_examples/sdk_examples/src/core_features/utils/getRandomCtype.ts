import * as Kilt from '@kiltprotocol/sdk-js'

export function getRandomCType(): Kilt.ICType {
  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = Kilt.Utils.UUID.generate()
  return Kilt.CType.fromProperties(`CType ${randomFactor}`, {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  })
}
