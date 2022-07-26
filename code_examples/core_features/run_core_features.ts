import type { KeyringPair } from '@polkadot/keyring/types'

import { config as envConfig } from 'dotenv'

import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'
import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllDevSetup } from './dev_setup'
import { runAll as runAllDid } from './did'
import { runAll as runAllGettingStarted } from './getting_started'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

const resolveOn: Kilt.SubscriptionPromise.ResultEvaluator =
  Kilt.BlockchainUtils.IS_IN_BLOCK
const nodeAddress = 'wss://peregrine.kilt.io/parachain-public-ws'

async function endowAccount(
  faucetAccount: KeyringPair,
  destinationAccount: KeyringPair['address'],
  amount: BN
): Promise<void> {
  console.log(
    `Endowing test account "${destinationAccount}" with ${Kilt.BalanceUtils.formatKiltBalance(
      amount,
      { decimals: 0 }
    )}`
  )
  await Kilt.Balance.getTransferTx(
    destinationAccount,
    Kilt.BalanceUtils.KILT_COIN.mul(amount),
    0
  ).then((tx) =>
    Kilt.ChainHelpers.BlockchainUtils.signAndSubmitTx(tx, faucetAccount, {
      reSign: true,
      resolveOn
    })
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
  await gettingStartedFlow()

  await Kilt.init({ address: nodeAddress })
  const { api } = await Kilt.connect()

  const keyring = new Keyring({ ss58Format: 38, type: 'sr25519' })
  const faucetAccount = keyring.addFromSeed(hexToU8a(faucetSeed))

  const claimingFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    // Run all claiming
    await runAllClaiming(api, testAccount, resolveOn)
  }

  const didFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    // Run all DID
    await runAllDid(api, testAccount, resolveOn)
  }

  const web3NameFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    await runAllWeb3(api, testAccount, resolveOn)
  }

  const accountLinkingFlow = async () => {
    const testAccount = keyring.addFromSeed(randomAsU8a(32))
    await endowAccount(faucetAccount, testAccount.address, new BN(10))
    await runAllLinking(api, testAccount, faucetAccount, resolveOn)
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
