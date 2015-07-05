module.exports = {
  entry: {
    commentBox: './js/commentBox.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx-loader', 'babel'] }
    ]
  },
  output: {
    filename: 'public/commentBox.js'
  }
}
