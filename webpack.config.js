const path = require('path')
const ExtractText = require('extract-text-webpack-plugin')
const UglifyJS = require('webpack-parallel-uglify-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './client/src/index.js'
  },
  output: {
    path: path.join(__dirname, './client/build/'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true,
        preserveWhitespace: false,
        postcss: {
          plugins: [ require('postcss-nesting')() ]
        }
      }
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader'
        }
      ]
    }]
  },
  devtool: 'sourcemap',
  plugins: [
    new ExtractText('style.css'),
    new UglifyJS({
      exclude: isProd ? null : /.*/,
      sourceMap: true,
      uglifyES: {}
    })
  ]
}
