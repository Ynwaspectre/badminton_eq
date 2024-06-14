<script setup>
import {nextTick, ref} from "vue";

const {detail} = defineProps(['detail'])

console.log(detail)
</script>

<template>


  <dialog class="modal" id="rackets">
    <div class="modal-box bg-white dark:bg-slate-800 text-black dark:text-gray-100 w-11/12 max-w-5xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-hidden">✕</button>
      </form>
      <h3 class="font-bold text-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 640 512">
          <path fill="#d481df"
                d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882M112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882"/>
        </svg>
        <span class="ml-1">{{ detail.name }}</span>
      </h3>
      <div class="divider"></div>
      <div class="p-1 text-sm ">
        <span class="font-bold">品牌系列：</span>
        <span class="ml-2 font-medium dark:text-gray-300">{{ detail.brand }}-{{ detail.line }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">上市日期：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.date }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍框材质：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param1 }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍杆材质：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param2 }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍身重量：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param3 }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍身长度：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param6 }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍柄粗细：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param4 }}</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拉线磅数：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">{{ detail.param5 }}</span>
      </div>
<!--      <div class="p-1 text-sm ">-->
<!--        <span class="font-bold">适用人群：</span>-->
<!--        <span class="ml-2 dark:text-gray-300 font-medium">有一定水平的高手</span>-->
<!--      </div>-->
      <div class="divider"></div>
      <div class="dark:text-gray-300 font-medium leading-8 text-sm	">{{detail.description}}
      </div>
    </div>


  </dialog>


</template>

<style scoped>

</style>