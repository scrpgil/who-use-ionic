import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  filterUrl(url) {
    if (url.pathname.startsWith("/docs")) {
      return false;
    }
    return true;
  }
};
