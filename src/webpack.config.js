var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var bourbon = require('node-bourbon');
var neat = require('node-neat');

var bourbon_path = bourbon.includePaths;
var neat_path  = neat.includePaths[1];
var extend = require('extend');

var LAUNCH_COMMAND = process.env.npm_lifecycle_event

var isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, '../'),
}

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

var copyWebpackPlugin = new CopyWebpackPlugin([
  { from: path.join(PATHS.app, '/assets'), to: path.join(PATHS.build, '/assets') },
],
{
  ignore : [],
  copyUnmodified: false
})

var productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  // Eliminate comments
  comments: false,

  // Compression specific options
  compress: {
    // remove warnings
    warnings: false,

    // Drop console statements
    drop_console: true
  },
})

var base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
    libraryTarget: "umd",
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['airbnb']
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      { test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
          test: /\.scss$/,
          loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
              'resolve-url',
              'sass?includePaths[]=' + bourbon_path + '&includePaths[]=' + neat_path,
          ]
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    root: path.resolve('./app'),
    alias: {
      sharedStyles: path.join(__dirname, 'app/sharedStyles/'),
    }
  }
}

var developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    outputPath: PATHS.build,
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
    port: 3030,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

var productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin, UglifyJsPlugin]
}

var finalConfig = {};
if (isProduction === true) {
  extend(finalConfig, base, productionConfig)
}else{
  extend(finalConfig, base, developmentConfig)
}
module.exports = finalConfig;
