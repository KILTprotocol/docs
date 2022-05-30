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
import { runAll as runAllDid } from './did'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

async function endowAccount(faucetAccount: KeyringPair, destinationAccount: KeyringPair['address'], amount: BN): Promise<void> {
  console.log(`Endowing test account "${destinationAccount}" with ${Kilt.BalanceUtils.formatKiltBalance(amount, { decimals: 0 })}`)
  await Kilt.Balance.getTransferTx(destinationAccount, Kilt.BalanceUtils.KILT_COIN.mul(amount), 0).
    then((tx) =>
      Kilt.ChainHelpers.BlockchainUtils.signAndSubmitTx(
        tx,
        faucetAccount,
        { reSign: true, resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK }
      )
    )
}

async function main(): Promise<void> {
  envConfig()

  const faucetSeed = process.env['FAUCET_SEED']
  if (!faucetSeed) {
    throw `No faucet seed specified with the "FAUCET_SEED" env variable.`
  }

  await Kilt.init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await Kilt.connect()

  const keystore = new Kilt.Did.DemoKeystore()
  const keyring = new Keyring({ ss58Format: 38, type: 'sr25519' })
  const faucetAccount = keyring.addFromSeed(hexToU8a(faucetSeed))
  const testAccount = keyring.addFromSeed(randomAsU8a(32))

  await endowAccount(faucetAccount, testAccount.address, new BN(20))

  // Run all claiming
  await runAllClaiming(keystore)
  // Run all DID
  await runAllDid(keystore, api, testAccount, Kilt.BlockchainUtils.IS_IN_BLOCK)
  // Create a new DID to test Web3 names
  const testFullDid = await createSimpleFullDid(keystore, api, testAccount, undefined, Kilt.BlockchainUtils.IS_IN_BLOCK)
  // Run all Web3 name
  const randomWeb3Name = randomUUID().substring(0, 32)
  console.log(randomWeb3Name)
  await runAllWeb3(keystore, testAccount, testFullDid, randomWeb3Name, Kilt.BlockchainUtils.IS_IN_BLOCK)
  // Re-claim the Web3 name to test account linking
  await claimWeb3Name(keystore, testFullDid, testAccount, randomWeb3Name, Kilt.BlockchainUtils.IS_IN_BLOCK)
  // Run all account linking
  await runAllLinking(keystore, api, testAccount, testFullDid, faucetAccount, Kilt.BlockchainUtils.IS_IN_BLOCK)
}

main()
  .catch((e) => {
    console.log('Error in the core features test', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
