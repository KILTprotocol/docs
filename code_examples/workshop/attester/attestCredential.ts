import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAccount } from './generateAccount'
import { generateCredential } from '../claimer/generateCredential'
import { generateKeypairs } from './generateKeypairs'
import { generateLightDid } from '../claimer/generateLightDid'

export async function attestCredential(
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Get CType and root hash from the provided credential
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    credential,
    attesterDid
  )

  // Create the tx and authorized extrinsic
  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)
  const extrinsic = await Kilt.Did.authorizeExtrinsic(
    attesterDid,
    tx,
    signCallback,
    attesterAccount.address
  )

  // Submit the tx to write the attestation to the chain
  console.log('Attester -> create attestation...')
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, attesterAccount)
}

export async function attestingFlow(
  claimerDid: Kilt.DidUri,
  attesterAccount: Kilt.KiltKeyringPair,
  attesterDid: Kilt.DidUri,
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICredential> {
  // First the claimer
  const credential = generateCredential(claimerDid, {
    age: 27,
    name: 'Mia Musterfrau'
  })

  // ... send the request to the attester

  // The attester checks the attributes and attests the provided credential
  await attestCredential(attesterAccount, attesterDid, credential, signCallback)

  // Return the generated credential
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
      const { account: attesterAccount } = generateAccount(
        attesterAccountMnemonic
      )

      const attesterDidMnemonic = process.env.ATTESTER_DID_MNEMONIC as string
      const { authentication, attestation } =
        generateKeypairs(attesterDidMnemonic)
      const attesterDidUri = Kilt.Did.getFullDidUriFromKey(authentication)

      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const claimerDid = await generateLightDid(claimerDidMnemonic)

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
      console.log('Add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(credential)}'`)
    } catch (e) {
      console.log('Error while going throw attesting workflow')
      throw e
    }
  })()
}
