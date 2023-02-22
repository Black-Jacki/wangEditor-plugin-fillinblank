const path = require("path");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    "index": path.resolve(__dirname, "src/index.ts"),
    "index.min": path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "fillInBlank",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src"),
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.(ts)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src"),
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true
                }
              },
              "ts-loader"
            ],
          },
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: {
    "@wangeditor/editor": {
      commonjs: "@wangeditor/editor",
      commonjs2: "@wangeditor/editor",
      amd: "@wangeditor/editor",
      root: "wangEditor",
    },
    "@wangeditor/core": {
      commonjs: "@wangeditor/core",
      commonjs2: "@wangeditor/core",
      amd: "@wangeditor/core",
      root: "wangEditor",
    },
    // "snabbdom": "snabbdom",
    // "slate": "slate",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};