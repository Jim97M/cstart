const path = require('path');
const miniCssExtraPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
      },
      devServer: {
        port: 3010,
        liveReload: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.css$/,
            use: [
                miniCssExtraPlugin.loader,
                "css-loader",
                "postcss-loader",
            ],
        },
        //   {
        //     test: /\.svg$/,
        //     use: [
        //       {
        //         loader: 'svg-url-loader',
        //         options: {
        //           limit: 10000,
        //         },
        //       },
        //     ],
        //   },
        ],
      },
      plugins: [
        new miniCssExtraPlugin(),
         new HtmlWebpackPlugin({template: './src/index.html'})
      ],
      
}
