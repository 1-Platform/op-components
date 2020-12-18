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
    entry: `${path.join(__dirname, 'src/opc-timeline')}`,
    devtool: 'inline-source-map',
    optimization : {
        usedExports: true
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
            use: [{
              loader: 'lit-scss-loader',
              options: {
                minify: true, // defaults to false
              },
            }, 'extract-loader', 'css-loader', 'sass-loader'],
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
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'opc-timeline.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
