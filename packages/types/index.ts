import type {
    MenuItemRegistered,
    MenuItemClicked,
    MenuProvider,
    SubMenuProvider
  } from "element-plus/es/components/menu/src/types";
  /**
   * @description 
   * @param {string} LayoutType 布局类型
   * default 默认模式（侧边栏模式） 
   * asideSimplify 侧边栏精简模式 
   * topSimplify 顶部简化模式 
   * aside 侧边模式（不含导航）
   * top 顶部模式
   * twiceAside 侧边栏双模式
   */
  export type LayoutType = "default" | "asideSimplify" | "topSimplify" | "aside" | "twiceAside";

  export interface MenuProps extends MenuProvider {
    prop?: string;
    slot?: Readonly<{
      [name: string]: import("vue").Slot | undefined;
    }>;
  }
 
  export interface SnailLayoutProps  {
    data: Array<any>;
    type?: LayoutType;
    menu: Array<MenuProps>
  }