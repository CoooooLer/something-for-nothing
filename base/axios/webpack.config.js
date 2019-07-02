const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/vm3.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.min.js'
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ]
    }
};
