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
  const api = Kilt.ConfigService.get('api')

  const mnemonic = mnemonicGenerate()
  const { authentication, keyAgreement } = generateKeypairs(mnemonic)
  // Get tx that will create the DID on chain and DID-URI that can be used to resolve the DID Document.
  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [keyAgreement]
    },
    submitterAccount.address,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)

  const didUri = Kilt.Did.getFullDidUriFromKey(authentication)
  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri))
  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)

  if (!document) {
    throw new Error('DID was not successfully created.')
  }

  return { mnemonic, fullDid: document }
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      // Load claimer account
      const accountMnemonic = process.env.CLAIMER_ACCOUNT_MNEMONIC as string
      const { account } = generateAccount(accountMnemonic)
      const { mnemonic, fullDid } = await createFullDid(account)

      console.log('\nsave following to .env to continue\n')
      console.error(`CLAIMER_DID_MNEMONIC="${mnemonic}"\n`)
      console.error(`CLAIMER_DID_URI="${fullDid.uri}"\n`)
    } catch (e) {
      console.log('Error while creating claimer DID')
      throw e
    }
  })()
}
