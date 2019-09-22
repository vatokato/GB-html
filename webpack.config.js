const path = require('path');
const argv = require('yargs').argv;
const isDevelopment = argv.mode === 'development';
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    './src/scss/style.scss',
    '@babel/polyfill',
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './style.bundle.css',
    })
  ]
};