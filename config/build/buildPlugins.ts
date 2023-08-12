import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import type { BuildOptions } from "./types/config";

const buildPlugins = ({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};

export default buildPlugins;
