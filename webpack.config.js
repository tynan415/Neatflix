const path = require('path');

module.exports = {
  entry: "./frontend/neatflix.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\neatflix.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

