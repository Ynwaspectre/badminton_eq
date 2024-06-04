<script setup>
import {ref} from "vue";

const brandList=ref([
    "尤尼克斯",
    "李宁",
    "威克多",
    "熏风",
    "亚瑟士"
])
</script>

<template>
  <div class="flex items-center">
    <div class="p-2">品牌</div>
    <div class="flex p-1 mb-2 r flex-wrap items-center">
      <div class="pt-1 pb-1 pl-2 pr-2 text-slate-900 text-sm cursor-pointer ml-2 bg-white rounded-xl" v-for="item in brandList">{{ item }}</div>
    </div>
  </div>

<div>系列</div>
</template>

<style scoped>

</style>