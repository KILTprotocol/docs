import { useEffect, useState } from 'react'

import * as Kilt from '@kiltprotocol/sdk-js'

export function App() {
  const [did, setDid] = useState('')
  useEffect(() => {
    const resolveWeb3Name = async () => {
      const api = await Kilt.connect('wss://spiritnet.kilt.io')
      const encodedDidDetails = await api.query.web3Names.owner('john_doe')
      try {
        const { owner } =
          Kilt.Did.web3NameOwnerFromChain(encodedDidDetails)
        setDid(owner)
      } catch {
        setDid('unknown')
      }
    }
    resolveWeb3Name()
  })

  return <div className="App">john_doe is {did}</div>
}
