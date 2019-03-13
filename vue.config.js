'use strict'
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh-tw/),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        moment: 'moment'
      })
    ],
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 600
      }
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
