const webpack = require('webpack')
const path = require('path')
const packageJSON = require('./package.json')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules'],
  },
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
  target: 'web',
  output: {
    path: path.resolve(__dirname + 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
  },
  module: {
    rules: [
      // JS / JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },

      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      // SCSS MODULES
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // SCSS GLOBALS
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      // FONTS
      {
        test: /\.(woff(2)?|ttf|eot|svg)?$/,
        include: path.resolve(__dirname + '/src/public/fonts'),
        type: 'asset/resource',
        generator: {
          filename: 'public/fonts/[hash][ext][query]',
        },
      },

      // IMAGES
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: path.resolve(__dirname + '/src/public/fonts'),
        type: 'asset/resource',
        generator: {
          filename: 'public/images/[hash][ext][query]',
        },
      },

      // VIDEO FILES:
      {
        test: /\.(mp4|mkv|avi|mpg|mpeg|3gp|mov|wmv|webm|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/video/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      __VERSION: JSON.stringify(packageJSON.version),
    }),
  ],
  devtool: 'inline-source-map',
}
