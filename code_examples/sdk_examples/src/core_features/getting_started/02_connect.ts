import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<ApiPromise> {
  await Kilt.connect('wss://spiritnet.kilt.io/')

  const api = Kilt.ConfigService.get('api')

  return api
}
