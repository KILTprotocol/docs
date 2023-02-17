import { BN } from '@polkadot/util'
import { Keyring } from '@polkadot/api'
import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { endowAccounts } from '../getFunds'
import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllDid } from './did'
import { runAll as runAllGettingStarted } from './getting_started'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllPublicCredentials } from './public_credentials'
import { runAll as runAllSignCallback } from './signCallback'
import { runAll as runAllWeb3 } from './web3names'

const resolveOn: Kilt.SubscriptionPromise.ResultEvaluator =
  Kilt.Blockchain.IS_IN_BLOCK

export async function testCoreFeatures(
  faucetAccount: Kilt.KeyringPair,
  wssAddress: string
): Promise<void> {
  // Connects to (and at the end disconnects from) Spiritnet, so it must be called before we connect to Peregrine for the rest of the tests.
  const gettingStartedFlow = async () => {
    console.log('Running getting started flow...')
    await runAllGettingStarted()
    console.log('Getting started flow completed!')
  }
  await gettingStartedFlow()

  Kilt.ConfigService.set({ submitTxResolveOn: resolveOn })
  const api = await Kilt.connect(wssAddress)

  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format
  })

  const [
    claimingTestAccount,
    didTestAccount,
    web3TestAccount,
    accountLinkingTestAccount,
    publicCredentialsTestAccount
  ] = Array(5)
    .fill(0)
    .map(() => keyring.addFromSeed(randomAsU8a(32)) as Kilt.KiltKeyringPair)

  // Endow all the needed accounts in one batch transfer, to avoid tx collisions.
  await endowAccounts(
    api,
    faucetAccount,
    [
      claimingTestAccount.address,
      didTestAccount.address,
      web3TestAccount.address,
      accountLinkingTestAccount.address,
      publicCredentialsTestAccount.address
    ],
    new BN(10)
  )

  // These should not conflict anymore since all accounts are different.
  await Promise.all([
    (async () => {
      try {
        await runAllClaiming(claimingTestAccount)
      } catch (e) {
        console.error('Claiming flow failed')
        throw e
      }
    })(),
    (async () => {
      try {
        await runAllDid(didTestAccount)
      } catch (e) {
        console.error('DID flow failed')
        throw e
      }
    })(),
    (async () => {
      try {
        await runAllWeb3(web3TestAccount)
      } catch (e) {
        console.error('Web3name flow failed')
        throw e
      }
    })(),
    (async () => {
      try {
        await runAllLinking(
          wssAddress,
          accountLinkingTestAccount,
          faucetAccount
        )
      } catch (e) {
        console.error('Linking flow failed')
        throw e
      }
    })(),
    (async () => {
      try {
        await runAllSignCallback(api)
      } catch (e) {
        console.error('SignCallback flow failed')
        throw e
      }
    })(),
    (async () => {
      try {
        await runAllPublicCredentials(publicCredentialsTestAccount)
      } catch (e) {
        console.error('Public credentials flow failed')
        throw e
      }
    })()
  ])
}
