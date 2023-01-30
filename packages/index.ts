export type {
    SnailLayoutProps
  } from "./types";
  
  import type { App } from "vue";
  import Descriptions from "./components/layout";
  
  export const SnailLayout = Object.assign(Descriptions, {
    install: function (app: App) {
      app.component(Descriptions.name, Descriptions);
    }
  });
  
  export default SnailLayout;