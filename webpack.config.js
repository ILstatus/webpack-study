const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

let devConfig = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true, // 为所有服务启用gzip压缩
  hot: true, //启动热更新替换特性，需要配合 webpack.HotModuleReplacementPlugin 插件
  overlay: true, // 在浏览器中显示全屏覆盖
  open: true,
  publicPath: '/',
  host: 'localhost',
  port: 3000  // 端口
}

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // 修改css文件内部的路径，方便html中的图片引用
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于8k的图片自动转成base64格式，并且不会存在实体图片，否则被打包
              limit: 8 * 1024,
              outputPath: './img', //打包后图片的存放目录
              // esModule: false,
              name: '[name]_[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new webpack.NamedModulesPlugin(), // 更容易查看（patch）的以来
    new webpack.HotModuleReplacementPlugin() // 替换插件
  ],
  devServer: devConfig,
  mode: 'development'
}