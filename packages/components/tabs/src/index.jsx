import './tabs.scss'
import props from './props'
import { defineComponent, onMounted, nextTick, ref, reactive, watch } from 'vue'
export default defineComponent({
    name: "SnTabs",
    props,
    setup(props, { slots, attrs }) {

        const tabsRef = ref()

        const tabOption = reactive({
            width: 0,
            moveX: 0,
            count: 1,
            unoccupied: 0,
            tabsCount: 0,
            differ: 0,
            activeTab: 1
        })


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

        watch(() => tabOption.activeTab,
            val => {
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
                    (tabList.value.length - tabOption.tabsCount) * tabOption.width -
                        tabOption.unoccupied
                    );
                });
            }
        );

        onMounted(() => {
            nextTick(() => initTabBar())
        })

        const initTabBar = () => {
            console.log(tabsRef)
            let tabs = tabsRef.value;
            let getStyle = getComputedStyle(tabs.children[0].children[0], null);
            let marginLeft = parseFloat(
              getStyle.marginLeft.substr(0, getStyle.marginLeft.length - 2)
            );
            let marginRight = parseFloat(
              getStyle.marginRight.substr(0, getStyle.marginRight.length - 2)
            );
            tabOption.width =
              marginLeft + marginRight + tabs.children[0].children[0].offsetWidth;
            tabOption.unoccupied = tabs.offsetWidth % tabOption.width;
            tabOption.differ = tabOption.width - tabOption.unoccupied;
            tabOption.unoccupied =
              tabOption.differ < 10 ? tabOption.width : tabOption.unoccupied;
            tabOption.tabsCount = parseInt(tabs.offsetWidth) / tabOption.width;
        };

        const onChangeTab = path => {
            if (tabOption.activeTab !== path) tabOption.activeTab = path;
          };
          
        const translateX = x => {
            tabOption.moveX = x < 0 ? 0 : x;
            tabsRef.value.children[0].style.transform = `translateX(-${tabOption.moveX}px)`;
        };


        return () => (
            <div class="tabbar-container">
                <div class="tab-wrapper" ref={tabsRef}>
                    <div class="tabs">
                        {
                            tabList.value.map((item, index) => {
                                return (
                                    <div
                                    id={`item_` + item.path}
                                    class={{'tab-item': true, 'animate__animated': true, active: item.path === 1 }}
                                    key={item.path}
                                    onClick={() => onChangeTab(item.path)}
                                    >
                                        <span class="tab-title">{ item.title }</span>
                                        <el-icon class="icon-close">
                                            <i-park-close-small theme="outline" size="24" fill="#333" />
                                        </el-icon>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
})