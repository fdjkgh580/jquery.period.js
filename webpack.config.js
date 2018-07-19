const webpack = require('webpack'); 
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 監聽
    watch: true,
 
    // development (開發模式未壓縮) | production (產品模式可壓縮)
    mode: 'production',
    
    // 進入點，每個頁面使用一個 JS 檔
    entry: {
        'jquery.period': './src/jquery.period.js'
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].min.js'
    },


    devtool: 'source-map', 
    
    plugins: [
        // 需要時再啟用
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};