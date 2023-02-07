// export type { SnailLayoutProps } from "../../types";

import type { App } from "vue";
import Tabs from "./src";

export const SnTabs = Object.assign(Tabs, {
  install: function (app: App) {
    app.component(Tabs.name, Tabs);
  }
});

export default SnTabs;
