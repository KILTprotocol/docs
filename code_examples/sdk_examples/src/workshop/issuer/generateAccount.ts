import * as Kilt from '@kiltprotocol/sdk-js'

export default function generateAccount() {

    const issuerAccount = Kilt.generateKeypair({ type: 'ed25519' })
    const submitterAccount = Kilt.generateKeypair({ type: 'ed25519' })
    
    console.log('keypair generation complete')
    console.log(`ISSUER_ACCOUNT_ADDRESS=${issuerAccount}`)
    console.log(`SUBMITTER_ACCOUNT_ADDRESS=${submitterAccount}`)
    
    return { authenticationKeyPair: issuerAccount, submitterAccount }
  }