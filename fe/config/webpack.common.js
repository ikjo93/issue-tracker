/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

dotenv.config();

const getPublicUrl = () => {
  const envPublicUrl = process.env.PUBLIC_URL;
  if (envPublicUrl) {
    return envPublicUrl.endsWith('/') ? envPublicUrl : `${envPublicUrl}/`;
  }
  const { homepage } = require('../package.json');
  if (homepage) {
    return homepage.endsWith('/') ? homepage : `${homepage}/`;
  }
  return '/';
};

process.env = { ...process.env, PUBLIC_URL: getPublicUrl() };

module.exports = {
  entry: {
    app: path.join(__dirname, '..', 'src', 'index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
      '@components': path.resolve(__dirname, '..', 'src/comonents'),
      '@constants': path.resolve(__dirname, '..', 'src/constants'),
      '@style': path.resolve(__dirname, '..', 'src/style'),
      '@pages': path.resolve(__dirname, '..', 'src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
    new InterpolateHtmlPlugin(process.env),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
};
