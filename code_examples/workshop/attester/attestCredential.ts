import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateCredential } from '../claimer/generateCredential'
import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getLightDid } from '../claimer/generateLightDid'

export async function attestCredential(
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // build the attestation object
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    credential,
    attesterDid
  )

  // check the request content and deny based on your business logic.
  // e.g., verify age with other credentials (birth certificate, passport, ...)

  // form tx and authorized extrinsic
  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)
  const extrinsic = await Kilt.Did.authorizeExtrinsic(
    attesterDid,
    tx,
    signCallback,
    attesterAccount.address
  )

  // write to chain
  console.log('Attester -> create attestation...')
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)
}

export async function attestingFlow(
  claimerDid: Kilt.DidUri,
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICredential> {
  // first the claimer
  const credential = generateCredential(claimerDid, {
    age: 27,
    name: 'Mia Musterfrau'
  })

  // send the request to the attester

  // the attester checks the attributes and issues an attestation
  await attestCredential(attesterAccount, attesterDid, credential, signCallback)

  // send the attestation back to the claimer
  return credential
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      const attesterAccountMnemonic = process.env
        .ATTESTER_ACCOUNT_MNEMONIC as string
      const attesterAccount = getAccount(attesterAccountMnemonic)
      const attesterDidMnemonic = process.env.ATTESTER_DID_MNEMONIC as string
      const { authentication, attestation } =
        generateKeypairs(attesterDidMnemonic)
      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)
      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const claimerDid = await getLightDid(claimerDidMnemonic)

      const credential = await attestingFlow(
        claimerDid.uri,
        attesterAccount,
        attesterDidUri,
        async ({ data }) => ({
          data: attestation.sign(data),
          keyType: attestation.type,
          // Not needed
          keyUri: `${attesterDidUri}#id`
        })
      )
      console.log('The claimer build their credential and now has to store it.')
      console.log('  add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(credential)}'`)
      process.exit(0)
    } catch (e) {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    }
  })()
}
