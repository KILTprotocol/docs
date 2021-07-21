import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(address: string) {
  await Kilt.init({ address })

  const mnemonic = Kilt.Identity.generateMnemonic()
  console.log('mnemonic:', mnemonic)

  const identity = Kilt.Identity.buildFromMnemonic(mnemonic)
  console.log('address:', identity.address)
}
