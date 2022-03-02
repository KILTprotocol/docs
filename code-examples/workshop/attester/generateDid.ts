import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { getAccount } from './generateAccount'
import { generateKeypairs } from './generateKeypairs'

export async function createFullDid(): Promise<Kilt.Did.FullDidDetails> {
  Kilt.config({ address: process.env.WSS_ADDRESS })
  const { api } = await Kilt.connect()
  const mnemonic = process.env.ATTESTER_MNEMONIC as string

  // Init keystore and load attester account
  const account = await getAccount(mnemonic)
  const keystore = new Kilt.Did.DemoKeystore()

  // generate the keypairs
  // we are using the same mnemonic as for the attester account, but we could also use a new secret
  const keys = await generateKeypairs(keystore, mnemonic)

  // get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document
  return new Kilt.Did.FullDidCreationBuilder(api, keys.authentication)
    .addEncryptionKey(keys.keyAgreement)
    .setAttestationKey(keys.assertionMethod)
    .setDelegationKey(keys.capabilityDelegation)
    .consumeWithHandler(keystore, account.address, async (creationTx) => {
      await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, account, {
        reSign: true,
        resolveOn: Kilt.BlockchainUtils.IS_FINALIZED
      })
    })
}

export async function getFullDid(didIdentifier: Kilt.IDidIdentifier): Promise<Kilt.Did.FullDidDetails> {
  // make sure the did is already on chain
  const onChain = await Kilt.Did.FullDidDetails.fromChainInfo(didIdentifier)
  if (!onChain)
    throw Error(`failed to find on chain did: did:kilt:${didIdentifier}`)
  return onChain
}

// don't execute if this is imported by another files
if (require.main === module) {
  envConfig()
  createFullDid()
    .catch((e) => {
      console.log('Error while creating attester DID', e)
      process.exit(1)
    })
    .then((didUri) => {
      console.log('\nsave following to .env to continue\n')
      console.error(`ATTESTER_DID_ID=${didUri}\n`)
      process.exit()
    })
}
