const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      //Заголовок HTML документа
      title: 'Output Management',
      template: './index-template.html'
    }),
  ],
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './bundle',
    hot: false,
  },
}