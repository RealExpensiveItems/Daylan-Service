var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(jpg)$/,
      　loader: 'url-loader?limit=8192&name=asset/   images/[hash:8].[name].[ext]'
      },
      {
        　test: /\.(png)$/,
      　　loader: 'url-loader?limit=8192&name=asset/stars/[hash:8].[name].[ext]'
      }
    ]
  }
};
