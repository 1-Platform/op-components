const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200,
        open: true,
    },
    entry: `${path.join(__dirname, 'src/opc-input-chip.ts')}`,
    devtool: 'inline-source-map',
    optimization : {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                  loader: 'lit-scss-loader',
                  options: {
                    // defaultSkip: true,
                    minify: true
                  },
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
        extensions: [ '.tsx', '.ts', '.js',],
    },
    output: {
        filename: 'opc-input-chip.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
