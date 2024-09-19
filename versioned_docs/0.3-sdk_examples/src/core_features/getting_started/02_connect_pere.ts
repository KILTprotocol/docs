/* eslint-disable prefer-const */
import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<ApiPromise> {
  let api = await Kilt.connect('wss://peregrine.kilt.io/')

  return api
}
