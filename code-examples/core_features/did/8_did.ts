import { KeyringPair } from '@polkadot/keyring/types'
import { hexToU8a } from '@polkadot/util'

import { DefaultResolver, DemoKeystore, LightDidDetails, DidUtils, SigningAlgorithms } from '@kiltprotocol/did'
import { init, disconnect } from '@kiltprotocol/core'
import { SubscriptionPromise, KeyRelationship, IDidResolvedDetails } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  authenticationSeed: string
): Promise<IDidResolvedDetails> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // create a light DID
  const lightDidDetails = new LightDidDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(authenticationKeyPublicDetails.alg),
    },
  })

  // Generate the DID creation extrinsic with the authentication key taken from the light DID.
  const pubAuthKey = lightDidDetails.getKeys(KeyRelationship.authentication)[0]
  if (pubAuthKey === undefined) {
    throw 'We just created the did with an authentication key'
  }

  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeys(keystore, kiltAccount.address, {
    [KeyRelationship.authentication]: {
      publicKey: hexToU8a(pubAuthKey.publicKeyHex),
      type: DemoKeystore.getKeypairTypeForAlg(pubAuthKey.type),
    },
  })

  // The extrinsic can then be submitted by the authorised account as usual.
  await BlockchainUtils.signAndSubmitTx(extrinsic, kiltAccount, {
    reSign: true,
    resolveOn,
  })

  // The full DID details can then be resolved after they have been stored on the chain.
  const fullDid = await DefaultResolver.resolveDoc(did)

  await disconnect()
  if (fullDid === null) {
    throw 'Could not find DID document for the given identifier'
  }
  return fullDid
}
