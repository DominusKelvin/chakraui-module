const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['@nuxtjs/chakraui'],
    ...moduleOptions
  }

  await this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '@nuxtjs/chakraui.js',
    options
  })
}

module.exports.meta = require('../package.json')
