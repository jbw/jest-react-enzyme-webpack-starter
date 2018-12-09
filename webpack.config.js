const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: ['babel-polyfill', './src/index.jsx'],

  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]_[local]_[hash:base64]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/static/index.html',
        filename: './index.html',
      },
    ),
  ],

  resolve: {
    extensions: ['.jsx', '.js'],
  },

};
