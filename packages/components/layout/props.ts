import { ElHeader, ElAside, ElMain, ElFooter, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from "element-plus";

export default {
  /** menu data */
  data: {
    type: Array,
    default: []
  },

  /** layout type "default" | "asideSimplify" | "topSimplify" | "aside" | "twiceAside" */
  type: {
    type: String,
    default: "default"
  },

  /** menu props */
  menu: {
    type: Object,
    default: ElMenu.props,
  },

  /** subMenu props */
  subMenu: {
    type: Object,
    default: ElSubMenu.props
  },

  /** menuItem props */
  menuItem: {
    type: Object,
    default: ElMenuItem.props,
  },

  /** menuItemGroup props */
  menuItemGroup: {
    type: Object,
    default: ElMenuItemGroup.props
  },

  /** header props */
  header: {
    type: Object,
    default: ElHeader.props,
  },

  /** aside props */
  aside: {
    type: Object,
    default: ElAside.props,
  },

  /** footer props */
  footer: {
    type: Object,
    default: ElFooter.props,
  },
};