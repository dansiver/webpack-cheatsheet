// Package to resolve path issues
const path = require("path");

// Plugins

/**
 * Generates html file and includes scripts with correct generated name
 */
const HTMLWebpackPlugin = require("html-webpack-plugin");
/**
 * Removes outdated files from output dist
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  /**
   * Build mode. Either development or production
   */
  mode: "development",
  /**
   * From where should webpack take source files
   */
  context: path.resolve(__dirname, "src"),
  /**
   * Entry point telling webpack from where it should take file for the bundle.
   *
   * There is a shorthand for simple projects with a single entry point:
   *
   * @example
   * // entry: './src/index.js'
   */
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  output: {
    /**
     * Name for the output bundle file
     *
     * Can be a regular name.bunlde.js
     *
     * @example
     * filename: '[name].bundle.js'
     *
     * Can be a content hash (depends on content diff)
     *
     * @example
     * filename: '[name].[contenthash].js'
     */
    filename: "[name].[contenthash].js",
    // Path to the bundle folder
    path: path.resolve(__dirname, "dist"),
  },
  // Plugins array
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    // Rules array for loaders
    rules: [
      // Styles
      {
        test: /\.css$/,
        // Webpack reads loaders from right to left
        use: [
          /**
           * Addes styles from css to head section in html
           */
          "style-loader",
          /**
           * Allows webpack to understand style imports
           */
          "css-loader",
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpeg|jpg|gif|ico)$/,
        use: [
          /**
           * Allows to load files under specified extensions.
           * Puts files in the final dist folder.
           * Allows to use files from js of css properties
           */
          "file-loader",
        ],
      },
      // Fonts
      {
        test: /\.(ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
    ],
  },
};
