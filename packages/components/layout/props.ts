import {
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu
} from "element-plus";

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
  headerHeight: {
    type: String,
    default: ElHeader.props.height
  },
  footerHeight: {
    type: String,
    default: ElFooter.props.height
  },
  asideWidth: {
    type: String,
    default: ElAside.props.width
  },
  ...ElMenu.props,
  ...ElSubMenu.props,
  ...ElMenuItem.props,
  ...ElMenuItemGroup.props,
  ...ElHeader.props
};
