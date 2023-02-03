<script lang="ts" setup>
import TabBar from "../../tabbar/index.vue";
import NavBar from "../../navbar/index.vue";
</script>

<template>
  <el-container class="default-layout-container">
    <el-aside class="aside-wrapper" width="200px">
      <div class="logo-container">Snail</div>
    </el-aside>
    <el-container>
      <div class="top-container fixed">
        <TabBar />
        <NavBar />
      </div>
      <el-main> 111 </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.default-layout-container {
  min-height: 100%;
  .aside-wrapper {
  }
  .top-container {
    &.fixed {
      position: fixed;
    }
    width: 100%;
    position: absolute;
    z-index: 999;
    top: 0;
    transition: width 0.3s, top 0.3s, transform 0.3s,
      var(--el-transition-box-shadow);
  }
}
</style>
