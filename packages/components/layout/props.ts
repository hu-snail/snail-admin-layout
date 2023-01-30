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

  menu: {
    type: Array,
    default: []
  },

  ...ElHeader.props,
  ...ElAside.props,
  ...ElMain.props,
  ...ElFooter.props,
  ...ElMenu.props,
  ...ElMenuItem.props,
  ...ElMenuItemGroup.props,
  ...ElSubMenu.props
};