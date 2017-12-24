const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 3000
  }
};
