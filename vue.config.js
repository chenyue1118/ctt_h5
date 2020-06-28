'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  // lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    host: '0.0.0.0',
    port: 6003
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  }
  // chainWebpack(config) {
  //   // Provide the app's title in webpack's name field, so that
  //   // it can be accessed in index.html to inject the correct title.
  //   config.set('name', name)
  // }
}
