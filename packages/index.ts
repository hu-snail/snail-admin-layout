export type { SnailLayoutProps } from "./types";

import type { App } from "vue";
import Layout from "./components/layout";

export const SnailLayout = Object.assign(Layout, {
  install: function (app: App) {
    app.component(Layout.name, Layout);
  }
});

export default SnailLayout;
