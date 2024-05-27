<script setup>
import {ref} from "vue";

const detail = defineProps(['detail'])

</script>

<template>

  <dialog class="modal" id="rackets" >
    <div class="modal-box bg-white dark:bg-slate-800 text-black dark:text-gray-100">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">100zz</h3>
      <p class="py-4">尤尼克斯/天斧系列</p>
    </div>
  </dialog>



</template>

<style scoped>

</style>