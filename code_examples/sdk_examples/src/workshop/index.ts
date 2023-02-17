import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './attester/attestCredential'
import { createFullDid } from './attester/generateDid'
import { ensureStoredCtype } from './attester/generateCtype'
import { generateAccount } from './attester/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from './attester/generateKeypairs'
import { generateKeypairs as generateClaimerKeypairs } from './claimer/generateKeypairs'
import { generateCredential } from './claimer/generateCredential'
import { generateLightDid } from './claimer/generateLightDid'
import { getFunds } from '../getFunds'
import { verificationFlow } from './verify'

export async function testWorkshop(
  account: Kilt.KeyringPair,
  wssAddress: string
) {
  console.log('Running the workshop!')

  Kilt.ConfigService.set({ submitTxResolveOn: Kilt.Blockchain.IS_IN_BLOCK })
  const api = await Kilt.connect(wssAddress)

  // Setup attester account.
  const { account: attesterAccount } = await generateAccount()

  // Setup claimer & create a credential.
  const claimerMnemonic = mnemonicGenerate()
  const { authentication } = generateClaimerKeypairs(claimerMnemonic)
  const lightDid = generateLightDid(claimerMnemonic)

  generateCredential(lightDid.uri, {
    age: 27,
    name: 'Karl'
  })

  await getFunds(api, account, attesterAccount.address, 5)

  // Create attester DID & ensure CType.
  const { fullDid: attesterDid, mnemonic: attesterMnemonic } =
    await createFullDid(attesterAccount)
  const { assertionMethod } = generateAttesterKeypairs(attesterMnemonic)

  await ensureStoredCtype(
    attesterAccount,
    attesterDid.uri,
    async ({ data }) => ({
      signature: assertionMethod.sign(data),
      keyType: assertionMethod.type
    })
  )

  // Do attestation & verification.
  const credential = await attestingFlow(
    lightDid.uri,
    attesterAccount,
    attesterDid.uri,
    async ({ data }) => ({
      signature: assertionMethod.sign(data),
      keyType: assertionMethod.type
    })
  )
  await verificationFlow(
    credential,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type,
      keyUri: `${lightDid.uri}${lightDid.authentication[0].id}`
    }),
    [attesterDid.uri]
  )
}
