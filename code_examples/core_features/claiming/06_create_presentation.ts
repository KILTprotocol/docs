import type { KeystoreSigner } from '@kiltprotocol/types'

import { Credential } from '@kiltprotocol/core'
import { DidDetails } from '@kiltprotocol/did'

export async function createPresentation(
  keystore: KeystoreSigner,
  claimerDid: DidDetails,
  credential: Credential,
  selectedAttributed: string[],
  challenge: string | undefined = undefined
): Promise<Credential> {
  // Create a presentation with only the specified fields revealed.
  return credential.createPresentation({
    claimerDid,
    signer: keystore,
    selectedAttributes: selectedAttributed,
    challenge
  })
}
