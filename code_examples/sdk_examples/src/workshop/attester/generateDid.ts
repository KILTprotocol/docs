import * as Kilt from '@kiltprotocol/sdk-js'
import { config as envConfig } from 'dotenv'
import { generateAccount } from './generateAccount'

export async function createFullDid(
  creatorAccount: Kilt.KiltKeyringPair & { type: 'ed25519' }
): Promise<{
  fullDid: Kilt.DidDocument
}> {
  const api = Kilt.ConfigService.get('api')

  const { type, publicKey } = creatorAccount
  console.log('creatorAccount', creatorAccount.address)
  const txs = [
    api.tx.did.createFromAccount({ [type]: publicKey }),
    api.tx.did.dispatchAs(
      creatorAccount.address,
      api.tx.did.setAttestationKey({ [type]: publicKey })
    )
  ]

  console.log('Creating DID from account…')
  await Kilt.Blockchain.signAndSubmitTx(
    api.tx.utility.batch(txs),
    creatorAccount
  )
  const didUri = Kilt.Did.getFullDidUriFromKey(creatorAccount)
  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri))
  const { document: didDocument } = Kilt.Did.linkedInfoFromChain(encodedFullDid)

  if (!didDocument) {
    throw new Error('Full DID was not successfully created.')
  }

  return { fullDid: didDocument }
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
      const { fullDid } = await createFullDid(account)

      console.log('\nsave following to .env to continue\n')
      // console.error(`ATTESTER_DID_MNEMONIC="${mnemonic}"\n`)
      console.error(`ATTESTER_DID_URI="${fullDid.uri}"\n`)
    } catch (e) {
      console.log('Error while creating attester DID')
      throw e
    }
  })()
}
