import type { ApiPromise } from '@polkadot/api'
import type { KeyringPair } from '@polkadot/keyring/types'

import { config as envConfig } from 'dotenv'
import { setTimeout } from 'timers/promises'

import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'
import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { runAll as runAllClaiming } from './claiming'
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
        await api.tx.balances.transfer(
          acc,
          Kilt.BalanceUtils.convertToTxUnit(
            Kilt.BalanceUtils.KILT_COIN.mul(amount),
            0
          )
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
  const batchTx = api.tx.utility.batchAll(transferBatch)
  try {
    await Kilt.Blockchain.signAndSubmitTx(batchTx, faucetAccount)
  } catch {
    // Try a second time after a small delay and fetching the right nonce.
    const waitingTime = 2_000 // 2 seconds
    console.log(
      `First submission failed. Waiting ${waitingTime} ms before retrying.`
    )
    await setTimeout(waitingTime)
    console.log('Retrying...')
    // nonce: -1 tells the client to fetch the latest nonce by also checking the tx pool
    const resignedBatchTx = await batchTx.signAsync(faucetAccount, {
      nonce: -1
    })
    await Kilt.Blockchain.submitSignedTx(resignedBatchTx)
  }
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

  Kilt.config({ submitTxResolveOn: resolveOn })
  const api = await Kilt.connect(nodeAddress)

  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format
  })
  const faucetAccount = keyring.addFromSeed(hexToU8a(faucetSeed), {}, 'sr25519')

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
    runAllClaiming(api, claimingTestAccount),
    runAllDid(api, didTestAccount),
    runAllWeb3(api, web3TestAccount),
    runAllLinking(api, accountLinkingTestAccount, faucetAccount)
  ])
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.log('Error in the core features test', e)
    process.exit(1)
  }
})()
