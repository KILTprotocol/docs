import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { getAccount } from './generateAccount.js'
import { generateKeypairs } from './generateKeypairs.js'

export async function createFullDid() {
  await cryptoWaitReady()
  Kilt.config({ address: process.env.WSS_ADDRESS })
  const { api } = await Kilt.connect()
  const mnemonic = process.env.ATTESTER_MNEMONIC

  // Init keystore and load attester account
  const account = await getAccount(process.env.ATTESTER_MNEMONIC)
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
        resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK,
      })
    })
}

export async function getFullDid(didIdentifier) {
  // make sure the did is already on chain
  const onChain = await Kilt.Did.DidChain.queryDetails(didIdentifier)
  if (!onChain) throw Error(`failed to find on chain did: did:kilt:${didIdentifier}`)

  // load and return the DID using the default resolver
  return Kilt.Did.FullDidDetails.fromChainInfo(didIdentifier)
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
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
