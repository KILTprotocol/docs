import type { KeyringPair } from '@polkadot/keyring/types'

import { blake2AsHex, randomAsHex } from '@polkadot/util-crypto'
import { ApiPromise } from '@polkadot/api'

import {
  DemoKeystore,
  EncryptionAlgorithms,
  FullDidCreationBuilder,
  FullDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import {
  EncryptionKeyType,
  SubscriptionPromise,
  VerificationKeyType
} from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function createCompleteFullDid(
  keystore: DemoKeystore,
  api: ApiPromise,
  submitterAccount: KeyringPair,
  authenticationSeed: string | undefined = undefined,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  authenticationSeed = authenticationSeed || randomAsHex(32)
  // Create the attestation key seed by hasing the provided authentication seed.
  const attestationSeed = blake2AsHex(authenticationSeed)
  // Create the delegation key seed by hasing the generated attestation key seed.
  const delegationSeed = blake2AsHex(attestationSeed)

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519
  })

  const encryptionSeed = randomAsHex(32)
  // Ask the keystore to generate a new keypar to use for encryption.
  const encryptionKeyPublicDetails = await keystore.generateKeypair({
    seed: encryptionSeed,
    alg: EncryptionAlgorithms.NaclBox
  })

  const attestationKeyPublicDetails = await keystore.generateKeypair({
    seed: attestationSeed,
    alg: SigningAlgorithms.Sr25519
  })

  const delegationKeyPublicDetails = await keystore.generateKeypair({
    seed: delegationSeed,
    alg: SigningAlgorithms.EcdsaSecp256k1
  })

  const fullDid = await new FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ed25519
  })
    .addEncryptionKey({
      publicKey: encryptionKeyPublicDetails.publicKey,
      type: EncryptionKeyType.X25519
    })
    .setAttestationKey({
      publicKey: attestationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Sr25519
    })
    .setDelegationKey({
      publicKey: delegationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ecdsa
    })
    .addServiceEndpoint({
      id: 'my-service',
      types: ['service-type'],
      urls: ['https://www.example.com']
    })
    .consumeWithHandler(
      keystore,
      submitterAccount.address,
      async (creationTx) => {
        await BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {
          resolveOn
        })
      }
    )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
