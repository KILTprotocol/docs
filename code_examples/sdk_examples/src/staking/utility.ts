import * as Kilt from '@kiltprotocol/sdk-js'

import type { SubmittableExtrinsic } from '@polkadot/api/promise/types'

export async function signAndSend(
  tx: SubmittableExtrinsic,
  signer: Kilt.KeyringPair,
  onSuccess: (txHash: string) => void,
  onError: (error: Error) => void
) {
  const api = Kilt.ConfigService.get('api')

  return tx.signAndSend(signer, ({ status, dispatchError }) => {
    if (status.isFinalized && !dispatchError) {
      onSuccess(status.asFinalized.toString())
    }
    if (dispatchError) {
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        const decoded = api.registry.findMetaError(dispatchError.asModule)
        const { docs, name, section } = decoded

        const error = new Error(`${section}.${name}: ${docs.join(' ')}`)
        onError(error)
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        const error = new Error(dispatchError.toString())
        onError(error)
      }
    }
  })
}
