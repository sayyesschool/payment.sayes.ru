const path = require('path');
const sass = require('sass');
const TerserPlugin = require('terser-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer')();

module.exports = (env, argv) => ({
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', {
                                runtime: 'automatic'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    CssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass,
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: [
                                    path.resolve('node_modules')
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },

    devtool: (env === 'development') ? 'eval-source-map' : undefined,

    plugins: [
        // new webpack.DefinePlugin({
        //     'APP_ENV': JSON.stringify(env),
        //     'APP_URL': JSON.stringify(APP_URL),
        //     'YANDEX_METRIKA_ID': JSON.stringify(YANDEX_METRIKA_ID),
        //     'GOOGLE_ANALYTICS_ID': JSON.stringify(GOOGLE_ANALYTICS_ID)
        // }),
        new CssExtractPlugin({
            filename: '[name].css'
        })
    ],

    optimization: {
        minimize: true,

        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false
            }),
            new CssMinimizerPlugin()
        ],

        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all'
        //         }
        //     }
        // }
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
});