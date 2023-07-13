/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

export function main() {
  const emailCType: Kilt.ICType = {
    $id: 'kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
    $schema:
      'ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/',
    title: 'Email',
    properties: {
      Email: {
        type: 'string'
      }
    },
    type: 'object'
  }
}
