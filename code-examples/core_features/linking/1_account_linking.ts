import { ApiPromise } from '@polkadot/api'
import { randomAsHex } from '@polkadot/util-crypto'

import {
  AccountLinks,
  DemoKeystore,
  FullDidCreationBuilder,
  FullDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import {
  NewDidVerificationKey,
  SubscriptionPromise,
  VerificationKeyType
} from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeyringPair } from '@kiltprotocol/types'

export async function main(
  api: ApiPromise,
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  // Generate a random new full DID.
  const authenticationSeed = randomAsHex(32)

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  const authenticationKeyPublicDetails: NewDidVerificationKey = await keystore
    .generateKeypair({
      alg: SigningAlgorithms.Sr25519,
      seed: authenticationSeed
    })
    .then((key) => {
      return {
        publicKey: key.publicKey,
        type: VerificationKeyType.Sr25519
      }
    })

  const fullDid = await new FullDidCreationBuilder(
    api,
    authenticationKeyPublicDetails
  ).consumeWithHandler(keystore, submitterAccount.address, async (tx) => {
    await BlockchainUtils.signAndSubmitTx(tx, submitterAccount, {
      reSign: true,
      resolveOn
    })
  })
  console.log(fullDid.did)

  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx = await AccountLinks.getAssociateSenderTx().then(
    (tx) => fullDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)
  )

  await BlockchainUtils.signAndSubmitTx(accountLinkingTx, submitterAccount, {
    reSign: true,
    resolveOn
  })

  return fullDid
}
