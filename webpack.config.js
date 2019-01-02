const path = require("path");

module.exports = {
  
  entry: ["@babel/polyfill", "./src/index.js"], // string | object | array
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "public/scripts"), // string
    filename: "bundle.js" // string
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    publicPath: "/scripts/"
  },
  devtool: "source-map", // enum
};
