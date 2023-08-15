import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<ApiPromise> {
  const api = await Kilt.connect('wss://spiritnet.kilt.io/')

  return api
}
