import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  filterUrl(url) {
    if (url.pathname.startsWith("/docs") || url.pathname.startsWith("/case")) {
      return false;
    }
    return true;
  }
};
