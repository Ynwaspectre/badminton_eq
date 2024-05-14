<script setup>
import ScrollToTop from "@/components/ScrollToTop.vue";
import Header from "@/components/Header.vue";
import LeftBody from "@/components/LeftBody.vue";
import MainBody from "@/components/MainBody.vue";


</script>

<template>
  <div class="flex flex-col h-screen">
    <Header></Header>
    <main class="flex flex-1 w-full">
      <LeftBody class="hidden md:block w-auto  h-full"></LeftBody>
      <MainBody class="w-full md:max-w-3xl mx-auto px-4"></MainBody>
    </main>
  </div>








  <ScrollToTop class="fixed bottom-4 right-4"></ScrollToTop>
</template>

<style scoped>

</style>