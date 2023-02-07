import * as fs from "fs-extra";
import * as path from "path";
import { getConfig } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig, LibraryOptions } from "vite";

function wordToLowerCase(word: string): string {
  let s = ''
  for(let i = 0; i<word.length; i++) {
    let item = word[i]
    let lower =  item.toLowerCase() // 小写
    let upper = item.toUpperCase() // 大写
    if (i === 0) {
      s += lower;
      continue;
    } else if (item === upper) {
      s += `-${lower}`
      continue;
    } else {
      s += lower;
    }
  }
  return s
}
const buildAll = async () => {
  const config: UserConfig = getConfig()

  // 全量打包
  console.log('开始打全量包')
  await build();
  console.log('结束打全量包')

  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = `${packageJson.name}.umd.js`;
  packageJson.module = `${packageJson.name}.mjs`;
  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  const srcDir = path.resolve(__dirname, "../packages/components/");
  const buildList = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  }).map((name) => {
    const config: UserConfig = getConfig();
    const outDir = path.resolve(config.build.outDir, wordToLowerCase(name));
    const fileName = 'index';
    const lib: LibraryOptions = {
      entry: path.resolve(srcDir, name),
      name, // 导出模块名
      fileName, // 文件名
      formats: ['es', 'umd'],
    }

    config.build.lib = lib;
    config.build.outDir = outDir;

    const inlineConfig: InlineConfig = {
      ...config,
      configFile: false,
    }

    return {
      buildBundle: () => build(defineConfig(inlineConfig) as InlineConfig),
      buildPackageJson: () => fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
  "name": "${packageJson.name}/${wordToLowerCase(name)}",
  "main": "${fileName}.umd.js",
  "module": "${fileName}.mjs"
}`, 'utf-8')
    }
  });

  const buildBundleList = buildList.map(item => item.buildBundle())

  console.log('开始打独立组件包')
  await Promise.all(buildBundleList);
  console.log('结束打独立组件包')

  console.log('开始生成独立组件包的package.json')
  const buildPackageJsonList = buildList.map(item => item.buildPackageJson())
  await Promise.all(buildPackageJsonList);
  console.log('结束生成独立组件包的package.json')
};

buildAll();
