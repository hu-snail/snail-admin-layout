import type { CSSProperties } from "vue";

/**
 * @description 菜单相关配置
 * @see {@link https://element-plus.org/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7}
 */
export type MenuProps = {
  /** 菜单展示模式 horizontal / vertical */
  mode: string;
  /** 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） */
  collapse?: boolean;
  /** 是否省略多余的子项（仅在横向模式生效） */
  ellipsis?: boolean;
  /** 菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color） */
  backgroundColor?: string;
  /** 文字颜色（十六进制格式）（已被废弃，使用--text-color） */
  textColor?: string;
  /** 活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color） */
  activeTextColor?: string;
  /** 页面加载时默认激活菜单的 index */
  defaultActive?: string;
  /** 默认打开的 sub-menu 的 index 的数组 */
  defaultOpeneds?: Array<number>;
  /** 是否只保持一个子菜单的展开 */
  uniqueOpened?: boolean;
  /** 子菜单打开的触发方式，只在 mode 为 horizontal 时有效。	hover / click */
  menuTrigger?: string;
  /** 是否启用 vue-router 模式 */
  router?: boolean;
  /** 是否开启折叠动画 */
  collapseTransition?: boolean;
  /** Tooltip 主题，内置了 dark / light 两种主题 */
  popperEffect?: string;
  /** 自定义分页样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  class?: string;
};
