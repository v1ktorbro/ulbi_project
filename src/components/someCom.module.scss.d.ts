declare namespace SomeComModuleScssNamespace {
  export interface ISomeComModuleScss {
    root: string;
  }
}

declare const SomeComModuleScssModule: SomeComModuleScssNamespace.ISomeComModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SomeComModuleScssNamespace.ISomeComModuleScss;
};

export = SomeComModuleScssModule;
