import { openBlock, createElementBlock, createElementVNode, defineComponent, ref, reactive, watch, nextTick, onMounted, resolveComponent, Fragment, renderList, normalizeClass, withModifiers, toDisplayString, createVNode, withCtx, unref, createTextVNode, pushScopeId, popScopeId, createBlock, resolveDynamicComponent, createCommentVNode, renderSlot, toRefs } from "vue";
import { ElHeader, ElFooter, ElAside, ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup } from "element-plus";
const props = {
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
const _hoisted_1$d = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "4",
  d: "m14 14l20 20m-20 0l20-20"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$d);
}
const __unplugin_components_0$1 = { name: "icon-park-outline-close-small", render: render$8 };
const _hoisted_1$c = { class: "tabbar-container" };
const _hoisted_2$c = { class: "tabs" };
const _hoisted_3$c = ["id", "onClick"];
const _hoisted_4$2 = { class: "tab-title" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const tabsRef = ref();
    const tabList = ref([
      {
        path: 1,
        title: "权限管理"
      },
      {
        path: 2,
        title: "电影管理"
      },
      {
        path: 3,
        title: "成员管理"
      },
      {
        path: 4,
        title: "学生管理"
      },
      {
        path: 5,
        title: "材料管理"
      },
      {
        path: 6,
        title: "教师管理"
      },
      {
        path: 7,
        title: "设备管理"
      },
      {
        path: 8,
        title: "信息管理"
      },
      {
        path: 9,
        title: "教师管理"
      },
      {
        path: 10,
        title: "设备管理"
      },
      {
        path: 11,
        title: "信息管理"
      },
      {
        path: 12,
        title: "信息管理"
      }
    ]);
    const tabOption = reactive({
      width: 0,
      moveX: 0,
      count: 1,
      unoccupied: 0,
      tabsCount: 0,
      differ: 0,
      activeTab: 1
    });
    watch(
      () => tabOption.activeTab,
      (val) => {
        let len = tabList.value.length;
        for (let i = 0; i < len; i++) {
          if (tabList.value[i].path === val) {
            nextTick(() => {
              translateX((i + 1 - tabOption.tabsCount) * tabOption.width);
            });
            return;
          }
        }
        nextTick(() => {
          translateX(
            (tabList.value.length - tabOption.tabsCount) * tabOption.width - tabOption.unoccupied
          );
        });
      }
    );
    onMounted(() => {
      nextTick(() => initTabBar());
    });
    const initTabBar = () => {
      let tabs = tabsRef.value;
      let getStyle = getComputedStyle(tabs.children[0].children[0], null);
      let marginLeft = parseFloat(
        getStyle.marginLeft.substr(0, getStyle.marginLeft.length - 2)
      );
      let marginRight = parseFloat(
        getStyle.marginRight.substr(0, getStyle.marginRight.length - 2)
      );
      tabOption.width = marginLeft + marginRight + tabs.children[0].children[0].offsetWidth;
      tabOption.unoccupied = tabs.offsetWidth % tabOption.width;
      tabOption.differ = tabOption.width - tabOption.unoccupied;
      tabOption.unoccupied = tabOption.differ < 10 ? tabOption.width : tabOption.unoccupied;
      tabOption.tabsCount = parseInt(tabs.offsetWidth) / tabOption.width;
    };
    const clickTab = (path) => {
      if (tabOption.activeTab !== path)
        tabOption.activeTab = path;
    };
    const translateX = (x) => {
      tabOption.moveX = x < 0 ? 0 : x;
      tabsRef.value.children[0].style.transform = `translateX(-${tabOption.moveX}px)`;
    };
    const closeTab = (path, index) => {
      const itemDom = document.getElementById(`item_${path}`);
      itemDom.className += " animate__slideOutDown";
      setTimeout(() => {
        let len = tabList.value.length;
        if (len > 1) {
          tabList.value.splice(index, 1);
          nextTick(() => {
            if (index === 0 && path === tabOption.activeTab) {
              clickTab(tabList.value[0].path);
            } else if (path === tabOption.activeTab) {
              clickTab(tabList.value[index - 1].path);
            }
            previous();
          });
        }
      }, 400);
    };
    const previous = () => {
      if (tabOption.moveX > 0) {
        tabOption.moveX -= tabOption.width;
        translateX(tabOption.moveX);
      }
    };
    return (_ctx, _cache) => {
      const _component_i_park_close_small = __unplugin_components_0$1;
      const _component_el_icon = resolveComponent("el-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createElementVNode("div", {
          class: "tab-wrapper",
          ref_key: "tabsRef",
          ref: tabsRef
        }, [
          createElementVNode("div", _hoisted_2$c, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabList.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["tab-item animate__animated", { active: item.path === 1 }]),
                id: "item_" + item.path,
                key: item.path,
                onClick: withModifiers(($event) => clickTab(item.path), ["stop"])
              }, [
                createElementVNode("span", _hoisted_4$2, toDisplayString(item.title), 1),
                createVNode(_component_el_icon, {
                  class: "icon-close",
                  onClick: withModifiers(($event) => closeTab(item.path, index), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_i_park_close_small, {
                      theme: "outline",
                      size: "24",
                      fill: "#333"
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ], 10, _hoisted_3$c);
            }), 128))
          ])
        ], 512)
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_796495b3_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-796495b3"]]);
const _hoisted_1$b = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "4",
  d: "M36 18L24 30L12 18"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b);
}
const __unplugin_components_7 = { name: "icon-park-outline-down", render: render$7 };
const _hoisted_1$a = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linejoin": "round",
  "stroke-width": "4"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z" })
], -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
const __unplugin_components_6 = { name: "icon-park-outline-setting-two", render: render$6 };
const _hoisted_1$9 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createElementVNode("path", {
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "4",
    d: "M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
  })
], -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
const __unplugin_components_5 = { name: "icon-park-outline-sun-one", render: render$5 };
const _hoisted_1$8 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "4",
  d: "M42 8v16M6 24v16m36-16c0-9.941-8.059-18-18-18a17.947 17.947 0 0 0-12.952 5.5M6 24c0 9.941 8.059 18 18 18a17.94 17.94 0 0 0 12.5-5.048"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const __unplugin_components_4 = { name: "icon-park-outline-refresh", render: render$4 };
const _hoisted_1$7 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "4",
  d: "M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const __unplugin_components_3 = { name: "icon-park-outline-full-screen", render: render$3 };
const _hoisted_1$6 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "4"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M28.286 37h11.428M42 42l-2.286-5L42 42Zm-16 0l2.286-5L26 42Zm2.286-5L34 24l5.714 13H28.286ZM16 6l1 3M6 11h22m-18 5s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32" })
], -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const __unplugin_components_2 = { name: "icon-park-outline-translate", render: render$2 };
const _hoisted_1$5 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M24 4c-7.732 0-14 6.268-14 14v20h28V18c0-7.732-6.268-14-14-14Z" }),
  /* @__PURE__ */ createElementVNode("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "4",
    d: "M10 38V18c0-7.732 6.268-14 14-14s14 6.268 14 14v20M4 38h40m-20 6a5 5 0 0 0 5-5v-1H19v1a5 5 0 0 0 5 5Z"
  })
], -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const __unplugin_components_1 = { name: "icon-park-outline-remind", render: render$1 };
const _hoisted_1$4 = {
  viewBox: "0 0 48 48",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linejoin": "round",
  "stroke-width": "4"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" }),
  /* @__PURE__ */ createElementVNode("path", {
    "stroke-linecap": "round",
    d: "M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
  })
], -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const __unplugin_components_0 = { name: "icon-park-outline-search", render };
/*! Element Plus Icons Vue v2.0.10 */
var export_helper_default = (sfc, props2) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props2)
    target[key] = val;
  return target;
};
var d_arrow_left_vue_vue_type_script_lang_default = {
  name: "DArrowLeft"
};
var _hoisted_172 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_272 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), _hoisted_371 = [
  _hoisted_272
];
function _sfc_render72(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_172, _hoisted_371);
}
var d_arrow_left_default = /* @__PURE__ */ export_helper_default(d_arrow_left_vue_vue_type_script_lang_default, [["render", _sfc_render72], ["__file", "d-arrow-left.vue"]]);
const _hoisted_1$3 = { class: "navbar-container" };
const _hoisted_2$3 = { class: "left-wrapper" };
const _hoisted_3$3 = { class: "collapse" };
const _hoisted_4$1 = { class: "breadcrumb-wrapper" };
const _hoisted_5 = { class: "right-tool" };
const _hoisted_6 = { class: "tool-btns" };
const _hoisted_7 = { class: "icon-item" };
const _hoisted_8 = { class: "icon-item" };
const _hoisted_9 = { class: "icon-item" };
const _hoisted_10 = { class: "icon-item" };
const _hoisted_11 = { class: "icon-item" };
const _hoisted_12 = { class: "icon-item" };
const _hoisted_13 = { class: "icon-item" };
const _hoisted_14 = { class: "user-container" };
const _hoisted_15 = { class: "el-dropdown-link" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
      const _component_el_breadcrumb = resolveComponent("el-breadcrumb");
      const _component_i_park_search = __unplugin_components_0;
      const _component_i_park_remind = __unplugin_components_1;
      const _component_i_park_translate = __unplugin_components_2;
      const _component_i_park_full_screen = __unplugin_components_3;
      const _component_i_park_refresh = __unplugin_components_4;
      const _component_i_park_sun_one = __unplugin_components_5;
      const _component_i_park_setting_two = __unplugin_components_6;
      const _component_i_park_down = __unplugin_components_7;
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$3, [
          createElementVNode("div", _hoisted_3$3, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(unref(d_arrow_left_default))
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", _hoisted_4$1, [
            createVNode(_component_el_breadcrumb, null, {
              default: withCtx(() => [
                createVNode(_component_el_breadcrumb_item, { to: { path: "" } }, {
                  default: withCtx(() => [
                    createTextVNode("首页")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_breadcrumb_item, null, {
                  default: withCtx(() => [
                    createTextVNode("权限管理")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_breadcrumb_item, null, {
                  default: withCtx(() => [
                    createTextVNode("菜单权限")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createElementVNode("div", _hoisted_5, [
          createElementVNode("div", _hoisted_6, [
            createElementVNode("span", _hoisted_7, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_search)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_8, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_remind)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_9, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_translate)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_10, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_full_screen)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_11, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_refresh)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_12, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_sun_one)
                ]),
                _: 1
              })
            ]),
            createElementVNode("span", _hoisted_13, [
              createVNode(_component_el_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createVNode(_component_i_park_setting_two)
                ]),
                _: 1
              })
            ])
          ]),
          createElementVNode("div", _hoisted_14, [
            createVNode(_component_el_dropdown, { "hide-on-click": false }, {
              dropdown: withCtx(() => [
                createVNode(_component_el_dropdown_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode("个人信息")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, null, {
                      default: withCtx(() => [
                        createTextVNode("github")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { divided: "" }, {
                      default: withCtx(() => [
                        createTextVNode("退出登录")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createElementVNode("span", _hoisted_15, [
                  createTextVNode(" admin "),
                  createVNode(_component_el_icon, { class: "el-icon--right" }, {
                    default: withCtx(() => [
                      createVNode(_component_i_park_down)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_09ffcd97_lang = "";
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-09ffcd97"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmcAAAFuCAYAAADEVb9EAAAACXBIWXMAAAsSAAALEgHS3X78AAAAAXNSR0IArs4c6QAAIABJREFUeF7svXuMZNd931k90z0znBmS8yJpDWlGtlYjyxFt2bsGnKxEUZSsEJEUwyZFM0iwSGJv4MDxAiGM/YcysNg118g6cIB1vHEMZ/0QsOuEVAREFsDIEk1T8gM2sJZN2olo0VKoESUNOTMkh/Po6Uctfrf7V/z1r3/Pc+6trq4+BQymuu6555x77qM+9f29Fkbt1VagrUBbgbYCbQXaCrQVaCswMyuwMDMzaRNpK9BWoK1AW4G2Am0F2gq0FRg1OGsXQVuBtgJtBdoKtBVoK9BWYIZWoMHZDJ2MNpW2Am0F2gq0FWgr0FagrUCDs3YNtBVoK9BWoK1AW4G2Am0FZmgFGpzN0MloU2kr0FagrUBbgbYCbQXaCjQ4a9dAW4G2Am0F2gq0FWgr0FZghlagwdkMnYw2lbYCbQXaCrQVaCvQVqCtQIOzdg3suRX4+Z//9yc+e3rx9LV9S99xaH3lv9D/1/YtvZMvyP71lS/AZ9D2Uw/98LN7bsHaAbcV2IEV+OBv/od30HsTpiDdn97Ujqxe+U3azwfPXn3y4YcfvODt17a3FdjJFWhwtpOr38bufQXggQ6dXl48/BD8/9+c+Mp/j4NcGx25B94fHF0Wxz2wcL37fGV84Cn4/0sX3vx7/89Tz37uf3zXt3/tfS+uvtge6L2frtbhHlyB9/37Tz4AP3TwHr144eh3fPvvv3jTlz50+q/d9gcXz6wcO7RlVZZeuTaCz+D/2hf2g/+/9LbjH4ex/+pvnn7t+InX/wv0jzD32Qc//HjteG3/tgKlK9DgrHTl2n47ugKgfn3qjhvuhV/SCGAIXxTAlkdHzHkCqC2MRk8BiMFDuSljO3pa2+BzsgKoesH9CfAFh3Xsm1fv54eH4NXHYdO+pH6t7Rr4AcSdeP7ib8P8Ln7opj+CZwS8b8+JPs5Y68NagQZn7fqY+RVAMyT80gYQoxCWnXyDseyKtfZtBewVACUMWrz8yvGHQIX6+nfd8gMHL69OZdlKIAyVOarIcUWN/o0HwgHuxvNXfxuADdwemsvDVE73nhqkwdmeOt2752DhgQ+/ug8cW333rfsu3l07c4Cyr7x8+0faQ7R2Jdv+e3kFUBEDEIN1uOH1lfspiC0fWZwsjwZo0Aa30feZdfWgjPbFIQy2RcHMUtSkbQhsTYXPnM3WVlqBBmftupiJFcCH/red+tpPnB+fuufIwtUt87o8vmHEP/MmDkD2/IU3P9oelN5Kte1tBeQVgPsSFGswTUpmSYQrhDIOavA3bSNtr117DmoRGMsCGlfWcM6eL1yDtdqzu3f3b3C2d8/9jh85PvjvOPHSIzAZADB4WWCGkGbBGkLZ33nhtZ9vTvw7fprbBHbRClBfsfF/3v8IV7YkGONKGBxuCZSVqmjW8mp+ZhHlDPothTJtTgBrr/3tG365Kfi76KbYoak2ONuhhd+rw0pABjBGwYy/R1iLqGdff/nYR1qU1V69utpxl6wA3pMUxqh5UuoT4YuCGL6H/zWoK5mftI+ljlFVDPfVYCyqoGlKGVXOuIrmqWrQ5+rfWGrKfl8XxZz10+Bszk7orB0O/SUO/mNHFq7d7cEYqmcUxrhixkGtQdmsnfk2n1leAfDpBL8x8BnjgMXnLYGYpIxx86VkzrQ+62O9IibOKJBpQQJUUaud8w3nroyu3nq46wZVtfbjsnZV52P/BmfzcR5n5ijwVzhEVb6wfsc+CmNZKIuYMM9euOXRpx6476PTXACaxJam8sA5jEejLp8afUG6Dvo3pO7AKK+WQ22aZ29vjoWpZwDIwHeMmyctIOPwloU12H8IkyWFLD5/K2AgYtK0VDBNLYsoZdGrD0Dt+n2LD7eUHdEVm792Dc7m75xO9YgojAGUQF4xNEt6E6mBtZMLLz/1nV84cf80fMr4MeJxYdLa6+MD5qFCO2yD+/AdaOLbFsDgXTlte3QFuELm7UfBi0OZBmmaf1kkEKAU2qIKGQU4yf9MAjXYR/I1y8BXpq11TkBZu/SDNzfTp3fhzuH2BmdzeFKHPCQKKksL1ycKEcDHhfGpoqE9SMPt6Hs2tAmTRo6iCoaABfAJAQf4f+aAsQ8N0CRg+/LLt/9iKzeTWeXWFq7fs6/d+r+gQhZZEQ5ldB/NhElhzTJzQrsIhHltMglrh4jYxDWpBTd+Pqhpk77HdvhZM3tGruT5adPgbH7O5SBHguYQSHFBYQwGQzUoo5ZZk5QgjX42pFpGj5ObJbHKgAZlpcCWgTVQ1hqoDXKJz0WncP3+xztvevj86OhHjrywcqaPg5KArQ+Tpqaolc65tDJArXmzdL7R/Tio4d9NTYuu4O5u1+Bsd5+/QWZPlSMEMs10x9Wyq+ODoxsWllPz0pQz7AS2D6WWwbG+6dZzv4AmWWniFMo4iGUUNG7e9Eyd2iICqH393K0/2fxRUpfZXDbOOPZHFsADslK1rE8gk1QxmFdp2gy6bwTYoH3E76xP0yYGDcDYFNIW9y90qTlaEEHk6t5dbRqc7a7zNdhs8Zc3OPJzcyUdlJr3qG8Zh7IspGmq2bn1408vvXz9J/oGEYQyqRQUwlj3RURMmBEw82CNAhr0T9UzgLWoybP7gmiQNtj9MMsdo2uBpJKtHNw/WlpeG+H/0ePQzJqWUhYFNclcOXSqDQm4cC1KAExax77gi/ctmTYplPH3+Df4prXcjtErfvbbNTib/XM02AwlhQwG8xzc0YyJAEZBLAtl/OCGNmNGoSwDZhKQ1UBa9oQ3SMuu2O5s76lkWSDTVsFTzzJpNOgYnk9Z9qx4uc5ofxEgs+praoEDOEYpqGkgJgGYtD5URYPtoLBB7rQGadmrafbaNzibvXMy6Iw0HzIPyHBSX12/4+l9o3FX6xLMlxKg0QMogTUAtL5TZFhQJi04Vc9we0RF86CMjyWZOjO+aLS/BmmD3jo71rkUcckVMg5mGQUtEgwwuQc2yzF1P16E0kxS3UxLJesL2LzozVKTJ9bPlODLArISWIuAGoUxNHXygAI8V2DybOk4duy2rR64wVn1Eu6ODhBOPB8yPBoODZfGx7sUGRzGJNWsBMjoKr52/mBvWf7RXIslolS1YNN8ybdHgEzq04M0y/8sa97k4//n82faL+fdcVuqs8Tr9toLB7vSZgBb8KImyxogE3+QCOBlQZkHaH0UOKfz9Bz/u/V55VrnDybtV6OeYX8epJVAmXQuvAhO2MdrQ6M8G6TtvgdCg7Pdd87CM0aV7MwtX34MdoqoY9wnCvajZszuoSAoZhKQeaqadCB9ghkoDm869Up37NGX5G9G99VgrfuiYik2PECj/Uq50Goh7bmXvq03yI2uX2tXtwLoTwZQRtUvC8z6MmdqM6+J0LRqc9Ii6HWrZkOZBG0WqEH7SBLavkAseuwR1QzUNGgHL3yP/zclLbrSs9GuwdlsnIdeZ0FVMg3INOWGTwSiMQGyKJR5gFaqnF1/ad9dfWTLByj9i3de+Ljk7F+y0FH1TIMxC9K8CM5aQGsqWskZn/4+mJsMyylZSplksvTMnBHw6n5gMFMl7pcFtIxqljVtWgpaJL9ZiYImARtd0xJQs5SvqCrWPYs3S0BZqTeoCRQg7d3fNXpoGgm8p38nzc+IDc7m51yOQCnCfGQ0TQMFNEkZ05YgCmYc1rpfbSSlRkRBAzDrIyITvuRWTh34RSwblT29nnLWfYEZEZywvTTvGc5V80PLHgtt/8I37+hlfWvm0PbdvgLwQ+LXj57+5cWV9fvRZImttL8106akoNWqajXRmt29cGSxAz76PgtjketGS1Dr+aJB31kVzQO1yPbIMUltrCS1CGrd83dTQbP+byWiSs/CdPZrcDaddR5sFPRNefvJ5zrflIjp0oIAhIuX149tmzOaM3GDZ96MKmh9mTK5GVMqnF5yIjiMRQCNjhMxbw4BZPxYm5mz5OwPsw8qZQBlHSBspr/Q3lu+Zh0MbKbQ4O8js++rZJOmlmkwVgJpnt9ZRDnzgMyqAGCZOyNr7bWRFDPLnKkpbHwf6W+EuBbd6Z2Vndne4Gxn1r16VA5lCGaSMhY1YVpgFgEyTSGzUm30BWY/9uQv/Q6aMSmUwbz539HFlyI2KZh5kMahzIM06zyVRnDyYwUz57QLxUfXey+0w/v20jcPdz+muDqGayDBmgRoNVDmrXcU2iKpNbb8WCFqmjeH6HZPOYvW1dTSafB5aGbMEvNm9Bgnz+BNMyb/OwJkXEmjY0OetPZsyJ6N4do3OBtubQfpmUddIpTxwSLmS96GmjE5jNH+qYImvY+k2ID+Ll48Wv0wQP+y8+NTXZ1PrL+JQNYHqGmmzlpfNO8CoQlpa33P6FiQcmNaReO9Y9xL2+95/ImfQUd/6bg5fHF4i0Rqwj4lwBZNpxEBsUjS2SysaeZJvo5e9YCIv1m3hscOdeZO+r5vIMv6nGk+ZTDHEjCjwQN0Ha98+HALJJqBB1ODsxk4CZEpIIRAmaEIeGl9avtKYMb7KIUySVHrC8ye+K7Dn0D/Mg5kfZk1tbWMVhLg+2cUNNwXQa0vSGuAFrnr+mkD5vZz+44/euCb6+Gal9NSzqyEs30EAWRNndkV12AM+4mYOaPAhn1KZs/svGvbl4Idj+TEeXBQa5GdtWeofv8GZ/VrOGgPPPIyY7aMmjO/tn570TFkYI0OcHl86On7/uzKD9VECwGsApjduu/i3VhGCqsL9KGeRcALjmmo4ABe1gnGypR2ipzQBmiRVSpvg8lj0a9M60kzV0J7y5SpKWQ1QQBedYDumjeSz2o1NEv8y9T1EnKZaTBmmTO79d3sS6sAUGLmrDFtRn3OYO6RthlFDfrkkNZKQpXf/7V7NjirXcEB9wc/KkgaG0mHUTINUHDA8f/aeGl0aGEl3IUWGNA9MJSqAdTv7N1/un5ySDCTTJqamTN80Kwh90fzIA139yI5NWVTqslZOne6XwO0PlZxax80ArOm90i05pZzSYICsuOWQJkGavC5Vei8L1CLpNTg0OYBmVbQnK9nDYDxvqzKAFrbWjDjICblR6NjN1Nn9o6qb9/grH4Ne+2hNPpSK6iNk5My/vOITAvSOJBpICZVEMC28H9tygyumNFanNC/pp7Btj78z/jJjihsPDlt5ILxlLO+zJswlwZokTMSa+P5lUm91CpnWqWA7tw6wFYDZRKEZcyYWUjTnP7pmtY6/mciNbv1Jb5psSvEb6WpXRbUlcKaBWl8vGbq9M9dny0anPW5mpV9gRkEs/l3IDM+sKXHqJmS7iQpMeBfdnH9aKeWIZBl1TMcI2Pa7MPP7AOf+a3fRVMmBTPpPQW1PvzPvMAAWJNskIDnfybBNXw2hInzV+798fdWXsJ7dneeGmN9ad9o38p68XpEfc5wgEwtzeikJJ+z7hpPmDWtuprRefB2nqky0z5q1qR99lHCKaOW0bEzVQK8XGcemGkBAy2qs/TKze3X4Cy3XoO0hgf7nbedfUYCMvwijpg2I4ECnuO/B2mSggZztKI2Yfv6aOHpT7//Q++pWUBQJaBGJvqYQV8SgFEfNGhjgVlpmg1+HFkoi66Dlv8MlbO+FbQGaNEzs9GOpsaQgCwCaVnlDMb1IjI9xWzb9Ruoq5kNEKBjWCpZVkHTzpAGWtA+GhjQre2mGhY1ceaumO2ts7nKsIeMP5kGahqgeWbOpqLVnnV//wZn/hoN1oJGYGYGiUCYBHV/dOEdz91+7OIkYoyrZh6YSXOM+p/VmjMBzI4ff73LDUWhjL/XtlNIq/E/s8yYdH0iPmhUNYsqaDhGX3nP+DltiWrjdyKPwqQgFoEyb6SsesahzesftmdTaNB9JAUNx7R8zqBNCZBpPmZWmo0olFmO/15ajSFMm9a5i8Ic9GEln6XbOKRFrh1o01S06Erl2zU4y69ZL3sAbEhZ/WtNlxq40YhMy5RZaubUzJuwWNdeWarKZwbK4oFb1jtlUXtpClrEtDlN9UyCMA/MuP+Z9HcvF+VmJ63Uk72aPJEsb52FtKxypvmYZdUyPm8N1ErNmNMq3YTHkYG0aPqMrHrWB6hZ/mN4rFFAi6hrHMysRLXSndFUtD6fvm/01eBsmHVVe6X1L6GRVgOTdqABW0RBgy/+s2u3dN1pPmalQNb9MtuMzpw8NFi0Zq05E74IP/fd+85HwAzaTCtAwKrBOVSQgLQGQylob/2Tb6mKqJ3ybTW14eCHwjfOn9r2QwGADF41fmb0IDzVDNrW+JlZihn03VcB9L5PTNTfrG/FjB5HnyWcvALnfP284uYRGOO+ZJ4JMwprTUXr92pvcNbveqq9oQkTUmNQKLO+cDNTk6I1L42PbwMzDdKoSbMU1iR/tJULo6ps0zQAIAtoXpAA9NeXatZ9oW0WRKfvM+bNGgUNr6m+AgUggrP5n2294kDthrJLqIzx/7F1RjmzIAz680o24ZgSqEWUNK9EE/bP/c3gc266lEyZ08h7hnOsBbJZiNTEY7EiNmuCAqB/CbYsYMt8DzUVLbNadtsGZ/2tpdoTRmFmipJHoM1SznhEJoUyDdDg8xK/s22/7jbVs1rVDNbtppPLj2kLq6lk0D4LZjXRnBEVjafT0PKdeYDG14Krqn1ezs3/bGM1QS17YfHWj0OGfwnINEjLngstr5kHaREIy8wl6/g/ZPqM7tiFpLNeAXS+XzbFBuyvKWSW6TJi1rQiNUu29Z1Gw1LStAhOfn21vGiZO05u2+Csfg3VHnh2f++LlcJb1veMtseITAAtfKFJk4MZbreUMw/YtAjO/S+v3PWph3742ZIljviZSf2WpNfoUz3DOUVVNGyfgTItp11fqhld171u3oQfCK+8dPOWHwgWoMHalSpnUQiTYGwIE6eWSgPmGfFDm1zbRqHzTGCAl+fMUs4orEWrAUiAxp85ERiznn8ajEnqGPaTMV1m02nQuUZBTDs+UNHe/V2jh2oSjpd8d8zLPg3OBjqTNGeZla/MAjZpah60fXX9jqevjxfvlqCMgpn0Hj6TIK1kiWqDAMCcCTUzS8bOABr2b9XltOagVQoohbQorGlJavtMrdF9Oe1R8yZm+d83Gt0PfmQUyGBd+Gf075JrloIZ318reF4DZBSwJtcqy1/GP8d94H/NpCltm1zTBqRl1izrd9atLSvTJH0WhbZaIMscK7atMWXWpNGgcy2FtfUPLhX/SC9Zq3nZp8FZz2eS+pZpShgd0jJNRhz+aV9cMZPUMmxPgwMsKMv4n1EFbdqqWY2JcyeVM27ezChoeC5b9Ga/NzE1Y0LPEpjxzyVYo220GXLwopAWravZQfRmJQAv/1lmpWqS0FJIs95n5sPbWubOPmDMm1s2ktPqz4Mvuq8XqQlta1NoRIMAvDXC7S1YILpSb7RrcJZfM3UPUMvefOprqo8U/zLlHWVAjSto31g/3WX9hxeFMjoGj9aUQK0P5axWNfuhzz4+prU46fvI6cooZ5Kv2VD+ZzD3TIBA96U2OtLtI72062WICM5//d7/aU88K+Aevnz26GMAOTQCk7/nStk085pZ5Zoi9wdvYwUFRMyXERWtZF50H8/HLFJnM5I+Q8t3JgULSMcUVdUyFQIscKsxccL8Jf8ySyErVc9grGbmzN0Fe+KBm1uSfGsrEjOrfsHoGUiD9uj8z2duKWcU4qQUGzXRmzWqGQ8CyIIZXYMIpEF7q1B69Grg5k26X6R6QEn+Mw77QypoeyE4gEZjwtoigNH3GpRpfmZRaJOiNmFczaQJ22ohzYvU1LZryWe1wIDuR4Zg0sz4m2n3YSS3WbeOzKzplW2i42nAFQWx6DME23npNfpOp6EBl5diI3tc2L6ZOWMr1+Astk5qK3T6H49GXYoM/oXJd7ScuSMlmnh/GphpE46oZ7ivpqJZAQI1EZo0pxmHsqEhrQ9A42uejeLUIjgzl6hW7inTh9Z2XtUz6l+mHbsHalEI4/17UKYBmmW+rI3etKI1YT6WmsZBrM/amhF1LAJikTYU3joQJgXOh4AyDbjo9RKJyoT2lpoG2zXoiqTY6OM5An20aE5/JRuc+WuktuApMjwzUwTeoE1UbYuAmWbihHH4tqiCZi1ZTV6zvlQzXhUA5mupaLC9z/qbmooWUdDo2kZgbVqBATCveVTPeJoMOE7L2T8aqdknrEXVsyiUeQlot/3IqCh0jn31oZJJzx0tgtMr9RRR0jiURf7OfJ1ETJsRX7QS0yaFtKhC1lcuNFwjMHN+4tce/EBmzfZS2wZnBWeb1sSMglTBMN0uWnQmzfwf7VtSzbzPoO+MifOJ93+4+JqivmaaclaioHnmTYS3viENz4sV0cmBDfbhOdHgs5JAAXr99JVmY57UM5rtH33KpHtJU82gbWmOs2jyWRjDS0QbhTLtORH1K+uuTQPUuut003zp1daMPLOiJkvsq69UGqUQ1oeiZqXQoGtWAmRW1CaFNRyn76AA6Zw3PzT9Tij+Io3cXPPYBh7od9529hlMWWClyYiUXfJSY0hrmAEzLziA9p9Vzrh5syYQAFUzKRCgBMikdfMS02rpNEqjOTNQhk7/XjH0SIBA8z3znzxwvV145fi24B0JxKA3z6yJI2ZynNFZeuZNCmi4X21kZkZByyam5WfA8kfzz5bewlPOIgpZtOg5h7YSGJPUskjiWQ3aIqZOui+HsKwpsyYgwDrPzQ9t++o0OEs8GaxM/0MoaBK4cTBbHi2NDo5WuqOg7/lhab5m0E5LUGtFbkp+ZzWBAJDXbN9ofDcvoC6dniysWVCG/UcKpCculVDTjJmzVDnDifQVwTkPec/A8f/VC0cf0U4SBTEKZhFzZ+jEk0YZKIumy6hR0qIqWlZBy66L1l5Sx7CtBmKwPQNpHMKkv/s6Ht6PFwwA7SPRm1I7C9I4tEl/D3XM2G/zQ9u6wg3OglccPNDffvK57oHulWHSnP5h38w2aWrPr705OGO7mWXORGCD/3meMw3YAKo+8b4Hiq4nUCPXTi09g2Bm/V9z8FZRdCsJbWmCWpirVSkAj6VPSJNUM6ry9mHefOGbd+zapJLf/cuff3xxZf1+y4yJ5yWilll1NjN+Z16hcyvhbDYZrRelObkuN02Y3XUc8DuDdppvWU20plUZwIK1LJRZtTXpc0cLDsgqaRHFLApjHOooXEWT0OIx9u1blnlmN0B7Y7WKvkwzi73b22ppMiLmyFo1je//tfXbO1jCl6aaRRQ0fl4k86dk5qTAtgXeXll69KkH7vtoyfkG8D10bOURD8pQMeP/Z8f0fNBgO7xq8p1F5pQp8VSjnPVt5vzP588Un+vIugzVBsAMMv5b/WuqGewTSaMRnbunmGE/Q1UH4POMJpyNgtoQBc+juc5KfM/guLRamrhWWfiKXgvYrjRiUwI4LwkthTcJ5KS5D2XS5GO1QIGNFWlwZtxB1L8scqNF85OVqGcYmWmBV2SO2CaSUkOqDqApZzUmTR4I0D1sNoun0/8zx6e1jYBZREXj8GbNLZJSo/vSG12eOP57hdE9WLNStvSxjrspMCCSKoOvied7FgG1jHIG43vqWQcQm5UA6HxL851JPmdRSKNKGszF8ymbZrRmxoTpJZ2VoE37rI/7ioJWBNq0wAAN2DQosz7v67gy/TRAa3CmXi+Sf5kEX9HPpIEiyhq0wez/nn+Ztx3m4AUIRLZDP9znrDRKE9Z56cRo4pgdMW32oaBpkAbH5vmflQYI0GsgqppZ6TSigDYEqO2WtBoAZr965+k/GF1aOLO4Mna/H7hyBjt4dTSzEMYn4UEZN1tGfc/cgw02iJg0h1DKtq3TZiLZDmTJe/p3JMIzAm84tqemae2kpbWUMS9QIOJnpvmU9VH8fCdMnXs9krMpZ8JdZBUth+YRqJLaRZU1ui8GAJSYML1nbwTEIj5nNVGaYNI8fvz1RzTgqjVh4hpwfzMKYRqQSYlpsb8SQLOqCGC/nnrmAZl1zrkp3rs+rO27ITAAwezAN9fPRHzM6PF6xc6hbTTnmbaOmmkT21v5zaBNieN/Jus/Ba7J9emk0oB2nn9ZVEWzfM0ma8QgTQK1CIxZSWZ3skKAB3lenc0hzJs1z43svnsZ0BqcsatFi8iMAFmkTQbuoC0GACCc8f/5xc7NnhEzqBccAGNYhdJrEs+iSROPg0ZrwmcZJS1742uARoEO3nsBASWgBv1qIGZto3U2I0lq+fXWl//ZrMMZgtnihdEZfl2sLi2MNBVNUs5g/yEiNaXrNVLsXEqhkQ0KiNwr2fQZkmkzCmLWfCRfM085s/bJwFpUOYusp9fGUs+yylk0CCCagNab+5Db9yqgNTgjV9WPPflLv7O0cP0ejMbUYMsLBvC245CW7xm0gQCAV8eHu+aQLsMCrwiERW8grSanFiBQ6m+GUZoUwqJAJh1LNMWGFrVJYY2bPSmk8ffRdcV2Q9ThjMxBui5rojdnNWqTKmawLlnVTIIxDdCwf4A3/t4EjuW1ifJFwQr28cyc2G+Jcja5BkkkpvRZKZj1AWORaxnbSOqaB3MSnEF/GYWsBtq8dBle5YBsbjMvl5lmsvSS1mbOU23bvQhoDc42rxoAM6yPGVXA6AUX2ScCe9Cn5GdGFTOENfjfgjLLB83KbYbHFcl/Bm1L/c0wSpOuY0Yp68vkSaFMe+/5ofUFbFlftI1r4IhYVQDXNRKAUgJps+h3ZilmkS+IqM8ZBTHN5yzqi+ZFbnoVAjqwEAIFIsfbPUuElBn0cw/UumuQFDb3FLRSgIvU1qxVzCik1QBYdO2xXa1qBv1Ea2p6tTWzc59W+70GaA3ORqMRV8w06PKUriiseSDH/cwAshDIJLNmJBAgcwNpNTehD66eHVhYffrT7//QezL9Y1tIPHtk4drdAFkSoE0eXEbkplRRIDOXTPQmBbDaNBuRCE7J7MmPLeuD1qd6NmumTcnHzDJhWteJ53Pm+ZtFr0FPJSvJb2aBWrQqgAdkUgBAn0XO6fpF8pxZ7fvus3lyAAAgAElEQVQ2Yw5ZBF1TzUp8yzKK2W4wb+I5fu/3LJx8+OEHL0Tvsd3abs/DGag3bznxFTVbuHRiM479uH8mqhPNmdSUKSlnUSiLmjwjULYN0Crym1n+Zp6C1v1SXFjullerwxm9KSNmTuiLqmcU1Pj76LhWOy95rVR/E/qLwlpfEZyzklKjVjHDcxFVzrwyTZ5qRqEMxtb+5mWb+vYtsyAM5lUSqZlJRFt6r2TNmRlAgzlNQzWLJKGNRnhGTJ3dM/PclY1n5q2Hxfd4Pqzt08p3pl0be0VB29NwhooZXAS8VmYfKpmnkEngBvnMvrF+fHJdIqB1D0rid2YFBkRNndrFH4E0aNM9xC6MPvLZBz/8ePYhS/3N+L5aUAACmWbOjPqcaXONqGgelGWDA0oVNK8Gp3aMmnKG13/2PL71T75lJn7FSglmJdUsGgwQTZ/hQZq3nkMoZ96YFLrMHwjMLy0Cat0PhB6Kn3sO/zjvSMmmDn43ozoj/mZDRW5GYEw6H5a50kuTYaXAkABsp8Ercu1Cm70AaHsWzixTJr1ASlQyfoFFQQ++cJ9fO70NwjwwKwU1Ps8IlNF9oH1pMICW3wz758qZBmYSqNX4onl1OCXfMyvlRvRhQ9tpAQNemo3ui9HxP7OuTRrJGZ33LAQFWGBWataE4/fKN0mmTVw3SzmzVLMaWOt+LPXgexaBsIhZ07qGSv3OOJRpY2j+aREFrVvHY4c6oMOXFCwwVMUArcg5PdaIUpaBOmkdPXUt+owYqt28A9qehDMJzEpULgniMjDH23JzJoUy7T2P4oyaMDM3jBa9CX089QP3FV1DUjCANCfPvImmTdy3Vj2DfjI50XDcGh+0CIxJ4MVBLGrShL4ss2ZGRdvpUk4IZghhHMYycGaZNCmsYWQmfMYhzDNn8mu8JBhgAgybIJYBsmhdTRwjA2rdNaoEBvBt0eePl+ssAlteFYASpSw6f62d50OG+2UrAHhKGp/PLEVklqzpPANa0RdrySLOyj40KtOaU1TtyvShtcXoTDBnSmbMPiAt6p8GY2mlnXD+dHufkZp0fahp08t9BvtpZZ4isCbBGIU0S02z/NCgj4yZ0zJxblwD28s7UWjj11cU1mqCBHYyKADU13OXT3TVJXjesgyUSfdlxKyJwCZBWuZ5F/E3Ky3RlJmHBmLdteckn/WiNTPzkNpa5kvavjZaMwpqQ6lmW56B5650vmHSK6OKZYENxpt11YyuybyWetpTcAZqzdtPPtc5/0u5zKJO+9T8g/3Qi8UDO76dRmdmQcxLTtuHkqbBWm2k5r7R+G4NyPgDKWrm7B4s44OTYIHslwI3W0qQZpk2s0DmzY8DmQZpWXMm9OMFBUQUtJ2CMwQzgDKumpWCWbTouedn5qlnPDUGnIvIZ30FB2ipM+i1yGHMAzStfJN3fdduLylyrilpOJeISVNrqx1PxN/MU9OsRLQwbjSVhgZfUX+zaLvac5vZfx4Bbc/AmVeSyYKr6EUSNY3ysT5//nufO3rz8hmqmmmQ5ilrsB1eESjz2njlnWrgjEdqWmscBTMprUaN/xkFMz6/aeU94+NafmdcKYsCm6ScIbxFrv1pR2xCMMmLr936jGbKxDn3DWk80WytSZNCmfZeK+EUKYAuwZZ2Pi0Y88Cse94QcyaOUeuXxudq5Tnr1s9w+reAjG+DvqTPskBmPtMUVSyagDajnGkwxj/H+XopOCLPhJ1oM2+AtifgzAKzCFBpX174BSapZ3ybplKgaoZApUHZlgetEbUZqcHpQRm/sYZQzu77zCfNKtTclIlzivig1Shn9NhLggNgf27KLDVtblwLW02ZOD/PxBk1adLjLY3knCacaWAWUc+ikZqwJiV5znAtPeUM22X8zTpgYM7+NWk1rHxn2Rxnlp9Z6Ze0B2KTNVQKoEvbMxGbfN6eGdPbnl0Hy9cM+soEBND2ViqNWVTEsut25cOHi7IHZMeZRvu5hzN4mN9529lnOEBFTJgRcJNOUmY/qJ2JSWZ5X5E0GhrMZRQ06Rg81azbXpHjzIMzDmPdA4Ylo7WADbdpBdWjN1fU30yrv5kBM29OEdVMU8+g7wiwlfifTQvOMJfZ6NLCGcmc6a1fZLsUoYmwBv9rJs0okEEf3MeMw9qQFQE0KCs1Y3bXlZI6Y0ho01JtdOtboKB5QQPStVMCZNkks3Tc0vqa0EdpVYDdCGzzAmhzDWcamEUe0ryNZfoprcWp5TTzTJc4NyvvmaeOlQQIbFu3V0ePPvXAfR/NrifmOLs2XuqCD0pe01TQYH5eolpoo0VslkRyWvU3N4B8e3CAZcb0wCwSvan5oE0r1xlNmUGVMliPPn3PEMZ4qoxIVYASSMsEBPQZGOCBWnedGYEA0/Azi0ZrUigrBTTrOWSZOUueX7CPVbKJbo+oZFJ7CnMRQJPMmaXHttP7rX9w6a5PPfTDz+70PGrGn1s4g1/Zf/k93zgfcfyPgFfJInsKmqWa8fEsFW3jy3qjMHoE3EqOBfbZllKjUDnjOc4i89GiN6XPpcjN2jJPFNCsZLUWpEWOU2szLfOmpSjDNuk1jVxnEMxz/tKNj0QhLOtvZpkxPViD7SVQRtfSUsui5sxMSo1tzxcGYRTMJs+UYMSml4S2NMdZNncZzrsPJa3m3vX2taoA4L7ZYIGITxoHNj5PK4Gtd0yzsH23l3maSzgDMPuLd174OBYy1y4UD57oftkITD4m3x9Us7Nrp0aLC2tbmkZKNtEdIqZPNHH2fsP0pJxlFLRscEDfpZ0kSBsqejOS/0zLdVYaHIDXCI9IRjCT1LOh4Qxg/sIrx7uUGZJixj/naTVKrnstAS0FMQnIrMS0fB5ShCa0iZg1aV8ZKIvmOYsoZjCHIdQzy2TZrQ/zM9sCuQUmTdg/mmS2j7qaEdMmzClSuikCYRGTpqWa7UbTJqzfbg8QmEs4s3KZRYDMCgDwoIt/uWlfDH+x9tbwd0YUwKT6m90DdLS0peoA/cx6r01woqAVwllGOdMCA3BuEfMmtJWCBEoCB7ycaAhv8L/mh0a3hS8CYsrU9olUENg430c6s6j2sn6ISJA2JJzRAIDugbuZOoO+l2CsNCmtlk7DitTMqGZbQGJ5rXPyx5cHZTwAIANl/FxLJs1Sv7NojrNSxUy7Tr3cZ1aaDa+MUyadRuQe9qIwaR+WGZNCW99gFjmO3dZmNwPa3MGZl8vMgisP3Eq2S/toqhmdGzdTwjbNF83aVhsYQOe0LUigEM64z1mJctY9pDYDBDio0W3cxFkCZNh/afSmBGqZhxxX0KKRmtFUGhFI05Q02Bfg7H0vrr748MMPXsgcV6TtXY9//ouLF0ZntGjMSJRmZBwLyiK+ZjBGBNI8/zLox4M0aFMDZhlQ654tSXMm7NMHiHlmzC2gW6mYac79EUWtJDBAgizvOi0xbUKfEeWMtpsn3zM4rt0aIDBXcNZ3LrMSGPNuMNhOVbPV8f5tps1tD0/iT5bxPfMUt+4huqmqReaNbYZSzjKQRufr+Z31WX8zUhzdUswoqGXWPNLWU85qyj3B+BTQ4G80cQ6lnMEPrVcvHO2SRgOEwYv7nOFnfH2yPme4vxWtGQkQiJwnbBOpsaklnsU+suk0vAS0EXOm51PG16APUIM+NXOmB3ERnzPo30tOmzm3WltPQfPUMAp1EuB5+0upNDjA9XGcs9bHbgwQmBs4w8hM/NLAiyNiosxAmJeCwwsuiKhmOHdJPYNtlqom+axFISwTwdnNsVA5Q7MmwlgWyiwY6x5YLOVGn+oZnhsN0mB7tDh6Ns2GVN4poqp5ZkztQcrVMgnQ4LMh4AwrAFxf3Dc6sLq+Bcw4pMHfXkJa68vCqqkplXGCvjSVzFPPrEoAHYBsmjq15LMdRBQUN4/kNbP80SRo654rQi3NvmBMAzLJXEnblpZw0q6RISI1+VgetJWCmJdQ1nP6l/zNdqMP2m6swTkXcBYNAPBoPgJyXh/e9j9b/Y6JUhZRzSiMeRGZHOo85axENdtyfIVwBn1AnjMKZaWgRucTDRbAfWojOKM50GC8knQa3rX0xvn202pIJs6s2VPLgdZ3njO4nz929PR5TS2L+J3VKmd9mDm98ycloY1GbWYVM2kuEb+zEiWNjsVBLQpuXlAAHSMKa9EktB6M9REUQOf/t69ffvlzl/b9ybtvXP8efp6+//L1U951BNv/8MiBl2m733ll4RQAyera+AciZk0P0iJzmPU2u83/bC7gTAoA8Jyavdxk9EKL9gX7WCqcpZoNDWoIed2vXWbKLIW0mvJNmIRWUs0iSpqXWiMaKADr0ZcfGl4zHrRRWKtRz7SHYdS8GX2YWjnQoI++4QzymV27Yf/9qJjBGF4KjSGVMxg/k3zWU8+2gAUJCqhRzaJqmgVkE9jf9DHrnhmBPGfdM0VQ0KLXV6adBmLYR8SEGSnlROdU6lOGfYAq9t5j4wk8AXAdGY1HxxbGo2ujja/gQ6M3CqbQ97jdWiPaXmoHfcC/8+ONsQDkAAYB3DJrPw9td5P/2a6HMzB/vPnU17owew+OMheXZ77kfWlQRj/P+prRMSKmzMnDlZV36h6yzG+te6Aq/mZR82YtnA2lnE0eilMwb8JY0WLp0NZS0LKgtnFeZdXM2oaRmtTcGTV9SqDWJ5yBn9nXr978CICZppBJihq/HyXlLFq+qbR0UwTKSsyacGwUvvpQzaRnYbZsU/cMMaCsT2CT/M08EIP5RU2c3RofO9S1x1ckGEBaR1DC4HOAsJML4w68AI48iJL6wn21bfB5tG8OgvsWV0ZXVg+Mvjbe13UP0AaKGx1rN5owve/53ZL/bFfDmeZnhifH8//y2lkn2VLItAjNb6wf964bd3ukODqFsUgVgZ1Qzj7wmd/63X2j8d2WchZR0OBYs1GbtQXSpXQaUUDjwQIc2NwLYLOBVUGg7+oBMKRm0lwZH3jqV+798fdG5221g/v5hau3PUOhjLa31LMa5YyOIZkzYbumnNUcd7a2ZgcQBf5m3fOAqGH076yfWSQYIGq6lNbOq6lpQRr05wEb3d6t5yaQ1ZgqAcaoGsaPKwpPdD8KZRrclfS75VpfXBmtry6NENJg2+GDr48uLN/YqWxoKuXAVnPNz8K+u8W8uWvhjFcA4F8gkYugNhAgOiaM8/nz3/vc0ZuXz6D5kv9P5xsxcUYhjYIajkGBja+TBWrStqd+4L6ia4jDWdbnLFoYncObZO6MXCtWGwvWYD8KbvB33/5nUqDAG+fa90ejx5ZV0BZGo97gDNJmQN1MvtZahKalhGV8zjz/MphPJM9ZRDnDY8uAmaaUSWpazbWsRXJ6wQBWItoaUJuslVHcvI9ITQ3MNHD7wXPnO2Xsg1eWT6EaRs2PHKygLYKUB1SeUkbVL9qX1693XQCgbXvtvz66sny0A7a/vHZTt/nn1g91fmxef7O+/dIP3lxUenCax1X0xTrNCWpjRRPNegCG/de2s4IJ4Avv+bXT5rJFgIzDFQevaAAAT0orQVfUtPl3nnntZEl+KzBfHTq28ogEZVlQkxY26nNWWxidjm2pZxlIKzFv8jWIqGd9mDWfv/DmXh5ymDYDTZYeoEVUtOxzKlMVIANiEpBZkBaJ1CxR0LLqWdTfDI4lYsKsBbVMsXOYU6mKJl03qI6hmRKBi7bV1C4JnDyYomoZBzu+r9eXdh8AkKFyxv+3QA2ADUyhux3UZj29xq6Es1I/s2g0phUAkH3gQ/uvrd8+enV8uNs1opyVjGElqJWgjoJdTaLa/RdXPvLZBz/8eHbOHM5w/5IAAS84APvWojmludcECVAQ41BmmTVLoKw2vYaklGXUs+de+rai80/XHM2ZmDZD8jWD9pEozex1CO015Yz2FUmpEQU2y+9MA7MSGNPWwit4nvU9k6CrTxCLlGuiMNYHmIFqBgoZmCtvX1ifOO5La8rVLgmsJs+3At+zDPSVXP/dPSCAGvaF4Dbpe//10WjtwGgE/49Gnaom+auVzmVa+826eXPXwZnlZ1YCVVHFDC8YC/C0bTR9hnbhceXMUtK4H5kEXxlfs4hKprYpTKeh5TrjqlnU70xb14iCJiWpxf4ikKblNctCGrQvATT1S3gzWAC2R6sK0L40SKPX+TfO3VpdHYBWAdCOJaKU9e13RoEM5tWn31mJWRPmUFLCyYOx7vpQfNLotmilgC3XEAkYqP3S9VJmSFDmgVq3piQQgCpkkflGwKlE2ZKAD+YjmUejJlN6PAhjGphtAzJtMTYBDTajorabQG2WzZu7Ds4sc6Z1M0VUs2gAAR/HS58BgQCaYkYhLGPapHOw/M82vphXushMCeJwO/xflGKjEM5gvHt++4kufhwrDsD/3QNovNR9Rl9ZSLOCBKBfzffMArXIw5q2iVQTgPaSmkY/j4yr+Z1ZyhoFti1fqE7tTdr2397741XPEFBQz1+6sasCIL08FS1a5NzzQYtGaMIcM2k1+DFlqwJI/mZDq2hRc2Y0UjNy/Vpt+lbOYCzqT0Z9yK6N4XlUNuOIKdIDNcnnzAoO8PqzjsQDtNQqbELawoHXRucv3T46cfDS6GP7T22L/kz1OaXGs2reLLwMp7RqbBgszyTlKIvAlzbrqHpW0s4qcF4KY/Q4NHOmpK55PmnQbyZyE9reuHD16U+//0PvKbkiICjg+njxbgpnlnLmAZoUJMBNnjDPjJ9ZRDnjxx6Bsr7Nm9b6RwGNK2WeebM2GIAXNcdjkKI1h1LOrOoAMB/JnBk1X9JzEoEyaG/5m3VQQaI1s5BmlW7qo+h59/xQlLKImTMaqan5nmV8zKjZEuYNvmTZlwVSXvoMD6o8Ra4vv7PuGldMmqZ6Rk2bxMRJzZ3Q98Li8ui512+ZabPnrJo3dw2coTkTwSx6I0XNkNhfxjTqtcVAAMvPbAhFzaskYIGb5n9mmT5LIzZBNRndPJqoJppyJuVD886/p5zB/hGTpzeOtb0U0mifWTNnH5GbHpTh/GqDASDZ7PrSwv3eGmeiNT2FzBrLA7FIbc0IuGVMmhTINBjLQtqWH3dOio2oKXMIvzOcZyTHmdRWgzX0JYNEsPiS1LKoipZRzDwoo+cm4suW6c+89jM+Z1JHzA+NNwFF7fKl06OPHz40k2raLCan3TVwRs2ZHhTBhZHNQ+Z9QVh9amP90YV3PHfy5tfPUJMijtOHaoZ9ebAlje/t0/0KDhZFLw0KACV07fjSYxKUWVGcMDdPRcO1yRZFt3KgRa4RbOOBGbTTUmxoZs7M+Fu+gInvGXweieTcOP9Hurb8Pfb9lZdvLw4GgHN/dvnUY7QKAJ1zxJyp+ZhlAC2jnMH8IvAVOU/Z0k3YZ0kCWquu5uQZIlQF6K6VYIWA7hrZVM0iKpm3Rl4+M7q/5IsmgRn4k0H6C9wX4Uv735ujtt0KCCjpU+uvJpUGV8tgXlZQgDpvhDJo4AHa4vJotG95NL5+00yaPGctOe2ugDMenYkXSjSLf8QcmfU3i/QpVQTQHP8jUZwRoItUEtCCBTa+uDf807wIzi3gVuh3Brnq/uNdN53H8ymZNzmIRaFMe5h4kZ28SDrtJ2vi9AAtWiAd5pBV0CiERYEsG7n5179woiiNCpz3X73z9B9IOc2k8+aVbsJ9MlBGx9FSaGSVsii4ZZSzGjOmdg9owEVhLANmERiLtJHmG1HNvCoAEpS98cyBH3obfmZcKYsoZxHVrHuGbUZpekqXZM6E/fk4/LMS6MN9KJTBZ6FgAAplCGbwP5o4qalTmByYOwHUfmPt23dMSYOSWjTB7qyZN2cezrwqAJmLMqK4af15MMbh7tL4+LbcZlnn/wiMqQ9goYST1DYS1Yn7aUpaTRkn9DvzAK0U0izlDPqMmDazUMbXWYM0aNd3glqrcgCfV1RBk66bGn+zTBAAjh3xOYO2GqBFwM1KRtt9aS3t25aMNvr8qfU50yAtY9L0FLSoSiYpZNZn0TWy2kWCArhaBubLv3fl6qlXRhvliTaeIRv/oxlTArMIlElztUCtZg0iSpwHfdL4XkBACtIc1Uw7/g7SRqPRb4xv3zFIo3ObpeCAmYczr6h51qfMukmi8BYJPoAi51iuyUuTEfFJi9zckmoG+0UAjCamxX1wzEjVgJpktOB3hqrZxoNzZYvZssTnzFuvCJRpfZTCmlcQXascUFtRIBsQoAUG0M9LTZqY08w7PxqUwecU1Gg/EQDj43rVATw/NOyvRDWDfaPmTWhbqqJlU2lYec66Z8Pl1e6w+zRj0vOSDQzg4AZQ9r7Ly6cogGnXG1XMJCjTQE1TuLrnF6mlqSWQjcCUpZbxcfD4Iv1aoMZVNGhbDGmGegZQNl492E0FAW2nlTRcl09+7EdmgotmYhLajcOjM6MPdAuyogAWHUtrByZNTynzlDEP6rSxNUjD9pbpE8GMVxHwQK3U7wy+rC+fPPwMhTL63jN1Rs2cmjkTxoqAWm2Kjah6xv3NSsyZb5znjdJN1qtUPYP8Zp966Iefzd4n0SAA3m9UOcvOB9tLpk3YFinblB0zmoQW+uXKWEYpU58PlTnNtBQaQ8EaHIelnOF2WuOSH7sEYZZqVqKeRXzDvGtFK9/Ud2Lb7trOVAiQJi5FbDrmTNoNBzSANQgcmLZPGjdvzkrus5mFM/BL+Yt3Xvj4eDS6B0/okCoZv/YiPmga6NFyTZ6PGYwb8Tfj8/PAjoOYFwCAQQNSpCf05eVA68u0aaXVgHn0paJJ1QI8UPMerN52SzmDfSUfNPi8L2CLgBiqY/z/jWtgI0Cg1KQJP7bOXT7xGF8nrAwAn2tVALjzv2e+jKpoVnWASFUAeiwR9YybNzuwWF4Tk8vitr4gzTJrZupqRoqfd9cLSasR9TmzSjRRSOMmzJ/98te7U0EjMK370YI17z7eBn6bShl8rqlduE9U2cqqb9F+rWPrBdZgAMfvTFLNOjDbVNPQHw3ypf3U9UPZ09FL+1kIDphZOAO/lLeffK5Ls5BNnwH7RIMFeFvPt0w683yfr67f8fSl8Q1307YaTFnqmFUc3bsCLfUsGjSw8YW8ERygKWl0HqWmTYzapH1FTZuROpzRIumafxrMK5MbzTs3vFA6hzYJyOhnXv98e8QPzasgQPssNWlGKgFoxxaFtuzaYHsvKADa8QAB+pk3rmW+hH0jZZsk1SyipElQZuU1g/lEU2jQ444CmLdW3XqwYufSPtAGnf3Rl0zrG2Fs6zNGDgbQAgSkvr18ZLBPH+AE/UR8zyJrC20sEOvFjBkICECzJswHTZsIad1x7NvwR3vutTtGP7uyYQKd1msWggNmEs68IICM2RJOZglwSftFfM1gv+fX3jy6PD40WlxY22LahG0acHkmzFJQiyapjbSTbgyqqJWaNkEl/fR33dBFbVLY6h5IxP+sb9WMH49m3oR2sE161fqfRSI6YVzJvFli8iz1P6P+ZiVRmppqZj1sS0yZUcUMx91pnzOYh6acwefwknzNIlAW/SIrraVpmTGHADUKbFKussjxRs2bkb60Np55U4O1aFJbKYVGHwDYm78ZLAwp62StJVXLuHo2ATWAtPWDvQUNcDMmzo9/vtPq2UzCmRcEgItZAl0RcyW/mLLjQC1NeAGcUSDj/XpAZu3rbeNjZQujR6oJ0DFqqwXwhLQamEmAFlHPpAeEVghd8i8rVc4slQzmZKXT4FDWZ/4zSU2zzJ64fqUmTVDNIqkzrOoA3T21Mp5EZGZNnfwa8Aqec38z2L8mYhPHj/qc9e1vJqlldE08SIO2Jf5mEVDzzJmTtdtUy8DhHwzsWTMmPV4tGCCqnGVNjxng8xQ5DcYykFZUGYAfhFYpANop6pkFZOYa7Vueqoq20+rZzMEZqGbfcuu5zkE888qqaVbfURiTQA+iNM+uTfIcbgM0SQEr8UuLrk02ghP6tVS07gHNTJ10LkfOXylyFMfAAK6UcUiDv70EtdbaWCWePOVMU8lq1TM+36Hyn0WAbOP8bwQSSP+XqGaYOoP6lkWv32iOs2h/UjvPpCmZM3k/WX+z0ihNGDcbtelFa0ZSaGh+ZhHwypwby5yJahmUWuJmzCioDamcRWpgZuApUyEg0692PnrxOQvmOcM5hJQzOuFNU+e08qPtZGqNmYMzVM0QfEqUrgx4ZSoJRKANqgIcvXn5DMwBoAteqKBJ8/IiOrEfrY9sYACHLzqnbMoNTFS75bgKE9JCHzznGQczzazZl7mTHkcmgjPz5YNtveAAaAdt4MXNl30qaFvPvw5l0K5ENesSzh6/fZJoOLpWUR+zqHoWGddKm6ElpI30y9tkktDivn2aMa05e+qZVzuzJAhAmw91+qeRmFEQw34lf7ONZ0u/Pmddn0YaDXqcGZjyzKQl1yDsUwVjwdqa0tzSQCZ1MqUEtjupns0UnGmVAKIXXwbkNNCKAJg1zhdW/3o3XQQzeE99z0qVM1yDqM+atGZezU3YxzJn0u0UzHgkZ2mtTVrOifuevfGgfSMHWgTWrGsnUxRdS6UhlXuKXq/RvGeRaM2M/xlXxDbO69a0G5JqVpI+A1Szr1+9+RGtTBNfq4xZc3JPLC105s6Sl5ZCo/vyWlnvuvRMmZ5q5sEYjJEJCMiAWiQYIFv0HOYLENZdN6S8U8n6R/aBSExuvkRA4/97/Q2lnEVMnDA3D8qyFQLweL1+rXXxIK2XAAHnxGyJ1NxsuyU4APff9D+DYIGF/cujsxe/ffTZIwcHTWC7U+rZTMHZP/md/7N7wvLozD5TaEjXSATUItAGpqAvrn7rtiGiqpekgpUGAlj3QjTPmQRr2K9l2iwNDIC+IxUDLKWsVkXTCqZLShpd41LTJvSR8UvDMYdWzziwHRpdfupX7v3x93pffnQ7V800s6b0ecS3jDv/1wYDIJBlyzZF18SDtAig0bFqIY32VWLa5Mfdh2qmOf1nIYzPbRrRmjgmBbUIkEnXj+dzVtrvhHE2c3cZv3gAACAASURBVJzxv6WgAPP6tnzOlB05iFEI25ZSw6TKN4K0smZOLShAGm6n1LOZgTNJNcuYHPmi1vigRUCMjoftqb8ZqmV8XlYEJ7b1gMzbrl3PpcoZhzT6t2TaPP/q0eeeeeBdb4t+adF2WlLayYMvEL0ZTUyLfWaALBIYUApqpUoaB7bMulsqGt02tGomKWZ4HJqJkx5nFszovtycySEN/vb8zjz1DMfTyjh5EZuwf0nRc/VZwAqaYzvPrAntonnOMtchb4v+ZfA5qGaaUlZq4uwzzxnMUVPOcBseX43C5Zk3S/rmJZy6a311qTN58vdbzpFUW5P7myUqBKShbP3gRqqNzf9BRfvixbf0lnKDw9tOqGczAWfwC/svv+cb50vymcEFI/mn4YUUBbyIeuaNJfmb0QuaR29GojVhfwvGIj5r/MFXopxpuc40Ba0v9cwLENAiNaehoMG61lYO6L58Fq52fmWR91otzoxZM/qliXA2pGqmzSXrc9bdJ4J5U4M2HqnJgczLaebBGj0uD8igrQVnGYWMjstNmkMEBuB4WlqNbMAAKGf/68WLW8yYHMAkIPMgrW/lLJr2AtYnWvScnruImbQExqT7TYvaDD0nKnzPoH9NRTNNmjgxAmd0rv/w/FtCU8802gn1bCbgDPxS3nLiK13CWQ2qojnGvAXPqmIRyENos/zNJEijn0UiNrF9RDmrDRTw8p7BXCiwwd8IagBUX3vleLF6Bn3d95lPjgGw+IvX4OwefuOlLh+a9V66LqzITWjvBQVgG9p3Kax5gJYpkB4BtUzk5jQjNLmCFonWrFHNJs/5lfUt6hh8Hq2r6T1z6PZMhQDMc4b7c+WsFNq6e1dQzjzVbOji5jAvmum/q0WhKGfwuQdk1nnpUznLgJp3rVh9wb6eeub1T7dT1ay73mvKOSXNm5F0GiKgTW7YTdWsm/gbChpuzpo5I+s2bfVsx+EMVTNYHEk5iypfuLgZiKsxfcJ4dH/N30w66VKAALYr8TuLghidi2bi7B7cmxUBtPdWVOeW462I3MS8Z1nljJs0oyZOzbSJx6NVDyiFMe1hUFqDs/uyGt8wifCMPGywjVVB4OsvH/vIZx/88OOZ/tDXjPqS1aTRgLH7hjTJlNk95wmkwd+aQuYFCfD1iqbO0HKb9QFi3f3M6mpOrgEGa5kKAX1AGxYrp9BlOf1H1DQ8tkgQAK2lGc1zRmFJA6eahLERvzMYt0ZB6x3IqCnTyXMGc49A2rZnD8KYAmZDAdq01bMdh7OIakZPTtT8qO0j7V8DgDgOhzPJ54x+RoMErAhOr+xTiVnzjS/ljbJMkb+l2pwU3tD3jEdulpZ0gr614AB6bnmZp+5htamk9WXa9BQ0rB5gJa/NwI2XZiOqopXAGgW1EnMmHCfmNYP3JVCGa8WBjEMaXdM+1TMOaVkQs851aVAA9lkDadK8SiM1tSjNrBkT5kT9y+Bvy8eMwlvmntLaauk0SvuOptIo6b+vvrli1l3vRDWDv0N+Z9CQ+p5hVYBA8XOx6PniGw7+pmrGoYz5n+HaRv3QrOCAnawasKNw5qlmuMhZU2S2vQZykc+xjeVvZgUHSDdpH+pZRk2Lps/gEOf5oXXtK9QzCA5YO7X0DDVvWoXRI+bNqJJGz0upalYaGIBjRwMEui8sopqVQJl0HX7vFw6efPjhBy9kv0igGsD1q/vPQPqMDJx5MEYBjOc3gzlmAC2S06z7klrat01No5/z93ytPBiD9l4wgAZkFqhZ/mZapYASsybM3wIyD9YAzD54ZfkUqFVUKctCmmfizKhnJcpZXwloS33NStSzKtWMXuiFfmdp1YwqZhqgsRswCmjRZ9w01bMdhTNPNfMgK2PC1ECrRImDvvjYX177ttGr48Nb8ptFTnjExJmBNastn49VHB3aeiWcqOpG2/MIztKqAdAnLYpO/c34sWg1OLFdBMokCMP9tW2WqhY5/1Ibz/+s++LaDCKQ/uewFp0HVc1KzJl4vs5dPvEYvK81a0IfNZGaGVjrnvWbJk36nuc6i0ZlamseNW/C/n3U1NTMmHR+pWk0OHh5IMbXBPOXcd+yLJhFr+/tzww5CW1xfwMkoIW5eObNEjCTjjENa1w1C1YHsFQzKa3GtrlaZk1U0TZ3AjiD13jt4AgDBTJpNGDfnVLPdhTOtLxm0oVjRWTy9hK0ZUCP9mf5pdF2WE8TP+NqGTdpatUDMmZMHCujkklr24dyBv1SkyaCG/R9YGH16U+//0PvKX3oUfNmRjnrHmybgQLwvqQGZymURVJueOvhQZpl3sS+S1S0UnMmjJlRzTRVrSTHmbeWfLuWfDarqEG/EWDTIjZh/1LlLHvMkjKGfURVs+4+P7LY+a7x99hXBNLQ8Z8fAzdpwnb6Gfwt+Zv9tSPnnlxb3/f7sH1xYf3ztN/f/PY7/5gqwC/+03/xt+j21fG+d8Hf+/et/034/+XLt9xLlTZpnaPJYjUHfu/cSaWbumfYaGFLUADtJwtpaRjTJl2gnGmAFk6pEfQ741OORHJ68HbpB29+9KkH7vuodw5rt+8YnEXymnlABQdfqp7xfUsWEsfOBANI41i5z6KqGfdbyyhoMKdoeg0tGGDykN8MJtjmg1Zh3gTz9xPfdfgT18eLd9P145Gblq9ZRDmLXAMR/7Nac+a2Lywn1YYEad2X2mb5p+4LLRgsUANmcE+XqmZanjNPOZPMm5HzKLWJglmmfys6E/rRlDTYJpkta3OdWRUDuudAIjCgVDnjYCYBGYcyavK844aXfwYhjIMXfA7PixJzPD2v4FLxrz/3lR9BaHv9yi33WufdU7ci14wUqQn7eX1noUybSxGsFfqc4Rwk06a7VgnlTOorAmjeHD75sR8ZnJ0GH0A7SFDNtLxmHpR52zXwijr+R9UyPDYrGMBS0Oja8BxodJuXOsNSzrKqmgdpdF5e1CYPDqgxb1L/M27ejEAazDujnFl+ZrgGWhvY3odyhoBl5UDTzJoZIKPn9OK5I0WF66GP7/7lzz9+7Yb993f3X9LfjD8nhlTPNAiDOWjRmrDNy31mPdC5OgZto7nNSoHMMmlqEAbzigAaPVav3iZtqylm3bWuJJtFVeyfvPvN/+5TD/3ws33Al/flS7fDePD3Q3/1wveBynb12klRNfHSXEiRm9o8PCDrnmebKlrmWGhbLb9ZqFwTdKSZNWGbE6nZm3JG02gwk6a1LhlAo0oavr/y4cPpKPbsedoROKOqmWeujCpjUfCiC+RBXtQf7avrdzx9cf3oFlUneiIyEZzYZyQpbRbYPCizFLNowfQbF65WmTep/xmuhQZqPO+ZpJyVqGlcOYN5aJ9J10BEVePlnCxIo9si/meWglYDZgDPX1p50zMIZvB/JhhAWqtI+ozJPVFRXxP70HzOMglnI/d9xu8M+quN0LTMmRTGMmBWknTWM2XStQMgWxiP/g9JGYus8VBtEAzBNIqgFslNhvPJApVk3oQ+4AXbKKRl++4F1CSTZiBaE8e2SjmJ51BTzQJgBv5n4HuGrwyg8blMIzBgR+Dsx578pd9ZWrh+T2lFgO4LYOF6Oi9a3/vhHL62fvvo/PqN3fnzUmhobfDkSyZO2DYtXzQr/xnO0fNR6x7yA5g3oV8tQEBTz7qHl5CktgTM6A2aMW9GgMz6MolGbVoF0j2zZmkAAM4bVTOqmGXhTDJhdvfLyriLxMT33f2wCWOZqgBbvoxY0lkv4ayWTsPzN9PUMZhLxtesVD3TristmjOa3yxr0rQUMzpHMFk+/pY7/mWtWdK6n/reBqA2Xhj9z2D67CvdxU4pZ2HVjC9iQRoNzaQZ8jvjkAbzSQAagloNoA2dlHbqcAa/sL/l1nPdL2zpZSllGSCrVdw8VQ3nDu0+f/57nzt00+oZfjxRkybdjxdJl/KYacpZ9nPrIeUBmJT3LJJaA0ydhy9eqZKEPUCLBg1wcLPWIxvJSeEN+u3DzGkVSI/mPpOOsRbMvKSzWUijQBZVz7KRmRKowWfRJLQ1X/AZ5awkjQadm1fCKZrnDPqMJpvl4OaBGapkp//VT/2nmnXd6X3RTw3Mnrz4Oc7NU7c0vzPY3wou8PqNrE3a54yrZjBIslIA7JLyO/OUMwXQqGqG7z1A8wIDhlbPpg5nkmrmgVA2cWwJ+ME+3jjaPP9i7a3dkBiBGbkRtOjN7otpYW2bUpY1U3q+Zt526Ri8RLSwjwZ13cN9tNRth1eN/xnsz02cUpoNnqA2kgctcu6gTUY5i/YZbReJ4oS+pNxnXEGrBTM8F2eXTz1Wo5rhsXvqGWzv7jVDOfPW0aqrCftKKhp8XqKe9a2cecfW3YNCFYBM3rOoz5kXtQlzscBsXqCMnxP4sfLA82f/GYe0DEANne/MArEi9WwA5cy81gt9zToY3DRvUmDzFDTJ7wz6eu/3LBTlgozcx1OFM7ho//ydF85HJuYBm9ZH1pk/MhepDR0nk0YjOp4WIOBFZWZqdHZfcuP9HQzyl1bCCdtZyln3BSGUgOL5z2qqB8C19Kk7brh36cToMV6DM1p/s6SCQERBi/ilcWUtel14YAb9eDnQcKw+wAz6ktJnoFoWVc2kaM2oakZhLbqOGoRJANZnhQAYt1Q5q/U94+Cm+aJFTZvWWgO4/fyzXxWbzCuUaZA2vnaiOu1CJtggcw/QtrxKAGxzQa0gjQYd0/I5U6sEFCSjxTFLFDRrPYcMDJgqnIHaceaWLz+GvmZR0yMsjtY2Y+rk/UT79UCRw5l2MqO5z3B/qcST1nekjFOJWkbHq1HOUDWj6hnkP7vvz678UI1/iWfihPlbCWpLa3HiukRBzLrBsz5pUUCDMTX17LXzBz/ywbNXn6xZe+gfAwFANYNXNPGsBW0elHHVTDNpap9nlLPuC2qzSgA9h56vGbaVojQtQINtWn1NOn4E1DIJaCm4ZZUzKVqTl2TCub/58Ln7Zs3JvxRmovvBD8kf+fILj61eOdWl44goaBzGuueYkOQ2Ogep3WDRmkZAADdhwrxSZk08kKRypkEZdAdBAlIlAc+sCfsOadqcKpyBSXM8Gt3jXVAZaKN9lURsenORttNxvJqaWukmbVzJ3GnV4bSgzKrZGT1uDci6h7mijnEQk8AMk9TWRnDCPADQUEGzojctpcwLEOCF0en6RRPVwj6SOTR6Lni7aKAA7EchrS/FDPqFQID1pYX7uVIWhTTr2L0cZ6XrRveLRmhmIzat/GaWcobgFoW06BpYSWZrwIyPD6D24Je/+fL3X75+im7bjY7+0bWNtoPAgUtXb3kCoyyl/bxcZ9yXzUpKG53XhHdIfU1UzFzlDHemClpw4KKAgEKfMzolbtbEKgKjxSujL7501+hnV96I6IwcylCmzanBGQ0E6Au+PEULFjbrR5ZV6LIJaEtgDY4j43MWUcgiSpt0YXrmTA5t9G8ewQnbANL6ADS4vl5YvPXjtx+7eIbmM8Nj0FJr1Jo2sf/S+puwf1Q5iyhm0J+V+6wmXQa/HnggQA2QaSCmqWR9+pxFyjbxY8/AmlYdQPJH41AWUcjE+1TwO6MQRveJRG529+pmZQDJ1ww/kxSzRz9wtDh3XuTLcbe1eeEnfv5/80ydO6WchWEMFt1Ko+Gk0/DynLnntFA5U8GMDPjr19/+8u+8srDlx4Wlog1l2pwanEXTZ0TALWLKjIAbvQCi7Xk7K8eZ5fQPY0eCArAdnasXlUlhzvNRc2+CzQbZPGgalEkqGoDT1//q+Mf/9B+/64HofKR2UiWBSILaGtMmV9QygQJRKNPWxFLOcB9sc3Lh5ad+5d4ff2/N+vJ9QbHkgQDQJupn5s0lqpwNEanJ4SsDY9Jx1SShpcDWF6xFTJccxrIBAE0t06/wiIpG9y4NEPDuMdjeS3BAUDmjUAZje+qZOP8Kn7NuTBYQQP/G8SRA43OhwDZExYCpwdmPPvlLG2FWm68IhElt+QKVQlWtCRT3vzA+NTq7tgWyI/dDuk0m/5mXEw0Gz5Z3wgln8qBFzZ6Txago8UQX9J7Hn/iZQ8dWHsFAAc3nzMt/5pk66ZiS2dNT02B/nmIjfWEQpQz35coZ+Jd99sEPP17St7WPVhEgGwyAY5SqZ3yOFqzxSMzuy0nIeQaf9wVkfH5eQABtXwpj0MfQPmcwBgU2GpkJvmW7PTVG3/cL74/7otHt01TOuntAMGm6x9+DcpZOQouTSipnsJvldyYd6z84953iEkgq2hA5z6YCZ1gRIApSsCKeOdK6cCzwy0RzRgAyUx3AKn5O03Bopk8KaFb+M7o2kWoC7k0o1N7M5kHzQK170G+aOGuDBKAvMHOunDrwi7weJ2yzUmzA9giUaT5otcpZqZommTLPrR9/eunl6z/xvhdXX6x1/OfXCK8IYPmcedcXj9TkAQGwP/0sA2Pe2BTOsqAWDQqAfqPKGbSVEs5SSLOAzQOyaF4zL6cZV9EwMhMiMf/dt935kb6vt8h53K1tqJlz2j5nCGUc0HAtw2bOoHJGz5Fn2hSjNQt8znhlgIhyBvOEQAEvxQYezxCBAVOBM82kGYEf6YbL+oVFbtooOPJ2tDqANk7Uz8yL5tz2pSSkwSipwxnxUcOxLeXM80eLJqkFH7Q+AA3mDCra6ObRI5HEtKXmzUh6DZiLFgxQCmR4TqRyTxcvHn30qQfuqw7h165pWNfzl258BLZLSlmtaVOK2ISxopGa2rwl/7IIlPH+ImDmRWp6FQIoqEWeYVIbCcYm9zLxSysxc2I/6GcGZkysf1k63726H/dD8yoERCI+o2vJU2gUARn6mPH/hUloUNYB0erBztTpviqUs4jfGY7/xYtvMQMEUEXblXAm5TbzQCijbrkncbNBps9oW2inVQeIzCsKbbQvK0GtZaqMKm3dF6CS+4zOI2PehP2yRdLPv3r0uTtXz90PhY4ja2m1kVS0PtQzbcxoeg0KZX1UEID5gG/Zd37hxP1DKxeY2wzG5EXOSwMDvGLnMBYmoa29JnB/q2yT5ndWMnZUObMUshoT55Z714Cy7l7d3E7/h8+lkk0YmQlgducvPvzTJWvT9tlYAXhO/V+//dq26jlRUMsCG1XNYPx0hQB64gqUM9h9VnzOOjDcTKkxOazFK93bX7/y324LEJCu2b5Nm4MrZzy3mXRQEQf/7kuA1NO0ACqjyJX4ntF9QDl7dXw4XB3AM1lGHlRaglrcN+Jz5rWNzINCF32fTWCLyWlpDjToDwBq5cKoN38puBbP7Tv+KI/otIqk08hPbBdZm4x5M9Kf1+by+NDTaxfGvzCEbxkfu4uMvXpb9yWimTMt5SyiqlnBAH1EaloKGhyX5W8WUc3ommnRmtBmqIjNaNkmDcaiwQDgZ4a5y6CvoX8UePfBbt8OgQIrV0890T3/NvOa0fdaWaia4y7yN4MBC33OJCAL1dOkB1mhnHVQSIICRDBjC0r9z7TIzb7Vs8HhzMptVuNXhmvnqXAZGOQAyPeVgLBGOZPmlvFL44BVUocT+ijxS/OUM8/HDPOcqQXSNw+uA7ZXV3o10VmQVptaoyQwQFPNIuZOMGn2mbcs8pAHk+bXr978iFSuqSQYwPM5i/ib8SCAaASnl+fMAjUP0qxcZxqY9ZWAVjuPUWjTVDMKbeBntheTykbukZo2YG26/8+vdJV0PECryXMWidIsMnEGDl6K2uwgiZg1p+lz5k054n+2q+BsiNxm3iKW+KN5gGdt/6ML73ju6M3LZ6J1Nb30Gt7x0e1S2SXPJKmVd8qMy9tqSllfgLYBzaudc3sfZk6cP0Da/hMLP7lvNL4bP5OUslr1DPr2IjcjIEbXfZpKGT/fYNIcXVo407evWV/Rmta1bFUH0Iqel9wbkUSzluN/BNKkeXklmXAfKymtV74J+gA/s4fGZ//+Xsv2X3ItlOxDFTQKaV6VgKxpE+dWpJ4VKmc4ZpFJczLh5dEIi5wrxc75uluBANtMmlu+aK+MRquHR1p6jS11N3ustTmocoZRmtGLM2KOxDZRvzBrbK+PCLR9ee3bUmZNbT5Rc6dWQSDibxZJPOsFFND5S7nPYHsE1mg7LVAAx0KV7eaFK6Nrryz1qqLBGPAj4vLi4Ycg/Qb8XRoYoJ3baAUBaAcvy/8MfMq+fu7Wn+wTUqP3J67Vl1be9ExENYuYL9X7YWXcOf/Dy1LOMnOnbaMpNUAdg1ctuHnpMwDG4AXt8CXBW+nxbrlvewgE+H+/+ad7rgxTH2uf6YMqaLCfBWYlUBbxMRtCOfOiNOFYzcCAAfKchc7L4pWJ/5lm2uwzIe2gcMajND0Y0hbIgyS+X9QfLTueNI+scsbHtCI0IxeMVdpJ2z8THAB9eGpcNEoT+rICA7SyT9vPb/8qGjwIwV+Gq2leLjQ+twyIRYMAIPJy//rKF6bhT+Zdc2jShHYSoMHnWSgrVcyipks8Jq6aeYDmrYW3vY8gAA5q3ph8u6ekRRU06BdNmh/7xjM/8/hb7viXzb8sezby7SUfNCz/VAJk2gymrZxFAM1cLepzFlzWSH1NsSsIDFg93G3yzJt9mjYHgzMpShMPPOJrFgGyiNIWOW/eWBrs1URrRiI1vdQaaEr1EtRGKgpQCPNgzFrTSKoN3F8ze3ZfBOBrNlrZNtSWz18dPfp3Xnjt54f6kuiKqu9beueBY6vvpqbPyDUltYmaNsFkef2Vxc8dWb3ymzulkGnHiFGafYGZNI5X+JzukwU02DeSTgPaSapZJDGt5GuGc46UcoK2mmoWidj0/Mom91+BgvamP3vptz/xaw9+oPQeaPvlVwABLVIlINu7V/y8b+XMqhDQwc8O+pyZpk1cWKX+5hCmzcHgLBKlCccbUdOyEFYS1SnNJXKhZ6M1I33yNlGQiwBWtDJADaDBPDzTpqW28ehNDdRgHEi5cev6xUemoSohrHXXShDYtPJO0AdsQxCDvwHGMGEsKnkl18tQ+0QTz9YGBWSVtNLjHaoyAJ2Ppp5pABZNNltyzNkEtDAGTZ9x4e03PPfMA+96W8nYbZ+6FQBA23/15BNULatVzqxUGqHZVvicWRGbHNLEuWjJaI2JR5PPbukCVTP6/2g0+gcv/nfqSH2ZNgeDMxqlmYWr0IUhNCpJiyGNlYG7PqI1LT+yyFpoyhnuKylnUTWNAh9/T+dWYtqkEKftLx2/BGsQMDCtVBIcnADaDq2v/Jdr+5a+A5Q27ZyBaRK2QVuuiM0ijPHjwMSzAF/wsvzOtDWgJk8epQn7ZFQzaYxs6Sbah5XzDNrR6MxMpKbkb4bjRlJpQNuIYrblfhRUMWl7xqz5g0cunhxKpY485/Z6m6/95L/47OKVk/cClHXPkdGWioijUliLRG26a1+Y5wz61QID1DEtMAsEB2hJaEPK2eakqHmT+5/1ZdocDM54LU2+0J5iFom6LIUxb2wP2Oj2aShnOJ4X6SmVdypRyjJBAd5N6yloFNAsWJNMnDg2hbVpQpp37PO23TJpliaenVzbQgCAB2slJk0OYxS6NPjyQMw6zxqYoeO/5fTfd0CAZu70ojNBPTt5+uJds2Zin7f7yzserMUJgAZta9JowP5a6aYiU2ZBhQAvWnNbUIAVCNDdyAdHI2ijvIp9zroH0abfGfmfJ6ftu1rAIHBGozQ91czz9/IuWNyu9VPTv7dvjc+ZdFzRiE26r+SXpq2ZB2q1pkw6bgTKPBij0MWDBWBfSUHDzzCB7QfPXn2y/dqP3kV6u6xJE3rKBgZ4MEZnVwNmXmCAZu7E8UtgzYI0yZSZVcq23HtENevuMfa39JkFaAtvX+s9Qrr+itybPVD/M7oCpaoZhTRexqnjndWlDuLcV6FyVlT4XEpAa4BZpLamenwkGGBLm83qAZp58709pNQYBM7A/PH2k889cn18wD2ntEHGnIh9R1Uwr50HkTBPqU1ttGYG0rovr4U1txqBp6BZZk4Yg2/XUnBIMJdJryEBHNTV7L7YX1n8HDUDRop3c/Mi+IVhX7PoXJ+6OXa4MY3S7O6F1fUt8FXiZ0YPqcTPLAtoGpR1X1Ar62JVgIwpE4/Hq6kJ7TJ1NfvyQ7N8ziiw0XbNz2yHbzxheKzDWVstYCeUM66WweF5/mfqGeARm4XKGZozI7nOuIKm1d7sw+9sEDijKTSGSmtRest4kCb1a6lykOfs/PqNpdNx94vAGHbCzZ5S55465m13JxwIBui+CEYrnTP/m4698g3wFZP8sCJjRdvsBp+u6LHsRLuISbPEtGn5nXU/RjbNnbSmZhbK+HrVVAWAvrLKWSTHGYU1GKNUObN8yPg6RIqdH33rpWbO3IkbzhkT/c+wWY1yhn1E8p6p0+pBOQsXPe9+TW0moaXv0aQZhDRewil1mjeVM9hHqr3Zh99Z73BGqwJEDzYDTNk0HJ5pks4x0xb3++r6HU9fXD86yTAfPWapnQVi0bQaHNRq02z06X8GcwNlDFSxIVNg1JyDtu/2FaAmTdg6VBoNr/C5B2iRYIDJF9GmUtY92wXVjANYFsig34gp06oSUANp0nWcjdZ85bYbPv6n//hdD7R7YvZWABPUlgYFVIEYLkdhtGaktqZZuomDGc6nEMpKFDOuoNHamzidT37sR6r4qmpn6ZK1qgJ4psOsg3/fUMePJxKUcGF8anR27dQgd29GNdNgj34eAS2vikAmyhPHBiADdaz5fw1ymQzeKa+lqQFarWkT+vWiNSmAlShoEX8zmIeXz8yCtT6gjINZqZIG/XiJaGkbCnAtOnPwW6tqADBvHrx2/KPQSY1ytpPRmkU+Z90vKkM5Y6sa9TnLRGtugbPRaPTFl+4a/ezKwS0jr39wqUp17h3OvKoAmauxRMnC/jMBAh40WnPuUznz1iYarUn7qVXOoK8I1PG5d9GVr44ebb5e3lmd/e1o0pzcW8TfLAtkWioNDmUc1LrrcGmhgzf+vmQFLbVMArOdUs44pGnHqgGY1D5izmxBACVXg8HtBQAAIABJREFU1fT34ebN0hlMs0KA53cGxxAycfbkc9aNt3ZwBBAnvqRcZ1AxgOU+4+bNWr+zQeBsPBrdY10knuIVAasaoMpewNZ8h1DOsiWdvPZY4ikCWbU+Z6+/enBqSWGz57G1z69AxKQp+ZpZkZqSnxmFMQ5mfUCZVaoJVwXawMsLAsiCWkRJkyCsRi3DY9JAjG+Hv2nb3/3pH+j9uyF/9bU9vBXA5LReO2m7Vx2guxd2MFrTTKUhpdXoJmyn04AmWp6z0BoqSWlh37MvvWP00ZVDk25q/c56vQGpv1kEniLKWKQNrkbEDAltS6JCtRO3PDoy+uLqt4bOax+NSk2dtAYnzsMzUWpRmxLAIZQ102UfZ3l2+uBRmt39YyhnNekzLCiDbVFIi5g7h1TOvGhNL1JTg7IMrEnpMyxgg21YDaAFAczO/ReZCVXPSs2bO6mcVSehDUCZluMsFamJJ8MANKqezRScWf5mEkDRCy8CcxyspL+tiznr08b7kuY4NJyVBgl0X3Qk7YannkVUNWltwXy5/+LKR6ZRPinyoGpt+l0BatKMQFkJnE2eeSQyEwEL/kdom/yoIOZNDm3e0Vt1Nbtn/NK+LQECvL9S1SwasYnjlSagjUAZhzT6dwsC8K6g2dvet3pG1bKhlTNYTc3vzDVtSoEBQypnlnmTXBY091lNUECvyllpfjPvco+qZ565VINBC8I8ABwaziZfXIH8Zt46cvXMMmFGVLODr6605JTeou/i7RGTJhxeJoUGts2aNrMQxpc9EgggmTNLYUw67R6gwT4ZdSxyaWWqAkB/LQggsqqz14YGB0Rm59XVDEFZQbRmJFLTnD9PQAuNAyk0vLqaIZ8zOjFDPaPBATVBAb3CGa2naS1wiflRA6tIag0LsKLgJx0P7vtnq98RuR96axPxMQO4gpfWVlPSItGax/e9/vTSy9d/opVz6e2UzmRHEZNmd2+tbvhqDaGaSXnOakCNQ1r3bHdSaXg+aBaIaYXPuTLGoczbTsfMVADQ9oM+WhDATN6GoUmVqGfVSWjpzArynCGoQTfwHl6olrmqGUIZKmUBxYxOt9jvTIMyDBDYHATNmzVBAb3BGeRd+fN3XjgPStLB0eXQBaU1igQElA4Q6TsKjziHacOZduxRfzTJ/4z2yRU1/BsjMJ964L4ufLu95nsFJJMmwpgVBJCBNK6gSak0cJWpqZPmPPPOggZksB+AFwIa/i0FBnhjWIAG26J+ZrXKmaaUwRysPGdXjy61nGYlJ3mG9imN3KxKpYFQBusgKWnK+kSqAqiAVpDnzFPOOjDkEZu0dJP0nkVrjgigYXBAjd9Zb3DGk88ipE0T1rJQVXpf8XE+f/57nzt00+qZ0v4y+3mqWQTcIqoZ9EMhDRz+/+ELL/6NVqcyc7Z2b1vwHz27fOoxegQRn7PaI/bKOHFQy4xnRWz2oZ55UZkRSMPjKfU5i6yHFMG5+LZrzW80sngz3CarnlUpZxqUOetD1TJoGoG0SZda4fPu19VmGoygglaknEUAjRw/qGefu7TvTz7xaw9+oOSy6Q3OwATylhNfeUSCsT4AzTq4jGkyGqkJ40X7HaK+pncyo4ECVjF1aQyxXmbzLfNOx9xt/+5f/vzj127Yf393H2xGZ9L3tbU1PQjTVLJIJGbkZGglnGDfrJ+ZNZ7nZxYtep5V1LwyTnR7U80iV8zuaPNff/TXxrxqgDfzSEoNtQ/L78wYmJs0uUpmmjULAgE85SycgDZo1sRDh+CA0qCA3uCM+ptJqhn/LApsfahhHmRFAwm0dnAsz6+ddguSezdJ7faoWRPHkQqkwzYKaIcvXmm/qGtPzC7c/65f/b0xmCfxFVHNLHNmxNRZUx3Ag7aSepqlyWgtPzNYT8/EiWteA2TQhxa5ycGtpc7YhTeoMuVMYEBUOQsFB8B8uN/Z2oGNzwKQlk6nAX0WQBpOJaWccSCDToyAAHq4EBzwN//v/6GIs4p2ktb6R5/8pbEGYBzE6N9RSPNun0gqDg/SpDEiAQfTitjkUKX93V07LLpTqy5A/c+4GfPO1XP3N6d/78qbv+2SSZMeZZ+1NbOVAbofDyyVhncGtEjN7vkuBAPA532pZ55yBmNF1TPvOLXtlq/ZoTuXW8R16cLO4H7g+/33/vzy+czUelPOcFAHyqIRm6H6mkFzpqecwdRD6lmwWgBd/+XLt913+l/91H/KnBNo2wucwQXx/71zubsgIBggopxBWwvaogfiAVcmt1mm7ZbFn3Ii2ujaZNpRSGv+ZZmVm7+2kknTUs5gBTLpNKQ0Gppq1v3Q2CzZVAJm9Oxk0mlohc9ramrCXDzVTFLLMgpapIxTq585f/csPaJoYEBUOQuvVkFAAPaN0ZodJK0enERvhscOQtpkvP3LExhzoYz6mnUPpCujifM/i9KU5rujcAbBAMdvvfyMBGYAYBzaKJhZIBc+MZsNS9WzqFnTms9ORGx6wQHR7Q3MslfafLfnJk042lqzZmTFND80DmVZ5YyPnfE3q1HQvAABCmowR0lBi6xb93y9vNpl+JdeknIG7Y7c8XpzWYgu8C5qVxoYkFLQCn3N6DJ66TPU8k0811kAzDzlzAU0CmUaoCmgdvn1N/3Mnb/48E9nL6FelDMwg7zp1CuPIZzhJDRYo59TUNPe92H6rAEwa1/c9vzam0eXx2/U1cqeiCHbR3zRoM2NC1ef/vT7P/SeIefS+p7tFUCTphcEwAueR3zKpCO3/Mw4hJVCWaZUk1chIHr2MmCmQVlGMbOgjG5r9TOjZ3B3tgMrFsw8YtocRDmDwdGsaZg3I1Gb7hnQIM3ZkYIaNHXBzIvSdNSza1due/L2X/ip97nHwxr0AmcQDHBtdKQrdh4BMs83TfNJ6wPSrAXylDfL7PnV9Tuevrh+9O7sCeijveZPJn4ZKpUGrn9lseU56uNk7PI+qEmTH0rE16wU0rofo0r5Js+sWQJtXD2D8a0AgAi09RUIAHPRktJ6l1ckIS300VQzbyV39/bf/0e/Mb59YX0UidxMKWZ8WRKmTNw1mny2zzxnMLZWXxPn5UIaNkxGbO44nI1Ho3vQhMnP304rap5q5vmtabcp3e/C+NTo7Nqpmbqjo4pZ8zGbqdO2o5NBk+bQypmVSoODGvwdLXrOF8+K0oS2QwYEeMEAWhWAEsUsAmXYpqXO2NFbbCqDQ9Tm2aunPvqWhTV1vCrljOY5wxGSoCZBGnQVgrLu5l0ejSCvGb7vfmEdfCPn2ea8KJRRSOOwZp6YaCCAoqKd/Oc/lxbC0jtIB/D3n/zYGD/nypn1eUZlg36sHGolqpoXiekpaXQtph2xKZ0HK6cZlnPqvviIenbttcXnnnngXW+byhOjDTLTK2BFaUZUMzg4TTmLKGpadYBSMJMWO5pstqRkE4xXWq6Jz7UE0LSLi4NbU81m+jbsZXLgd/aVK7c+AZ1ZgNZxzeLKCNNl8P873lld6tqIL6lsUzBaswOlxWW1ZFMI0gL+ZjhvK32GqprxYIDuC1QJCDDMmzsCZxgMoD4YNqM3+XaqppVC2k4kvMXjkMBtJ4ICMpDG2wKkfeSZ8ydb1v9enoe7vhPJpJlV0LxFiJRrkhLQlpgu6VyyNTWlQICS4ACqnknw5kVvwj4ZUNOiNZtq5l2Z87cdTJt4VBKgVSln0nLtwjxnHSDu36wu4F0Cnu+Zsf+v3/Z96e/ZauXMgzOcr6eoae2k/SyYg35KS0fVmj+/tn776Pz6jd4pntp2yxcNtp04/+pdLY/Z1E7HTA8EjsT/5pZvneRHolAGE49Ea9YcYB+RmhLASekzYJ7RmppRILNMmB6U4br16WemnYummtVcpbtrX0ip8V8v33ovzPrIaDz6loV18QAG8TkLBAN4pZvcaE04mqBypqlmqJi5/mYRMDOUs5J0GtVwBmWb7jjx0iPaZcv9zTiE0f369k2rATU6r0ixdGi/k0EB2cfGTa9camH02UWb4/aaSTMKZTx6M7pUmWhN7LOvAuieiZMeQxTSKIjR/S2FrBTKvDXmKTSar5m3YvO1Hf3O8Kg4oGnKWffjxTJlasskmTiVtlK0JjYN5zkL+pzxKRRVB6CdWP5n0E6AtB2DM6ypWXJpW8qYBG4ZE6iW5LbEPw3nYvmpzbLfGV3LI69da1nBSy7WOd4HTJoXji3df+zyauc3xl+ez1nEpwz7tJLQQhsKbN2zbrMiQIlpsyTxbAbEtEuixPcsY77k40aSzzbVbI5vYOHQqN8Zbj65MB4dG21V0DTlzIQ0y/k/kEoD+vaUM/VsFeQ568bbTDxL36NJM6ycJRPQ4jGU5DqrVs5oGg3v0pf8zEr3iUAa9O2ZOGtATZr7rPidTb4IifM/mDIhMrMFAHhX3d7abpk0I8pZBsyklS1Rz7JnKFNbs/tSWtq3JZKTfmaNXZrfDPvUIjizx4vtm69Z6crt/v0kOIOjwhQbls8ZtFODALSlCSpnVtFzqpqpZk0+PoU1YW5etGYY0CZfqkJAAKplPSai7QXOzo9P3XNk4WrV1WxVF4CONbArgTTaH+xPIS56EJqpc9b8zujxND+z6NndW+3ANeHrV29WXROipZsykBYJDMCzMIRyhn1T02YUwKSrQ3P8h7bZlBqZq49HYmqVAppqllnV+WgLP7q+/9lrYp1NUNBOLC535ksEMcmU6Zo3NQWtMGIT5uKaNaetnFUUPscraUeUM0yjcXl8w6gW0KRbQvNZ48DGgYsqZh6MSUlvo4oaj9r8xvrpmcl3xlNrNHPmfDx0+z6Kux7//BevX91/BvqVojPp5xTU4HMPyLztVuFz6J8moIW/S0yb3ZfPZoFzCcq4SlaqmmHfteoZ9FNj4sR5NNWs7ztl9/VHIzb57GkEJzdtIrCljjionGGf0QLo6hym4XMmDe6l0hDUs5JEtNXKGcAZBbOhIc0LGrAgLVo2Cs9HFNDo+YN9nl87PaJ5xVIX+ECNj+97vZVmGmhtd3O3EG39pZU3PaMdQ9+pNLRxtBxnFMiyYFYLZNnzmkmbwQGMmzPp2BFQs3zOmmqWPZPz055GbMJR/eGRAy9//+Xrk2zpb126VqaeVficaWZNVzHriHEz8WwSzKzammbEphSl2f1qzBU/nzqc0TQaEqDhZ6XAllHNJr8WWV61iNlTKycFfZYUZp/FOpu3XrjQ0mbMzzO3tyPRTJpDpdKwKgNEyjdlDzwCaNCnlnQ2m4xWCgTAOXs5zWoKn2vr0iI0s1fMfLXncMaPDiI4Ty9tmDfRx0xKRBtalYRyFvE7S8NaaJJvBAbwGpvB3YuS0E4dzrDguaacWcAWXginYSR/Wl/+ahTW+Hs6zT+68I7njt68fGZW1LNmzuzrapu/fqhJE45OgzK6DdrAi5ssPROmtnpWjjPYR/M5yyhpEUjjUZqZqE2umsG8KYzB31F1LKKUQX+Wvxlua6rZ/N2zmSPy4Az6ov5n1LwZGqfQ5wz6LorW1JQzLNsklG/C4yiO1oyUbnKKn3frnCzhVGXW5HAWgTRcqFI1rXsoKVUH+DbNBErbRZQ1D8ok8+esRG22KgChR8yebOSZNOmiRKI2M4sYidCU4CsDZDAfL0pTUsZqqwOU+pxFoYyvsxYEcPnOpRaZnbko57Atz3WmHSKP4OQqWmhpgspZxKwZUs26G5yYOZVJWtGasIubRoP365k0e6qvWQVnmICWmy89SJuGjxpdT085q4E1KZgA+vuLtbfOhN9ZU81Cj5U92Qju3+fXjz9yePmNvEdZH7NStYwu+BD+ZtoJ5bAG7bKmS61vD8pgP8m0CZ9rJs0ssFFQa6rZnryttxx0FM5gJ/A/6+6HSALaCp8zGCMCaOLZG0g5EyEt4282a8oZPNyPH3+9C8GHSE2ALu09bseIziF81Lb9oiyo61kDarAvwtqF8akdj9qEoub/8IUX/0arndke0tIK3PWrvzeWEs7Stl7yWWibqQ5g+ZxBXxaoZc+iVgEA+olUB5CiNvkc+kihgX1mQUxbDwC0C2+/oalm2QtmDttbcMaDAyz/s9DSBJUz2hc1beLnqJq56llANePztgID3GOsLOE0VbPmBz7zW797676Ld3MooyDGzZeeqoYLVGP2jEKa1S5i7tRUM/gcXl9c/Vb3fA/ZoKlmQ67u7u5bKtekpdGAI+XbKJTVroQXCODlOYuaOi0gi4CYd5yechb1QctAmmbSPHTncqsC4p2wPbCdwxkHMr4E6H8WXpqkz1lv6TN4tGbA5wyPyauzaR67ZdJ01LNs8fMqsyZUB8AEtNS0CQfHAQ0POKOgwT61EZ8ZAMO2XrqOCLhBXzsZtdl8zcKPlz3ZEMo1Xbth//3WwUf8zDzVzDJ7WjnOavObSb5m9FglUIPtkahNa82i6TSgD2hLXxko2/Zcu7w6Wj6y2H0MwPaDRy6ebIr5nry1txx0xqyJO2J6jarggOTSFwUHwBgJ9UwLCAj5nHmqWcCsma2vWQVnoJwdWbh2Nz0P1LypQRo3gVIIw76iClvyGjCbWwEEHNwigLaTps2mmvV5ZcxXX7xcEz06Hq2J2yLmzcgqWXU1PQUt0r/WhsNY91xf2fC16zPpLEIXjcyUPsv6nmWOvalmmdWa77YlcAYrgv5n6upU+JxxU6ZZsolPoMDnLAplIqRRKIO5FBQ9x0OYKpz90GcfH+PAks+ZB2rWPlmFrfQWkyI/vc+iyhrMaadMmy2vWekVMf/7SSZN6aijZZtqViwCZJJZM2vKxDlq5Zoss2afKTU0daw0x5lk1jx5+mLLaVhzUc7RvlE44+ZOnl4jtCSVPmcpSJvc0H60Jp87z28WUs4omGGHXtQmG3jH4Ew7eRHzZjbaE8aaRsSnlkMNxpe2SWraTuQ8u/6VxY//6T9+1wOhG6o12nMrwHOb0QXIKGeeSVNb2GjJpiiASeNk85rV5DiD8bP1M62cZyUXZCvVVLJq879PFM6klXDVM9gp6XMGu3iRmmYgQIFyhsdWneeMAhoFMxzAMW3OHJzRk66BGrSpVdEosJUGE1j50/A4tDaWSXTa6tlNr1z6yGcf/PDj8//oaUeYXYG+c5tlUmlkTZqTZ97SwpYozugxa35nkcAAOkZUOcsEBHAFjcNaqf9ZS58RvTr2RrsaOMPozfBKJZUzq0oAjDlz0Zp0IQoCA6YGZ/CQP3DL+qQmn5ZKQzuxEqj1kY4Dx+szkMAyc0o51Phn08x5BukznnngXW8L31Ct4Z5aAa1cEyxCTdHzDKR1P0BXxlsy//PP4O8a5YyeVM3fzMpvFgUyGCeSTiPiY5a5ECVzZks6m1nBvdG2Bs5ghdTozR58zqB/y/9MPEMFypmVhJaaNF2fswp/MziWHYMz61L3wC0KZTCGF0xgQVmpokaPLaKuQXvaDsY9uzapNTvoU6EFAgy6vLu+c8ukyQ8uE61ZsjCl/mZ0LAvguGkT99P8zmB7n+ZNDm4aoEG7UjNnSzpbcuXtnX0i5Zu81QiZN6GThHLmRWe6qtnkZs75nHHTJnTj+pxlgwKUBZ0anIFT8U0nlx/zTmwU2iTwwvxpdJuluEUS3EJffUAaBzDP3Pn82umpVAxogQA1V+R87+sFAkSUM1ghqpJlFLNSsyaMWaOiRcyYGaWMXiWeKZMCWjTPGYW1zBX54Oillj4js2B7oG0GzrQcaKZ5s8DnjC67B2nbTlGBcoZ9eAlow5BWYNKEOUwNzrhZc4jrXEpm6yW8RZCjEOal5egL1iiwcdMmBAYcumn1zBDrhH02k+aQq7v7+47kNuNHGVHPSlYmY9YsBbNoXU0eqVlTzikbGMDXrtTXrKXPKLkK53+f3/9HvzHJqFBztCH1rEflDOYaUs8Cec64WRP61hLRimvElTNo5Jk4hY6mBmdUObs6Pji6YWG5+Nx7Zk/acTRwoKQyQZ+QJi3G0OrZ8X2vP/3p93/oPcUnou04tytg5TbDg44oZxnVLKKqaeWaSoEMjsUzZ2Ib+L8GxGB/bqqkn0nbM+qZdzFSk2ZLn+Gt1t7c3hecweptAbRd5HOGZ94Dsl6UMxhMidqcGpxpylktqGm3kJYzjbe3UndAW09Fo236gDWqoL28fmx0fv3GwZ4SLUpzsKXd9R1bgQDWwUWSz0YgDMewamtSUMP2PMdZFtq8YAAtv1kJtEWrA2BlAC1iE449o6BdPbrUUufs+ju0/wOA7+hHPv36JGivdoS3HnptNFo7oHdToJxBZ2nTJs4goJpJk+WQ1s1hvyEu7TblDIueUxjjYFYDahzGcJEjyhlvq+1jwRr20Qeg0QtkyLQaf/fZc83npPYJNKf7RwIBMspZBshgSbm/mWfWzEIYPW2lOc5K/c5gbM/3zIvWzMDYth+kd7zeUufM6X1bc1gv/tN/8be+cuXWJ2r64PtuM29W+JxJUEbH22bW7MHfDEFMUsl6U86UBZ+acgZwdujYyiNgzuwTyqTj0kDNausFDlDfNQppUrSnlSQ3e+EPoZ5BHc3XXz3YUmhkT8YeaZ8JBKBLEvE3y0Ia9u8paNjOK3puncKSPGfQX0Y1q4UyOv8soIFZ88Lbb2j3/R65j7OHWZtGQxpvAmcIZbRRUDmz8psBkHUAtei4SfHC5zgPLIBuLFaVcmb5mqE5c6fNmlw5A0CDF/U9Q2iz1LXsBYftLT81ywTqQZsEavQzOt9SVW0I9axVBSi9kuZ/v2ggAIcxWJmIWTOzghEoi6pm0XZaYAAHscxxaG1rTZvQbwbSWiBAH2dtPvvIRGpmVmCLeVMCMjB9BkCt1yS0DpRZ1QHw2MPKGewgVQhwFnHHlTMKaUNAmXX8ksLmBRtoEaGYloODmZZHLQNqQ6hnzd8s83jZO20jgQDSamRUM0k9o59lUmh0z72VjQCzUtVM8jOD/jIpNaxam9J6WVGa0F4LBKAwloEynEMLBNg793L2SPsMBqBj376wPjq8eH37dAJAhjt56pmqnEmmze7m3lTahlbOOJhxtcwo4TRVODt+/PVHqDoG80bljKtmEqgNCW/RouteoEEkd1q2zucQSWkbnGUfXXujfTQQQKqp2bdqhuAF0KW952DWx1mSoAz6zQIYn0tpZYDSIuc4fquj2cdVMd999B0MwFdrop4V+Jx5tTVhrKI0GgaYRUyZxcqZU1MT126qcCb5nEnKWQTU6MmvCSSI3nKRwIJSVQ3m4JWP6ls9++MP3LPxjddebQXICkQCAfiC1apmkRMQqQ6A/VDzZdSU2f2YXlnvAEx7n6kUYB2T5ncG+0iBAJJCVgJsrY5m5Erbm22G8DejKynmPStQzlKRmtzPDGCsu7nLqgRI1QLEqyVSIQB2nEWfM5gXDQzQYGwnIM0LJvAUNjxZHqh56pmUd+0b68d7qRoAAQF/8APva3C2N5/D6lF7gQB0R0k5g+19q2eez1lfqTPosVnmTGhnRWlGIzhLks+WlmzCY/vDh9/b7vl2z4srMJS/2RZAw9QaHMqCPmfQl1VbU1XPCoMBPL+zsHJmVQgwrsepK2fSXGYV1Dho8bl7oOapbdCfBGmaitaXetaSz7YntLQC0UAAvm9GOYuuvOV3Bn1IOc6ifWvtsjnOsmZOKQEtzMUDNWjjqWfesbdAAG+F9u528DP9/mevnR96BbZFbhYoZx6gmccgQZpg2rQKn0P/YSjDyUQiNoWJTx3OOIjhnPBz+LsE1mA/ybxZY/KM5E7LAFwm8hP75fDWh3rWIjWHfgztvv7B5+RLK28KJ6CMKGewCtz5vySVhmXS7Fs5i0ZqSgpZVDWjQOaBmZZ41kpIK119LRBg992T05ox5Dd76cotT1webQirUBsT3/c9B9H3DAZB9UwYMOJz1kHT6sHtKTW0XGewQzBiU6sUkIK0gmjNX7/t+1J5SItlccxzxteeQlkNqGlQR8erATXtIrUiPi0Y626Chauir5mXO+3s2qmqe+bIa9cefeqB+z5a1Unbea5WIBoIIB30EMoZH6fU5wz78XzPMoloM3nNpPXigQESrPVZtunynUstt9lc3a39HgyaNCmUDQVobloN5dAsX7NQMAD2m/Q3w928Uk5bpu35nEHjgKnz5D//uRRvpRrTCWtwRttwUJPUNAvCPN81HGsISKOwxa8vTzGzirNDX1w9+9LFb3nu6M3LZ1bH+4vu0gZnRcs21zvd9au/NwZVK/LSVDPY1wI12B5RzqxqAN1zbWU8SZsBf5em0Jg8rxOBAJo65qlmXj6zCKDRc5NJo9ECASJX9d5sw02aHMr6hjTo7/ShSxuLzX3NDPVsAkmLy1sUMgpmboUArqIZoCbBGFfKwsqZpJoFIjZ3DM408LJuEc/cqYGblNwW2g6ZmkODNauWpwVpHNBq1LMGZ3vzQawddSYQgPcRUc2iUKbNL2LWpPt6Kpl39r1UGrB/1t8Mx6ytEJA1Z8K4D45eSplHvPVp2+dnBahJU1PO+ga0zvcs4W8Gq92bcjb5ReZUFGCnuFg5oyoaf+9cRjsGZ9q8JJ+0vkyfHAhxDn2Xk/KS2+K4WkQnBTvN9FkTHNDgbH4ern0cSU36DDo+BTUKZFQt05QzT1HTojZx/FL1TIvMhH69qE2+9p56RttHIA3aR33OtOugFTnv4w6Z3z64SRNBjP/ffSf15IvWJaU9+PrGojqRmtTfjEMa/B0yaUqKWfcL6+AbyWgDMJZWzrBPgDJ4cbXMSaUxNTiDX+dLJ0aP1V7mmunTU9W07TAfngiXznEoEygHNA3YJFDDz86u3TK6PD6UXtKWgDa9ZHO7Q41qhosSUc88+Jo8xzZNlvB3VDGrVcqkk+upZzV+ZxEwk9JmZEyZk+dJK3I+t/du7YHRxLOev1lfYIaQd3ppuVg9kyBNBDUpzxk3ZQYqBHTj7V+eRGmq5kxJJbM+Q2gTTuS1K7c9efsv/NT7Mue42OcMLoS1U0vhaDCclKSaaRPuI+IT+h4SyEojQDVzaIl5s8EuY1LjAAAgAElEQVRZ5pKf77aQPuPCsaX7Dy+vhw+U+px5PmbQaRTMrAl4AQGWcmbBmxadSZPRwrxKzZiwrwdjtI2UhBa2W0lnNWhrgQDhS3pPNoTEsxevnuwCwyA6U1PNJHCrhbUuMABegRxnXrRmSD2DsTQFTTj7vficTX5xXpETzhp+Z1OFM6qcXRsvjQ4trKg3hAZkXoAA7zCrpsH+mX1q7uhMslsrXxqA5Pn1G1NTaXCWWq65bZxNn2EtREQ9K1lIKzhgGrnOIvU1KbxFjtELDigBNGncltsscjb2ZhsIBHjfs1e73GYRMOvbzPnXjpx78sDaoXutFBr0zHiVAVxAoyoaglp34+qmzS3jR5QzukNhbjPsYqpwhsoZBTMP0rK3jZZDLQpd0M6qSsDn06fCFi24DnPgKtrF9aMp82aDs+yVNZ/tS5PO0tXIqGhRf7No4XM6jxKfM8vfrHt+b0Zxwv9ZANOuGE9F08AM+8uYNltus/m8b/s4KqqaeYCG4/UZMNBFbXLTZmW0prgummnTATNPOXMjNT1Qg+2Gz9nl19/0M3f+4sM/nTnXxWZNSzmrATbP7GkFE2RUMqkG6JCwNrkhNnOhaX/j55nktA3OMpf8fLaFX87/5pZvLc4K3geUbXl+EV8z/Dzic1ZaR9M6qxG1TDJzWgEBpUXPYZ5a2SYL1JpJcz7v2z6OClUzrphZkMa3wd+1aTcmUZuBg4pEa5rqmQVpzvgU1KCpC2YR1cxJpTFVOOM+ZwhkGpgNparR85D1UYN9I8pan4qadt1w9Sxj3mzRmoGnwZw3gbyDz68ffyTjawZLwnOcaZAGbVEpq/U5i0ZqZk+Z5W/mBQRkx8L201LOmkmz9AzN/34Z1czzN5N8z6L+aCcXxqMTBy+Z1QHgbHgRm+4Z26nampNfmYrPGWxXIC1buqlbJ3chjAb3feaTY9jMwctSzrKQFsmfVpqaA+YeUdvoEvQNalaajiigNTiruYp3/77wy/lXj99+Ppp0NnLEXmBACaBllbPuWbe00EV54suL5NQqA8D+nllzWhGbMBcrIEA6Py23WeSq3XttJF8zWAVU0XBFLD80aBMJHqDtpJXekpAWGgRKOEUUtMlYkp8Z+Jh1N/dmnrNkbU1QzToQ2i/kSfMqAwSqAuDcpw5n9/z2E2MIBJBUMw5tNaZO6ULwgIyClwZh8LlXhSCS8DbzSPACB3hfkeoBDc4yZ2D+2taUaoLViDj/l6pmpQXPPQjzzmKkpmYfEZsZ5cyDMs2s2XKbeWd7726nec04iHFIiwQKcACTAgcsSNtSazNwWiicQXM3EABBLABlfHgrfYZp2uSQBh0nqwTsCJzBPCmgRaGMA11WUbPOuwdufeRWo2DH3weuSbWJBG+e/1mDs5oV3/37liSdtY46qppJ6pmnqEVTaMD8SgAtqpxZYJZJPovrmCl4nq0K0Mo17f57dIgjgGoAX7ly6xMAUNpL8kOj0BYFNuzfM3tOojZhh0LlbGhIg/5Dec74omq+Zwhr2F4wbWYT0HZzrLlo4Evh9mMXzwBY8VcU2Oh+JYA2zQACagKl8x66bJRn3jy+7/WnP/3+D72n5ly2fXfnCkBgznOjWx9DX7MrB/eNMn5nko8ZrESkOkBmxTQ/MykqswTK+FwiQQCwT4kpU4rABOCCl7ZNK3weWcNm0oys0t5qgzU0KZhpoIUrEwExK8WGl9gWxun8zhY3TYRQ0kl4VeU5K6gOoMFYUYUAzZTpBARMHc4+8Jnf+t19o/HdkgoGC4KAhu/hf8m8aX2WAbYSUMNrJxtMgNGesD9WJBgS2CxAa3C2tx7M9Gh3SjWLrnjGrJn1L6Nz4DAG2zKmTdpXX8oZhzX421LNJLNmM2lGr7S91Y4HAXhHT33QIv5o0J+XC02DtUlCWmdSGqThbiETJzY2fM5EQCzNc4adJSCtJMdZB5TeSbW2A5xdHy/ezdtwKKPKGiartYIIeH8ZQJNgSzqGSEoOBC8ropNuk0CtT1XN8j/74w/cU3Uua66Dtu/OrABXzWpn0Xc6DT4fz6SJ7SXlLAtu0chNHLMWyCiI4XsKY1kow3k1k2btVT1/+2Nxc+/INAiD/UpUtGhetC21NoVJWlDmAtlAylmohBMcSwLK8NB3FM54UABMSgI06zMpsKAvRY1eH54/mtTWq+MpwZsEarTv0qhPLUHt33323MmHH37wgnfDtu3zswJ9qWZaOg3P96x0JSNRm9B3iXlT8znTIjUlKPNAzfIvkyBNi8yMJKD9w4ff2350lV5oc7ifZM6ksMXfW9siClqmcDpte/qQnVIjEqUZBjU4yGkqZ0lAK8lxBodUdeNDlNjo5tEjeA9Q+Mp8Rks/lShqEWUtCmVeqSnudxaJ9kRQk4CsBNKk+pstEe0cPomNQ6r1NcOusz5nuJ/n+N/9yDSKntPtNFUG9p8Fs9JAgBKfM5xjH2WboK8Wpbm37t2ao4XozJcv33JvTR8RYKPKGrSPqmbYtoOzwCsdrcmVsyCYeRUCoBs3GW330BJynHF/M/b3jsJZBMokdQ2Ole+rpeaIRndGQE26ZqLwRkEL+4nkSusz2S309er48Gh1vOGE3N0Qr1179KkH7uuK3rbX/K9AX6qZtFKR1BqlKxxRzbJgJs0lknTWU8gix8gDAGCfSC1NaOdFbbZyTZEzsHfaZP3MYGUs0yaunBfRSfuRzKHd989ovMVUavmdcdUM9k9DGkIZ5jUL1tTEY05Ha9J0GknlrCSNRrcmNZc2/HpfO770GPbhmTcz7bL50/rOo0bXJeKfVgNoXD2LqGk8QKAFBdRcybtrX83X7OrN+0c3n1/pMvlnXxEgo2pZRDnDOUSAjM83C2iZgAAOZRn1jKtldN59Rmq2ck3ZK3i+20f9zLRV8CCtxgdNSq/RpdS4ftO9IyVicwJJi8tbcpu5pkwKZfgeOzMAzVPOqnzOnEjNX7/t+4pcjnqFM+v2iChnXhsrPQeM3aePWkZJw+MuifiUoI6uoxVQQAHt2muLzz3zwLveNt+PqHZ0sAJUNcumzqArGPE1g/ZRKKPtpChNDmvwd02QQORqsBS07tm+WQQ90hdvk02pAftL/meSWbOVayo5I/O5jwRmhxbg+67+eDm0YY9SdGcU4KAPmF+XUsNJpxHxPZscZWGFAGmV0spZ97DaNGlOHmQBEyekF/nnP1fEWUU74dzAOfE/3nWTWGxZMnXSRdLMmdgmAmoUyCLKWanJk59cq6RUX4AWUc9gXhTQbr1w4a5PPfTDz9bfsq2HWV0BqprVgBk/Psv3jAJaRjHjMBYFMdivVjnzojVhDJ6INmrm1KoCQJ+WeobrEQkEaCbNWb0DpzsvWp5JGrkE0iQgs4qmw7hRcybOcVspJzL5qmhN6EeqremYNT3lDLot9jkzLonSSE3osgrOoAMo4WRdrloUZgbUOLDx8bT0HB68RWDNy53m3ap9w5pUTgoBrQUFeGdjd2/vamjeefoPXllfOsMTzYJJ84ZX19IHGFHPSks3SZOxip5LCWnTB7S5g+dzZoFYLaRFfM4Q0CRQaybN0rM+X/vB/f4jX37hMQgAQAjj/8MRlwAarpQFahKU0c80aEMzp5fvbCcgDY87pJxJfmbQgRUUwEycOwpnYGI5efPrZ7K3hRdEYEFdRFXTlDQJyCKQJh2fpqB5JtEa/zQ+D4Q1SLFxYGG1VQrIXoi7qD1ERz+/fvyRaAWAm25bHr32zc3CwMJxRiI1oyZNaxmH9jnjkZo4F089i0IY9pepo8nhK1PovJk0d9FNOdBUEcxev3LLvWC+pACmwVgNpEmHkUm1AfvzoAAt31kVlE07zxldmEhQAFvI0khN6KZaOdMS0WauWStpLe8nEt0pFWLXUnR4FQsyx8Hbemk5oH0pqOG+dEwAtSfe/+Hqc1pzzG3fYVYAHtb/5pZvnbgQ9GnSpDOWAgNgewmkcb+zCKRlzZl8ta3AAC3XGfRRWgS9NJ0GjKmpZ82kOcw9tJt6/f1/9BtjKIVEwQzgC17oayapaDXH6EVtWn5oMC7f/9SRl548sHZITPsR8TULBQdMfoltlowKRG1S1Qx2d82ZEV8znAdTzkojNXuBM5rrbHm0NDo4WplcH/zvzIVTopxh/1qy240Le6lL38FfEXjz5h+BMamPEkCDfrCEFN3/tfMHP/LZBz/8uDfXtn13rUBWNcseXaY6QLZv2t4ya06eb0sLXaAAf2ngVpp4Nquc4Xys9BnQRjNr4v6Wz1kzadZcXbt/X00x48oZhbQ3vvc2wC2joGkBAdhnTZWBLijgoJ3vLJ1Co1I566BHKd0UhrRIrrPNBSyN1OwdzvCE9gFl0m2mBRl4KTyilQk0eCs1e1ogBtsigQXZ6gQXLx5t+c52/zN6yxF88Df/wzv+bN/tz4A5ExUzrpz14XOWTaeRWWaELe5XRoFLex8dRzJjwr6WYgbbM6k0pLlYFQNgG7wklaxFaUbP7N5oB/f5//7pS8+gQkaPGqELoczyQeOwVrJ60dQbHOK4eiYlo+09z1l3k/vKGUKZBWjiWnHlDBoFc52VRmr2Amc81xk/OApqJdBm+aZ5fmswF81kaqXlkMyiGrhZF35JMEE0gADG1RLbfuJ9DzTTZskTaUb3+e5f/vzjF44t3R/1NYscRiYQAPrLRmlyEybOSTJtwrZaMKPH3LevGe07mz5DAjBLOWsmzcjVO39tIF3Gpau3PIFHljFneqCWUdK8lc2aNr1KAdXKWRDM6HENopx1D7HDG9C2+aoJBugNzl47duNjRxaudVMqATDvgsDtpcoZhzQJ2ih8WSWkopUKMtBmQRzfFjGBNtNm9Iqa/Xbw4+fs8qku0bOkmpUqZtqRl6pnEXjzUmmU+ptJfmbdM3tlXfQls1Jo1Jo6YdzSZLTNpDn79+MQM+RgxsegqtnG99QbpkvL76wvKIuYNmFeUroNLWKzF58zzcSpnKRqKKP9asoZaVMTDNALnEEn3/fpp8aLC2uqv5nli1YCc5kcapZJU4K0TJTnhJAVP7bsjRyFNA/Q1kcLLWozu/gz2h4Tzg4RABABMViWCHhZyyepaPQzum8poNE+JCgrzWlG+40WPC/1OWtRmjN6Ew40LfAve+D5s/9sfO3ER6+R2DwOY298z2xAmQVofNvGd1w/vmiRhLU4V2zbBQWQSgE0UrMDkClVCKCnsBrSgibNmmCA3uAMvkAO3bR6BtQzC7Y8EPO283skkkONAxj24alwvJ02Fs+xpplEpfvbCyCImkUlWLv+0r6WkHagh+q0ukXVjIKZ5nPWx5wisBYFtUykJsw9Ytb0wM3yOYMxvIjMrGr2/7f3rbG2XddZ+77Ovb6+ft7UTq+NSdPIjdSG9k9/ULlRcKRiqUolEsf1LyIkiIQKEhi3lbAjimrzA5U0UhKB8gelvwJxQCpEciRiQhu1QJBo6hRFbpOAlUed+Pr6eX2f56Axz57bY48zHt+Ya6599j5n7T93n73me8611ne/McY3Il8zT06DxiPNm5NJs8cp3ow2PP8yOQPN30wCNo1N48CMtzk2o8ZBnBUU4DFnNFY1UnNghgBEiFY9PYiEhpLCaUgwQFdw9srW1r133fBaYc8qyGoFalmQFoE2C5BlIkI1oVsk8rNHMAGipyYB2qWXT0yBAZvxnFZHWaUzNGAmK7SYNlelccbHGpk1JUhDtk/TOPOYMw2koaBMi9Kk9iKQxudh+ZtNJk1ktw9GGUpgTmwZzYYzZnx2FnsmQVlpIzBzWhppLSAtK1ormTO5gxpIq2VMKY1khgAeCFBAjxKtGUZqUsUkSBsSDNANnFGY/7e3bn/slitXniNBWgnOWsHa0GACDZRZArbL/7O4WiQ3tI8H0rwUUhlGrccjiMDaxJ71WMn9aYPuqR+8ectj1PuYbBmfHaJx1rIaiFkTYc68vi1ARnUisNYyJwSUceaslqd/tcjNyaTZugubU498y3aOzH6DhGUzo7aYMySCs4I3+rcFjFnjjKI5a71bj+zMTp98fU8zg4Roa2sDQJrUOnP3A9E56xwM0A2ckfnlz0/dWZyW7zx1ccbNmy1AzVuoXoBNAjdPjgOJGEVB2+7Nsqu1lmXVMgxa6WdizzLPwLUpW6UzaEA1QhNh0FongGqcoSZNGoeW+HwVkZocjNXv9K8ll5GV0RhL42wyabae3vWvV33L3rx0trBlvT+tIK3FFy0auyZkyyM2LVBWWTLOlu1hzmQAQLnBYwkNOebuzJmyKEODAbqBM3qZPHv67mfrGMm8WT+RmVNj1XqK2fJ1QzMRIPIbklnzpDn4GHqmj4pulIk9i1ZoPa/XIAAanQfKWsyZfMYZOY0MMJOrmmXOZH3P16yVMUNNmXUsMhOA9nuU9NxK4TSZNNfzPuwxKjJhEig7NdvZY8LUfov69PzPat3I/2yM9E+emK2U08gANHc9GpkzKK8mdYzqm1XWjLFnQ4MBuoEzauie3/+fC0lvzfeMylSgxr9z8CY3QvM9Q3+LDnm97pk5PTCHMG2aTxv120tHjc/RYtUm9gw9CetRrpozpSkTidaMcmnWGVqgjK5z0yb9LUFZBqRZ2QC8BOeR0z+yS5GEBm8jChLQ+vPYMyTpuWxzMmkiu7pZZTR5jArGWkCZN3tLE40zY7vvnb4SHFH0Zr1uaZ01+ZvRRBqzBNQ1TDNniFlTbNBQf7Ou4Iz+t09BAXWMEXvmMWZoQEBvoCYBW+vfVM9i0iLmLGPyRKM5j714dYrc3IBne5Q/c2zfMyRaU1tGCdg8kybVjwIDsgANyQzQQ0qjzr13Ps3JpLkBNyc4RGLKLrx59nHytSJn/wiQRdcRUBYNLQJlvcybFljzsgQsANPxXfOkm09TRmvWyhysOYthZQioVVJBAU4Kp6His4s1iTYWvV6DAmp5Cg44c8vle6VZk65zBo3/rZlAkWACbYwowJN1PQ01eS3SUONto1IcvE4GqGlrUMHbpHuGnuL9LcczAbQwZ5nRI0Csgq6WpOd1LBEQ42POgjI53yjpOZWX5syMz5kFyiRo4+wZXbMSnNO1yaSZObXrWZZYsms7R+/j5ksJuvjfNAsO3JbeE4r5E5m1B8CsDAJRFOfQAAKEOeOATPqdhdGaEpQZSc+jtE0hKJNAjAbNfxMb1MPfjJrsluaHBwXUsVJwAInT8o8FwKIydD3yT2uV7rAOv2XyRHzXULNnuVGZiG0EyKLr1lyuvjSbEqIjT7l9KkN+m39x9cef1dixMf3OaLoeUKvLkTFnakvogbRekZq8XyufZosZU5tPJJ/hATLue7ZJJk1idh/+9vM/T0CE1uTY0e1foH+vXXzb/QQ+kM+10+efqeWubx/9o/KeO7L91c+9856vPfLIQy8hbaxDmerkT2tA0Zdy/hprxs2Z0rTZ29SprZEF4HbfQbs1NEA2BKQRQNOyBER+Z9AeJ33OeJsyWjMEaLxyANZ6+Jt1BWd0WD/xrnecl4tq+Z9ROQ+oWYEESLQmUgbafFEoEq5FwJzWrxbpyUGbB8jQiE9i0X7x69tnN+kB2LJHm1oHCQJA/M6Q+Uufs1pH8zer4A1pt5bxfM3Ky/jqzpLobK1nMWdIQAC1ETFnFjBDggNaojS1AIBNEp6tjBABkOMXz95/9PjV2fY1XWKoXuNlvPLWeargjYAbgTYqty7Aja8HAVI5hwrI6u8eQLPMmUPMnIt+hW8ZH6cXLDAWSONaZ2iGAJg1Kzc+FrGZ9jVbPNAu7ubNLA+v+XeHOevhb9YVnFFj1e+MGLMXLu1ORrJnnplTu+aBOCpfP6gZsydwi9JI0dgsU2iGWeNA7a0bcFeOQ7tmPfim4IAMxFhdWWKdn5vd8XmSzbBYMgnMhkZq1tlZrBldp2v1M4Q5Q1izoSbNOk4r6Tld90yamd3OpHGidi3h2TfPnPjC1z9634OZvscsW5kx0uIqKXdozeZgjIBW/VuCLgnMWkAZOi8CPEdOvfTEKtg2DsYqOyYBWHn+zn3LFs9m8TcvgwA2vhYooxalfNKuIxIcHMyheyTLaVpnUYYAuC/A3wwRoaX+YPZsBf5mNJ5uZk1qTPqd1QXm7BlfdOl7RtcisycK7qgtFIihwM46MJ4/WZXciEyhCIgrN7liAl08FIAcn5N5E77tV1JQZgIY29esgi4CW/LTizmr7UbRmrL/LEDrFQiQMXVqwIzmEclocJBWwdqNd7++Fq4GVRyVs2MVjPE9IqAmf6+/8X+pjsakjXVDEdvGTaS1n3OfevRLXp8VjNYyZK7lploNeEVz4EBNArEIpNF1FIxF49CuW1GdpV+Rf1OaMqPr3ngKc3b9lCq8iyRAX7StRWlWPzP5rzIgLyDABGYOECtsmmDQevmb0fC7gjPN74w64ewZAq44SOPfIykOFIxRmxYgy7SRvUEiALZ7k7wlTiuBXSTNUW5+IXCrmT1/6U/fnMyb2c0bqTwFAVy64diHUF+zXqZNPp3I50wLDPCWAzVrUhvSxDkEoBVQcHV7Tw5NK1ITMWfWebaAsii35kOzH+3bfVh9pm64dqZJGFWCMlonDt4kWBvp9jGbrWmRND8vzXTYExRp7JoEegiDZgUVeGsZpX2qdWU5JKCgdQ8lcyYBWQEiSLSmHIDmcwYMEtY5i9pSTJtD82nyLruCM2qY653xjjSAJkGYBcpaAJqVmUBb76HMmWwzq49W66PRoG/dYLZpU4Iy/vcUvRnddau5Tkzzt7ZvKymauEkTTXTeYtrM5NREQVlk8kQjNrPAjO+SZc7sZcqUJwKR09BOUQVs+2XSrCxZNVtmTzrKnq3S1Mnn4JkYEUBEbfUCalnmzAsYyO5TAYNz3zP5fWm9lDIIUMvIb1j5NS2dM1dOgwbvBQIEEZue35lr1pRATGHNaGi9/M0KYG3ZdK8O1zvjvmdUh2uf8TYiuY1IYsMCdVLgthWwtcp58DmiwQTl4TBnzyzQprWr+Z+5gQRTaqfeRz/VnhWdiQKzVGdOYZQ1Q/qT+mZIZgBqN4rWRAMCynN7zpzV8dLf9ImCARAWLSs+6zFnqzZpDgVl2v63AjXkLA0to5kXC0hRtMfGdM6P5oGMZwymzwNuCDiT8/IiOuna7SdfK+wYAa8CPJTvHKxRGTN90+LmvjybERgrN/48KCBacCPxuVlNyxJAhRVzZ0+TZlkjYC6pIpbfGTVStc/ou+ZvJn/3fNLqoDRTJx+wBdBqmRYz5hCmLQoisFi3yK/NMnnWeWpAbfI/Sx3tboUJmD1//I4vvLx9oog2e4EAtVNEgBbJEIBEakrGDGXQrAVCcmpS3R7MWSShUceIgDFvw1EpDauNVZk0yXz5q995/vNLTNmxK7vDur41m9F3/m/DKdf8zrzozd4BAxmHfJoeAogalsGsEvUXjYmuW2xeluXzzJ7ZAAFUdmMdmLMCdo5dLk7//Dv9Rp8wGMDzPZvvfC8JjXqQuoMzmWdTnlhP+8wDXJ6/mQXqIrHbWo/+RXzQrLuvBaxZYKvciIw508AcAvDKDW8kWOcmzil7QM/HMNYWscsaMLOCAcbwM6ORZoRosZktl0KiNKlGD1DGe/ZMnFSusmmZOUU+Z7UtLzBg1SZNUqsvPmUcgNWBasCsA1CrzXs+aTwC1JLmyOyNVzYjb8FBkCciW/3ZMv2iZVF9tJ46aZb/2e47xA8WQMyblTlbgI4W1kxbQNDnzIvWhICZ1rcC1nqaNKnL7uCMGvVMm3Q9Mm9aBzli0rLBBpG51JPqGCt1lDb3SD8te12aQCeA1utVELfzS//lP/+3//eDs++lktkgAA7SWvzNOCCTI+2VUzOTukkCsyxIQ/zMkIwAEYsWATMkUpOv99gmTTJhntg+9bR6GiUoo0Iac1aBWnykFyWyZs4ClB3ttETXi6KIM34tHPmEcbDGx5Jlq6z+vMjOCKTVNpvHwnzNOAjj80SZtKW1EVGfdE1jzhCzprr/UV5Nw+esgB2HOTNBGjdrrkhCo857FHDmmTapY4090zYiC7aoDUTY1iuXMYN6D48WNm1xwykRm9E1xBy6eEgIOY6tI9f+4IE/vfi3JoHaltcBXidKar5O/ma9TJm0OkhAQBaYWauu+Zz1zKtZ+0UCAiyfs7FMmosIzJ2tvRGYFYBxMMa/e0wafsSXSlrRm1awQG+gVkCHo0E2FBy1AqMlAKRoovFxRyZRzuL1ELDVgFrkg8br1EwDb72vdr+Rz1kBSIw1439r0ZphYABfSNDnrEmIFkh83tukWdam8b5zq1mpnKowLVVGAVo0Ps/nLGMKzQC2OibEX20ISJOATK6FJ7tBZb0ghN0bajfak/6dAFp00oZd/7vP/Jv/+vVr737fqy+cLIwZfbQITc2E2dOs2eJzRmO1IjKHRmq2gjJLMoPG2uJ35rFnFjNGfWVZs7GiNJcc/qtPWXRkERatA4MWgTQ5zDFAGgc8sr8MACrP1cb8l952RCyeJ6vRazyeeXP3fWGbOD0dNI85S0dsDmDO6vpbUhqw3xk1JKI3e5s0RwNn1LAlqcEPaAagRY7/td0o8pODMA2QWe1UEycSuYnk+BwC2hA/NERTrQK4CtQmgBa9zdquEzD7Hy/9zLkrbx671wNm1HokQsvNmUgAQDTisaI1Na2z8kxTUjdVgCaBWgtwQ4BZZMaM1qxeR/zLJHs2hkmTmzElM6HOhbNotQDig9YA1GrzHkCTZcb2Q+NADfVJk3U4SBvCWEUZB1Dg2BrRieiiedkFrHRQu++WXUCnZQjg59ICaOF9CPqcSVBWgM/cxClzbIZ9KqbNSxfvfOauTz76/rBussAozBmNgcQ1L7x960PeeCh689TN1+6VydHROVjpniTA0kAYImjr1ZNgzRrzEBAm20QkNpAyFZRVkVv+NwG0Ey9e+bUvPvzBb6D7MJWzV4BMmbfd9vpj/+v8XymFPLZsFQEBms4ZEhjQssdoQEBL24jTP3ZWchYAACAASURBVAdhkZSGNwaPOaN62nWrvd4mze/9w9/5MqmvWzIF4dpKoKaZP+m3+hkA0KgJT6h2aF5Oa66WHxovH5k4yzNyzpj1YKoiUEb9RWPyxjNkjJbMhpVhIMoeUJmzIydfW8hjVJOl/Jfmrf222CvJnNGFILem5WsmmTKVOdN8zqhPBtLGMGlSF6OBM27alLk299O8KW9gxEctivr0Agt4fxKoIWbR8OE6L4AK2HJTpgbS6m9TkAC68no58v95+q+d/o83Hrn03v/z/buWGLEIpNF1acrsadrkI+7JnGkrYWULoLKSMcsyZRn/st5itC2sWU+T5kIiwwFmEItWN80CZTLSs1F2AwkW4ODNSgs17K70AU9tOwuKWpT8vXlEQQ0am2aBx56AUo4ZNXPeTur/hqk91DaLNlzm1nQCAmpTki0LzZl8DCuI0lyMM5r7kOuIaZPaz5g3o/EgPmgW45apS+NAQFmWOcuWl+uByGx4+T65H9ukgxadNv06yclcfdvWp+84euG9X3/pJ57LyGZIYNYTpPX2N5OzR5gyC4BlgRnvO4ra9HJnoiZOT4CWxoKwZ71Mmhow01Li0LhSAI0qeIEDdJ0zZ40smgRqnk7a0j53juzcAzaA4AEOjDgg2vMc7uCX1tsPrQeb1iK7ceb0j54pOntzgGalb+IBAGowgJdbsyD7k64YbbPOmRMQ0Ft4lp+j0Zgz6gQxbdbBVIB2befYjJs55d/Z16UldlvbQSJCIz+2CKRpfmooa9YLrCEppVSgN2USSB05Ama33fHGs2/s3DC7sH1m9q0Lty1MmdRQFASAmjZbpTTqZFDGLHL4jxZnCGCL2raYM6pn+Z6VZ/iJo7DWmYzKrGNCRWirzxnV+++P/I3Bz1vyL9s6euRp+fKyzESaInu0ruU6wqRVc2cjSCt7wZKpo2K20PgHFEL90BC5iwwg8syvnhk0w6TVZUHGhQrWUpsei3buBMacueZMbz8le+aUbYrWrO0prNlYJk3qcvDDwlsz1LRJbQz1P4vuRc98KYEab8syaVIZxG9N801DAgbkfIaCNG19NMCmieNSLs5JaiM6YbNZ9S+jkm/unJx95wdv2xOZmQFotcdeJs0Mc0Z9c2CWBWlo6qY6R405Q9k0JNm5BspaQBoKyuRp6WHSrMCstu0BsihVTnyaxwVoFnvGARvKqEFzUQpp5staDJHg8Fi0oSKxqGmzACMnJRVd752zky8lEixQZTQK4JhLaSBRmqaURhSxKfbaE6HlJk3TvKmlcJr/dvZf/fPRMNRoDdf18UybMvemZM801mwok6bdyKjkBloOAW51HF7055CsBR4YizIQaHUpUOD6Szuf/PJDH3iq9WF4UOtVMyb5l9U5Vj+zCIxFTFkvYCbXHgkCaAVkta+xWDMJxqg/y7TJQZkFxlCQNkSM9uy5C+8ZEmRDZ+yzf/SdZy12QTMJ8bL8xejeh14kJ1VEojobb3SURSv7PbKJMwJp2SjKxiVZqpZlzyxQ1grWokTqlmjtuVO7GmfWB/Y749GZ5RAouTWTpk1qpgWUUUDAmCbNcr/2ODReGxnTJrVDAI0+PU2b1vhQkyevb/mlDTV98j4yLFmmrLdPUe7ORd1XZk/+yvOvfnwSrN1dEWLL7r79R4+RGbN+/uLC2/f4mdVrmlmTrkX6ZuuYHQABb1ZeTX4WUYYselZFvmdUHwVitS9LbJauRyxabeONe0489+yD9/1UNH7rumTMeDkPlJUXz7WTbpLp1JgiUyc1NsDEWceCgrQxAJrFpmVMnTQPizlDzIl8T5CoTiqPgMWhbJ52VjzmrIxrZzaT4Mxjz0K/M2q0AZRRtcik6QYGyKjN2Wz22Tt//uyY78HRwZkUpJVsmbbhPECAM2X1u/YbtdPKqkUaaijw4nPJRIFqZXlbkc9a6gErCkcBBLU4B2/fe/m25+7YvvDYYWbRNLaM1ooDMw+QccaMyhFo4yANSXQ+ZN/HYM7keCLTJgdlLQAta85EpDWsNY2AmJUNoLyo77n85FcefGCvaj+wgZUxi4pmfNAGBQnQQCKQ1pCj04vmpC6t6E0twXq0VkOuR+AtMjEunqcDAwa0YIHadhao9YrotHzUuFlTrj3MmmmbBoI0ada0gBp8Lo5fnI2lbcbHMDo4o854rk3euQfUZATnqkycdXwWq9bCnHl6bF4wAcqKocEF0eGLMg6UF82Rq4tmDqMvGkXK/f49Nz9C2mW0EORbdsORy+VfAq2vbG3du3NpZykIoIIvJDNAa3QmIkib8TnL+pu1mjBbojdlIACtr2TNygt97vifZcsQgFbLIFGarSbNGpV58siR+7UxoYCM6nZl0DhAG0EXrTWas5yDzuZOzy+N+kOAUHluGhppGSatpx8aH5M8W5kxybqaFpoEZ83RmmWD56bMgRIaGksWmjcZe3b58k0PnPvUo1+K3qlDrq8EnEW5NmkCGlDzTJxeVKfFrLUulAbUENkN6i/SSJNlULCGALdeoK2CMi5aW9eyALqXTxwKUyexwDefvfx5CcoInGUjM72k51FC9KGRmnXv0IjN1vtGJkH3TJwtzFkdVw8GLQJkrcxZayDAApgdu3L/QiKA/GkaPojQpwRvZjeZ7AISxCXHjmqjFSA+j/pcRXYBDsr4lFCg5gGj5BLtKY6aX+scPOCIjsWL6iSgd/rk625Tg9izxUPg8u63pM4ZATL6ELuW+YwZCFDHsRJwRtT8s6fvfrZ2ipg2a9m7bnjNNVf2lt7wNsjzUcuYPlvkOzzTZwaEIaDOWwONXSs3+AEGaRWUcZassmUVmP3gL29xIzPrmqJSGlS+ZzCAlhmA+kDMm5mHFpW1QJiVnikLzLSAAOpXA2nleZ2QzojmioK02k6rthkp/5+swCwalKKqHgGy8kISSait38zuI/MmVdwHXbTe7FkFMgQ0vO/8GgrUWk2KXjSpNUY0urR1TPycVMAWaZwhUZtL568Dc1bBWJghwMgO8MalW56459OPfAy4LQcVWQk4oxFmAgPQKE6EIUMZtswqoj5q1CZqBs2Uo3aRHJ91Ti3SHeh6qJkJXj7x5I3XLn5uSHQa2v9Y5bj5kkAZfTggq0CNGLMKzCrworL8O/8bSd9E5SUw68WW8fXqyZxFLBn1iwQHtO5nFAygmTgR0BZFaNJ4LdNmayDA87/28d8+feLS40uMmZa2BlysCKh5Ziawi+ViaxDRuUpfNMv/K/I/08yHQ0yKCIj0fOao/pAxaQxaxJxF0hru+Wv0ORuUIYACAe766VEDAeqcVwbOZGAADQBl0DTzJt+0TNBA08MGrIQwaxKwWQAOZeIsRi0rw9GLUVt6+W+g/AZ39OdMmTwCGmOGgDILqHFAhgQDID5mKBDT/MuyPmfaLRKBMSvheXS7ZYEYAsKiPiOQpgG0lkCAEpl5/MrTKjCrg5SSAsbgI580qqZppS1eDgqztqcrC4hRQe0a/d4Q0ZnVRaNuxsrVKUGQXBMNAEVCsRowGgrU6rii8ci+e/VL7UrmjH5DABmscVY2GjNp9sgQcOnKTaMkOddu4ZWBM+rcCgyoA4vAWqSDhrBkWsQn9d8a6aktasSCcUCG+K4hfmhRRKcGvoYCMuuFpspyrDGbVlmyrVuv/eLR2c57K0OmAbLKopH/nWTMLOZM+32/zJtyThp7RmUQmQxr/zNRmh4oQs2diMYZ9dMSrYlIaVjMWTbJOZ3Dv/38X5wva1J9Z+S/9Vp9KQF+aNaLrkXE1tuvpWuRybMholP27UlulGW6dqJUGcPMaQGylmjOHuAoktyIAJqVH3Ro3lAvUhMFauaZs0ycziGN5DSi870q1qysTTSYnteRwAAPqGlZBIZGcfYEZXKtIh21Wr5F3BYBbNQ+CsAyfmvZM7FH9PblE08e2776J7/83TefGVMnxhsnMbnXj574OYq6rIDLKq+BNa7+z+tFAA3RObOYsyE+aJrPWW9/s8i0yUEbrVkLcxb5m5WX8dVtFYjVfcoyaV5eTQuYtQQCFD8zisyUTAAHaBKUgSwaVbPAmHWNvzyz93wpL5kz+VtttIFJ4+NZF100PqYsGJIATfsb3QMrqpPqI75wiEgtyq61RGry87hnztKUyQMAgGCAcqaPXV4Iz2YyBKySNVs5OKP/GX7iXe8o/zPkLFnEmPENqiZO+q0K1UZsmLzu6aUhfmzoTSLLZUBYrZth4agOAtpQIIaWs9Yj0lCj6yQ/cXb2+ucJrJ3avvrNMfzUyFR56eiJdxMYq+xY6x5SvT976Y491RF/M6qUYcyo/BBA5s0RYcx6smdokEDLvkSBAK2SGlpeTTQgICufsfAzowXQXjgWk1aZswRIk2ucyS4AaaStIKJTi+QsS8eiNjW/s7F90VqlNypw8kAaCoi0e6gVsMnxZMYQ+ZsVABKkczKfB1q2AHnviMppUCbqr0I+g3e5UuaMOs4EBkgQJ0EazyJQr7UwYVHEZ0ub3ksGlebIgDmvTQ7YaFxWMAHCsiFltLlbGmq1LJfpoFRR9PuVl4//If1bgRsBLAJw3r8EwKgOgTD6l8yU6sNq58RCs4365vpt1t5xU6YGtPhv2nUkGCDyN2sNDIg0zsqaXdsVwkVAGS8jGbO6fvx3yZrxNUbNl2U/56wY/476oNU+NfOmd79mTZtZ1mzhZyYHEYG0sggshY03iSRzRk156Z8gkEaNRObNcoNf2S0nvwfzWewnS54uf7PEa8vSddZEM58b89yX9Xrkf9YjWpL6yqR74uWjQAYqi45RM2vuV4aAuv4wSGPRmqtmzWisKwdnUlZDO9Aok8YDBbygAIQ5o3EgPmtaOfAZsqdYRug20kuzGDPq1GPT6LoEXNHfdSKtQM1aL41pi9g33pYGsDjwqt+136I9pDrfunCbW2wIe0YNc5asR7oma7CIObOCLwSo8X4QMdpyD504shS9Ga0/v+6J0NI1+rRGZ1rjQE2bVD8jn7HkZxYtgseeaabQqL359ShwwAsaALvYW2xFEZ3lLIBsWvNcAiBE7UYRnbJMHYtmYsywV+icEHMntWX1bUV5WhpnEtzT3/UTBgPUgsloTSsgwE3bNO9r1awZdbtycEad8sAAFIhZh4x00OqnheHK+qy19BHdIFpkplanNYKT2vJYOMms1b7RiM+xQVqU91OV8wCYsQi41XV4Zef07KW/PL3QMau/SyaMfvec//n1jO9ZdH6i6xZrRvUiOY2obeu6x5p5TFkLi4YEBEg/s8jvzIrOpPlqfmY1fVOWNSNz5o2nXnm8imHuWU/pRxOZN7UXl7OJmdycFuMBnZHI/0wLEEj6oiERnTRWj02D5tKhUASGqAsqQ58MINKGhvi/1XrRuCzWr9bnYy2RmtdPqdktCvgITJoQSAMjNev4LNaMrnsgbRWis3Lv9gWcabIaNLAondMLl06X8Vs6aHxyEVtmsWTo79TXKvzTLOCW8UWLykbMWl1XBIQN8VOzQFZ5QJHI7c5u9JX3t8e+aSCvPASFWZMzbOdfObNIYl77lhpm1u/ZKE2LOevwLlhqAmHOqALKmllATLJjvUVoaYxDTJqZdUWZsyxr9pHv/dl5E5jxAWrOzh0jOrW16O6LZi34Clg0lD3rZepETIoZQFSeeUYKqMw5tsoi40VFbOtYTx+/smuyVj6cOWvOEAAyZ2r/RlCAVnY/WDMax76AM+p4qKyGXETLxMnLRb5ltSwaYCDLW3/3uHlqG4j0BpW1zKDaNf4bCtSoDgLWMuWQdYpAWnkwzIFchlGTJk/6m4BZzZWpjS1izqhOBNBqu9LXTPM96+FvFjFlreZMuT5jpWrS9gENCJB1M+wZr2sFBWRFZyk689TWa/fzFDIhUIv80LRoNhp84JuGyGpEzFnaDy3yRxvgizY0YAB5FqFlLGd8NNWSBEUV/Gi/o2PSymmm18j/TLJ6HEAiJk0rQwCNbw9zpgkxg8wZIqFhMWf7wZrtKziz2LMhh0uK1UYgKwJjEdhCwd6QOWmgTLaHMmMSmEWsHBL5yceCsGYooKvtRkALLWcxalRfY84i/zK5BxEIi8BXhjXLCtBq5w9lz7Jn19M4o7boOn1afc6sPJoFfzAJDc/pPwJlcs5jsGYUBHDy5GtP1xdCCMr4oCIWjYOxRMCAt9cRi6YxIfDZQUFa0sy5tGQsaGA/pTfK84YFCETfI3C0eP4lWDULFPL1QkyhnokzitREgwLcM7QC5my/WLN9BWfUuWTPrOTnmjnTMoFWLbS6qVJuIwJkEaCLAJllTi0vpJ1jC/kP+MGlFPTYMwnANHDn+a5lAg+obQRsob5rLWuSCSKwgB71y9uxgFmUkonascrwaxl/sx5SGkheTRqfNGO2mDUX993VHROAIX5lSBkLkMlggFYwRu2j0hlZ1uzFf/QvdjwHZehe8DSeUN80paNsuqdBwIz3j5o3B4C02p00c9LvlmhtL1Ont6etYKh3cIAH3DL+aJH4bF0Lz6QZ+pxxJq1s4Mm3sgWIxY6Ys3VjzfYdnI3BntU94Xpo9BuBNAt4WcApU94DXq3XoAc0KxQBKw249QJqUYYCZC4I0KvtRKDMCiKQ4+DtaP5l2rh7+5xRHxazhqxbS5lW5swDbKjvGR8vCsI4EEO+y6jN8uxmCdCHADYNtGV8zTTWrBmoIQEDZcHmkhsNOTqtaE5q1ork1PJ1mudU00WjwihYS9wAVtBAxKYlujCLen5dViWEOYvU/VvG7um1IWMq4Mza1yAYIARlckISpAUT9oICeNX9ZM32HZzRADTfs0wEZxREIPfJA2keGOMAzgoE8Fgzq37LjaPVybBpkTmTgzgEvFk6aksHfXZiSdKDrvVi1FC5DQ+wRf5lHkhDTJpUPytAy0Ebfe/pc0btof5n2TOKRGpmQJnVf0uUZmYuqDkzy5qd/yf/bIebM+XLQo6RAzdz/K2+aIkFyUR2lpcLy83Z7I/mATTqpJFFi0AaZ9aom7HZMwvwUN/RtcQWpoCjLJxh9yx/M3ku+N9cToN+D0FaA3NW+lOCASRzth+6Znvu+x4bO6SNLHuWAW40Lmnm1MbKAZu8Hpk5qTxirkSjQJG20PWOxG6pHVSeIyobSXVEY/ZYswyjRv2grBmVpba/e+HM7MipI7OdS7v+UNpHY8s8EyZvo0V8toc505rL2KDM0jqj8VSfszo2DtJQwCZ1ziw/NOT36FzW617i8xbWrLbrgTQIlMkJRP5oVvobIEfnYszXThbgJf/2ggrQdTbLjcCi1b4i1kxmFegF1KxAgTquKIKyPOtmu8+sjMkxuxctpk4vUpP630+fM4Q522/WrKxRdqPGKG9FbmaAWFRWpn0iEFReFnNzJ/+OgDW5DpF0x+JlpPidWYCsF1BDQBqNLwos4GUsMEZlpIkzY/JEggpaz6AEbW/snJr95cs3pJtr8SujThBfMyqXCQ6IBo/4m8kITdTXrNwzc98yPo4oM8DQYIDaVySjQeWy5svatseaUZl6/cqdR5979sH7firah3qdWDP6ruX06wrUIsFaL1+nmIzGYKB5OrUXMbpWkFlzQESnHIcnt8EBWS9wJvuPojot5ora6SmzEY2jjtsaT9E3u3Lz/ZaMBp93yudsxGhNfj+uA2tW7hv4RhmxIGfPLJAVBQvU4WXNnEsvFQHUJKBC2S+5VAj7RnVQs2rrVnggLQPMqH8rkrOOLRPpiTJjrcBNmj2pnddfOblHv0xb18i/DMkKcFiYMw7WxsqlGQEyy68sK0LLz4KVvol+78GayXMnIzglgwYzaiiLZslvKDeEaWqal43Ys5QvmvWg68yiabIbWTat9Zls1dNkLSQoypgZqSwHceh4Iz85bZwL1qy3z5kc9EjRmp+966fPPvLIQy+hazRWubUAZzS5SPes5wLIYIGobZnDM2K6MiALbSsaY/a6BtR4GwhY4yCtfqd/OVPmAbnIVw0BbUgZPi9iy1594eQetX9k/SKgVtvwTKAt7Bn3NaPvt5y/WiIrkU8Lc0btZtgzDsoQgEZlUBOmN8cMUKvtZJk0L1PAtRNHv/D1j973ILIPVKbqmsnyCGMW+aW5Y8iyaOCEEPaMmvJydEJdrSC7wOJ8KJIb65SfEwVkNB9Lgwxa84ZCdWzF3wwAZtRFkwBtAyhD/MxoPG9cuuWJez79yMcapt+9ytqAs4zvWWTC5KvkMXG1HDdtlpcLY9DkiktpjgiIlRfR3JTpZRRAI0ORtrKnpEXYFgFvCHuGmjwR1swDagTKLr16HGLL0PVDUjVRW14kpmbCHNPfjMaj+ZxxQOYBs6EJzxEfswi4RaCM5rIKOY0Ma0Y5NCkbgHW2pEMyEjAAM2hlQYTMgGXWHBDVWeeGCNrKFzPVgT8r0EWTY0FMnj3MnRFTpa1Ri79ZqxnUA4d1bJG/WS3nZQngoH4xZ6nZ1wDSFn0bGQLWhTUr9wd8Q6ygoJVzMzJVVh20OsQseLOmhoA0XjeK1uRArdbTmDPUDDr2lkS+ahFAQ69rII7mlmXF6npIIEfr2eJb5q2vZ86kekgEJ8KiDQVqGeaMA7Ts2UITnpd7YJ70PNuHFQhQ2+EBAByg7XnRMkmNaAwWc5ZlzUoOzTM/eHx2bTcFnfXJ+qKVh/j8RRPNpVy3tNE0dg1qcK+cRq0WCdeWsbOITrC7t4qh5s1kRKdm0ixLZ7Bqi/N3/OpCKy09F6BCFLVpSWpQ061gDBjWogiND9E3s0CZpq+n9q/9B0KebVERYc7WIQiAD3utwNkvf+4//Myzp+9+NnMgalkEkEUgz+vXA2q1njR/8vY8EEblUOZMKzsGmybXwtJQo3JDZTwyDJscl8a81TJ0TUtYjp6vKBozK0q7CjAWzQ3VN8uaNXm/kd5ZLdsbpHnRmeXZ3QjKqK4EaWfPXXjPFx/+4Dei9a7XLZOmVl8TxNSYNKqbAma8M1R6o0EXjbrRgBn/PfJNQ9d1qRwK1hoaz/qgjcWiyaFbkZSRej+iVYYuEx/DkkkTMG1a6Zsi38alsXXQOVuXIIC1BWc0sPc99fQT3966/THrYCAgDD1UslxGdmPpZSTMoJaWWoYRs4IPkLkNqau13wLMIsDlgTrLF80DYnzcGYd/ZD29Mlp+TSrfgznjrJmmcYakcdKYMxSgIWsjozU9Bo3a6x2p2QLIPJBmOf9zgHbTnRef/MqDDzyOrA+VWZg0j1+cRcwZb3M0X7QsMKuDAlNBZfTQmrTQ+CIhgGzEiE4aiqeJ1gOkRYCMriO+aLUcem6tcp4EiKdvprWX9jmzWLOyEXaGALpsCT3TtXVjzcp4h25U7/r0IPvEu96x5JvRAsh4HVnfu0bzsbILRHPVfNfKC8lI24REf2p+aqhshzXeVokOK4jAAm9R+UhjjQO4CLCVGywRhRntJb+OMGRDARnV15KdZ8aJlB1b44zGEAE0bZwoi4ZonJXn9Jwla80K4OmaPTT7USqaq5g0T70Cg7loHyMWrZlN4y84aeas1+hfEKRp88iYOldi8owWe34dTaRelunaiVKrNzBD/NE8Jo3GFGUTyJg/eV9U79rp889sXT91/x4JFGWNEZ2zkD0Dfc6saGf6nT7rFATAl2rtwBkNDgkOQKU1wHtPLWZFdWraaF4/SFYC9YXVkItzKHDLrJfHqNV2IskNWY7+9kCb1R73K4sEZTNzjMpqzFkE5qJMAbXPof5m1A5nzvhcOEij31vzavI2vaTnvRKe1/6ioIBIOgM1cUom7dYfe+XDX37oA09F54JfLybN0y/cX34jnzOAQfN8z6iZbgEDSCTnYtHnKaCsv8WiIIEB1kt66SWV8UtDgwWog6QvGlXJmjepjhSxzZwdtCwiFEtteeZOtC+rXAkEqOvqNCZBt2TP3HGMoHX2tk/807XEQWs5KNocVFqjhVXLHsKs9Aa170WASpHbKJAgAlxIxCif89hmT+oLiQDtYfocw9k/Oh+IKZPaiEybtR8kryZiwozGTdcjk2Ytg7RVy2g+ZuUeYMnP6W/JjqFsGR9LBMrKC3RADk1t3hWgZYMAqK3QpAkANT6mloCBzF4ulUXzdjZ0YOXrtJi1dBcoSGsAaNpYkGjO9ByCClkmLRPVmWHQ6jD36Js1+pzBgQHUcdLfjKrw4IB1NGfW9VxbcCaDA1pAmGfOpAXItmn5pGWZNA7erCCCVtMjCuTKy7KBmYseMJ5+WqStZoE6DejR2Fv1yqI5LB42l7cXemiRxlkExCwAJtmx/coOUOecCQTI+pvVPlpAmdyzCKR5zFnEmmnZAaj/t599MRUEQHVKkvMbX3h6iTHTAFlnkCZfQgTqwo/HoskXYU33lDBxRoDM00NrMnGiAI3mlgRpnnDtfgA1vreZIAEEhEm9NO0cLXzNHECm1Rvsc6adSzqTykeaNy9f33rmrk8++v7wvtinAmsLzmg9tOCACFBF13usM8qkZfTTNMCGAq2hzBkHapYWWwuQ08yTHIB5Jk8LyKHK/j322WrDYs4kqOsF2HrNJcOaZUAaHx8qqWEBNA+4Sef/8ly+uu36l0VALFrbCtSyQQC13SUJDQ7A6vcBoIz6QJk0DtaiOe+53hpAYHQURXKWec3zd6ajOjVwgIK0JECr01sHoBYBMrkVGRat1vWAnBql2cic8f0PzyrAnFmBAOukaaaCyXDy+1iATAL/9p5zf/zK1ta93jCygKyXvxoS3dm6fJ4sBwdTWvsRqKt1MvIdrfPg9bLMWQVyVUCWzgElJ498yqLrPebiATG6FgEzKuOxZL39zcYKBKB5IL5mizM3gsZZFLFJfaMgTQsEoPyZf+f57//1lpQurr+ZBtbKgvaL6tRAGRQwgJg0NdYswaTVMxGBNUugNs2mIZGdNKgOIM1jz6iLVeTq5M85Lc0SAtCojd7MmedzBgcBaCnHAKBW74d1NmfWfVtr5owGaQUHRIAsMmn2fEFTW1Zi9doP4oNWnstKdgIvoIADHS4C1gAAIABJREFUNYv18gCcvBbpsUlg2MKo1T4jkVrOkmmAaz9AGAdeQxz/LWDmgTJNTiN7jiP2TAYKZNpHWbNyhhpBGh9PxJppoAwFabWfbP5MuV7nf/PXS6Lz8uHBABpz1gjKrD1CggbC/bWiNj0h0II+RPCA0lEUuRlpYMFZBSwGxwNrNN5GkKatqZUCqndEp9a355sW6Z1xYGZ9N33NAhMnsr9UxvyAYKzWr/8pWXdz5mK84c25BgV+9jNfferC27c+NMZQIpCX7TNi0xAxW69PK33U4vkv/MiywQblHaKkm+K/Z9ckKs9BGvVNaZY4W0ps2eLAnjoy439Hv0d9W9ctHzNZPmvijIRoV+1zRvNBTZiynPQ5o7YsAdpyfuaALAvMLGasYADFrKnJaKDnQPqbtQQB1L5KMMALXzufBmUWo+ZMIqOJRs1A7JmKMuZaUlZGAQCURXvhMWll7Cx6cxT2bIAuGuJvpkVv9ozotHTIot+tSE4vRyddO3ryDTeXptzvKEOAez6saE3tPxFGQ+sanblnnaIbZR2ua9pn2rgQoIWU6TFnAhBvv/XNsCmPKSsvO8akye+8cYTxkoPJRG0iZTPMnRw7z3tZGTHr37EAWbhZzFzppW/y5DX4NepP0zbrYdLU5rIurBkHasiaW2Uic6YWtZlhzgioZTXN+FgXwQD1x8qclQWYS2rU7+VmZ+bMJIvG+0X90FLJ1DWBzxF90Wg+LcwazKbJQ4WaPAcc2EiGY0DTZtUMa0aNoOZP3uGShAatI30qwKV/lc9g1qy2mWTPrlzbeuDcpx790hhr3bvNtTdr1glr5s0oHVPNubkqQOZtzpiMmsemIf5nkRiuB7pazZqcIat+ZOWBPNCnrLepU2PQLGCGgjIPkElgNsSUiWYHoHVH2TN5xqNUTUii8wiseZGZVNfKqZkBYnVe3OesRdOMr8+eYAAOyqSJU16rDQ0AbBFIoy40Z2n3JZPxRWtk0TIZBrwXvzsPCcao8AhmThksIJk16jbK2dn7pW+118KcLWUESEZqlvM3Z0E1rbM9/meaKd2KMFYmefHqqSfu+fQjH1vVeg7tZ2PAGU00Su2UXYz9Am0RUFs8l420UN48JVDzyrawbbw9DbRZbdZ6lSHjIEoyZOWmnZsvI/Ysu+et5b08myhYQ1iz1vHxepbwLJXpxZ5lTJoaQMuaNvn8LLBWXnRBZgAUsA0xZ9axLsBZ/YGzZRoY6xAg4OXlpC4jP7SUuRMBatRplTbgL1LgoGvO4Vb0Zpkbi/AEml8ugkZ0Uq0GX7QIpFkpoHr7pHlpnhbP6NmREgRAH4tJo2sLxoyvCWfMDLAmAVl53jsgDdpLQz6j1t0UPzM+140CZ1b05n6BLOjQAIVQsFabQnTVtCCCyJfMA1ue75oHyLi50gNddW4aaNOWMCrXm0GrY0CToXtZADS/MkSIFjhKe4pIMGYBNPp9KHumBQTwAbUCMlRCY4ivGR/nUHNmbWspUlMCNM3Eaf22uPHzZs+IPbNMm80gzfJFqyCt6qMlDrMmSirZNf6Cl98TXfns2QBftDqGyLRp+Z71BmlyTZAMA1SGPtUHzRWdBVk0T+fMjNz0glEMkPZ797wrlXItdWZGKrxR4IzWQIrTausSRWpuApjjgA0NIogiQrW1GsqeUZvUBn0IiNG/L2+fKNInnPWiv7nJct2ZMyQgIGLMaM4ISIuCAKRpszVbAMKaDXnORCbOBT4ZGKkZCdBSPxGD5s1zqDlTBWeSNZNgjf9N3zuwaN4co/yc5f49drkwbdBH8z8rG8GSUUvhWsfsaQnWlufInCHj35t10erkWiI6Gxg0ay2RQAJoH8BCUXBAbcaL5gyZM2csSG7NPdUR+QzFN3KT/Mz4nDcOnNHge5o3NwGo0ZwJrNG/p26+5mq+IfemTB9FdTyQVsHX4oadgzCuOyb71YCYZ6LUTJvWXCxWbBVsWZRLM9I3QyU0hgYFaP5mtJ5WTs3KmqHsWQTEtMjMocwZPw8SoFmADLkfeJlWsVmtH5U5Kzcby68pJTXob15Glq8dJXzRJBCrTUQmzlquCaRlcnYmNmmIWROO7ET90WjcDQBNY8/K+b12Yk8ezrH10DQzJ40lErWlcS05/XtrJvbXitakYlakrnpELAaNFd40P7ONB2c0AS33ZgS0ouuJZ8QoRbljvNeBVo6Dt8pgURsomJN16t9S0oIAkAbE6LfIT8wCYBJURe3wvkbZiESjaMCA5W9GXUXMWWI4ZtFVsWae1lkdXEt2AKqLyGZEjJnnczZEbFZb+CWNs2gTPZPmCCya9E3TABz/LRq+ex0Bao3BAwugaWQU4C/8wZGc1NhIUZ1Zc+fYZk6+nxpQMyM0+RoFh8YDaeF5k+dF+jXOZrNN9DM7EOAsktdYdyAWHr6RCqAAkHfvRVNGQKrXdWs5xmLLZH+WeZLKtUZpjgnKtKAADaDR+BHWzGLU0KTn1I8GyhA2jbNkdV885ozKoI7/fJ9bcmd6tykEzqwggbJgAcNG1+mTYNHkeC2fNCqXjuSsjWeEa7kPGmjmjEyYEpAN0kWrc4rYNCrXwKLJ/ciaN3uDNMuMSeOs1wprxj9WEEAQEFDOGAsE0PZtqR9L46zc8Mx8Pq+0KXpm5rttJAywkmat7AG8c1RuYyUDTnbSAqSsLrS2rPYjk2S5iZjkRSsAKzenEJX1wBZi+hwK1iKHf7m+UZYAKu/5ndF1TVqD+5kNkdOg9hHWDDVnFixwdacALf6JGDNUUgO5RSKfM03frDy/55GcWh89zZm1fROcIf5nXsDASKCs3NfXTy5AmQwWSOmi8UVG9NDqC5b+TbBoaESnBAJwZKeXq7Mji6bl5yxL4pg6ewMz5N4jgBb6mjUEA2hBH+F4pMYZO2eb6mfG57yRPmd8Ahn/s01g0xBApjFZ4UGeF4hAmtV2DzCG+JxxwIaAMXTePcoh7BkHYxYwswDZUD8zPkdLTsPyOat1MyBNAjUrWnMIMMuYMjkAyzBnPWQztPMFMWdaxQiYeUxZI4sWmTllYADsh4YAMxkokARoBVQKsyb/TV6XSw75oknAEWmiUSeNTJqnhRb5pfV4zvE2JJO25GvGC0rRWSDpuQWY5d7tmZNm0jxgwKysTe/N3I/2eHqnTQBgLWuEgDavXcs0yX3IUGBWbp7OzJmndcbnhfqttaxxS50oYhOJ1uRgrWUMUZ3ezJnsD0l8jpgvo3mUd/Y8XRP/Tr9ZwMxi0Wpfvf3M+BzS4MwzcVLDlnAtXWsEZXLNPemNct8zZq28QDIRnbwzxA+tbHKco3PPHAz/s+pzVvM1wuwZ7wCN6qQ6Ui0fOeBGmQiUrSr9U8ia1XkbmQHq9NCgAHPJjGCATQ4AkHM9EODM0j+zNnYTAFwLGIvMlNZ6eMBNtlnzWraaMiMQFl0f8HxLVUWjLont4h+0HtWxtM2GMmitIrQ0JoQ5a4nUrGuUBWmIv1mrvhnpmZ09d+E9X3z4g99IHQ6wcBqc8Xa9VE9ahCcHbrWdRsCGaqOBy/BWMUS01sudqHQYRfdZshsFWI6Ro9MCZUkWrTWisy7RGCbPPb5mfD+kBhwA0jw5DapuZghYTHIO3OfBAJseAHAgwRlNStM/4yDsIAEy1KwZgTUNeFUmLWLaejNn5WEZ+J8hZs6hPmfZFw7CjEX5MyMw1qprRnNBWDMUlHlrk0l4ngVoi2exk+ScykiQZv1d2+ulZ2atyyBwpjXqZRgYGNFpmTX5MKKITphF8/J0yiwCmrZVcJNGJk7+4pfsGWTilP2j2QWSAM2aJhrZmX2WeeX3+JpRYS8bQOB3Nog5U87E5Z2dZ+765KPv7znn/W7rQDBndRGRAAG+4AcJsC09ROcmx/qbBFLy0KHmzB6ALGLGout7/nchAN2YN5Tnc0b9RsEBLYEBLfPJ+pshbJk2johBozoREIuutzBniL/ZGAEAco1MnTN0U6P8mxGDNhCwFRDjBAjQdQnIYIBW0PQ8wi7zL7p2rFwU3dkFoFF/I0V0ImCsLCcLHqC/e7JnLmvGgVr97uyTBcwiFnSpSQHQNjEDQHSUDxQ4o8lmAVq0QPtxPWK8tDFlzKAeWNOuIWbPFuBWHu5GDk1+zfs+9v4g0ZuoKVNj0Gj81u+95uaxZ9QHB2caUOO/aZGa1IbHnHGQFoExa85IYEB5QbGITAukjRUA0B2cWYuhRXtqshtlY/Ipn6JzF5k9NdAWtbl03UoBZSW+Nhr3IjmpSha0mXNYUUSn1T8S0TkEqKmsGQdkVjAAELXppW8y11sAs4MQmanN9cCBM5okDxCgvzfNvIk8yFAwhrJmKLgqDzUnGMACUggjxk2S2SwAvcyZXtomD4TRvFGQhgCyIfIZWnYA1LyJnL1axpPP0DIEZNquZTXmjK5xsBaBMg7SxgwAGB2cIWZNyaZJgJYAbBEIs6Q26jrALFqrLhp4oJBUUE3BAbL/FUR0Iiyax6C1gLSQNZNALdgXNPG5mVtz8XC4PDuIjNni/gHP98YVkwBtEybQwphZ84ra2k9JDQ7gItCG+Jmtcm+t6Mw6hgigWcBMY88IUL1y9sTshleuD5pihjlr7Whs5kwCMgJc2m8StPH5jB0AINfu+V/7+G/feOYHj7euqVnPChagCiuI6JTjypo+w/VAAwcKKmem0aBhLycnVfV81VLgLRvR2ckXrU5fY9LKvXL8ajF9Zj4mayYBGTfpJsBamjljrNmV7Z0Hzn3q0S9l5rNJZQ8kc1Y3QEvxVK+tu79ZBK7qPKLggIhh88yYkTnTA1lRNGcdv8WWIcxZL7ZMu2GHgrAaxYn6mfV8aLT6nKG+Z9K0iTBoLfNDxWa9lE2cNeudASCa02jgTOsY1UbjZk5qR2PanIllRGph5oz3l9FFK4gjL7XBu+sGyLQ1s7TQqKwms5EEaZE5s2DXIF9ndIYh1qyCsTovUEZDi9bkINkbGwGzz73znq898shDL0Vz2NTrBxqcZSU2NnUTkXFbpsilB5UwV5YbpYOeGQLUPJNmhj1bBWCLgButGwrKLDkNZE/RMmOYNGvfiMYZlY3MnIgvmjRxWqZNzdds7MhMbS++/w9+52+evPGFp9F9aiqX1UazfNMWG8p81JIDygC3sGkkorOgj5O7TWkSHEYnlhp95IPGgUM6Tyca0VmBTgVv4ULpBSJQhuiihcBMi9bU5hnMIQvSLl4/8sQ9n37kY41LszHVDjQ4o13YFIDmMVwR+6UBrPpbVHcIcxaBrug6jVEDZRkwJtsY687zAgO0pOYZgEZlNTmNFr8zzd+M2u8N0KJITQuMISCs7qEMAijvYFBOg5+D/QBm9dnzkRe+dn6sM7nU7oqYs6VnjYjkLOAliO4s92tGuLbFHy3JpnnmTiuSc1TJjQaA1uKLtrjPDHNnCM74YfBkNcQNkNY3Y/UPuimTL9WBB2f1IfmJd71j6SG5qWZNC4ih4K41UjMycUZAbKhvmRfV2fPlF0VnRhkBIlAWaZ71nEttK/I5o3KISbMlpyafTwaYWevgJTzXGLNVSGZ4e9Zd68zrzIvipHqePxpvN2nqtIYUAbUUSOOdINIbBcnjJs+WoAHNsX3PWniRnFS4Y35O72hYTBrV4X5onFGDnkXJpOeyzQxrdpiAWflPDLQBB6CQJlK7adOKWDALuNXfvSAAD3xR/THMm+UAMp2yVQGwln2PQBsHZRZAo985Q6Z9HypIOwZzpgE3jTmj+UUJ0DNrr/mclXeuw55xgLYqyQxvToO1zjILVst6pk7NrNkBjGVMmk3aaBGDxsFYApTJ5UVZtCbmTHYWmTqpfNIPrXbh5eesgIwHCGjfK3NmJWVfGlsn5syK0CRT5lM/effvHmQfsz3AteXe39Q6mwDQJICKoiqRvci0gZg5USkNRMMsMmGigK23r5kmqSH9yCwQhqRl8nzNekVp1rOhMWd0rYIuhDWzzlkGjGnMWcSmWX5mEqSVFw7TOFsHYEZjWmlQgLZJWXNnJGyLPHBEGQS4pZrVggbKARCRm/O0PlFEJ8KaUfORTxoc0WlJblAnIzNpURBBZdFSJk0OImswAKBxRtUQ5uyw+JgdanBGk19XgJZhxfgmetGaGaC3X8xZuUEdIdrUQ3uFhT3whoK2OlyLTWuZToY54wAN7Str2owCAdB+UbaM2lsXYEZjWUlQQATKyqKc3o3MrB9EtBbdHFZOS/FUgE0y0wDUNWrerI0lGbV9YdEsNo0DIGhx3iokma8IoBWcO4/ydLuKAgI42Jw3FGmclbMyT1xfnk+HICrTWuNDY9bkC7CuAC15z8HFEebMi+YcypR5/maS8UJ91+rkezNm2qJ6aZuG5taMzJjwJhsF0UCAFvYMjdRsnUMLa7ZOwIyCkWjuKwsKQBbaSwnFQVwn86eVs7M7m1YQBZAOisolQJqVUmg0Fo0Dms4smga4vEACGKRx4DiAOZPA7LAyZot3G3I/H8Qy6wzQPMYL0T+LylhsG9JvT98zOldRoMAqzx4ikVHH08KcUV3Uz6wlUpPa750dAAFtiM5ZZL709hnxPSu44sTRL3z9o/c9uMozg/S10qAAbUBaoAAHYhEoQyYZlEGzDSxeTGhEJypYq4nVDgRpHkBLL5mXl1MCttp4J380AmhVbBZizGT/CX+z8sw/fnnJRCx/o78Pm/O/dl4OJXNWF2KdAFqLWROp40Vn1nVAAVf5n00H3TMOyrLfPaZsLBYtw5zRfDJsGr8pWwFZ9CKIfM6i+nQdkc7g5ai8/HCAhoA1VIR2nYEZjW3f/c72bARg4ox8zxqDCDJMWnk2oCCNCkfaaFQmoYfm3ReIybM8L+cmupQuWhQoINmpgZpoF69tzU4fv7I0XS2gwH1OWPk1gYeLzBJw2BmzumSHGpzRIhBAe/74HV94ZWvrXuAcbVQRNDqTgy7rew9QFrFkSFYAvgFjgTFvkz12LZO6ifoYI+F5q88ZwpBp6zIWa6bl1LRkNLZns7VkzOp67ZvfWfS0stJAeSbNqE3lugRk5Rnj+KA1RXPyfrPmTYdBs8yaHHhJEMYjOSG5DWtNI5BW6zUyaAXPKhkECoY9fjXeacTnTGnFS9k0MWZvLdihB2d1KbxUT/EpbS+R1SezevICAyTgkm0gGma8jQxQo3pWRGaUumk/wFddm0ySc6oTATMvOtPyO7v5zsuzV1+YK6C3H7HuArQ0lBZ/M4Qts6ZpsWjrasrk8yDfs7XxO+uRUSBi1YKzqoG1CLCV58gQFs0DbHW8A82cFkjTwFrqdvZAGjWk+aaBHXj6Zxy8hc0lgZqUIqG/P/ILP/GeLz78wW+EfR2SAhM4m2/0OmQSQMyUEdDi5xZhzjzpjFZAlnHqjyI1I6kNDv5Wdc+2ArHI32xocADqb0brJJkyhDlbZaSmlx2Axk/XNwGY1TO5L3pnmRsCieZsNGVaw9AiO6OozsyUSlk0V2cCmC09Y5nZkgBGV4BmSW5YScbrwEAmrZozpXwG7HeWBGTa3tGaXd7Zeebf/cQ9Hz5MGmbIOZ7AmViln/3MV5+68PatDyGLtw5lIsasjjECfhEbhgI1DpYyOmcSZGmsmcW09dyHrL5Z7RsFbFRegrChoMyaPxKpiYAyq/2hGme1XZRR44Btk4AZzXNtTZtyc70sA0gEZyOAQwMGKnuWYtE8kFaQPsskAPikWUKpVhL18mwTTvApc2eUZYA68CQ4lBvYygoQideaz9qEzxlnza4cuzQBM2NRJ3CmLMz7nnr6iW9v3f5Yz5d+pq0ISCFtWYEAKFPWE4xF5ksPmK2LaZPG6InQate1nJtasEDdTw7SWoIDWv3NkPPEy+x3doD9ypWZXSdefq1Mm9pEIuaM6nT2RavD0IBZef4AeTqhPUFEazVQBrJpGlizhG1TgQHa5CQIozKSwar1HAaNg7OCT+f5NVPpmwYyZ28euXIoEphDZ1QpNIEzY+Xe/+//04N/furOz7cubLZeBMhQhszqN5LX4GBMfkeBWos50wJmEXPG5zk2gItkMzgwi0BaZNrMnpuoPBKpabFn/PesSVOOC2XHeD0tKOD2Wy98+MsPfeCpaN7reH3tTZt10XqzZ5VNAzdl31g0izUDQVp5TjIB1UgLjZdviurk6+lJcQgzaHfWTAOIkkkTe3/16KUHzn3q0S+BR+JQFpvAmbPtqwZocigRYPMAVQtzFpk2e163QJlcA8TnrMedqwEw3m4mdZMF0Oj3MSI06zgzzFkPcyb12xqt6YE1TXyW+nr72Rc32mF4Y0ybQ0FajxuSMWflOdeLRatjs3zR6PoAFq02b5k4uV9aeQbOzZ2pJdNMmNRA5ItmJDkvU2bMGf0N+Z01MGeTGRPf6QmcBWs1ttQGAsDw7bRLRsxZJEw7FjCL2DZv7mMyZpEgrZcIHdE5q/PSwFqLSVNbp7F9zjg4k0Ctx5ktL42r27Mrdx597p5rP/zQQYjk2ndB2paN0bIKUDstPmgAi5bRQpM+aClftIy5s65bwKKh/mgeeEuzaBprxsHa/Ls0ZfKjYJk1IZBGDQE+Z2TGPGzJy1tut1pnAmfA6pG/yGfPnPvM2IECCFCLQNbif25zsVg5vSwIK/9r7SA86znzI9fGBGLeEchIanigjPrw5DSAYxgWGRKtGTauCNGW9/OJI83smdUnZ85Iw+wjr3//owclkmvtBGmRjZdl0GTqtR4AyLRhZPXRFi+1jOQGVUJ00bSggWDtkITq1QdtsNxGHYshq4GaMmEwJgGZBRDn45rMmPkbbQJniTXbr0ABVAtNfcAJYMXBlga8rOu9QVqrIC2NI+OPltjeUtQyb3pMGa/XwppR/SFsGQdlcr5js2dW5gA+jhZ/s/LOXHNx2ezZovJrHxjgTWqIRpoG1BKgLeuHVp4TWZDG595RF80DaeW5KuQ4JGBzTZ9aJCc1yn7fvnwjdFQ19iwN1njf17dmV7ZenaIxodXfW2gCZ8mFW4UfGsKgWcNuCRzwIjh7s2YSXKEgbROYswik0XXU54zA2i3nrxY9svpBRGklGKO6/Df6u8XfDEnfVFM2STYteYuV4pvs+B/Nd2MCA6yJoMyZJVZL7SaAGR8GCtKiPdhzPcOeJQIElsbuBAt4IA2ei6KLRlpmp2Z7U6lRm4NMmYC/WY3GpP+QHBTmG96LDgUncNawiL0Fa1vBGGriLDc+aJrMlEXb1MpJkFa3IQPCMmW9bUZZMd4GqmsWRWeiYK3hmEKZAVqAWh0LqnOmMWfabwfNv8zas40LDNAm4kV01vKaT5oFzAKwZmUVKM8rIBXUaCwaoIsml8+T2Yj00DIBBChjNgZQm8yYLU/s5ToTOBuwhmML1krwlTVvoqAP1T6jchxUab5iiIO/V0+CtF4ArHWbUZ8zxJwZAbXWMVK9TKQmlW8FZUjaplbm7KD5l3n7ufHsmQRgHiDThGkbxWo1MBYBtMUzBTVztrJoSUbNytsZmTnD58T1rRnCmHFQJgFa2EctwLXUjl2ZTU7/8MqFBSdwFi6RX6CnmRMFU9GQtXZQlqs86FgwAVoPKceBnQbyPNmMVUlqaGubjdykNiyxWYQpG+J/VseP+Jp5IC3SOKO6FlCTa4j4nN1y++tP/srzr378sJg/DgR7xje6JYm6ZMsaAVsmurM8d1CQJg+yBtoKqmEZBrS/RTtIoEB5Djf6ol28fMY0ZWrPN8/XDPY5O3ZlNrFl0Zs5d30CZ7n1UksPMXO2ADLUrwxtOwJWHLBFZS12LZslQAI5beF7s2oZEDY0MhMBaZmjqQUFRAK0LexZRtcMAWU0x3M3/3Cj9csy+8TLHhj2rBWkFYR/cVmSI7mYK80uQGNDWLXEHBDRWgnUyrPR0EfLALMKygqebMkQQBWPXZmRdtldn3z0/YlpT0WBFZjAGbBIaJGe0ZwZk6Ycn1U3Ala1nbGYMyTXpgXKegMxdE+jlE28HcsEWstEgKwHY0Z9IaxZCzCTa4ZEalIdC6QdJjOmdt4OHHtm3VSIHhoHagNAGxowkM7RyTXR6jwRoJY0de55livsmeWXlgFmtR8J0Ar+vHaigDX5fWlsx67MqL8TN7w4Kf2jL5NkuQmcJRcsKj62aK3Vv2fKROpYwI3qRqAOuV7HIEFWD42zVQI3CcBoXpZ+madrFgG16JzJ65acRsSeof3I9E0ZBk3rg8yYX3nwgcfR/g9quQPDnnkRnHzzovycjVGc5Tk1DwywvmuBA4vnEmrqHAmQZVM90bg5e9YCzCRAy+TVfPP461NezJEfShM4G2mBMywaaqasQ43KW9c1x38NfPUCZJwpq22Wh8qpI0uAj/8mv1vb0xOQZdT+aTxodGer3xkimeEd27GZMyQoYOl9zIRqj17dOVCiskMfHxute4ZOXsswgLBpnhQH0LfFopVnzByMNfufyf5HAm2LZ75g0Mrz9NrJomfmKf97y8RZMyqH6JyRbtmRndm/nPJiAgdwYJEJnA1cQK86BQv88OhtT76ytXVvazeo31jUPhIkwEFZb4BmAbAezFk099brKAjjgK0FkPEozpaxoiK01LY0Z2bMm5HWGbXvRWpObJm+uwcia0Dm4EY6abytAUxaeYYNYNPcKWXAWDK7gMWiVUBWGTNiy+hDOmaXZkdSQQB8bqi/2cSWZQ758LITOBu+hmELluRGFnhlpDQslmxMANYqo2EBt3BhOxfQsgNkEp4jcho05ArGevmYyWXozZxZJk3qVzNv8vEQWCO27O6bf/hbByE3ZucjV5o79OxZQfWnl4MD6m/lkM2DBvh3B7RZ0Zt17/ZVF60OosEXjQcPvPHG2WYwthiCEgRQ/c34v5dPXZhMmGPc+EGbEzhb0aKjLBoK2Kxymd8j8+fiYaYI2FqAqhdA4+0j7NoqttEDb9R/hjXTNM9a54Dm1KwsGWfLLOYsYtS8YAAeADCxZdiuHprggLocEXvmaaNhS7qnVBQsUJ45wvcMMnsYqRk2AAAM1UlEQVQiLBo13iBYS9VkROdLl2+a3X788kLLbAhrpgG1+ttkwmw8aJ2qTeCs00KizWi+aBlAhfTj+aR5kZjlQQBmEmgpZwE673dkvmOUsVgwDYRZwExz+o9AWQ82zWPOFg/e40dLVKf3kYwZlUUCAajcYY/EbDmTByY4IDN5K18nkl2gUYYjAmld/dF4lCcHcQ1gjUCaZ8rMgjTLnEkCtlMUZuYQj1N2AmfjrKvbaktEZ69ozDqwVYI0Dr5QOQ2tzhhbFfmV8T6tsllz5lAfM7kOSKQm1al5OiNQpq0zEq1J9a7dPnvuju0Lj335oQ88NcZ+HfQ2z//mr+uJEA/CxLWUT+XQGCbNjrk5tfRPEUgrz6Bs4ADCojUwaATMiDG7dba98C+rYCwLyrSjVIHa9RvOT9IYa3KvTeBsHzdirOwCkWkUBWa0NC0MGWLa5ODL++5tT8+ITaufSOcMAWzUtgRk/O8ebBkff8ScaebNzG1gRWseNpX/zJqhZek/br/3v//4WbT8RpeLwJoG3DiQo+sNEZ1DggQgM6e2KVF2AQewVcaMO/4PAWQySpOGS35lT/3k3b97WDJ0bMJ9M4Gzfd4lcgb+7Jlzn7nw9q0P1aFkHP/l8BEBWQ66xgJgVrqlSEajzieqP/a2Rf5l1D/CmHlaZ73mkPU5i/q1/M0sPzMyYU4O/9Gq4tcPXfSmBsIiYDYwipPvRsSgpdmz2rgUrkVYNXFMzr/xtiXHfw2gcaCWBW2Tsz9+X6665ATOVr3iRn+WqRPxR4uYMq1LRHR2bOBG7Xtmzv3YGoQJ44CrjhFN50TlLQFayaAN0TuLxGdbHP4LUXF15y25jMmEOdoRPZT+Z3w1M75oFnuWBHBIjs7yzMqaOqkSAtSoHGPQ3njt3NL56sWcUaMTUzbardut4QmcdVvKPg2hUZ1Wbyjo4sCrtoWwblTGA1Uo2PJMkqtMcq4xZDQ/63cLjPE6majNoacmy5pFoAwaz007k18ZtFDDCk0ArcEXTVtyAKStzNRpBQgIs2ZlzE4fv7InKlP6mmXYsokpG3ZPrrL2BM5WudpgX2Tq/P17bn7k21u3P8artDBkGgjjv43hU2aZLmW/FeRpv9d5Z9I9gcurFotAWiZ6k5elzryozd7BAXVyvbXOqF1izSZpjCGnLFeXngO/+p3nP3/q9Av352puYGlNWkNOIyu/AYAyb6W66qFZzBkNQERxkoaZ9omYMw+kTUzZ5t0TEzhb4z0jU+d3X73jt7g/Wh0uwnLJqSG6Zki7LYBOgq1Vga6W7Y2CAGqbVqJzJKdmy7i0OihzRnVR1kyWm0BZr93Kt3Po9M8sQNYS0Vn+R6EI2DrboEV1lv88zjMNWPk5U4ECGntGfVy5uURkEgijD+pfZoEy+n2SxMjfc+tSYwJn67ITzjg8kOb+z09olpWHzPw3/l3LJtACwKIoTQuQWSZOT3x2VduW9UGzWDMar6ZxNkbUZi/WrIKyX3n+1Y9PUVyrOnF7+zkUGQSyy4uyaBKgJfqRQCwCaU2+aPPxSP8yPswK0izAthfPnp/yXyb2eV2LTuBsXXdGGVfkj5Yxe0YsGgLOaIgRIONltPJeG9bWjCGhkU1+TmNbV+aMxhYFBETH/uxNrz35lQcfeDwqN11fzQocagbNMnlmkqdzkNZo7oyiOvlJgJm07ZMzGZHJQVht0zNpEkO2+xx9aZLDWM3tuJJeJnC2kmXu20kkYosAKwI45X+CDpPGr6NtauUiUCYB3NJD7tSRMsYxPpHTP+8zA97QgID99Dez1pNA2cSUjXHahrc5MWhsDSONNEsPTW5DANS8PJ2WqbM8N6+f3AVMIh3UUvfbJ2eWfxkv55k3X54dnd10w48e+Nw77/naxG4Pv8fWqYUJnK3TbiTHEjFpVnMR0GoFZRoIs0yTkY7ZGOxYtLye0z/VzQYFUB1LNoOPZYgIreZzRm1z5oz+dvNpTtGX0dFYm+uHKkggWvUMc9YgVms+P+f+ZxWEaeZMDso0gCb9y2Rf3JRZr/HfiCX7+7/4jn/3xYc/+I1omabrm7kCEzjbzH1bGnX1SXvp1hMfkoyYZb7kAAz5HgE65LoG3upEEL8zXl9+H2sbteAA3ldGiBYFa0PmkskOcOrN6194260XPjelWhqy4quve+gBmsWa0VZEvmhURrJlQI7OKP2TBdQ0kHb+tbuWhGX5CfJA2fHTL06+ZKu/3fatxwmc7dvS9+94aHQnArAiHzMvAwASELAfQQCR03/dqR7MmWfKbBGdRaM1OXN29OrOFz7y+vc/SvOaTCH978NVtXgoMwnIxfWiODlY81i2hg1r0kUz/Mu07itIq4BsMls2bNKGV5nA2YZvoDZ8rpOmBQlEwQCcSUN9yCLQJhkyT2h2P0ya0THQnP+pTpY54+wZfR9i0tTGLJkzKlMSnd+089zZ2eufn/zJop3erOuHOlAg2irE7MmZtAGmTytYgJon9mz7zR9bksnwhk6A7Pr20T+acl1GG3ywr0/g7GDv70zzS0OzCIzNpFmATf5u/T106yLGzDNpopGadYyI71l2Ppw1k3XrNTJdTnkvsyu7WeUPvZmTtktj0Pg2dmbOeNMWi1b+k3v95IzMmPSp+mXa6ZoYss2651Yx2gmcrWKV16AP6ZcmGbUxgBgiNKuxZAhzhpTpseweCKP20ZyakcbZ0LEuBQDMHfx/+btvPjOZLYeu7ObUn8yc872ygJgG4lp81IAjUaI1hRmTp12iJm44df6J40e2v3ruU49+CWhyKnLIVmACZ4dsw2m673vq6SfOz858+JWtrXsRUdoxgBuNI8qhuSoAJo+AJ5sRAbLW7ABDzZtbN1x/7uhLs2fJl2wCZIfwpp5PeWLRnL2PgJgVKJA4TpVFe/Hldy5qVf+xM6d/VBz6J/+xxIIe4qITODvEm08P8s+eOfeZ7dtn73l5+8S9NdKTlmQsX7O63B5j1sqmDd3KjJYZB2m1XyQ7QE/zJrFl5Nw/mS2H7vzBq0++aDtHZr9xKPJyetuXTftkRW4CEZ3lucnMmMSM0W9c8oKeudN/ng7e/TbGjCZwNsaqbmCb5Jv24su3PUx5PDNMmcaARcEB1nW5bKi8RstyWw7+EnRpQrWyLtWxGDMZnTlUeLYCskkCo2XXD1+dydQp9lzKcES+aGA2gUtXbipO/NTb5Mh/+O6zMWY8gbMxVnXD26xAreqmZcBaBLxa/dBWvaSorxkHc2hmADmXyKRJJkuKtLzx2sXPTaKTqz4JB6O/Qx/VqWmjoWZOJYrz0sU7Cxgjn7FqppxYsYNxr6zLLCZwti47sabjIKB2/eiJn/vW9m2PZRmxOqWo3jpNHfU3sxg2FKBFDNpf/fHzf3Dl5eN/OAGydTodmz+WQ2/ubNFFm297ZccmZmzz74NNmMEEzjZhl9ZkjFU/7cJLZ96dNX9GJkqPcRtbmDaS1MgAMc2nDPEzq+zYse2rfzJFWa7JgT/Aw6B7+cFvffcf33jmB4c3uX1k4pzNZpUhmwDZAb4Z1nRqEzhb043ZhGFVVo0iP2tAgRVIQPOJTJ7rMOcMc2aZNOl3C5DV32t0JfmOndq++s3JXLkOu384xzCxaad3UzrR59rpGTFkFFX59+575/em+/Jw3hPrMOsJnK3DLhyQMUiwpgEy9LdVyWhoDv+SKbNAGBIEwMEY+Y1NzNgBOewHdBoE1K7tHL3vMDFq3H9s0hw7oAd7A6c1gbMN3LRNGTIJ3146euLdFAXK5TqIXasfBIR5QQQta9EKyGpfUXYAUuWnshMr1rI7U511WQG6f//1H/7fXz12dPsXDpIkxwTG1uWETePwVmACZ9P5WOkKkK/LF+++4X4KMiDfNQJtV948di8xTGP7lqETjfJoUju3Hr1aRF/p+223v/5NYsQm8yS6wlO5TVwBuncf/vbzP0/M2qYANi2qchPXfhrz4VuBCZwdvj1f2xmTWZQAzhvHTz9Mg6zgjb6TT9sYA9d8zKgfYr8IOBIAI/BFv1HkJP07+aGMsRNTm5u6AmQKpbFX0FbnsQq2jcAX9Vc1xkjaYvIV29STNI2br8AEzqbzsHErQCCuAKjtq98ks2l5OB898XOZiVSmi+pTOxPoyqzeVHZaAXwFKuPGaxCQQ1sgwMXLTn5h6MpN5TZ5BSZwtsm7N419WoFpBaYVmFZgWoFpBQ7cCkzg7MBt6TShaQWmFZhWYFqBaQWmFdjkFZjA2Sbv3jT2aQWmFZhWYFqBaQWmFThwKzCBswO3pdOEphWYVmBagWkFphWYVmCTV2ACZ5u8e9PYpxWYVmBagWkFphWYVuDArcAEzg7clk4TmlZgWoFpBaYVmFZgWoFNXoEJnG3y7k1jn1ZgWoFpBaYVmFZgWoEDtwL/H/wC1Uzmb89/AAAAAElFTkSuQmCC";
const index_vue_vue_type_style_index_0_scoped_79ab653f_lang = "";
const _sfc_main$3 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-79ab653f"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "logo-container" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("img", {
  class: "logo-img",
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("h1", { class: "title" }, "Snail-Admin", -1));
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_4);
}
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-79ab653f"]]);
const _hoisted_1$1 = { class: "title" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "title" };
const __default__ = {
  name: "MenuItem"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_menu_item = resolveComponent("el-menu-item");
      const _component_menu_item = resolveComponent("menu-item");
      const _component_el_sub_menu = resolveComponent("el-sub-menu");
      return !__props.item.meta || !__props.item.children ? (openBlock(), createBlock(_component_el_menu_item, {
        key: __props.item.path,
        index: __props.item.children ? __props.item.children[0].path : __props.item.path
      }, {
        title: withCtx(() => [
          createElementVNode("span", _hoisted_1$1, toDisplayString(__props.item.children ? __props.item.children[0].meta.title : __props.item.meta.title), 1)
        ]),
        default: withCtx(() => [
          (__props.item.children ? __props.item.children[0].meta.icon : __props.item.meta.icon) ? (openBlock(), createBlock(resolveDynamicComponent(__props.item.children ? __props.item.children[0].meta.icon : __props.item.meta.icon), {
            key: 0,
            class: "menu-icon",
            theme: "outline",
            size: "14",
            strokeWidth: "3"
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["index"])) : (openBlock(), createBlock(_component_el_sub_menu, {
        key: 1,
        index: __props.item.path
      }, {
        title: withCtx(() => [
          __props.item.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.item.meta.icon), {
            key: 0,
            class: "menu-icon",
            theme: "outline",
            size: "14",
            strokeWidth: "3"
          })) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_2$1, toDisplayString(__props.item.meta.title), 1)
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.children, (option, index) => {
            return openBlock(), createElementBlock(Fragment, null, [
              option.children ? (openBlock(), createBlock(_component_menu_item, {
                key: option.path,
                item: option
              }, null, 8, ["item"])) : (openBlock(), createBlock(_component_el_menu_item, {
                index: option.path,
                key: index
              }, {
                default: withCtx(() => [
                  option.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(option.meta.icon), {
                    key: 0,
                    class: "menu-icon",
                    theme: "outline",
                    size: "14",
                    strokeWidth: "3"
                  })) : createCommentVNode("", true),
                  createElementVNode("span", _hoisted_3$1, toDisplayString(option.meta.title), 1)
                ]),
                _: 2
              }, 1032, ["index"]))
            ], 64);
          }), 256))
        ]),
        _: 1
      }, 8, ["index"]));
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const isCollapse = ref(false);
    const routes = ref([
      {
        path: "/",
        component: "",
        redirect: "/index",
        name: "Root",
        children: [
          {
            path: "/index",
            name: "Index",
            component: "",
            meta: {
              title: "首页",
              icon: "i-park-home",
              affix: true,
              noKeepAlive: true
            }
          }
        ]
      },
      {
        path: "/comp",
        component: "",
        name: "Comp",
        meta: { title: "基础组件", icon: "icon-code" },
        children: [
          {
            path: "/element",
            name: "ElementComp",
            component: "",
            meta: {
              title: "Element ui",
              icon: "icon-code"
            }
          },
          {
            path: "/iconPark",
            name: "IconPark",
            component: "",
            meta: {
              title: "iconPark",
              icon: "icon-like"
            }
          },
          {
            path: "/chart",
            name: "Chart",
            component: "",
            meta: {
              title: "图表",
              icon: "icon-chart-line"
            },
            children: [
              {
                path: "/line",
                name: "Line",
                component: "",
                meta: {
                  title: "lineChart"
                }
              },
              {
                path: "/bar",
                name: "Bar",
                component: "",
                meta: {
                  title: "barChart"
                }
              }
            ]
          }
        ]
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      return openBlock(), createBlock(_component_el_scrollbar, { height: "92vh" }, {
        default: withCtx(() => [
          createVNode(_component_el_menu, {
            "default-active": "1-4-1",
            class: "el-menu-vertical-demo",
            collapse: isCollapse.value
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(routes.value, (item) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  item: { ...item },
                  key: item.path
                }, null, 8, ["item"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["collapse"])
        ]),
        _: 1
      });
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ffb01a9f_lang = "";
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ffb01a9f"]]);
const _withScopeId = (n) => (pushScopeId("data-v-7cfbb87a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "top-container fixed" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "Copyright", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "time" }, " ©2020-2022", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_aside = resolveComponent("el-aside");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_footer = resolveComponent("el-footer");
      const _component_el_container = resolveComponent("el-container");
      return openBlock(), createBlock(_component_el_container, { class: "default-layout-container" }, {
        default: withCtx(() => [
          createVNode(_component_el_aside, {
            class: "aside-wrapper",
            width: "220px"
          }, {
            default: withCtx(() => [
              createVNode(Logo),
              createVNode(Menu)
            ]),
            _: 1
          }),
          createVNode(_component_el_container, { class: "main-wrapper" }, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_1, [
                createVNode(TabBar),
                createVNode(NavBar)
              ]),
              createVNode(_component_el_main, { class: "main-container" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }),
              createVNode(_component_el_footer, { class: "copyright" }, {
                default: withCtx(() => [
                  _hoisted_2,
                  createTextVNode(),
                  _hoisted_3,
                  createTextVNode(" snail-admin ")
                ]),
                _: 1
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      });
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_7cfbb87a_lang = "";
const DefaultLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cfbb87a"]]);
const Layout = defineComponent({
  name: "SnailLayout",
  props,
  setup(props2, {
    slots,
    attrs
  }) {
    const {
      data,
      type
    } = toRefs(props2);
    toRefs(props2);
    const logoSlot = {
      logo: () => (slots == null ? void 0 : slots.logo) && slots.logo({
        props: props2,
        attrs
      })
    };
    (slots == null ? void 0 : slots.logo) ? logoSlot : null;
    const renderComponent = () => {
      return {
        default: createVNode(DefaultLayout, props2, null)
      }[unref(type)];
    };
    unref(type);
    return () => renderComponent();
  }
});
const SnailLayout = Object.assign(Layout, {
  install: function(app) {
    app.component(Layout.name, Layout);
  }
});
export {
  SnailLayout,
  SnailLayout as default
};