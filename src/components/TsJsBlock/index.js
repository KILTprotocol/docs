import React from 'react'

import * as Babel from '@babel/standalone'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import CodeBlock from '@theme/CodeBlock'

const TsJsBlock = ({ tsSnippet, ...props }) => {
  const jsSnippet = Babel.transform(tsSnippet, {
    plugins: ['transform-typescript'],
  }).code
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
