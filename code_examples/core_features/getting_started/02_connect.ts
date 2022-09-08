import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(): Promise<void> {
  await Kilt.connect('wss://spiritnet.kilt.io/')
}
