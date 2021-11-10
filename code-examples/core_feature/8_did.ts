export async function main(aliceKiltAccount, resolveOn) {
  const resolveOn =
    process.env.NODE_ENV === 'production'
      ? BlockchainUtils.IS_FINALIZED
      : BlockchainUtils.IS_IN_BLOCK

  await kiltInit({ address: 'wss://kilt-peregrine-k8s.kilt.io' })

  const aliceKiltAccount = new Keyring({
    type: 'ed25519',
    ss58Format: 38,
  }).createFromUri('//Alice')

  const lightDidDetails = new LightDidDetails({
    authenticationKey: {
      publicKey: aliceKiltAccount.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(aliceKiltAccount.type),
    },
  })

  // Generate the DID creation extrinsic with the authentication and encryption keys taken from the light DID.
  const { extrinsic, did } = await upgradeDid(
    lightDidDetails,
    aliceKiltAccount.address,
    keystore as KeystoreSigner<string>
  )

  // The extrinsic can then be submitted by the authorised account as usual.
  await BlockchainUtils.signAndSubmitTx(extrinsic, aliceKiltAccount, {
    resolveOn,
  })

  // The full DID details can then be resolved after they have been stored on the chain.
  const fullDidDetails = await resolve(did)
}
