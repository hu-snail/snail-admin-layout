<script setup lang="ts">
import { ref } from "vue";
import { SnailLayout } from "../packages";
const data = ref([
  {
    id: 1,
    name: '小李'
  },
  {
    id: 2,
    name: '小胡'
  }
])
</script>

<template>
  <SnailLayout :data="data" type="topAside">
    <template #logo>
      <img src="" />
    </template>
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
