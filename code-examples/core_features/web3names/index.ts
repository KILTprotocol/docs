import { init as kiltInit, connect as kiltConnect } from '@kiltprotocol/core'
import { DemoKeystore, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/sdk-js'
import { Keyring, UUID } from '@kiltprotocol/utils'

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

  // Generate a random web3 name each time
  const web3Name = UUID.generate().substring(2, 34).toLowerCase()
  console.log(`Web3 name randomly generated: "${web3Name}"`)
  const web3NameOwner = await Web3Names.queryDidForWeb3Name(web3Name)
  if (web3NameOwner) {
    console.log(`Early exit. Web3 name "${web3Name}" already present.`)
    return
  }

  console.log('main1 - claim new Web3 name')
  let fullDid = await main1(
    api,
    keystore,
    faucetAccount,
    web3Name,
    BlockchainUtils.IS_IN_BLOCK
  )

  console.log('main2 - release the Web3 name by the owner')
  await main2(api, keystore, faucetAccount, fullDid, web3Name)

  console.log('main1 - again, claim the Web3 name again')
  fullDid = await main1(api, keystore, faucetAccount, web3Name)

  console.log('main3 - reclaim the Web3 name by the deposit payer')
  await main3(faucetAccount, web3Name)
}
