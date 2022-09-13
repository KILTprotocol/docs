import React from 'react'
import { transform } from '@babel/standalone'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SnippetBlock from '../SnippetBlock'

const TsJsSnippet = ({
  children,
  tsSnippet,
  jsSnippet,
  ...props
}) => {
  const tsSnippet2 = children
  const { code: jsSnippet2 } = transform(tsSnippet2, {
    plugins: ['transform-typescript'],
  })
  return <Tabs groupId="ts-js-choice">
    <TabItem value='ts' label='Typescript' default>
      <SnippetBlock {...props} className="language-ts">
        {tsSnippet2}
      </SnippetBlock>
    </TabItem>
    <TabItem value='js' label='Javascript'>
      <SnippetBlock {...props} className="language-js">
        {jsSnippet2}
      </SnippetBlock>
    </TabItem>
  </Tabs>
}

export default TsJsSnippet
