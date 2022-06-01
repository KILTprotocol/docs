import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function JsonExamples() {
  return (
    <BrowserOnly>
      {() => {
        const { jsonExamples } = require('@site/src/utilities/jsonExamples')
        return (
          <CodeBlock className="language-json">
            {jsonExamples().requestForAttestation}
          </CodeBlock>
        )
      }}
    </BrowserOnly>
  )
}
