const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader', 'eslint-loader'], // include eslint-loader
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx|tsx)$/, // Allowing .jsx file to be transpiled by babel
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?importLoaders=1',
          'font?format[]=truetype&format[]=woff&format[]=embedded-opentype',
        ],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    // extensions: ['.index.tsx', '.index.ts', '.index.js'],
    extensions: ['.tsx', '.ts', '.js'],
    modulesDirectories: ['node_modules', 'src'],
  },
};
