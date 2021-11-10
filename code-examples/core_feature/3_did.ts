import Keyring from '@polkadot/keyring'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'
import {
  DefaultResolver,
  DemoKeystore,
  DidUtils,
  FullDidDetails,
  SigningAlgorithms,
} from '@kiltprotocol/did'
import {
  getDeleteDidExtrinsic,
  getSetKeyExtrinsic,
} from '@kiltprotocol/did/src/Did.chain'
import { KeyRelationship } from '@kiltprotocol/types'

export async function main() {
  // Configure the resolution promise to wait for transactions to be finalized or simply included in a block depending on the environment.
  const resolveOn =
    process.env.NODE_ENV === 'production'
      ? BlockchainUtils.IS_FINALIZED
      : BlockchainUtils.IS_IN_BLOCK

  // Initialise connection to the public KILT test network.
  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  // Generate the KILT account that will submit the DID creation tx to the KILT blockchain.
  // It must have enough funds to pay for the tx execution fees.
  const aliceKiltAccount = new Keyring({
    type: 'ed25519',
    // KILT has registered the ss58 prefix 38
    ss58Format: 38,
  }).createFromUri('//Alice')

  // Instantiate the demo keystore.
  const keystore = new DemoKeystore()

  // Generate seed for the authentication key.
  const authenticationSeed = '0x123456789'

  // Ask the keystore to generate a new keypar to use for authentication.
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
    aliceKiltAccount.address,
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
  await BlockchainUtils.signAndSubmitTx(extrinsic, aliceKiltAccount, {
    resolveOn,
  })

  // Retrieve the newly created DID from the KILT blockchain.
  const fullDid = await DefaultResolver.resolveDoc(did)
}
