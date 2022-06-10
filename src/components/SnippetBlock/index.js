import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const SnippetBlock = ({
  children,
  funcName = 'main',
  funcEnd = '}',
  snippets,
  leadingSpaces = 2,
  ...props
}) => {
  const raw = children.split(/\r?\n/)

  let code = ''

  if (snippets) {
    code = JSON.parse(snippets)
      .map((snip) => {
        if (Array.isArray(snip)) {
          return raw
            .slice(snip[0], snip[1])
            .map((line) => line.slice(leadingSpaces))
            .join('\n')
        } else {
          return snip
        }
      })
      .join('\n')
  } else if (funcName) {
    let start, end

    // FIXME: Very very very fragile implementation.
    for (let i = 0; i < raw.length; i++) {
      if (raw[i].includes(funcName)) {
        start = i
        // Start and end of function signature on same line
        if (raw[i].includes(' {')) break
      } else if (raw[i].includes(' {')) {
        // End of function signature on different line
        start = i
        break
      }
    }

    for (let i = raw.length - 1; i > 0; i--) {
      if (raw[i].includes(funcEnd)) {
        end = i
        break
      }
    }

    code = raw
      // Exclude start index. End index is already excluded by `slice`
      .slice(start + 1, end)
      // Remove leading spaces
      .map((line) => line.slice(leadingSpaces))
      .join('\n')
  }

  return <CodeBlock {...props}>{code}</CodeBlock>
}

export default SnippetBlock
