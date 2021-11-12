import { KeyringPair } from '@polkadot/keyring/types'
import { hexToU8a } from '@polkadot/util'

import { DefaultResolver, DemoKeystore, LightDidDetails, DidUtils } from '@kiltprotocol/did'
import { init as kiltInit } from '@kiltprotocol/core'
import { SubscriptionPromise, KeyRelationship, IDidResolvedDetails } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  fundingAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  kiltAccount: KeyringPair,
): Promise<IDidResolvedDetails> {
  await kiltInit({ address: 'wss://kilt-peregrine-k8s.kilt.io' })
  const keystore = new DemoKeystore()

  // create a light DID
  const lightDidDetails = new LightDidDetails({
    authenticationKey: {
      publicKey: kiltAccount.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(kiltAccount.type),
    },
  })

  // Generate the DID creation extrinsic with the authentication and encryption keys taken from the light DID.
  const pubAuthKey = lightDidDetails.getKey(KeyRelationship.authentication)
  if (pubAuthKey === undefined) {
    throw 'We just created the did with an authentication key'
  }

  const pubEncKey = lightDidDetails.getKey(KeyRelationship.keyAgreement)
  if (pubEncKey === undefined) {
    throw 'We just created the did with an encryption key'
  }

  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeys(keystore, kiltAccount.address, {
    [KeyRelationship.authentication]: {
      publicKey: hexToU8a(pubAuthKey.publicKeyHex),
      type: DemoKeystore.getKeypairTypeForAlg(pubAuthKey.type),
    },
    [KeyRelationship.keyAgreement]: {
      publicKey: hexToU8a(pubEncKey.publicKeyHex),
      type: DemoKeystore.getKeypairTypeForAlg(pubEncKey.type),
    },
  })

  // The extrinsic can then be submitted by the authorised account as usual.
  await BlockchainUtils.signAndSubmitTx(extrinsic, fundingAccount, {
    resolveOn,
  })

  // The full DID details can then be resolved after they have been stored on the chain.
  const fullDid = await DefaultResolver.resolveDoc(did)

  if (fullDid === null) {
    throw 'Could not find DID document for the given identifier'
  }
  return fullDid
}
