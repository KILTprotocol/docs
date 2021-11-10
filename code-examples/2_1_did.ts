import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  const keystore = new Kilt.Did.DemoKeystore()

  console.log('Keystore:', keystore)

  return keystore
}
