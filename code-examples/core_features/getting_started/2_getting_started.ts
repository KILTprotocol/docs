import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  await Kilt.init({ address: 'wss://spiritnet.kilt.io/' })
}
