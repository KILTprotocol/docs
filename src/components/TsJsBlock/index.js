import React, { useEffect, useMemo, useState } from 'react'
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

  const [prettyJsSnippet, setJsSnippet] = useState('# loading code...')
  const {
    siteConfig: {
      customFields: { prettierConfig },
    },
  } = useDocusaurusContext()

  // // 1. Transpile TS to JS
  const jsSnippet = useMemo(() => {
    const { code } = transform(tsSnippet, {
      plugins: ['transform-typescript'],
      retainLines: true,
    })

    // List of modules to which .js extension should be added
    const modulesToTransform = ['./generateAccount', './generateKeypairs', './ctypeSchema', './createClaim', './generateLightDid', '../attester/ctypeSchema', '../claimer/generateLightDid', '../claimer/generateCredential'];

    // Ensure only specific import statements have .js extension
    let jsCodeWithExtensions = code.replace(
      /from\s+['"](.+)['"]/g,
      (match, p1) => {
        if (modulesToTransform.includes(p1)) {
          return `from '${p1}.js'`;
        }
        return match;
      }
    );
    // Replace require.main === module logic with an IIFE
    jsCodeWithExtensions = jsCodeWithExtensions.replace(
      'if (require.main === module)',
      'if (import.meta.url === new URL(import.meta.url).href)'
    )
    
    return jsCodeWithExtensions
  }, [tsSnippet])

    // Ensure all import statements have .js extension


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
            <CodeBlock
              {...props}
              className={'language-' + codeFile.fileID}
              title={codeFile.fileName}
            >
              {codeFile.fileContents}
            </CodeBlock>
          </TabItem>
        ))}
      </Tabs>
    </>
  )
}

export default TsJsBlock
