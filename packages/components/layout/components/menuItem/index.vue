<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    default: () => {
      return {};
    }
  }
});
</script>

<script lang="ts">
export default {
  name: "MenuItem"
};
</script>
<template>
  <el-menu-item
    :key="item.path"
    :index="item.children ? item.children[0].path : item.path"
    v-if="!item.meta || !item.children"
  >
    <component
      class="menu-icon"
      v-if="item.children ? item.children[0].meta.icon : item.meta.icon"
      theme="outline"
      size="14"
      strokeWidth="3"
      :is="item.children ? item.children[0].meta.icon : item.meta.icon"
    />
    <template #title>
      <span class="title">
        {{ item.children ? item.children[0].meta.title : item.meta.title }}
      </span>
    </template>
  </el-menu-item>
  <el-sub-menu :index="item.path" v-else>
    <template #title>
      <component
        class="menu-icon"
        v-if="item.meta.icon"
        theme="outline"
        size="14"
        strokeWidth="3"
        :is="item.meta.icon"
      />
      <span class="title">{{ item.meta.title }}</span>
    </template>
    <template v-for="(option, index) in item.children">
      <menu-item v-if="option.children" :key="option.path" :item="option" />
      <el-menu-item v-else :index="option.path" :key="index">
        <component
          class="menu-icon"
          v-if="option.meta.icon"
          theme="outline"
          size="14"
          strokeWidth="3"
          :is="option.meta.icon"
        />
        <span class="title">
          {{ option.meta.title }}
        </span>
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>
