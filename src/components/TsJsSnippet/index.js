import React from 'react'
import { transform } from '@babel/standalone'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SnippetBlock from '../SnippetBlock'

const TsJsSnippet = ({
  children,
  ...props
}) => {
  const tsSnippet = children
  const { code: jsSnippet } = transform(tsSnippet, {
    plugins: ['transform-typescript'],
  })
  return <Tabs groupId="ts-js-choice">
    <TabItem value='ts' label='Typescript' default>
      <SnippetBlock {...props} className="language-ts">
        {tsSnippet}
      </SnippetBlock>
    </TabItem>
    <TabItem value='js' label='Javascript'>
      <SnippetBlock {...props} className="language-js">
        {jsSnippet}
      </SnippetBlock>
    </TabItem>
  </Tabs>
}

export default TsJsSnippet
