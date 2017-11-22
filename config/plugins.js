/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import PwaManifest from 'pwa-manifest-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import config from '../server/config';
/* eslint-enable */

const serverIp = config.get('ip');
const serverPort = config.get('port');
const nyRequestUrl = `http://${serverIp}:${serverPort}/api/v0/ny`;

export default function ({ENV, DEV, PROD}) {
  return [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname,
        postcss: [precss, autoprefixer],
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      __DEV__: JSON.stringify(DEV),
      __PROD__: JSON.stringify(PROD),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      minify: {removeAttributeQuotes: true},
      filename: 'index.html',
      chunks: true,
    }),
    new WebpackPwaManifest({
      name: 'Progressive Web App',
      short_name: 'PWA',
      description: 'Progressive Web App!',
      background_color: '#f3e333',
      theme_color: '#fff',
      icons: [],
    }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,
      publicPath: '/',
      excludes: ['**/*.html'],
      caches: {
        main: [
          'mainfest.*.json',
          '.*.ttf',
          'polyfills.*.js',
          'vendor.*.js',
          'main.*.js',
        ],
        additional: [
          ':externals:',
        ],
        optional: [
          ':rest:',
        ],
      },
      externals: [
        '/',
        nyRequestUrl,
      ],
      AppCache: PROD,
    }),
  ];
}
