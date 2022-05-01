const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
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
        ]
      }
    ]
  },
}