import * as Kilt from '@kiltprotocol/sdk-js'

export async function useStoreTxSignCallback(
  submitterAddress: Kilt.KiltKeyringPair['address'],
): Promise<Kilt.SubmittableExtrinsic> {
  // Here we create a new key pair for the DID that will be created later.
  // This step might happen in an extension or else where, depending on your application.
  const authenticationKey: Kilt.KiltKeyringPair = Kilt.Utils.Crypto.makeKeypairFromSeed()

  // This is the sign callback. We use the just created key to sign arbitrary data
  // and return the signature together with the key type.
  const getStoreTxSignCallback: Kilt.Did.GetStoreTxSignCallback = async ({
    data
  }) => ({
    signature: authenticationKey.sign(data),
    keyType: authenticationKey.type
  })

  // Here we use the call back
  return await Kilt.Did.getStoreTx(
    {
      authentication: [authenticationKey]
    },
    submitterAddress,
    getStoreTxSignCallback,
  )
}
