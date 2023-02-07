<script lang="ts" setup></script>

<template>
  <div class="logo-container">
    <img class="logo-img" src="../../../../../public/logo.png" alt="" />
    <!-- <el-avatar fit="fill" shape="square" src="../../../../../public/logo.png"></el-avatar> -->
    <h1 class="title">Snail-Admin</h1>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  box-shadow: 0 0 1px 0 var(--el-border-color);
  transition: background-color 0.3s, var(--el-transition-box-shadow);
  .title {
    font-size: 20px;
    font-weight: 450;
    padding-left: 15px;
  }
  .logo-img {
    height: 30px;
  }
}
</style>
