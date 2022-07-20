import { BN } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './attester/attestClaim'
import { createFullDid } from './attester/generateDid'
import { ensureStoredCtype } from './attester/generateCtype'
import { generateAccount } from './attester/generateAccount'
import { generateLightDid } from './claimer/generateLightDid'
import { generateRequest } from './claimer/generateRequest'
import { verificationFlow } from './verify'

const SEED_ENV = 'FAUCET_SEED'

async function testWorkshop() {
  process.env.WSS_ADDRESS = 'wss://peregrine.kilt.io/parachain-public-ws'

  // setup attester account
  const { account: attesterAccount, mnemonic: attesterMnemonic } =
    await generateAccount()
  process.env.ATTESTER_MNEMONIC = attesterMnemonic
  process.env.ATTESTER_ADDRESS = attesterAccount.address

  // setup claimer & create attestation request
  const { lightDid: claimerDid, mnemonic: claimerMnemonic } =
    await generateLightDid()
  process.env.CLAIMER_DID_URI = claimerDid.uri
  process.env.CLAIMER_MNEMONIC = claimerMnemonic

  await generateRequest({
    age: 27,
    name: 'Karl'
  })

  // send tokens to attester...
  const keyring = new Kilt.Utils.Keyring({
    type: 'sr25519',
    ss58Format: 38
  })

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  await Kilt.Balance.getTransferTx(attesterAccount.address, new BN(5), 0)
    .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAccount))
    .then(() => console.log('Successfully transferred tokens'))

  // create attester did & ensure ctype
  const attesterDid = await createFullDid()
  process.env.ATTESTER_DID_URI = attesterDid.uri

  await ensureStoredCtype()

  // do attestation & verification
  process.env.CLAIMER_CREDENTIAL = JSON.stringify(await attestingFlow())
  await verificationFlow()
}

testWorkshop()
  .catch((e) => {
    console.log('Error in the workshop', e)
    process.exit(1)
  })
  .then(() => {
    process.exit()
  })
