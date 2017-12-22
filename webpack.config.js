module.exports = {
  entry: './src/js/entry.js',
  output: {
    path: __dirname,
    filename: 'src/bundle.js'
  },
  module: {
    rules: [
      {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ]]
        }
      }
    ]
  }
};
