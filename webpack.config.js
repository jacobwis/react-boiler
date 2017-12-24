const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 3000,
    overlay: true
  }
};
