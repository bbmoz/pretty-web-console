const path = require('path')

const config = {
  context: path.join(__dirname, 'src'),

  entry: {
    index: './index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'pretty-web-console.js'
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

if (process.env.LIB) {
  config.output.library = 'pwc'
  config.output.filename = 'pretty-web-console.lib.js'
} else {
  config.output.libraryTarget = 'commonjs-module'
}

module.exports = config
