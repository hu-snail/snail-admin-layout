import SnailLayout from "./layout";
import SnTabs from "./tabs";

import { App } from "vue";
const components = [SnailLayout, SnTabs];

export {
  SnailLayout,
  SnTabs
}

const install = (app: App) => {
  components.forEach(component => {
    app.use(component.install);
  });
};
export default { install, SnailLayout, SnTabs };
