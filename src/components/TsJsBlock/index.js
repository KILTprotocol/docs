import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { transform } from '@babel/standalone'
import * as prettier from 'prettier/standalone'
import pluginBabel from 'prettier/plugins/babel'
import pluginEstree from 'prettier/plugins/estree'

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
  const {
    siteConfig: {
      customFields: { prettierConfig },
    },
  } = useDocusaurusContext()
  // 2. Prettify the resulting JS
  const prettyJsSnippet = prettier.format(jsSnippet, {
    parser: 'babel',
    plugins: [pluginBabel, pluginEstree],
    ...prettierConfig,
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
