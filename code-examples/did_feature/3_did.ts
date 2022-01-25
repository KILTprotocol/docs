import { KeyringPair } from '@polkadot/keyring/types'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init, disconnect } from '@kiltprotocol/core'
import {
  DefaultResolver,
  DemoKeystore,
  DidUtils,
  SigningAlgorithms,
} from '@kiltprotocol/did'
import {
  KeyRelationship,
  SubscriptionPromise,
  IDidResolvedDetails,
} from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  // Generate seed for the authentication key.
  authenticationSeed: string
): Promise<IDidResolvedDetails> {
  // Initialise connection to the public KILT test network.
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Generate the DID-signed creation extrinsic.
  // The extrinsic is unsigned and contains the DID creation operation signed with the DID authentication key.
  // The second argument, the submitter account, ensures that only an entity authorised by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const { extrinsic, did } = await DidUtils.writeDidFromPublicKeys(
    keystore,
    kiltAccount.address,
    {
      [KeyRelationship.authentication]: {
        publicKey: authenticationKeyPublicDetails.publicKey,
        type: DemoKeystore.getKeypairTypeForAlg(
          authenticationKeyPublicDetails.alg
        ),
      },
    }
  )
  // Will print `did:kilt:4sxSYXakw1ZXBymzT9t3Yw91mUaqKST5bFUEjGEpvkTuckar`.
  console.log(did)

  // Submit the DID creation tx to the KILT blockchain after signing it with the KILT account specified in the creation operation.
  await BlockchainUtils.signAndSubmitTx(extrinsic, kiltAccount, {
    resolveOn,
  })

  // Retrieve the newly created DID from the KILT blockchain.
  const fullDid = await DefaultResolver.resolveDoc(did)

  await disconnect()
  if (fullDid === null) {
    throw 'Could not find DID document for the given identifier'
  }
  return fullDid
}
