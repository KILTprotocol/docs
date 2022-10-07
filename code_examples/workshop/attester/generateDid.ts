import { config as envConfig } from 'dotenv'

import { mnemonicGenerate } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateAccount } from './generateAccount'
import { generateKeypairs } from './generateKeypairs'

export async function createFullDid(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<{
  mnemonic: string
  fullDid: Kilt.DidDocument
}> {
  const mnemonic = mnemonicGenerate()
  const { authentication, encryption, attestation, delegation } =
    generateKeypairs(mnemonic)
  // Get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document
  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [encryption],
      assertionMethod: [attestation],
      capabilityDelegation: [delegation]
    },
    submitterAccount.address,
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type
    })
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)

  const fullDid = await Kilt.Did.query(
    Kilt.Did.getFullDidUriFromKey(authentication)
  )

  if (!fullDid) {
    throw 'Full DID was not successfully created.'
  }

  return { mnemonic, fullDid }
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      // Load attester account
      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string
      const { account } = generateAccount(accountMnemonic)
      const { mnemonic } = await createFullDid(account)

      console.log('\nsave following to .env to continue\n')
      console.error(`ATTESTER_DID_MNEMONIC=${mnemonic}\n`)
    } catch (e) {
      console.log('Error while creating attester DID')
      throw e
    }
  })()
}
