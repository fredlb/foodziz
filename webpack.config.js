var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot','babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'],
      include: __dirname
    }, {
      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
    }, { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }],
      devServer: {
        contentBase: '/dist/',
        publicPath: '/dist/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
      }
  }
};
