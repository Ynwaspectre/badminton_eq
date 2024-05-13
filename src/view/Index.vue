<script setup>
import {inject, ref} from 'vue';
import ThemeChange from "@/components/ThemeChange.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
let theme = inject('theme');


</script>

<template>
  <div style="height: 1000px;"></div>
  <ThemeChange :theme="theme" ></ThemeChange>
  <ScrollToTop class="fixed bottom-4 right-4"></ScrollToTop>
</template>

<style scoped>

</style>