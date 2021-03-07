const webpack = require('webpack');
const path = require('path')
// eslint-disable-next-line prefer-destructuring
const resolve = path.resolve;
const HTMLPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlguin  = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    g6InReact: [
      'webpack-dev-server/client?http://localhost:8080',
      './journal_app/client/index.tsx'],
  },
  output: {
    filename: '[name].min.js',
    library: 'G6',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(process.cwd(), 'dist/'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ]
      }
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HTMLPlugin({
      template: './journal_app/client/index.html'
    }),
    new UglifyJSWebpackPlguin({
      exclude: /node_modules/,
      uglifyOptions: {
        ecma: 5,
        ie8: true
      }
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
    historyApiFallback: true
  }
};
