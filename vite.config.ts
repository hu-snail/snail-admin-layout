import * as path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { terser } from "rollup-plugin-terser";
import { defineConfig, type UserConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

// const lifecycle = process.env.npm_lifecycle_event;

export const getConfig = (): UserConfig => {
  const config: UserConfig = {
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
      Icons({ autoInstall: true }),
      visualizer({
        // 打包完成后自动打开浏览器，显示产物体积报告
        open: true,
      }),
    ],
    server: {
      host: '0.0.0.0'
    },
    build: {
      rollupOptions: {
        treeshake: true,
        external: ["vue", "element-plus"],
        output: {
          exports: "named",
          globals: {
            vue: "vue",
            "element-plus": "elementPlus"
          },
        },
       

      },
      minify: 'terser', // boolean | 'terser' | 'esbuild'
      terserOptions: {
        compress: {
          drop_console: true,
          pure_funcs: ['console.error', 'console.warn']
        }
      },
      sourcemap: false, // 输出单独 sourcemap文件
      lib: {
        entry: path.resolve(__dirname, "packages/components/index.ts"),
        name: "@snailadmin/ui",
        fileName: "snail-admin",
        formats: ["es", "umd"], // 导出模块类型
      },
      outDir: "./dist",
    }
  };
  return config;
};
export default defineConfig(getConfig());

