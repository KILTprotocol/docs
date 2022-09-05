import React from 'react'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SnippetBlock from '../SnippetBlock'

const TsJsSnippet = ({
  tsSnippet,
  jsSnippet,
  ...props
}) => {
  return <Tabs>
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
