const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  target: 'web',
  entry: {
    index: path.resolve(__dirname, 'src/ssr-client.js'),
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/dist/',
    path: path.join(__dirname, 'src', 'dist'),
    filename: 'public/js/[name].js',
    chunkFilename: 'public/js/[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              require('@babel/plugin-proposal-class-properties'),
              require('@babel/plugin-proposal-object-rest-spread'),
              require('@babel/plugin-syntax-dynamic-import'),
              require('react-loadable/babel'),
            ],
          },
        },
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      // SCSS GLOBALS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },

      // FONTS
      {
        test: /\.(woff(2)?|ttf|eot|svg)?$/,
        include: path.resolve(__dirname + '/src/public/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/fonts/',
            },
          },
        ],
      },

      // IMAGES
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: path.resolve(__dirname + '/src/public/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/images/',
            },
          },
        ],
      },

      // VIDEO FILES:
      {
        test: /\.mp4$/,
        loader: 'file-loader?name=public/videos/[name].[ext]&mimetype=video/mp4',
      },
      {
        test: /\.(webm|ogg)$/,
        loader: 'file-loader?name=public/videos/[name].[ext]',
      },
    ],
  },
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      reportFilename: '../../catalyst/ProductionBundleReport.html',
      analyzerMode: 'static',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin([{ from: 'src/public/images/favicon', to: 'public/images/favicon' }]),
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].[hash].css',
      chunkFilename: 'public/css/[id].[hash].css',
    }),
    new ReactLoadableSSRAddon({
      filename: 'react-loadable-ssr-addon.json',
    }),
  ],
}
