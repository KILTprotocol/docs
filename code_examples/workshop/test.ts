import { config as envConfig } from 'dotenv'
import { setTimeout } from 'timers/promises'

import { BN, hexToU8a } from '@polkadot/util'
import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './attester/attestCredential'
import { createFullDid } from './attester/generateDid'
import { ensureStoredCtype } from './attester/generateCtype'
import { generateAccount } from './attester/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from './attester/generateKeypairs'
import { generateKeypairs as generateClaimerKeypairs } from './claimer/generateKeypairs'
import { generateCredential } from './claimer/generateCredential'
import { getLightDid } from './claimer/generateLightDid'
import { verificationFlow } from './verify'

const SEED_ENV = 'FAUCET_SEED'

async function testWorkshop() {
  envConfig()
  process.env.WSS_ADDRESS = 'wss://peregrine.kilt.io/parachain-public-ws'
  Kilt.ConfigService.set({ submitTxResolveOn: Kilt.Blockchain.IS_IN_BLOCK })
  const api = await Kilt.connect(process.env.WSS_ADDRESS)

  // setup attester account
  const { account: attesterAccount } = await generateAccount()

  // setup claimer & create a credential
  const claimerMnemonic = mnemonicGenerate()
  const { authentication } = generateClaimerKeypairs(claimerMnemonic)
  const lightDid = getLightDid(claimerMnemonic)

  generateCredential(lightDid.uri, {
    age: 27,
    name: 'Karl'
  })

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = Kilt.Utils.Crypto.makeKeypairFromSeed(
    hexToU8a(faucetSeed),
    'sr25519'
  )

  const tx = api.tx.balances.transfer(
    attesterAccount.address,
    Kilt.BalanceUtils.convertToTxUnit(new BN(5), 0)
  )
  try {
    await Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount)
  } catch {
    // Try a second time after a small delay and fetching the right nonce.
    const waitingTime = 2_000 // 2 seconds
    console.log(
      `First submission failed. Waiting ${waitingTime} ms before retrying.`
    )
    await setTimeout(waitingTime)
    console.log('Retrying...')
    // nonce: -1 tells the client to fetch the latest nonce by also checking the tx pool
    const resignedBatchTx = await tx.signAsync(faucetAccount, { nonce: -1 })
    await Kilt.Blockchain.submitSignedTx(resignedBatchTx)
  }
  try {
    await Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount)
  } catch {
    // Try a second time after a timeout if the first time failed.
    const waitingTime = 12_000
    console.log(`First submission failed. Waiting ${waitingTime} ms`)
    await setTimeout(waitingTime)
    await Kilt.Blockchain.signAndSubmitTx(tx, faucetAccount)
  }

  console.log('Successfully transferred tokens')

  // Create attester DID & ensure CType
  const { fullDid: attesterDid, mnemonic: attesterMnemonic } =
    await createFullDid(attesterAccount)
  const { attestation } = generateAttesterKeypairs(attesterMnemonic)

  await ensureStoredCtype(
    attesterAccount,
    attesterDid.uri,
    async ({ data }) => ({
      data: attestation.sign(data),
      keyType: attestation.type,
      // Not needed
      keyUri: `${attesterDid.uri}#id`
    })
  )

  // Do attestation & verification
  const credential = await attestingFlow(
    lightDid.uri,
    attesterAccount,
    attesterDid.uri,
    async ({ data }) => ({
      data: attestation.sign(data),
      keyType: attestation.type,
      // Not needed
      keyUri: `${attesterDid.uri}#id`
    })
  )
  await verificationFlow(credential, async ({ data }) => ({
    data: authentication.sign(data),
    keyType: authentication.type,
    keyUri: `${lightDid.uri}${lightDid.authentication[0].id}`,
  }))
}

;(async () => {
  try {
    await testWorkshop()
    process.exit(0)
  } catch (e) {
    console.log('Error in the workshop', e)
    process.exit(1)
  }
})()
