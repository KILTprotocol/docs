import React from 'react'
import { transform } from '@babel/standalone'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import CodeBlock from '@theme/CodeBlock'

const TsJsBlock = ({ children, ...props }) => {
  const tsSnippet = children
  const { code: jsSnippet } = transform(tsSnippet, {
    plugins: ['transform-typescript'],
  })
  return (
    <Tabs groupId="ts-js-choice">
      <TabItem value="ts" label="Typescript" default>
        <CodeBlock {...props} className="language-ts">
          {tsSnippet}
        </CodeBlock>
      </TabItem>
      <TabItem value="js" label="Javascript">
        <CodeBlock {...props} className="language-js">
          {jsSnippet}
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default TsJsBlock
