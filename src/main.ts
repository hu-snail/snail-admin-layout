
import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'animate.css';
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import SnailAdmin  from '../dist/snail-admin.mjs'
import '../dist/tabs/style.css'
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(ElementPlus).use(SnailAdmin);
app.mount("#app");