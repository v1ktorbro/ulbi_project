import type { RuleSetRule } from "webpack";

const buildLoaders = (): RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // create .module.sass to .d.ts
      "@teamsupercell/typings-for-css-modules-loader",
      {
        // Translates CSS into CommonJS
        loader: "css-loader",
        options: { modules: true },
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true,
          debug: true,
          silent: true,
        },
      },
      // Compiles Sass to CSS
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
    // use: "ts-loader",
    exclude: /node_modules/,

    use: [{ loader: "babel-loader" }],
  };

  return [typescriptLoader, cssLoader];
};

export default buildLoaders;
