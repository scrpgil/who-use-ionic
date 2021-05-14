import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  filterUrl(url) {
    if (url.pathname.startsWith("/docs")) {
      return false;
    }
    return true;
  },
  afterHydrate(document) {
    document.getElementsByTagName("html")[0].classList.remove("hydrated");
  },
  hydrateOptions() {
    return {
      hashAssets: undefined
    };
  }
};
