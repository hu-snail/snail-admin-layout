<script setup lang="ts">
import { ref } from "vue";
import { SnailLayout } from "../packages";
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
  <SnailLayout
  :data="data"
  type="default"
  :header="{height: '60px'}"
  >
    <template #logo>
      <img src="" />
    </template>
    <div>2222</div>
  </SnailLayout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
