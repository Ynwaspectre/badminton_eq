<script setup>
import ScrollToTop from "@/components/ScrollToTop.vue";
import Header from "@/components/Header.vue";
import LeftBody from "@/components/LeftBody.vue";
import MainBody from "@/components/MainBody.vue";
import Footer from "@/components/Footer.vue";


</script>

<template>
  <Header class="sticky top-0 left-0 backdrop-blur-md  z-2 "></Header>
  <LeftBody class="hidden md:block  md:w-72  fixed  h-full z-10 pt-6 pr-2 pl-2 bg-base-200"></LeftBody>
  <MainBody class="ml-0 md:ml-72  h-full  p-2 z-10  bg-base-200"></MainBody>


  <ScrollToTop class="fixed bottom-4 right-4"></ScrollToTop>
</template>

<style scoped>

</style>