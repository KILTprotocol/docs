import * as Kilt from '@kiltprotocol/sdk-js'

export function main(): Kilt.CType {
  return Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Drivers License',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
      },
    },
    type: 'object',
  })
}
