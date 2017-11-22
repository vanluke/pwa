import webpack from 'webpack';
import path from 'path';
import getPlugins from './config/plugins';
import loaders from './config/loaders';

const pkg = require('./package.json');

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const output = {
  path: `${__dirname}/build/public`,
  filename: '[name].[hash].js',
  publicPath: '',
  sourceMapFilename: '[name].[hash].js.map',
  chunkFilename: '[id].chunk.js',
};

const plugins = getPlugins({
  ENV,
  DEV,
  PROD,
  output,
  pkg,
});

const entry = {
  polyfills: ['babel-polyfill', 'react-hot-loader/patch'],
  vendor: ['react', 'react-dom',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'prop-types',
  ],
  main: DEV
    ? ['./src/index.js']
    : ['webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/index.js'],
};


export default {
  name: 'client',
  entry,
  devtool: 'inline-source-map',
  output,

  devServer: {
    contentBase: './build/public',
    stats: {
      colors: true,
      timings: true,
      quite: false,
      noInfo: false,
    },
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: loaders,
  },

  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },

  plugins: [
    ...plugins,
  ],
};
