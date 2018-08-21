console.log(process.env.NODE_ENV)
const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV == 'development' ? 'development': 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins:[ new HtmlWebpackPlugin({
    template: 'public/index.html'
  })],
  devServer:{
    contentBase: path.join(__dirname,'public')
  }
};
