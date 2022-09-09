import * as Kilt from '@kiltprotocol/sdk-js'
export async function main() {
  await Kilt.connect('wss://spiritnet.kilt.io/')
}
