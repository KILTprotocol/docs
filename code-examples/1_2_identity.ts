import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(address: string) {
  await Kilt.init({ address })

  const claimerMnemonic = Kilt.Identity.generateMnemonic()
  console.log('claimer mnemonic:', claimerMnemonic)
  const claimer = Kilt.Identity.buildFromMnemonic(claimerMnemonic)
  console.log('claimer address:', claimer.address)

  const attesterMnemonic = Kilt.Identity.generateMnemonic()
  console.log('attester mnemonic:', attesterMnemonic)
  const attester = Kilt.Identity.buildFromMnemonic(attesterMnemonic)
  console.log('attester address:', attester.address)
}
