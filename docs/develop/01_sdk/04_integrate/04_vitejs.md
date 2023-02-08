---
id: howto-integrate-vitejs
title: ViteJS
---

import CodeBlock from '@theme/CodeBlock';
import ViteReactConfig from '!!raw-loader!@site/code_examples/vitejs/react.config.ts';
import ViteVueJSConfig from '!!raw-loader!@site/code_examples/vitejs/vuejs.config.ts';
import ViteConfig from '!!raw-loader!@site/code_examples/vitejs/vite.config.ts';
import App from '!!raw-loader!@site/code_examples/vitejs/src/App.tsx';

[ViteJS](https://vitejs.dev/guide/) is a great tool to bootstrap your project.
As for all browser based projects, you have to make sure that NodeJS polyfills are in place to make the SDK work in such an environment.
If you start from any ViteJS template, you only have to make sure to install and enable those polyfills.

Bootstrap using the template of your choice and install KILT + NodeJS polyfills:

<!-- TODO: Update the SDK version using the CI action triggered on SDK releases. -->


<Tabs groupId="react-vuejs-choice">
      <TabItem value="react" label="React" default>
        <CodeBlock title=React>
            ```bash
              yarn create vite my-app --template react-ts
              cd my-app
              yarn add @kiltprotocol/sdk-js
              yarn add --dev @esbuild-plugins/node-globals-polyfill
              yarn add --dev @esbuild-plugins/node-modules-polyfill
              yarn add --dev rollup-plugin-node-polyfills
            ```
        </CodeBlock>
      </TabItem>
      <TabItem value="vuejs" label="VueJS">
        <CodeBlock title=VueJS>
          ```bash
            yarn create vite my-app --template vue-ts
            cd my-app
            yarn add @kiltprotocol/sdk-js
            yarn add --dev @esbuild-plugins/node-globals-polyfill
            yarn add --dev @esbuild-plugins/node-modules-polyfill
            yarn add --dev rollup-plugin-node-polyfills
          ```   
        </CodeBlock>
      </TabItem>
    </Tabs>


Adjust the `vite.config.ts` file to activate the polyfills:
<Tabs groupId="react-vuejs-choice">
      <TabItem value="react" label="React" default>
            <CodeBlock className="language-ts">
                  {ViteReactConfig}
            </CodeBlock>
      </TabItem>
      <TabItem value="vuejs" label="VueJS">
        <CodeBlock title=VueJS className="language-ts">
                  {ViteVueJsConfig}
        </CodeBlock>
      </TabItem>
    </Tabs>
After that you can initialize and use the SDK as usual.

<CodeBlock className="language-tsx">
  {App}
</CodeBlock>
