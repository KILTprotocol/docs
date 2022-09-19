import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
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
