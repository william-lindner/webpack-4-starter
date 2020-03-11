const path = require('path');

// --
// plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');

console.log(process.env.NODE_ENV);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const dev = ['development', 'staging'];
const mode = dev.includes(process.env.NODE_ENV) ? 'development' : 'production';

// --
// exports
module.exports = {
    mode,
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
        ]
    },
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].bundle.js',
        publicPath: "/dist",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};