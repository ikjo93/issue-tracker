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

const env = { ...process.env, PUBLIC_URL: getPublicUrl() };
module.exports = {
  entry: {
    app: `${path.join(__dirname, '../src', 'index.tsx')}`,
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
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, '../public')}/index.html`,
    }),
    new InterpolateHtmlPlugin(env),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
};
