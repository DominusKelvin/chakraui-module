const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  await this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'chakra.js'
  })
}

module.exports.meta = require('../package.json')
