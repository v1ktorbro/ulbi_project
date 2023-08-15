import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { RuleSetRule } from "webpack";
import type { BuildOptions } from "./types/config";

const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // create .module.sass to .d.ts
      "@teamsupercell/typings-for-css-modules-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:4]"
              : "[hash:base64:8]",
          },
        },
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true,
          debug: true,
          silent: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  };

  const typescriptLoader = {
    test: /\.(ts|js)x?$/,
    use: [{ loader: "babel-loader" }],
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
};

export default buildLoaders;
