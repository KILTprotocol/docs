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
                }
              }
            })

