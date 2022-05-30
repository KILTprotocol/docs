import { randomUUID } from 'crypto'

import { BN } from '@polkadot/util'
import type { KeyringPair } from '@polkadot/keyring/types'

import { Keyring } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'
import { randomAsU8a } from '@polkadot/util-crypto'

import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { claimWeb3Name } from './web3names/01_claim'
import { createSimpleFullDid } from './did/04_full_did_simple'

import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllDevSetup} from './dev_setup'
import { runAll as runAllDid } from './did'
import { main as runAllGettingStarted } from './getting_started'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

const resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils.IS_FINALIZED
const nodeAddress = 'wss://peregrine.kilt.io/parachain-public-ws'

async function endowAccount(faucetAccount: KeyringPair, destinationAccount: KeyringPair['address'], amount: BN): Promise<void> {
  console.log(`Endowing test account "${destinationAccount}" with ${Kilt.BalanceUtils.formatKiltBalance(amount, { decimals: 0 })}`)
  await Kilt.Balance.getTransferTx(destinationAccount, Kilt.BalanceUtils.KILT_COIN.mul(amount), 0).
    then((tx) =>
      Kilt.ChainHelpers.BlockchainUtils.signAndSubmitTx(
        tx,
        faucetAccount,
        { reSign: true, resolveOn }
      )
    )
}

async function main(): Promise<void> {
  envConfig()

  const faucetSeed = process.env['FAUCET_SEED']
  if (!faucetSeed) {
    throw `No faucet seed specified with the "FAUCET_SEED" env variable.`
  }

  // Connects to (and at the end disconnects from) Spiritnet, so it must be called before we connect to Peregrine for the rest of the tests.
  const gettingStartedFlow = async () => {
    console.log('Running getting started flow...')
    await runAllGettingStarted()
    console.log('Getting started flow completed!')
  }
  // FIXME: Fix the timeout error for ipfs.io gateway in the getting started flow.
  try {
    await gettingStartedFlow()
  } catch(e) {
    console.warn('Getting started flow has failed with the following error:')
    console.warn(e)
  }

  await Kilt.init({ address: nodeAddress })
  const { api } = await Kilt.connect()

  const keystore = new Kilt.Did.DemoKeystore()
  const keyring = new Keyring({ ss58Format: 38, type: 'sr25519' })
  const faucetAccount = keyring.addFromSeed(hexToU8a(faucetSeed))

  const claimingFlow = async () => {
    // Run all claiming
    await runAllClaiming(keystore)
  }

  const didFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    // Run all DID
    await runAllDid(keystore, api, testAccount, resolveOn)
  }

  const web3NameFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    // Create a new DID to test Web3 names
    const testFullDid = await createSimpleFullDid(keystore, api, testAccount, undefined, resolveOn)
    // Run all Web3 name
    const randomWeb3Name = randomUUID().substring(0, 32)
    await runAllWeb3(keystore, testAccount, testFullDid, randomWeb3Name, resolveOn)
  }

  const accountLinkingFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    // Create a new DID to test account linking
    const testFullDid = await createSimpleFullDid(keystore, api, testAccount, undefined, resolveOn)
    // Link new DID to a random Web3 name
    const randomWeb3Name = randomUUID().substring(0, 32)
    await claimWeb3Name(keystore, testFullDid, testAccount, randomWeb3Name, resolveOn)
    // Run all account linking
    await runAllLinking(keystore, api, testAccount, testFullDid, faucetAccount, resolveOn)
  }

  const devSetupFlow = async () => {
    console.log('Running dev setup flow...')
    await runAllDevSetup(nodeAddress)
    console.log('Dev setup flow completed!')
  }

  await Promise.all([
    claimingFlow(),
    didFlow(),
    web3NameFlow(),
    accountLinkingFlow(),
    devSetupFlow()
  ])
}

main()
  .catch((e) => {
    console.log('Error in the core features test', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
