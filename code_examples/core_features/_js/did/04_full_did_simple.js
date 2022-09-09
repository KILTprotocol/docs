import { randomAsU8a } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export async function createSimpleFullDid(
  keyring,
  submitterAccount,
  authenticationSeed = randomAsU8a(32),
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Ask the keyring to generate a new keypair to use for authentication with the generated seed.
  const authKey = keyring.addFromSeed(authenticationSeed)
  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.
  // The submitter account parameter, ensures that only an entity authorized by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const fullDidCreationTx = await Kilt.Did.Chain.getStoreTx(
    {
      authentication: [authKey]
    },
    submitterAccount.address,
    signCallback
  )
  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount, {
    resolveOn
  })
  // The new information is fetched from the blockchain and returned.
  const fullDid = await Kilt.Did.query(
    Kilt.Did.Utils.getFullDidUriFromKey(authKey)
  )
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}
