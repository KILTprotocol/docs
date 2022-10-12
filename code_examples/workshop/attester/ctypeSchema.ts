import * as Kilt from '@kiltprotocol/sdk-js'

// Return CTYPE from a schema
export function getCtypeSchema(): Kilt.ICType {
  return Kilt.CType.fromProperties('Drivers License', {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  })
}
