<script setup>
import ScrollToTop from "@/components/ScrollToTop.vue";
import Header from "@/components/Header.vue";
import LeftBody from "@/components/LeftBody.vue";
import MainBody from "@/components/MainBody.vue";
import {useRoute} from "vue-router";
import {useCategoryStore} from '@/stores/categoryStore';

const router = useRoute();
const category = router.params.c;

const categoryStore = useCategoryStore();
categoryStore.setCategory(category)
console.log('index.vue')
</script>

<template>
  <Header class="sticky top-0 left-0 backdrop-blur-sm  z-[999]"></Header>
  <LeftBody class="hidden xl:block  xl:w-64  fixed  h-full z-10 pt-6 pr-2 pl-2 "></LeftBody>
  <MainBody class="ml-0 xl:ml-64 h-auto  p-2 z-10 min-w-40"></MainBody>
  <ScrollToTop class="fixed bottom-4 right-4"></ScrollToTop>
</template>

<style scoped>

</style>