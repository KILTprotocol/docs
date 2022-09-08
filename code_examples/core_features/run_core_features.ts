import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import { config as envConfig } from 'dotenv'

import { cryptoWaitReady, randomAsU8a } from '@polkadot/util-crypto'
import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllDevSetup } from './dev_setup'
import { runAll as runAllDid } from './did'
import { runAll as runAllGettingStarted } from './getting_started'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

const resolveOn: Kilt.SubscriptionPromise.ResultEvaluator =
  Kilt.Blockchain.IS_IN_BLOCK
const nodeAddress = 'wss://peregrine.kilt.io/parachain-public-ws'

async function endowAccounts(
  api: ApiPromise,
  faucetAccount: KeyringPair,
  destinationAccounts: Kilt.KiltKeyringPair['address'][],
  amount: BN
): Promise<void> {
  const transferBatch = await Promise.all(
    destinationAccounts.map(
      async (acc) =>
        await Kilt.Balance.getTransferTx(
          acc,
          Kilt.BalanceUtils.KILT_COIN.mul(amount),
          0
        )
    )
  )

  console.log(
    `Endowing test accounts "${destinationAccounts}"
    from faucet "${faucetAccount.address}"
    with ${Kilt.BalanceUtils.formatKiltBalance(amount, {
      decimals: 0
    })} each...`
  )
  await Kilt.Blockchain.signAndSubmitTx(
    api.tx.utility.batchAll(transferBatch),
    faucetAccount,
    { resolveOn }
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
  // FIXME: Remove when used versions match
  await cryptoWaitReady()
  const api = await Kilt.connect()

  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format,
  })
  const faucetAccount = keyring.addFromSeed(hexToU8a(faucetSeed))

  const [
    claimingTestAccount,
    didTestAccount,
    web3TestAccount,
    accountLinkingTestAccount
  ] = Array(4)
    .fill(0)
    .map(() => keyring.addFromSeed(randomAsU8a(32)) as Kilt.KiltKeyringPair)

  // Endow all the needed accounts in one batch transfer, to avoid tx collisions
  await endowAccounts(
    api,
    faucetAccount,
    [
      claimingTestAccount.address,
      didTestAccount.address,
      web3TestAccount.address,
      accountLinkingTestAccount.address
    ],
    new BN(10)
  )

  // These should not conflict anymore since all accounts are different
  await Promise.all([
    runAllClaiming(claimingTestAccount, resolveOn),
    runAllDid(api, didTestAccount, resolveOn),
    runAllWeb3(web3TestAccount, resolveOn),
    runAllLinking(api, accountLinkingTestAccount, faucetAccount, resolveOn),
    runAllDevSetup()
  ])
}

// Solution 1
(() => {
  main()
})()

main()
  .catch((e) => {
    console.log('Error in the core features test', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
