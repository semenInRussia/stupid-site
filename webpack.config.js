const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.html', '.css' ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // move my index.html to dist/index.html
        { from: "./src/index.html", to: "./index.html" },
        { from: "./src/styles.css", to: "./styles.css" }
      ]
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
};
