const path = require('path')
var { encode } = require('msgpack-lite/lib/encode')
var { readFileSync } = require('fs')

module.exports = {
  entry: 'src/index.js',
  html: {
    template: path.resolve('public', 'index.html')
  },
  staticFolder: 'public',
  copy: [
    {
      from: 'data',
      to: 'data',
      transform: (content, file) => JSON.stringify(JSON.parse(readFileSync(file, 'utf8')))
    },
    {
      from: 'data',
      to: 'msgpack',
      transform: (content, file) => encode(JSON.parse(readFileSync(file, 'utf8')))
    }
  ],
  presets: [
    require('poi-preset-react')(),
    require('poi-preset-eslint')({
      mode: '*'
    }),
    require('poi-preset-sw-precache')({
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/]
    })
  ],
  extendWebpack: config => {
    config.module.rule('css').test([ /\.sss$/, /\.css$/ ])
  }
}
