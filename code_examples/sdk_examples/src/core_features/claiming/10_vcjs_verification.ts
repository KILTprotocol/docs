import * as Kilt from '@kiltprotocol/sdk-js'
import * as KiltVC from '@kiltprotocol/vc-export'

import jsigs from 'jsonld-signatures'
import vcjs from 'vc-js'

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

  // 2. Verify credential schema
  const schemaVerified = KiltVC.verification.validateSchema(credential).verified
  if (!schemaVerified) {
    throw new Error('Schema failed to verify for provided credential.')
  }
  // Unfortunately the VC `credentialSchema` definition is underspecified in their context.
  // We therefore have to remove it before credential verification.
  delete credential['credentialSchema']

  // 3. Obtain the default KILT context loader
  const { documentLoader } = KiltVC.vcjsSuites

  // 4. Obtain the `assertionMethod` proof purpose from `jsonld-signatures`
  const purpose = new jsigs.purposes.AssertionProofPurpose()

  // 5. Call vc-js.verifyCredential with suites and context loader
  const result = await vcjs.verifyCredential({
    credential,
    suite: [signatureSuite, integritySuite, attestedSuite],
    purpose,
    documentLoader
  })

  // 6. Make sure all `results` indicate successful verification
  const verified = result.results.every((i) => i.verified === true)
  if (!verified) {
    throw new Error('Some proofs could not be verified.')
  }
  console.log('All proofs successfully verified! ✅')
}
