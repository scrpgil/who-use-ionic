import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [sass()],
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.scss",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      prerenderConfig: "./prerender.config.ts",
      baseUrl: "https://capacitorjs.com/"
    }
  ]
};
