<script lang="ts" setup>
import TabBar from "../../tabbar/index.vue";
import NavBar from "../../navbar/index.vue";
import Logo from '../../logo/index.vue'
import Menu from '../../menu/index.vue'
</script>

<template>
  <el-container class="default-layout-container">
    <el-aside class="aside-wrapper" width="220px">
     <Logo />
     <Menu />
    </el-aside>
    <el-container class="main-wrapper">
      <div class="top-container fixed">
        <TabBar />
        <NavBar />
      </div>
      <el-main class="main-container"> 111 </el-main>
      <el-footer class="copyright">
        <span>Copyright</span> <span class="time"> ©2020-2022</span> snail-admin
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.default-layout-container {
  min-height: 100%;
  .aside-wrapper {
    display: flex;
    flex-direction: column;
  }
  .main-wrapper {
    background-color: #f2f3f5;
    .top-container {
      &.fixed {
        position: fixed;
      }
      // width: 100%;
      position: absolute;
      z-index: 999;
      top: 0;
      transition: width 0.3s, top 0.3s, transform 0.3s,
        var(--el-transition-box-shadow);
    }
    .main-container {
      margin-top: 90px;
      min-height: calc(100vh - 90px - 60px);
    }
    .copyright {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      .time {
        padding: 0 15px;
      }
    }
  }
}
</style>
