import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import {
  DemoKeystore,
  SigningAlgorithms,
} from '@kiltprotocol/did'
import { KeyRelationship } from '@kiltprotocol/types'

export async function main(keystore) {
  // Generate seed for the new authentication key.
  const newAuthenticationKeySeed = '0xabcdeffedcba'

  // Ask the keystore to generate a new keypair to use for authentication.
  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: newAuthenticationKeySeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Create a DID operation to replace the authentication key with the new one generated.
  const didUpdateExtrinsic = await getSetKeyExtrinsic(
    KeyRelationship.authentication,
    {
      publicKey: newAuthenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(
        newAuthenticationKeyPublicDetails.alg
      ),
    }
  )

  // Sign the DID operation using the old DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorised in this operation, Alice in this case.
  const didSignedUpdateExtrinsic = await fullDID.authorizeExtrinsic(
    didUpdateExtrinsic,
    keystore as KeystoreSigner<string>,
    aliceKiltAccount.address
  )

  // Submit the DID update tx to the KILT blockchain after signing it with the authorised KILT account.
  await BlockchainUtils.signAndSubmitTx(
    didSignedUpdateExtrinsic,
    aliceKiltAccount,
    {
      resolveOn,
    }
  )

  // Remove the service endpoint with id `my-service` added upon creation in the previous section.
  const didRemoveExtrinsic = await DidChain.getRemoveEndpointExtrinsic(
    'my-service'
  )

  // Sign the DID operation using the new authentication key.
  const didSignedRemoveExtrinsic = await fullDID.authorizeExtrinsic(
    didRemoveExtrinsic,
    keystore as KeystoreSigner<string>,
    aliceKiltAccount.address
  )

  // Submit the signed operation as before.
  await BlockchainUtils.signAndSubmitTx(
    didSignedRemoveExtrinsic,
    aliceKiltAccount,
    {
      resolveOn,
    }
  )
}
