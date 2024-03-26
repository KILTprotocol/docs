import { config as envConfig } from 'dotenv'
import * as Kilt from '@kiltprotocol/sdk-js'
import { generateAccount } from './generateAccount'

export async function createFullDid(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<{
  mnemonic: string
  fullDid: Kilt.DidDocument
}> {
  const api = await Kilt.connect(process.env.WSS_ADDRESS as string)
  const mnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string
  const { account } = generateAccount(mnemonic)
  const { type, publicKey } = account

  const txs = [
    api.tx.did.createFromAccount({ [type]: publicKey }),
    api.tx.did.setAttestationKey({ [type]: publicKey })
  ]

  console.log('Creating DID from account…')
  const didDocument = await Kilt.Blockchain.signAndSubmitTx(
    api.tx.utility.batch(txs),
    account
  ).then(async () => {
    const didUri = Kilt.Did.getFullDidUriFromKey(account)
    const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri))
    const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)
    return document
  })

  if (!didDocument) {
    throw new Error('Full DID was not successfully created.')
  }

  return { mnemonic, fullDid: didDocument }
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      // Load attester account
      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string
      const { account } = generateAccount(accountMnemonic)
      const { mnemonic, fullDid } = await createFullDid(account)

      console.log('\nsave following to .env to continue\n')
      console.error(`ATTESTER_DID_MNEMONIC="${mnemonic}"\n`)
      console.error(`ATTESTER_DID_URI="${fullDid.uri}"\n`)
    } catch (e) {
      console.log('Error while creating attester DID')
      throw e
    }
  })()
}
