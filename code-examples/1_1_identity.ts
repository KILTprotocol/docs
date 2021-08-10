import * as Kilt from '@kiltprotocol/sdk-js'

export function main(): Kilt.Identity {
  const mnemonic = Kilt.Identity.generateMnemonic()
  console.log('mnemonic:', mnemonic)

  const identity = Kilt.Identity.buildFromMnemonic(mnemonic)
  console.log('address:', identity.address)
  return identity
}
