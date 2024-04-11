/* eslint-disable @typescript-eslint/no-unused-vars */
import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAccount } from './generateAccount'
import { generateCredential } from '../claimer/generateCredential'
import { generateKeypairs } from './generateKeypairs'
import { generateLightDid } from '../claimer/generateLightDid'

export async function attestCredential(
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  credential: Kilt.ICredential
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Get CType and root hash from the provided credential.
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    credential,
    attesterDid
  )

  // Create the tx and authorize it.
  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)
  const extrinsic = api.tx.did.dispatchAs(attesterAccount.address, tx)

  // Submit the tx to write the attestation to the chain.
  console.log('Attester -> create attestation...')
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)
}

export async function attestingFlow(
  claimerDid: Kilt.DidUri,
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.ICredential> {
  // First the claimer.
  const credential = generateCredential(claimerDid, {
    age: 27,
    name: 'Mia Musterfrau'
  })

  // ... send the request to the attester

  // The attester checks the attributes and attests the provided credential.
  await attestCredential(attesterAccount, attesterDid, credential)

  // Return the generated credential.
  return credential
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      const attesterAccountMnemonic = process.env
        .ATTESTER_ACCOUNT_MNEMONIC as string
      const { account: attesterAccount } = generateAccount(
        attesterAccountMnemonic
      )

      const attesterDidMnemonic = process.env.ATTESTER_DID_MNEMONIC as string
      const { authentication, assertionMethod } =
        generateKeypairs(attesterDidMnemonic)
      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)

      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const claimerDid = await generateLightDid(claimerDidMnemonic)

      const credential = await attestingFlow(
        claimerDid.uri,
        attesterAccount,
        attesterDidUri,
        async ({ data }) => ({
          signature: assertionMethod.sign(data),
          keyType: assertionMethod.type
        })
      )
      console.log('The claimer build their credential and now has to store it.')
      console.log('Add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(credential)}'`)
    } catch (e) {
      console.log('Error while going throw attesting workflow')
      throw e
    }
  })()
}
