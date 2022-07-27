import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export default function JsonSnippet({ obj, text, spacing = 2 }) {
  return (
    <CodeBlock className="language-json" text={text}>{JSON.stringify(obj, null, spacing)}</CodeBlock>
  )
}