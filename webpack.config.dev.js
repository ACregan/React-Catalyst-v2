const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const packageJSON = require('./package.json')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
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
        use: ['babel-loader', 'eslint-loader'],
      },

      // HTML (TODO: Ejs or Handlebars)
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
          'css-loader',
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
    // new HtmlWebPackPlugin({
    //   template: './catalyst/dev-server/index.html',
    //   inject: false, // this prevents 2 script tags, its manually typed in the html template in dev.
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'src/public/images/favicon', to: 'images/favicon' }],
    // }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      __VERSION: JSON.stringify(packageJSON.version),
    }),
  ],
  devtool: 'inline-source-map',
}
