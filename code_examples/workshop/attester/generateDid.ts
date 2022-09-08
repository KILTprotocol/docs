import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'

export async function createFullDid(
  keyring: Keyring,
  signCallback: Kilt.SignCallback
): Promise<Kilt.DidDetails> {
  const mnemonic = process.env.ATTESTER_MNEMONIC as string

  // Load attester account
  const account = await getAccount(keyring, mnemonic)

  // generate the keypairs
  // we are using the same mnemonic as for the attester account, but we could also use a new secret
  const {
    authentication,
    keyAgreement,
    assertionMethod,
    capabilityDelegation
  } = await generateKeypairs(keyring, mnemonic)

  // get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document
  const fullDidCreationTx = await Kilt.Did.Chain.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [keyAgreement],
      assertionMethod: [assertionMethod],
      capabilityDelegation: [capabilityDelegation]
    },
    account.address,
    signCallback
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, account)

  const fullDid = await Kilt.Did.query(
    Kilt.Did.Utils.getFullDidUriFromKey(authentication)
  )

  if (!fullDid) {
    throw 'Full DID was not successfully created.'
  }

  return fullDid
}

export async function getFullDid(
  didUri: Kilt.DidUri
): Promise<Kilt.DidDetails> {
  // make sure the did is already on chain
  const onChain = await Kilt.Did.query(didUri)
  if (!onChain) throw Error(`failed to find on chain did: ${didUri}`)
  return onChain
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  Kilt.init({ address: process.env.WSS_ADDRESS }).then(() => {
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format,
    })
    const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
      return async ({ data, alg, publicKey }) => {
        const address = encodeAddress(
          alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
        )
        const key = keyring.getPair(address)

        return { data: key.sign(data), alg }
      }
    }

    createFullDid(keyring, signCallbackForKeyring(keyring))
      .catch((e) => {
        console.log('Error while creating attester DID', e)
        process.exit(1)
      })
      .then((did) => {
        console.log('\nsave following to .env to continue\n')
        console.error(`ATTESTER_DID_URI=${did.uri}\n`)
        process.exit()
      })
  })
}
