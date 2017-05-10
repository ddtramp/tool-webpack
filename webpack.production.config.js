let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')
/* globals __dirname */
module.exports = {
    entry: path.join(__dirname, '/app/main.js'), // eslint-disable-line
    output: {
        path: path.join(__dirname, '/build'), // eslint-disable-line
        filename: '[name]-[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' } // 在webpack的module部分的loaders里进行配置即可
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }

                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/app/index.tmpl.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name]-[hash].css')
    ]
}
