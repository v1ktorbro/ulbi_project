import path from "path";
import { Configuration } from "webpack";

import type { BuildPaths } from "./config/build/types/config";

import buildWebpackConfig from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
