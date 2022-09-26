import type { Keypair } from '@polkadot/util-crypto/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  {
    authentication,
    encryption,
    attestation,
    delegation
  }: {
    authentication: Kilt.KiltKeyringPair
    encryption: Keypair & { type: Kilt.EncryptionKeyType }
    attestation: Kilt.KiltKeyringPair
    delegation: Kilt.KiltKeyringPair
  }
): Promise<Kilt.DidDocument> {
  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [encryption],
      assertionMethod: [attestation],
      capabilityDelegation: [delegation],
      // Example service
      service: [
        {
          id: '#my-service',
          type: ['service-type'],
          serviceEndpoint: ['https://www.example.com']
        }
      ]
    },
    submitterAccount.address,
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type
    })
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)

  // The new information is fetched from the blockchain and returned.
  const fullDid = await Kilt.Did.query(
    Kilt.Did.getFullDidUriFromKey(authentication)
  )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }

  return fullDid
}
