const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

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
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
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
        test: /\.s(a|c)ss$/,
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
        include: path.resolve(__dirname + '/src/static/fonts'),
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
        exclude: path.resolve(__dirname + '/src/static/fonts'),
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
        loader:
          'file-loader?name=public/videos/[name].[ext]&mimetype=video/mp4',
      },
      {
        test: /\.(webm|ogg)$/,
        loader: 'file-loader?name=public/videos/[name].[ext]',
      },
    ],
  },
  plugins: [
    // TEMP
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].[hash].css',
      chunkFilename: 'public/css/[id].[hash].css',
    }),
  ],
}
