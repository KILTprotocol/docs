import type { ApiPromise } from '@polkadot/api'

import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { generateCredential } from '../claimer/generateCredential'
import { generateKeypairs } from './generateKeypairs'
import { getAccount } from './generateAccount'
import { getFullDid } from './generateDid'

function getSignCallback(
  keyring: Keyring,
  did: Kilt.DidDocument
): Kilt.SignCallback {
  return async ({ data }) => {
    const { publicKey, type, id } = did.assertionMethod[0]
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address) as Kilt.KiltKeyringPair

    return {
      data: key.sign(data),
      keyType: type,
      keyUri: `${did.uri}${id}`
    }
  }
}

export async function attestCredential(
  api: ApiPromise,
  keyring: Keyring,
  request: Kilt.ICredential
): Promise<void> {
  // load account & DID
  const mnemonic = process.env.ATTESTER_MNEMONIC as string
  const attesterDid = process.env.ATTESTER_DID_URI as Kilt.DidUri
  const account = getAccount(keyring, mnemonic)
  generateKeypairs(keyring, mnemonic)
  const fullDid = await getFullDid(attesterDid)

  // build the attestation object
  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(
    request,
    attesterDid
  )

  // check the request content and deny based on your business logic.
  // e.g., verify age with other credentials (birth certificate, passport, ...)

  // form tx and authorized extrinsic
  const tx = api.tx.attestation.add(claimHash, cTypeHash, null)
  const extrinsic = await Kilt.Did.authorizeExtrinsic(
    attesterDid,
    tx,
    getSignCallback(keyring, fullDid),
    account.address
  )

  // write to chain
  console.log('Attester -> create attestation...')
  await Kilt.Blockchain.signAndSubmitTx(extrinsic, account)
}

export async function attestingFlow(
  api: ApiPromise
): Promise<Kilt.ICredential> {
  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format
  })

  // first the claimer
  const credential = generateCredential(keyring, {
    age: 27,
    name: 'Mia Musterfrau'
  })

  // send the request to the attester

  // the attester checks the attributes and issues an attestation
  await attestCredential(api, keyring, credential)

  // send the attestation back to the claimer
  return credential
}

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    const api = await Kilt.connect(process.env.WSS_ADDRESS)

    try {
      const c = await attestingFlow(api)
      console.log('The claimer build their credential and now has to store it.')
      console.log('  add the following to your .env file. ')
      console.log(`CLAIMER_CREDENTIAL='${JSON.stringify(c)}'`)
      process.exit(0)
    } catch (e) {
      console.log('Error while going throw attesting workflow', e)
      process.exit(1)
    }
  })()
}
