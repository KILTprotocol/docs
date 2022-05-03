import * as Kilt from '@kiltprotocol/sdk-js'

// returns CTYPE from a schema
export function getCtypeSchema(): Kilt.CType {
  return Kilt.CType.fromSchema({
    $schema: 'ipns://k51qzi5uqu5dkglos1mtdukd4axyhwav7e98bga8g2nptrkgcbj9506ruoadiz/v1/ctype.json',
    title: 'Drivers License',
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      }
    },
    type: 'object'
  })
}
