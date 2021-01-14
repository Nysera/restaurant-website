// require modules
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = merge(common, {
    mode: "production",
    output: {
        // ADD HASH IN FILENAME
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: { 
        rules: [
            // CSS/SCSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            // babel
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin()
    ],
});