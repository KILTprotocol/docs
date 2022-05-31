const webpack = require('webpack')

module.exports = function (context, options) {
  return {
    name: 'docusaurs-polyfill-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
          },
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.env.DEBUG': false,
          }),
        ],
      }
    },
  }
}
