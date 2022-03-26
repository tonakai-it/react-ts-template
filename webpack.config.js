/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MODE = 'development'
// const enabledSourceMap = MODE === 'development'

module.exports = {
    mode: MODE, // or production
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
      },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [
          '.ts', '.js', '.tsx', '.jsx', 'json'
        ],
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },

    devServer: {
        static: {
          directory: path.resolve(__dirname, './src'),
        },
        port: 9000,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
}