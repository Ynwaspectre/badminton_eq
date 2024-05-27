<script setup>
import {ref} from "vue";

const detail = defineProps(['detail'])

</script>

<template>

  <dialog class="modal" id="ball" >
    <div class="modal-box bg-white dark:bg-slate-800">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">羽毛球</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
    </div>
  </dialog>


</template>

<style scoped>

</style>