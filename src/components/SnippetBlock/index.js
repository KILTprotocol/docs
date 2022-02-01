import React, { useEffect } from 'react'
import CodeBlock from '@theme/CodeBlock'

const SnippetBlock = ({ children, snippets, ...props }) => {
  const raw = children.split(/\r?\n/)
  const code = 
    !snippets ? raw.join('\n') :
    JSON.parse(snippets)
    .map(snip => {
      if(Array.isArray(snip)) {
        return raw.slice(snip[0], snip[1]).join('\n')
      } else {
        return snip
      }
    }).join('\n')
  
  return (
    <CodeBlock {...props}>
      {code}
    </CodeBlock>
  )
}

export default SnippetBlock
