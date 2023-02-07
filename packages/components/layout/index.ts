export type { SnailLayoutProps } from "../../types";

import type { App } from "vue";
import Layout from "./src";

export const SnailLayout = Object.assign(Layout, {
  install: function (app: App) {
    app.component(Layout.name, Layout);
  }
});

export default SnailLayout;
