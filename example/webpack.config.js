const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    index: './index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'latest'],
          plugins: ['transform-runtime']
        }
      }
    }]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],

  devtool: 'eval-source-map'
}
