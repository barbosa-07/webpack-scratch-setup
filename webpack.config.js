const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const presetConfig = require("./build-utils/loadPresets");

const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode = "production", presets = [] }) => {
  console.log(presets, mode);
  return merge(
    {
      mode: mode,
      module: {
        rules: [
          {
            test: /.jpe?g$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
