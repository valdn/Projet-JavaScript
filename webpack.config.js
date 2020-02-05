const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    styles: './stylesheets/styles.scss'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'assets/js/[name].js',
    library: 'myApp',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 'targets': { 'browsers': '> .5% or last 3 versions' } }]
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[sha512:hash:base64:7].[ext]',
            outputPath: 'assets/images/'
          }
        }]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[sha512:hash:base64:7].[ext]',
            outputPath: 'assets/fonts/'
          }
        }]
      },
      {
        test: /\.tpl\.html$/,
        exclude: /node_modules/,
        use: ['html-es6-template-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name].css', chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'There is a fish'
    })
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'eval'

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        'css-hot-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../../'
          }
        },
        { loader: 'css-loader' },
        { loader: 'resolve-url-loader' },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })

    config.devServer = {
      contentBase: path.resolve(__dirname, './public'),
      host: 'localhost', 
      port: 3000,
      publicPath: 'http://localhost:3000/',
      historyApiFallback: true,
      inline: true,
      open: true,
      hot: true,
      overlay: true
    }
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map'

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../../'
          }
        },
        { loader: 'css-loader' },
        { loader: 'resolve-url-loader' },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })
    config.plugins.push(new OptimizeCSSAssets())
  }

  return config
}