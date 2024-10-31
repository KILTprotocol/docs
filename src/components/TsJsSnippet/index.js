import React, { useEffect, useMemo, useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { transform } from '@babel/standalone'
import * as prettier from 'prettier/standalone'
import pluginBabel from 'prettier/plugins/babel'
import pluginEstree from 'prettier/plugins/estree'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import SnippetBlock from '../SnippetBlock'

const TsJsSnippet = ({ children, fileName, ...props }) => {
  const tsSnippet = children
console.log(props)
  const [prettyJsSnippet, setJsSnippet] = useState('# loading code...')
  const {
    siteConfig: {
      customFields: { prettierConfig },
    },
  } = useDocusaurusContext()

  // 1. Transpile TS to JS
  const jsSnippet = useMemo(() => {
    const { code } = transform(tsSnippet, {
      plugins: ['transform-typescript'],
      retainLines: true,
    })
    return code
  }, [tsSnippet])
  // 2. Prettify the resulting JS
  useEffect(() => {
    prettier
      .format(jsSnippet, {
        parser: 'babel',
        plugins: [pluginBabel, pluginEstree],
        ...prettierConfig,
      })
      .then(setJsSnippet)
  }, [prettierConfig, jsSnippet])

  const tsFileName = fileName ? `${fileName}.ts` : undefined
  const jsFileName = fileName ? `${fileName}.js` : undefined

  const fileArray = [
    {
      fileName: tsFileName,
      fileContents: tsSnippet,
      fileID: 'ts',
      fileLabel: 'Typescript',
    },
    {
      fileName: jsFileName,
      fileContents: prettyJsSnippet,
      fileID: 'js',
      fileLabel: 'Javascript',
    },
  ]

  return (
    <>
      <Tabs groupId="ts-js-choice">
        {fileArray.map((codeFile) => (
          <TabItem value={codeFile.fileID} label={codeFile.fileLabel} default>
            <SnippetBlock
              {...props}
              className={'language-' + codeFile.fileID}
              title={codeFile.fileName}
            >
              {codeFile.fileContents}
            </SnippetBlock>
          </TabItem>
        ))}
      </Tabs>
    </>
  )
}

export default TsJsSnippet
