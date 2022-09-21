import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'

function getSignCallback(
  keyring: Keyring,
  authKey: Kilt.NewDidVerificationKey
): Parameters<typeof Kilt.Did.Chain.getStoreTx>[2] {
  return async ({ data }) => {
    const { publicKey, type } = authKey
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address)

    return {
      data: key.sign(data),
      keyType: type
    }
  }
}

export async function createFullDid(
  keyring: Keyring
): Promise<Kilt.DidDocument> {
  const mnemonic = process.env.ATTESTER_MNEMONIC as string

  // Load attester account
  const account = getAccount(keyring, mnemonic)

  // generate the keypairs
  // we are using the same mnemonic as for the attester account, but we could also use a new secret
  const {
    authentication,
    keyAgreement,
    assertionMethod,
    capabilityDelegation
  } = generateKeypairs(keyring, mnemonic)

  // get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document
  const fullDidCreationTx = await Kilt.Did.Chain.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [keyAgreement],
      assertionMethod: [assertionMethod],
      capabilityDelegation: [capabilityDelegation]
    },
    account.address,
    getSignCallback(keyring, authentication)
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
): Promise<Kilt.DidDocument> {
  // make sure the did is already on chain
  const onChain = await Kilt.Did.query(didUri)
  if (!onChain) throw Error(`failed to find on chain did: ${didUri}`)
  return onChain
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    await Kilt.connect(process.env.WSS_ADDRESS as string)
    const keyring = new Keyring({
      ss58Format: Kilt.Utils.ss58Format
    })

    try {
      const did = await createFullDid(keyring)
      console.log('\nsave following to .env to continue\n')
      console.error(`ATTESTER_DID_URI=${did.uri}\n`)
      process.exit(0)
    } catch (e) {
      console.log('Error while creating attester DID', e)
      process.exit(1)
    }
  })()
}
