<script lang="ts" setup>
import { defineProps } from "vue";
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from "element-plus";
const props = defineProps({
  ...ElMenu.props,
  ...ElMenuItem.props,
  ...ElMenuItemGroup.props,
  ...ElSubMenu.props
});
</script>

<template>
  <el-menu
    class="el-menu-vertical-demo"
    :mode="mode"
    :collapse="collapse"
    :ellipsis="ellipsis"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
    :unique-opened="uniqueOpened"
    :menu-trigger="menuTrigger"
    :router="router"
    :collapse-transition="collapseTransition"
    :popper-effect="popperEffect"
  >
  </el-menu>
</template>
