const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    aforismos: "./aforismos/aforismos.js",
    beso: "./beso/beso.js",
    confesion: "./confesion/confesion.js",
    despedida: "./despedida/despedida.js",
    fiesta: "./fiesta/fiesta.js",
    fin: "./fin/fin.js",
    incomodidad: "./incomodidad/incomodidad.js",
    irse: "./irse/irse.js",
    meditar: "./meditar/meditar.js",
    o1: "./o1/o1.js",
    postBeso: "./postBeso/postBeso.js",
    seConocen: "./seConocen/se-conocen.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle_sin_babel"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./aforismos/aforismos.html",
      filename: "aforismos.html",
      chunks: ["aforismos"],
    }),
    new HtmlWebpackPlugin({
      template: "./beso/beso.html",
      filename: "beso.html",
      chunks: ["beso"],
    }),
    new HtmlWebpackPlugin({
      template: "./confesion/confesion.html",
      filename: "confesion.html",
      chunks: ["confesion"],
    }),
    new HtmlWebpackPlugin({
      template: "./despedida/despedida.html",
      filename: "despedida.html",
      chunks: ["despedida"],
    }),
    new HtmlWebpackPlugin({
      template: "./fiesta/fiesta.html",
      filename: "fiesta.html",
      chunks: ["fiesta"],
    }),
    new HtmlWebpackPlugin({
      template: "./fin/fin.html",
      filename: "fin.html",
      chunks: ["fin"],
    }),
    new HtmlWebpackPlugin({
      template: "./incomodidad/incomodidad.html",
      filename: "incomodidad.html",
      chunks: ["incomodidad"],
    }),
    new HtmlWebpackPlugin({
      template: "./irse/irse.html",
      filename: "irse.html",
      chunks: ["irse"],
    }),
    new HtmlWebpackPlugin({
      template: "./meditar/meditar.html",
      filename: "meditar.html",
      chunks: ["meditar"],
    }),
    new HtmlWebpackPlugin({
      template: "./o1/o1.html",
      filename: "o1.html",
      chunks: ["o1"],
    }),
    new HtmlWebpackPlugin({
      template: "./postBeso/postBeso.html",
      filename: "postBeso.html",
      chunks: ["postBeso"],
    }),
    new HtmlWebpackPlugin({
      template: "./seConocen/se-conocen.html",
      filename: "se-conocen.html",
      chunks: ["seConocen"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //       plugins: ["@babel/plugin-transform-runtime"],
      //     },
      //   },
      // },
    ],
  },
};
