const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/1.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
};
