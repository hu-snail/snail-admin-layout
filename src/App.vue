<script setup lang="ts">
import { ref } from "vue";
// import { SnTbas } from "../packages/components/tabs";
const data = ref([
  {
    path: '/',
    component: 'Layout',
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: '',
        meta: {
          title: '首页',
          icon: 'home',
          affix: true,
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/comp',
    component: 'Layout',
    name: 'Comp',
    meta: { title: '组件', icon: '' },
    children: [
      {
        path: '/iconPark',
        name: 'IconPark',
        component: '',
        meta: {
          title: '图标',
        },
        children: [
          {
            path: '/iconPark2',
            name: 'IconPark2',
            component: '',
            meta: {
              title: '图标2211',
            },
          },
        ],
      },
      {
        path: '/iconPark233',
        name: 'IconPark3',
        component: () => '',
        meta: {
          title: '图标2233',
        },
      },
      {
        path: '/iconPark234',
        name: 'IconPark3',
        component: () => '',
        meta: {
          title: '测试',
        },
      },
    ],
  },
])
</script>

<template>
  <SnTabs />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
