<script lang="ts" setup>
import { ref, onMounted, nextTick, reactive, watch } from "vue";
import { Close } from "@element-plus/icons-vue";
import Shield from "~icons/icon-park-outline/shield";
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
  nextTick(() => initTabBar());
});

/**
 * @description 初始化tabs
 */
const initTabBar = (): any => {
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

const clickTab = path => {
  if (tabOption.activeTab !== path) tabOption.activeTab = path;
};

const translateX = x => {
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
        // 关闭第0个标签，并且为选中状态的触发
        if (index === 0 && path === tabOption.activeTab) {
          clickTab(tabList.value[0].path);
        }
        // 关闭的标签为选中状态的触发
        else if (path === tabOption.activeTab) {
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
</script>

<template>
  <div class="tabbar-container">
    <div class="tab-wrapper" ref="tabsRef">
      <div class="tabs">
        <div
          class="tab-item animate__animated"
          :id="'item_' + item.path"
          :class="{ active: item.path === 1 }"
          v-for="(item, index) in tabList"
          :key="item.path"
          @click.stop="clickTab(item.path)"
        >
          <span class="tab-title">{{ item.title }}</span>
          <el-icon class="icon-close" @click.stop="closeTab(item.path, index)"
            ><i-park-close-small theme="outline" size="24" fill="#333"/>
        </el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-container {
  position: relative;
  height: 40px;
  background-color: #f2f3f5;
  transition: background-color 0.3s;
  width: calc(100vw - 200px);
  .tab-wrapper {
    overflow: hidden;
    .tabs {
      display: flex;
      background-color: #f2f3f5;
      padding: 5px 5px 0 15px;
      font-size: 14px;
      box-sizing: border-box;
      align-items: center;
      transition: 0.3s;
      .tab-item.active + .tab-item {
        .tab-title::before {
          display: none;
        }
      }
      .tab-item {
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        position: relative;
        background-color: transparent;
        padding: 8px 15px 8px 0;
        border-radius: 12px 12px 0 0;
        cursor: pointer;
        transition: 0.3s;
        color: #a8abb2;
        &:first-child {
          .tab-title::before {
            display: none;
          }
        }
        .tab-title {
          position: relative;
          padding-left: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &::before {
            position: absolute;
            bottom: 1px;
            left: 0px;
            height: 16px;
            width: 1px;
            content: "";
            background-color: #bababa;
            transition: display 0.3s;
          }
        }
        .icon-close {
          transition: background-color 0.3s;
          padding: 2px;
          border-radius: 50%;
          cursor: pointer;

          &:hover {
            background: #dbdbdb;
          }
        }
        &::before,
        &::after {
          position: absolute;
          bottom: 0;
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 100%;
          box-shadow: 0 0 0 40px transparent;
          transition: 0.3s;
        }
        &::before {
          left: -20px;
          clip-path: inset(50% -10px 0 50%);
        }
        &::after {
          right: -20px;
          clip-path: inset(50% 50% 0 -10px);
        }
        &:hover {
          background-color: rgba($color: #fff, $alpha: 0.6);
          .tab-title::before {
            display: none;
          }
          & + .tab-item {
            .tab-title::before {
              display: none;
            }
          }
        }
        &:hover::before,
        &:hover::after {
          box-shadow: 0 0 0 30px rgba($color: #fff, $alpha: 0.5);
        }
        &.active {
          background-color: #fff;
          z-index: 1;
          &::before,
          &::after {
            box-shadow: 0 0 0 30px #fff;
          }
          .tab-title::before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
