const path = require('path')
const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')
const UglifyJS = require('webpack-parallel-uglify-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: './client/index.ts'
  },
  output: {
    path: path.join(__dirname, './build/'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }, {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true,
        esModule: true,
        preserveWhitespace: false
      }
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProd ? '"production"' : '"development"'
    }),

    new ExtractText('app.css'),
    new UglifyJS({
      exclude: isProd ? null : /.*/,
      sourceMap: true,
      uglifyES: {}
    })
  ]
}
