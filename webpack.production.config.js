let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
// let ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')
let CleanWebpackPlugin = require('clean-webpack-plugin')
// 确定性的(Deterministic)哈希值
let ManifestPlugin = require('webpack-manifest-plugin')
let ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
let WebpackChunkHash = require('webpack-chunk-hash')

/* globals __dirname */
module.exports = {
    entry: {
        main: path.join(__dirname, '/app/main.js'),
        vendor: 'moment'
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', {modules: false}]],
                            plugins: [  // babel dynamic import() and async
                                'syntax-dynamic-import',
                                'transform-async-to-generator',
                                'transform-regenerator',
                                'transform-runtime'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: [
                    /node_modules/,
                    /common.css/
                ],
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
            },
            {
                test: /\.css$/,
                include: [
                    /common.css/
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false
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
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.CommonsChunkPlugin({ // common js
            name: ['vendor', 'manifest'], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        // new webpack.optimize.AggressiveSplittingPlugin({
        //     minSize: 5000,
        //     maxSize: 10000
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/app/index.tmpl.html')
        }),
        // new ScriptExtHtmlWebpackPlugin({  // 内联 Manifest
        //     inline: ['vendor', 'manifest']
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name]-[hash].css'),
        new CleanWebpackPlugin(['build']), // clean build dic
        // new ManifestPlugin(), // sourcemap
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest',
            inlineManifest: true
        }),
    ],
    recordsOutputPath: path.join(__dirname, 'js', 'records.json')
}
