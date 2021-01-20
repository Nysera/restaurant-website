// require modules
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist',
        host: "192.168.1.5",
        port: "8080",
        hot: true,
    },
});