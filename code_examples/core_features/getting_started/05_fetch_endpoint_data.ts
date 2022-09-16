/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

// TODO: Use exported type when https://github.com/KILTprotocol/sdk-js/pull/631 is merged.

export async function main(
  endpoints: Kilt.DidServiceEndpoint[]
): Promise<Kilt.ICredentialPresentation> {
  // Define the type of a published credential
  type PublishedCredential = {
    credential: Kilt.ICredentialPresentation
    // Not relevant for this case, but production applications should parse this field as well
    metadata?: any
  }
  const {
    data: [{ credential }]
  } = await axios.get<PublishedCredential[]>(endpoints[0].serviceEndpoint[0])

  return credential
}
