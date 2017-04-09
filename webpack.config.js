const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    index: './pretty-web-console.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'pretty-web-console.js',
    libraryTarget: 'commonjs-module'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}
