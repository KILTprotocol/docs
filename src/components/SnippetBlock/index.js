import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const SnippetBlock = ({
  children,
  funcName = 'main',
  leadingSpaces = 2,
  dropHead = 0,
  dropTail = 0,
  ...props
}) => {
  const regex = new RegExp(
    `${funcName}\\((?:.|\\n|\\r)*?\\)(?::(?:.|\\n|\\r)*?)?\\s*{(?:\\n|\\r)*(?<body>(?:.|\\n|\\r)+)\\}`
  )
  const matched = children.toString().match(regex) ?? {}

  let code = ''
  if (!matched?.groups?.body) {
    code = children.toString()
  } else {
    const { body } = matched.groups
    const lines = body
      // Remove leading spaces
      .split(/\r?\n/)
    code = lines
      .map((line) => line.slice(leadingSpaces))
      // Exclude start index. End index is already excluded by `slice`
      .slice(parseInt(dropHead), lines.length - parseInt(dropTail) - 1)
      .join('\n')
  }
  return <CodeBlock {...props}>{code}</CodeBlock>
}

export default SnippetBlock
