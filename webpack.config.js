const path = require('path');
const CopyPlugin = require( 'copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new CopyPlugin({
        patterns:[
           path.resolve(__dirname,"src", "test.txt")
        ]
    })
  ],
  module: {
    rules:[
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader",],
        },
        {
            test: /\.(png|jpg|jpeg|gif|jpeg)$/i,
            type: "asset/resource"
        }
    ]
  }
};