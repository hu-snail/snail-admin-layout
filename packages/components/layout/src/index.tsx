import props from "./props";
import Renderer from "../../renderer";
import { isFunction } from "../../helper";
import { SnailLayoutProps, MenuProps } from "../../../types";
import { defineComponent, toRefs, unref } from "vue";
import {
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu
} from "element-plus";
const { Header, Aside, Main, Footer } = ElContainer;
import { DefaultLayout } from "../components";

export default defineComponent({
  name: "SnailLayout",
  props,
  setup(props, { slots, attrs }) {
    const { data, type } = toRefs(props) as unknown as SnailLayoutProps;

    const { mode } = toRefs(props) as unknown as MenuProps;
    const logoSlot = {
      logo: () => slots?.logo && slots.logo({ props, attrs })
    };

    const layoutSlot = slots?.logo ? logoSlot : null;
    // console.log('---props----', data, type, unref(type), props)
    // console.log('---slots---', slots)
    // console.log('---attrs---', attrs)

    const renderComponent = () => {
      return {
        default: <DefaultLayout {...props}></DefaultLayout>
      }[unref(type)];
    };

    const componentType = unref(type);
    return () => renderComponent();
  }
});
