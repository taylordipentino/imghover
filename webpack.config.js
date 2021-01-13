const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/imghover.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'imghover.min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
