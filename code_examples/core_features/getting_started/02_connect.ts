import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<ApiPromise> {
  return Kilt.connect('wss://spiritnet.kilt.io/')
}
