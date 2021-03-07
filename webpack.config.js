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
      './pages/index.js'],
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
    // Add `.ts` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(css)$/,
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
      template: './pages/index.html'
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
