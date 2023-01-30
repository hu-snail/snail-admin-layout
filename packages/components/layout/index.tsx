import props from "./props";
import Renderer from "../renderer";
import { isFunction } from "../helper";
import { SnailLayoutProps } from "../../types";
import { defineComponent, toRefs, unref } from "vue";
import { ElContainer, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from "element-plus";
const { Header, Aside, Main, Footer } = ElContainer
export default defineComponent({
  name: "SnailLayout",
  props,
  setup(props, { slots, attrs }) {
    const { data, type } = toRefs(
      props
    ) as unknown as SnailLayoutProps;

    const logoSlot = {
      logo: () => slots?.logo && slots.logo({ props, attrs })
    };

    const layoutSlot =
      slots?.logo 
        ? logoSlot
        : null;

    return () => (
        <ElContainer>
            <Header {...props}>
                头部
            </Header>
        </ElContainer>
    );
  }
});