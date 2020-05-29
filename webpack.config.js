// Package to resolve path issues
const path = require("path");

module.exports = {
  // Entry point telling webpack from where it should take file for the bundle
  entry: './src/index.js',
  output: {
    // Name for the output bundle file
    filename: 'bundle.js',
    // Path to the bundle folder
    path: path.resolve(__dirname, 'dist')
  },
}