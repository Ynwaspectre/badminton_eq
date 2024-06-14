<script setup>
import {nextTick, ref} from "vue";

const detail = defineProps(['detail'])


</script>

<template>


  <dialog class="modal" id="shoes">
    <div class="modal-box bg-white dark:bg-slate-800 text-black dark:text-gray-100 w-11/12 max-w-5xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-hidden">✕</button>
      </form>
      <h3 class="font-bold text-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 640 512">
          <path fill="#d481df"
                d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882M112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882"/>
        </svg>
        <span class="ml-1">ASTROX 100ZZ 古红色</span>
      </h3>
      <div class="divider"></div>
      <div class="p-1 text-sm ">
        <span class="font-bold">品牌系列：</span>
        <span class="ml-2 font-medium dark:text-gray-300">尤尼克斯-天斧系列</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">上市日期：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">2021年6月</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍框材质：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">高弹性碳素+新次元碳素+黑色微核+钨+致密型纳米碳素</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍杆材质：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">高弹性碳素+新次元碳素</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍身重量：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">3U，4U</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍身长度：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">675mm</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拍柄粗细：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">G4、G5、G6</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">中管韧度：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">硬</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">拉线磅数：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">3U（21-29LBS）、4U（20-28LBS）</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">平衡点：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">-</span>
      </div>
      <div class="p-1 text-sm ">
        <span class="font-bold">适用人群：</span>
        <span class="ml-2 dark:text-gray-300 font-medium">有一定水平的高手</span>
      </div>
      <div class="divider"></div>
      <div class="dark:text-gray-300 font-medium leading-8 text-sm	">ASTROX 100ZZ
        （天斧100ZZ）古红色，天斧100系列最高端型号球拍，通过球拍的重量分布、拍杆、拍框形状和锥盖方面的进化，天斧100可以利用力量和敏捷性来应对比赛节奏的快速变化。

        天斧100对天斧系列的创新型回转力生成系统进行了优化。在拍柄底部、拍框顶部和接头位置进行了更精密的重量分布，提升了球拍的回转力。这些增强的功能确保了快速的连续进攻。球拍采用的Namd，可提高柔韧性和反弹性，释放巨大的爆发力。与回转力生成系统所产生的协同作用可实现持续有力的进攻。

        拍杆经过改良，采用高性能的碳素材料制成了YONEX极细的拍杆。它能减少空气阻力来提供更流畅的挥拍感受，并通过更大的弯曲度和更快的回弹力来提升回转力。

        进化了的方形拍头能进一步扩大甜区，降低击中非甜区时的力量损失，更大的甜区带来强有力的击球。

        天斧100ZZ全新配色以如同铭刻在灵魂深处的厚重深红色为基础，白色和鲜艳的薄荷蓝的反差彰显出强烈的威严感。新色预定使用球员为：安赛龙、石宇奇、山口茜等顶尖球员。将于2021年6月上旬登场。
      </div>
    </div>


  </dialog>


</template>

<style scoped>

</style>