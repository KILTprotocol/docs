import { ApiPromise } from '@polkadot/api'
import { randomAsHex } from '@polkadot/util-crypto'
import { KeyringPair } from '@kiltprotocol/types'

import {
  DemoKeystore,
  FullDidDetails,
  SigningAlgorithms,
  FullDidCreationBuilder,
  Web3Names
} from '@kiltprotocol/did'
import {
  SubscriptionPromise,
  VerificationKeyType,
  NewDidVerificationKey
} from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  api: ApiPromise,
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  web3Name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  // Generate a random new full DID.
  const authenticationSeed = randomAsHex(32)

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  const authenticationKeyPublicDetails: NewDidVerificationKey = await keystore
    .generateKeypair({
      alg: SigningAlgorithms.Ed25519,
      seed: authenticationSeed
    })
    .then((key) => {
      return {
        publicKey: key.publicKey,
        type: VerificationKeyType.Ed25519
      }
    })

  const fullDid = await new FullDidCreationBuilder(
    api,
    authenticationKeyPublicDetails
  ).consumeWithHandler(keystore, kiltAccount.address, async (tx) => {
    await BlockchainUtils.signAndSubmitTx(tx, kiltAccount, {
      reSign: true,
      resolveOn
    })
  })
  console.log(fullDid.did)

  // Claim the Web3 name if it has not been claimed by anyone else.
  const doesNameExist = await Web3Names.queryDidForWeb3Name(web3Name)
  if (!doesNameExist) {
    const web3NameClaimTx = await Web3Names.getClaimTx(web3Name).then((tx) =>
      fullDid.authorizeExtrinsic(tx, keystore, kiltAccount.address)
    )
    await BlockchainUtils.signAndSubmitTx(web3NameClaimTx, kiltAccount, {
      reSign: true,
      resolveOn
    })
  }

  return fullDid
}
