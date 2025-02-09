import * as Kilt from '@kiltprotocol/sdk-js'
import { VerifiableCredential } from '@kiltprotocol/credentials/lib/cjs/V1/types'

export async function main(credential: VerifiableCredential): Promise<void> {
  try {
    const result = await Kilt.Verifier.verifyCredential({ credential })
    console.log(JSON.stringify(result, null, 2))
    if (result.verified == false) {
      throw new Error("kiltnerd123's credential is not valid.")
    } else {
      console.log(`kiltnerd123's credential is valid`)
    }
  } catch {
    console.log("kiltnerd123's credential is not valid.")
  }
}
