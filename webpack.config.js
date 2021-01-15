const path = require('path')
const glob = require('glob')

const entries = glob
  .sync('src/**/*/index.js')
  .reduce((acc, file) => {
    const name = path.basename(path.parse(file).dir)
    acc[name] = path.resolve(__dirname, file)
    return acc
  }, {})

const config = {
  name: 'es6lib',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist-webpack')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false, // for esm tree shaking
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.glsl$/,
        loader: 'shader-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: {
    minimize: false,
  }
}

module.exports = config
