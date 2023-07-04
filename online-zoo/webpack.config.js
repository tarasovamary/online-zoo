const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, './pages/main/script.js'),
    donate: path.join(__dirname, './pages/donate/script.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './pages/main/main.html'),
      filename: 'main.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './pages/donate/donate.html'),
      filename: 'donate.html',
      chunks: ['donate'],
    }),
    new CopyPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, './assets'),
              to: path.resolve(__dirname, './dist/assets'),
            },
      ],
    }),
  ],
  devServer: {
      watchFiles: path.join(__dirname, 'pages'),
      port: 9000,
    },
  module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['./assets/sass'],
                },
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ]
    },
    resolve: {
      extensions: ['.js'],
    },
};