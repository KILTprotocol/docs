import * as Kilt from '@kiltprotocol/sdk-js'
import * as KiltVC from '@kiltprotocol/vc-export'

import * as jsigs from 'jsonld-signatures'
import * as vcjs from 'vc-js'

export async function verify(credential: KiltVC.VerifiableCredential) {
  // 1. Set up suites
  const { KiltIntegritySuite, KiltSignatureSuite, KiltAttestedSuite } =
    KiltVC.vcjsSuites.suites
  const signatureSuite = new KiltSignatureSuite.KiltSignatureSuite()
  const integritySuite = new KiltIntegritySuite.KiltDisclosureSuite()
  // The KiltAttestedSuite requires a connection object that allows access to the KILT blockchain, which we can obtain via the KILT SDK.
  const KiltConnection = await Kilt.connect('wss://spiritnet.kilt.io/')
  const attestedSuite = new KiltAttestedSuite.KiltAttestedSuite({
    KiltConnection
  })

  // 2. Verify credential schema, if present
  if (credential.credentialSchema) {
    const { verified: vcVerified, errors } = KiltVC.verification.validateSchema(credential)  
    if (!vcVerified) {
      throw new Error(`Schema failed to verify for provided credential with the following errors: ${errors}.`)
    }
  }
  // Unfortunately the VC `credentialSchema` definition is underspecified in their context.
  // We therefore have to remove it before credential verification.
  delete credential['credentialSchema']

  // 3. Obtain the default KILT context loader
  const { documentLoader } = KiltVC.vcjsSuites

  // 4. Obtain the `assertionMethod` proof purpose from `jsonld-signatures`
  const purpose = new jsigs.purposes.AssertionProofPurpose()

  // 5. Call vc-js.verifyCredential with suites and context loader
  const { verified, error } = await vcjs.verifyCredential({
    credential,
    suite: [signatureSuite, integritySuite, attestedSuite],
    purpose,
    documentLoader
  })

  if (!verified) {
    console.log('Error', error)
    console.log('Error', JSON.stringify(error, null, 2))
    throw new Error(`Some proofs could not be verified. Error: ${error}`)
  }
  console.log('All proofs successfully verified! ✅')
}
