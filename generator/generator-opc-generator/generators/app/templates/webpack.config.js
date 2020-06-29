const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
            },
        {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    output: {
        filename: '<%= elementName %>.js',
        path: path.resolve(__dirname, 'dist'),
    },
};