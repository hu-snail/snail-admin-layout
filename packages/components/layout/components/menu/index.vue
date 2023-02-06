<script lang="ts" setup>
  import MenuItem from '../menuItem/index.vue'
  import { ref } from 'vue'
  const isCollapse = ref(false)

  const routes =  ref([
  {
    path: '/',
    component: '',
    redirect: '/index',
    name: 'Root',
    children: [
      {
        path: '/index',
        name: 'Index',
        component:'',
        meta: {
          title: '首页',
          icon: 'icon-home',
          affix: true,
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/comp',
    component: '',
    name: 'Comp',
    meta: { title: '基础组件', icon: 'icon-code' },
    children: [
      {
        path: '/element',
        name: 'ElementComp',
        component: '',
        meta: {
          title: 'Element ui',
          icon: 'icon-code',
        },
      },
      {
        path: '/iconPark',
        name: 'IconPark',
        component: '',
        meta: {
          title: 'iconPark',
          icon: 'icon-like',
        },
      },
      {
        path: '/chart',
        name: 'Chart',
        component: '',
        meta: {
          title: '图表',
          icon: 'icon-chart-line',
        },
        children: [
          {
            path: '/line',
            name: 'Line',
            component: '',
            meta: {
              title: 'lineChart',
            },
          },
          {
            path: '/bar',
            name: 'Bar',
            component: '',
            meta: {
              title: 'barChart',
            },
          }
        ],
      },
    ],
  }])
</script>

<template>
  <el-scrollbar height="92vh">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <MenuItem  v-for="item in routes" :item="{ ...item }" :key="item.path" />
     </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu) {
  border-right: 0;
}
</style>