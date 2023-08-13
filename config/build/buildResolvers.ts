import type { ResolveOptions } from "webpack";

const buildResolvers = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};

export default buildResolvers;
