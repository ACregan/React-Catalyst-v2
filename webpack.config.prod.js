const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: 'dist/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
}
