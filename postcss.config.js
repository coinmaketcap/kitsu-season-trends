module.exports = {
  parser: 'sugarss',
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: [ 'last 2 years', 'not < 0.01%' ]
    })
  ]
}
