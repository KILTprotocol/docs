import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { getAccount } from './generateAccount.js'
import { generateKeypairs } from './generateKeypairs.js'

// bring in environment variables
const { WSS_ADDRESS: address, ATTESTER_MNEMONIC: mnemonic } = process.env

export async function createFullDid() {
  await cryptoWaitReady()
  await Kilt.init({ address })

  // Init keystore and load attester account
  const account = await getAccount(mnemonic)
  const keystore = new Kilt.Did.DemoKeystore()

  // generate the keypairs
  // we are using the same mnemonic as for the attester account, but we could also use a new secret
  const keys = await generateKeypairs(keystore, mnemonic)

  // get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document
  const { extrinsic, did: didUri } = await Kilt.Did.DidUtils.writeDidFromPublicKeys(keystore, account.address, keys)

  // write the DID to blockchain
  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
    reSign: true,
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })

  // save the didUri so we don't attempt to write it to chain again
  console.log('\nsave following to .env to continue\n')
  console.error(`ATTESTER_DID_URI=${didUri}\n`)
  process.env.ATTESTER_DID_URI = didUri
}

export async function getFullDid(didUri) {
  const rawDidId = Kilt.Did.DidUtils.getIdentifierFromKiltDid(didUri)
  // make sure the did is already on chain
  const onChain = await Kilt.Did.DidChain.queryById(rawDidId)
  if (!onChain) throw Error(`failed to find on chain did: ${didUri}`)

  // load and return the DID using the default resolver
  return await Kilt.Did.DefaultResolver.resolveDoc(didUri)
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createFullDid()
    .catch((e) => {
      console.log('Error while creating attester DID', e)
      process.exit(1)
    })
    .then(() => process.exit())
}
