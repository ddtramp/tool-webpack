let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let OpenBrowserPlugin = require('open-browser-webpack-plugin')
let path = require('path')
let testEnv = require('./config/test.env')

/* globals __dirname */
module.exports = {
    devtool: 'cheap-eval-source-map', // source map 调试

    entry: path.join(__dirname, '/app/main.js'),
    output: {
        path: path.join(__dirname, '/public'), // eslint-disable-line
        filename: 'bundle.js'
    },

    module: {// 在配置文件里添加JSON loader
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                enforce: 'pre',
                use: [
                    { loader: 'eslint-loader' } // preload eslint-loader
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' } // 在webpack的module部分的loaders里进行配置即可
                ]

            },
            {
                test: /\.css$/,
                exclude: [
                    /node_modules/,
                    /common.css/
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
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
            },
            { // customer handle css file
                test: /\.css$/,
                include: [
                    /common.css/
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }

                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('Copyright jackwang'), // 在这个数组中new一个就可以了
        new HtmlWebpackPlugin({ // eslint-disable-next-line
            template: path.join(__dirname, '/app/index.tmpl.html') // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new OpenBrowserPlugin({ url: 'http://localhost:' + testEnv.port })
    ],

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true
    }
}
