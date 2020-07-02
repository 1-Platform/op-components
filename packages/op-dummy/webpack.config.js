const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200,
    },
    devtool: 'inline-source-map',
    optimization : {
        usedExports: true
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties',]
                },
            }
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
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    output: {
        filename: 'sin-gole.js',
        path: path.resolve(__dirname, 'dist'),
    },
};