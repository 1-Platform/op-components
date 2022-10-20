const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 4200,
  },
  entry: `${path.join(__dirname, 'src/opc-feedback')}`,
  devtool: 'inline-source-map',
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          },
          'extract-loader',
          {
            loader: 'css-loader',
            // url: false -> To avoid loading fonts and images of pfe
            // importLoaders: 2 -> Webpack wont apply loaders like postcss on linked css using import
            options: { url: false, importLoaders: 2 },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['app'],
      template: './demo/index.html',
    }),
  ],
  resolve: {
    extensions: ['.svg', '.tsx', '.ts', '.js', '.scss', '.css'],
  },
  output: {
    filename: 'opc-feedback.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
