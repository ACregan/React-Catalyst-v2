const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const packageJSON = require('./package.json')
const webpack = require('webpack')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const WebpackFavicons = require('webpack-favicons')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
    modules: ['node_modules'],
  },
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
      },
    },
  },
  module: {
    rules: [
      // JS / JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // Typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
          { loader: 'css-loader', options: { modules: true } },
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
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/.htaccess', to: './' }],
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
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      reportFilename: `../catalyst/bundleReports/ProductionBundleReport_${packageJSON.version}.html`,
      analyzerMode: 'static',
    }),
    // new FaviconsWebpackPlugin({
    //   logo: './src/public/images/favicon/favicon.svg',
    //   outputPath: './public/images/favicon',
    //   publicPath: './public/images/favicon',
    //   prefix: '',
    // }),
    new WebpackFavicons({
      src: './src/public/images/favicon/favicon.svg',
      path: './public/images/favicon',
      // background: '#000',
      // theme_color: '#000',
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
      },
    }),
  ],
}
