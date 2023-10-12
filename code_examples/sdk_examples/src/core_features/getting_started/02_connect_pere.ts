import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<ApiPromise> {
  // eslint-disable-next-line prefer-const
  let api = await Kilt.connect('wss://peregrine.kilt.io/')

  return api
}
