<script lang="ts" setup>
import { DArrowLeft } from "@element-plus/icons-vue";
</script>

<template>
  <div class="navbar-container">
    <div class="left-wrapper">
      <div class="collapse">
        <el-icon><DArrowLeft /></el-icon>
      </div>
      <div class="breadcrumb-wrapper">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>菜单权限</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right-tool"></div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 1px 0 var(--el-border-color);
  transition: background-color 0.3s, var(--el-transition-box-shadow);
  .left-wrapper {
    display: flex;
    align-items: center;
    padding-right: 50px;
    overflow: hidden;
    .collapse {
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 50px;
      cursor: pointer;
    }
    .breadcrumb-wrapper {
      :deep(
          .el-breadcrumb__item:first-child:not(:last-child)
            .el-breadcrumb__inner
        ) {
        padding-left: 12px;
        border-radius: 6px 0 0 6px;
        clip-path: polygon(
          0 0,
          calc(100% - 8px) 0,
          100% 50%,
          calc(100% - 8px) 100%,
          0 100%
        );
      }
      :deep(.el-breadcrumb__item .el-breadcrumb__inner) {
        display: inline-block;
        background-color: var(--el-fill-color);
        transition: background-color 0.3s, var(--el-transition-color);
        padding: 8px 16px;
        clip-path: polygon(
          0 0,
          calc(100% - 8px) 0,
          100% 50%,
          calc(100% - 8px) 100%,
          0 100%,
          8px 50%
        );
      }
      :deep(.el-breadcrumb__item .el-breadcrumb__separator) {
        display: none;
      }
      :deep(
          .el-breadcrumb__item:last-child:not(:first-child)
            .el-breadcrumb__inner
        ) {
        background-color: var(--el-fill-color-darker);
        padding-right: 12px;
        border-radius: 0 6px 6px 0;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 8px 50%);
      }
    }
  }
}
</style>
