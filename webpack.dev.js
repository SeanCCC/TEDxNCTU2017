const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const CURRENT_PATH = path.resolve(__dirname); // 獲取到當前目錄
const ROOT_PATH = __dirname; // 項目根目錄
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目錄
const BUILD_PATH = path.join(ROOT_PATH, './dist'); // 最後輸出放置公共資源的目錄

const WebPackPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
});

const HTMLWebpackPluginConfig = new HtmlwebpackPlugin({
  title: 'testApp',
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
});

module.exports = {
  context: CURRENT_PATH, // 設置webpack配置中指向的默認目錄為項目根目錄
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
    'webpack-dev-server/client?http://localhost:3000', // host 與 port
    'webpack/hot/only-dev-server', // "only" 可以避免在語法錯誤時重新載入
  ],
  output: {
    path: BUILD_PATH, // 設置輸出目錄
    filename: '[name].bundle.js', // 輸出文件名
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee'], // 配置簡寫，配置過後，書寫該文件路徑的時候可以省略文件後綴
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          // {
          //   loader: 'react-hot-loader'
          // },
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: [
                'transform-decorators-legacy',
                'transform-class-properties',
                'react-hot-loader/babel',
              ],
            },
          },
          // {
          //   loader: 'eslint-loader',
          // },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        // loader: 'file-loader?name=assets/fonts/[name].[ext]',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'url-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],

  },
  plugins: [
    HTMLWebpackPluginConfig,
    WebPackPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
  },
  devtool: 'eval',
};
