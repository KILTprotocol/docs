---
id: howto-integrate-vitejs
title: ViteJS
---

import CodeBlock from '@theme/CodeBlock';
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
                  {ViteConfig}
            </CodeBlock>
      </TabItem>
      <TabItem value="vuejs" label="VueJS">
        <CodeBlock title=VueJS className="language-ts">
          ```
            import vue from '@vitejs/plugin-vue'
            import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
            import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
            import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
            import { defineConfig } from 'vite'
            export default defineConfig({
              plugins: [vue()],
              optimizeDeps: {
                esbuildOptions: {
                  plugins: [
                    NodeGlobalsPolyfillPlugin({
                      process: true,
                      buffer: true
                    }),
                    NodeModulesPolyfillPlugin()
                  ]
                }
              },
              build: {
                rollupOptions: {
                  plugins: [rollupNodePolyFill()]
                }
              },
              resolve: {
                alias: {
                  buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
                  process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
                  util: 'rollup-plugin-node-polyfills/polyfills/util',
                  stream: 'rollup-plugin-node-polyfills/polyfills/stream',
                  string_decoder: 'rollup-plugin-node-polyfills/polyfills/string-decoder',
                  events: 'rollup-plugin-node-polyfills/polyfills/events'

                  // other available polyfills that are not required by the KILT SDK
                  // sys: "util",
                  // path: "rollup-plugin-node-polyfills/polyfills/path",
                  // querystring: "rollup-plugin-node-polyfills/polyfills/qs",
                  // punycode: "rollup-plugin-node-polyfills/polyfills/punycode",
                  // url: "rollup-plugin-node-polyfills/polyfills/url",
                  // http: "rollup-plugin-node-polyfills/polyfills/http",
                  // https: "rollup-plugin-node-polyfills/polyfills/http",
                  // os: "rollup-plugin-node-polyfills/polyfills/os",
                  // assert: "rollup-plugin-node-polyfills/polyfills/assert",
                  // constants: "rollup-plugin-node-polyfills/polyfills/constants",
                  // _stream_duplex:
                  //   "rollup-plugin-node-polyfills/polyfills/readable-stream/duplex",
                  // _stream_passthrough:
                  //   "rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough",
                  // _stream_readable:
                  //   "rollup-plugin-node-polyfills/polyfills/readable-stream/readable",
                  // _stream_writable:
                  //   "rollup-plugin-node-polyfills/polyfills/readable-stream/writable",
                  // _stream_transform:
                  //   "rollup-plugin-node-polyfills/polyfills/readable-stream/transform",
                  // timers: "rollup-plugin-node-polyfills/polyfills/timers",
                  // console: "rollup-plugin-node-polyfills/polyfills/console",
                  // vm: "rollup-plugin-node-polyfills/polyfills/vm",
                  // zlib: "rollup-plugin-node-polyfills/polyfills/zlib",
                  // tty: "rollup-plugin-node-polyfills/polyfills/tty",
                  // domain: "rollup-plugin-node-polyfills/polyfills/domain",
                }
              }
            })
         ```
        </CodeBlock>
      </TabItem>
    </Tabs>
After that you can initialize and use the SDK as usual.

<CodeBlock className="language-tsx">
  {App}
</CodeBlock>
