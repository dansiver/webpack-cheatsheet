// Package to resolve path issues
const path = require("path");

module.exports = {
  /**
   * Entry point telling webpack from where it should take file for the bundle.
   * 
   * There is a shorthand for simple projects with a single entry point:
   * 
   * @example
   * // entry: './src/index.js'
   */
  entry: {
    main: './src/index.js'
  },
  output: {
    // Name for the output bundle file
    filename: '[name]. bundle.js',
    // Path to the bundle folder
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development"
}