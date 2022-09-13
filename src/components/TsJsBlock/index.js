import React from 'react'
import { transform } from '@babel/standalone'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import CodeBlock from '@theme/CodeBlock'

const TsJsBlock = ({ children, tsSnippet, jsSnippet, ...props }) => {
  const tsSnippet2 = children
  const { code: jsSnippet2 } = transform(tsSnippet2, {
    plugins: ['transform-typescript'],
  })
  return (
    <Tabs groupId="ts-js-choice">
      <TabItem value="ts" label="Typescript" default>
        <CodeBlock {...props} className="language-ts">
          {tsSnippet2}
        </CodeBlock>
      </TabItem>
      <TabItem value="js" label="Javascript">
        <CodeBlock {...props} className="language-js">
          {jsSnippet2}
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default TsJsBlock
