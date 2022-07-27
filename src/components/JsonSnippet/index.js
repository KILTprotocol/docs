import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export default function JsonSnippet({ obj, spacing = 2 }) {
  return (
    <CodeBlock className="language-json">{JSON.stringify(obj, null, spacing)}</CodeBlock>
  )
}