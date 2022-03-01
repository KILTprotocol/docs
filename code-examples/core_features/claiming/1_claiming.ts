import { CType } from '@kiltprotocol/core'

export async function main(): Promise<CType> {
  const ctype = CType.fromSchema({
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

  return ctype
}
