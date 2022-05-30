import type { KeyringPair } from '@polkadot/keyring/types'

import type {
  IRequestForAttestation,
  KeystoreSigner
} from '@kiltprotocol/types'

import { Attestation, Credential } from '@kiltprotocol/core'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { FullDidDetails } from '@kiltprotocol/did'
import { SubscriptionPromise } from '@kiltprotocol/types'

export async function createAttestation(
  keystore: KeystoreSigner,
  requestForAttestation: IRequestForAttestation,
  attester: FullDidDetails,
  submitterAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<Credential> {
  // Create an attestation object and write its root hash on the chain using the provided attester's full DID.
  const attestation = await Attestation.fromRequestAndDid(
    requestForAttestation,
    attester.did
  )
  const attestationTx = await attestation
    .getStoreTx()
    .then((tx) =>
      attester.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  await BlockchainUtils.signAndSubmitTx(attestationTx, submitterAccount, {
    resolveOn
  })

  // Return the credential, which is the combination of the original request for attestation plus the on-chain attestation info
  return Credential.fromRequestAndAttestation(
    requestForAttestation,
    attestation
  )
}
