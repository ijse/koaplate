const path = require('path')

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
        preserveWhitespace: false
      }
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
  }
}
