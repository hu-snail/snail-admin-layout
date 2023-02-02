import type {
  MenuItemRegistered,
  MenuItemClicked,
  MenuProvider,
  SubMenuProvider
} from "element-plus/es/components/menu/src/types";
import { MenuProps } from "./menu";
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
export type LayoutType =
  | "default"
  | "asideSimplify"
  | "topSimplify"
  | "aside"
  | "twiceAside";

export interface SnailLayoutProps extends MenuProvider {
  data: Array<any>;
  type: LayoutType;
  subMenu: SubMenuProvider;
  menuItem: MenuItemRegistered;
}

export type { MenuProps };

export type childrenType = {
  path?: string;
  noShowingChildren?: boolean;
  children?: childrenType[];
  value: unknown;
  meta?: {
    icon?: string;
    title?: string;
    showParent?: boolean;
    extraIcon?: {
      svg?: boolean;
      name?: string;
    };
  };
  showTooltip?: boolean;
  parentId?: number;
  pathList?: number[];
};

export type routeMetaType = {
  title?: string;
  icon?: string;
  showLink?: boolean;
  savedPosition?: boolean;
  auths?: Array<string>;
};

export type RouteConfigs = {
  path?: string;
  parentPath?: string;
  query?: object;
  params?: object;
  meta?: routeMetaType;
  children?: RouteConfigs[];
  name?: string;
};

export interface MenuItemProps {
  item: object;
}
