import React from 'react'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CodeBlock from '@theme/CodeBlock';

const TsJsBlock = ({
  tsSnippet,
  jsSnippet,
  ...props
}) => {
  return <Tabs>
    <TabItem value='ts' label='Typescript' default>
      <CodeBlock {...props} className="language-ts">
        {tsSnippet}
      </CodeBlock>
    </TabItem>
    <TabItem value='js' label='Javascript'>
      <CodeBlock {...props} className="language-js">
        {jsSnippet}
      </CodeBlock>
    </TabItem>
  </Tabs>
}

export default TsJsBlock
