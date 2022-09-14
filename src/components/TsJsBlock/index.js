import React from 'react'

import { format } from 'prettier/standalone'
import { parsers } from 'prettier/parser-babel'
import { transform } from '@babel/standalone'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import CodeBlock from '@theme/CodeBlock'

const TsJsBlock = ({ children, fileName, ...props }) => {
  const tsSnippet = children
  // 1. Transpile TS to JS
  const { code: jsSnippet } = transform(tsSnippet, {
    plugins: ['transform-typescript'],
    retainLines: true,
  })
  // 2. Prettify the resulting JS
  // FIXME: Maybe we can pass this as a config to the prop?
  const prettyJsSnippet =
    format(
      jsSnippet, {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80,
        parser: parsers.babel.parse
      })
  const tsFileName = fileName ? `${fileName}.ts` : undefined
  const jsFileName = fileName ? `${fileName}.js` : undefined
  return (
    <Tabs groupId="ts-js-choice">
      <TabItem value="ts" label="Typescript" default>
        <CodeBlock {...props} className="language-ts" title={tsFileName}>
          {tsSnippet}
        </CodeBlock>
      </TabItem>
      <TabItem value="js" label="Javascript">
        <CodeBlock {...props} className="language-js" title={jsFileName}>
          {prettyJsSnippet}
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default TsJsBlock
