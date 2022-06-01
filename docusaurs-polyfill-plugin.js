const webpack = require('webpack')
const path = require('path')

module.exports = function (context, options) {
  return {
    name: 'docusaurs-polyfill-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              // Needed for making the `process/browser` in the ProvidePlugin work.
              test: /\.m?js/,
              include: path.resolve(__dirname, 'node_modules'),
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        ],
      }
    },
  }
}
