const path        = require('path');
const output_path = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: output_path,
    filename: 'main.js'
  }
};
