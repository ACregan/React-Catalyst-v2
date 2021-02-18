const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const packageJSON = require('./package.json')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/projects/catalyst2/',
    filename: 'public/js/[name].js',
    chunkFilename: 'public/js/[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          },
        },
        // vendor: {
        //   test: /node_modules/,
        //   chunks: 'initial',
        //   name: 'vendor',
        //   enforce: true,
        // },
      },
    },
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
        exclude: /\.module.(s(a|c)ss)$/,
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
        loader: 'file-loader',
        options: {
          name: 'public/videos/[name].[ext]&mimetype=video/mp4',
        },
      },
      // {
      //   test: /\.mp4$/,
      //   loader: 'file-loader?name=public/videos/[name].[ext]&mimetype=video/mp4',
      // },

      {
        test: /\.(webm|ogg|mov|avi)$/,
        loader: 'file-loader',
        options: {
          name: 'public/videos/[name].[ext]',
        },
      },
      // {
      //   test: /\.(webm|ogg)$/,
      //   loader: 'file-loader?name=public/videos/[name].[ext]',
      // },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      reportFilename: `../catalyst/bundleReports/ProductionBundleReport_${packageJSON.version}.html`,
      analyzerMode: 'static',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/public/images/favicon', to: 'public/images/favicon' },
        { from: 'src/.htaccess', to: './' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].[hash].css',
      chunkFilename: 'public/css/[id].[hash].css',
    }),
    new WebpackManifestPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      __VERSION: JSON.stringify(packageJSON.version),
    }),
  ],
}
