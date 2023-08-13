import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/config";

const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
  return {
    port: port,
    open: true,
  };
};

export default buildDevServer;
