import { useEffect, useState } from 'react'

import * as Kilt from '@kiltprotocol/sdk-js'

export function App() {
  const [did, setDid] = useState('')
  useEffect(() => {
    const resolveWeb3Name = async () => {
      await Kilt.init({ address: 'wss://spiritnet.kilt.io' })
      const did = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
      setDid(did || 'unknown')
    }
    resolveWeb3Name()
  })

  return <div className="App">john_doe is {did}</div>
}
