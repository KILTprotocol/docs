import { init as kiltInit, connect as kiltConnect } from '@kiltprotocol/core'
import { DemoKeystore } from '@kiltprotocol/did'
import { Keyring } from '@kiltprotocol/utils'

import { main as main1 } from './1_web3name'
import { main as main2 } from './2_web3name'
import { main as main3 } from './3_web3name'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll() {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await kiltConnect()

  const keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38
  })
  const keystore = new DemoKeystore()

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    throw `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  console.log('main1 - claim new Web3 name')
  const web3Name = 'example-web3-name'
  let fullDid = await main1(api, keystore, faucetAccount, web3Name)

  console.log('main2 - release the Web3 name by the owner')
  await main2(api, keystore, faucetAccount, fullDid, web3Name)

  console.log('main1 - again, claim the Web3 name again')
  fullDid = await main1(api, keystore, faucetAccount, web3Name)

  console.log('main3 - reclaim the Web3 name by the deposit payer')
  await main3(faucetAccount, web3Name)
}
