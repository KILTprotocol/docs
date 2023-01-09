/* eslint-disable @typescript-eslint/no-unused-vars */

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  didUri: Kilt.DidUri,
  assertionMethodKey: Kilt.KiltKeyringPair,
  domainLinkageCredential: Kilt.ICredential
) {
  // We need the KeyId of the AssertionMethod Key. There is only
  // one AssertionMethodKey and its id is stored on the blockchain.
  const didResolveResult = await Kilt.Did.resolve(didUri)
  if (typeof didResolveResult.document === 'undefined') {
    throw 'DID must be resolvable (i.e. not deleted)'
  }
  const assertionMethodKeyId = didResolveResult.document.assertionMethod[0].id

  const presentation = await Kilt.Credential.createPresentation({
    credential: domainLinkageCredential,
    signCallback: async ({ data }) => ({
      signature: assertionMethodKey.sign(data),
      keyType: assertionMethodKey.type,
      keyUri: `${didUri}${assertionMethodKeyId}`
    })
  })

  console.log(JSON.stringify(presentation))
  return presentation
}
