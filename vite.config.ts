import * as path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { terser } from "rollup-plugin-terser";
import { defineConfig, type UserConfig } from "vite";

const lifecycle = process.env.npm_lifecycle_event;

function getConfigs(): UserConfig {
  return lifecycle === "lib"
    ? {
        publicDir: false,
        build: {
          lib: {
            entry: path.resolve(__dirname, "packages/components/index.ts"),
            name: "@snailadmin/layout",
            fileName: format => `index.${format}.js`
          },
          // https://rollupjs.org/guide/en/#big-list-of-options
          rollupOptions: {
            treeshake: true,
            external: ["vue", "element-plus"],
            output: {
              globals: {
                vue: "vue",
                "element-plus": "elementPlus"
              },
              exports: "named"
            },
            plugins: [terser({ compress: { drop_console: true } })]
          }
        }
      }
    : {
        base: "/snail-admin-layout/",
        build: {
          sourcemap: false,
          chunkSizeWarningLimit: 4000
        }
      };
}

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        IconsResolver({
          alias: {
            park: 'icon-park-outline',
          },
        }
        ),
      ]
    }),
    Icons({ autoInstall: true })],
  server: {
    host: "0.0.0.0"
  },
  ...getConfigs()
});