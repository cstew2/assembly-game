const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './build/comp/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'game.js',
    },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
}
