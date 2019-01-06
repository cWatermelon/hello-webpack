const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = webpackMerge(common, {
  mode: 'production',
  output: {
    publicPath: './public',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              module: true,
              minimize: true,
            }
          }, 'postcss-loader', 'less-loader'],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin('index.[hash:4].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
