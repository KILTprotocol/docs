/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

export function main() {
  const emailCType: Kilt.ICType = {
    $id: 'kilt:ctype:0xae5bc64e500eb576b7b137288cec5d532094e103be46872f1ad54641e477d9fe',
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
