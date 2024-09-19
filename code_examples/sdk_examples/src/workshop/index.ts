import * as Kilt from '@kiltprotocol/sdk-js'

import { attestingFlow } from './issuer/issueCredential'
import { createFullDid } from './issuer/generateDid'
import { ensureStoredCtype } from './issuer/generateCtype'
import { generateAccount } from './issuer/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from './issuer/generateKeypairs'
import { generateKeypairs as generateClaimerKeypairs } from './holder/generateKeypairs'
import { generateCredential } from './holder/generateCredential'
import { generateLightDid } from './holder/generateLightDid'
import { getFunds } from '../getFunds'
import { verificationFlow } from './verify'

export async function testWorkshop(
  account: Kilt.KeyringPair,
  wssAddress: string
) {
  console.log('Running the workshop!')

  Kilt.ConfigService.set({ submitTxResolveOn: Kilt.Blockchain.IS_IN_BLOCK })
  await Kilt.connect(wssAddress)

  // Setup attester account.
  const { account: attesterAccount } = await generateAccount()

  // Setup claimer & create a credential.
  const claimerMnemonic = Kilt.Utils.Crypto.mnemonicGenerate()
  const { authentication } = generateClaimerKeypairs(claimerMnemonic)
  const lightDid = generateLightDid(claimerMnemonic)

  generateCredential(lightDid.uri, {
    age: 27,
    name: 'Karl'
  })

  await getFunds(account, attesterAccount.address, 5)

  // Create attester DID & ensure CType.
  const { fullDid: attesterDid } = await createFullDid(attesterAccount)
  const { assertionMethod } = generateAttesterKeypairs()

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
