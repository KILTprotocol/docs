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
  // setup attester account
  let attesterAccount = await generateAccount()

  // setup claimer & create attestation request
  await generateLightDid()
  let _request = await generateRequest({
    age: 27,
    name: 'Karl',
  })

  // send tokens to attester...
  let keyring = new Kilt.Utils.Keyring({
    type: 'sr25519',
    ss58Format: 38,
  })

  const faucetSeed = process.env[SEED_ENV]
  if (faucetSeed === undefined) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  await Kilt.Balance.makeTransfer(attesterAccount.address, 5n, 0)
    .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAccount))
    .then(() => console.log('Successfully transferred tokens'))

  // create attester did & ensure ctype
  await createFullDid()
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
    process.exit(0)
  })
