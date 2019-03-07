const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // optimization:{
  //   minimize: false, // <---- disables uglify.
  // },
  mode:'development',
  entry: {
    script:'./js/script.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(htm)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.m?js$/,
        exclude:/(node_modules)/,
        use:{
          loader:'babel-loader'
          // options:{
          //   presets:['@babel/preset-env']
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename:'index.html',
      template:'./index.html',
      inject:'head'
    }),
    new HtmlPlugin({
      filename:'menuplanner.html',
      template:'./menuplanner.html',
      inject:'head'
    }),
    new HtmlPlugin({
      filename:'browse-recipes.html',
      template:'./browse-recipes.html',
      inject:'head'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: './img', to: './img'}
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

  // plugins: [
  //   new CopyPlugin([
  //     {from: './assets', to:'./assets'},
  //     {from: './css', to: './css'},
  //     {from: './img', to: './img'},
  //     {from: './js', to: './js'},
  //   ]),
  // ]
}
