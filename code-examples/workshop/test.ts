import 'https'
import { generateAccount } from './attester/generateAccount.js'
import { createFullDid } from './attester/generateDid.js'
import { ensureStoredCtype } from './attester/generateCtype.js'
import { generateLightDid } from './claimer/generateLightDid.js'
import { generateRequest } from './claimer/generateRequest.js'
import { attestingFlow } from './attester/attestClaim.js'
import { verificationFlow } from './verify.js'

import * as Kilt from '@kiltprotocol/sdk-js'

const SEED_ENV = 'FAUCET_SEED'

async function testWorkshop() {
  process.env.WSS_ADDRESS = 'wss://peregrine.kilt.io/parachain-public-ws'

  // setup attester account
  const { account: attesterAccount, mnemonic: attesterMnemonic } = await generateAccount()
  process.env.ATTESTER_MNEMONIC = attesterMnemonic
  process.env.ATTESTER_ADDRESS = attesterAccount.address

  // setup claimer & create attestation request
  const { lightDid: claimerDid, mnemonic: claimerMnemonic } = await generateLightDid()
  process.env.CLAIMER_DID_URI = claimerDid
  process.env.CLAIMER_MNEMONIC = claimerMnemonic

  await generateRequest({
    age: 27,
    name: 'Karl',
  })

  // send tokens to attester...
  const keyring = new Kilt.Utils.Keyring({
    type: 'sr25519',
    ss58Format: 38,
  })

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  await Kilt.Balance.getTransferTx(attesterAccount.address, 5n, 0)
    .then((tx) =>
      Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAccount, {
        reSign: true,
      })
    )
    .then(() => console.log('Successfully transferred tokens'))

  // create attester did & ensure ctype
  const attersterDid = await createFullDid()
  process.env.ATTESTER_DID_ID = attersterDid.identifier

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
