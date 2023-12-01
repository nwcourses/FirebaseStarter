const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devServer: {
        static: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    }
};
