import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import bourbon from 'node-bourbon'
import neat from 'node-neat'
const bourbon_path = bourbon.includePaths;
const neat_path  = neat.includePaths[1];

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const copyWebpackPlugin = new CopyWebpackPlugin([
  { from: path.join(PATHS.app, '/assets'), to: path.join(PATHS.build, '/assets') },
],
{
  ignore : [],
  copyUnmodified: false
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})


const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
    libraryTarget: "umd",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
  resolve: {
    root: path.resolve('./app')
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    outputPath: PATHS.build,
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, copyWebpackPlugin,new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, copyWebpackPlugin, productionPlugin]
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)
