<script setup>
import WaveLine from "@/assets/icons/WaveLine.vue";
import Racket from "@/components/LeftIcons/Racket.vue";
import Shoes from "@/components/LeftIcons/Shoes.vue";
import Bag from "@/components/LeftIcons/Bag.vue";
import Strings from "@/components/LeftIcons/Strings.vue";
import Ball from "@/components/LeftIcons/Ball.vue";
import Clothes from "@/components/LeftIcons/Clothes.vue";
import HandGlue from "@/components/LeftIcons/HandGlue.vue";
import Accessory from "@/components/LeftIcons/Accessory.vue";
import Equipment from "@/components/LeftIcons/Equipment.vue";

const iconList = [
  {
    title: '羽毛球拍',
    componentName: Racket,
    selected:true
  },
  {
    title: '羽毛球鞋',
    componentName: Shoes,
    selected:false
  },
  {
    title: '运动包',
    componentName: Bag,
    selected:false
  },
  {
    title: '羽毛球线',
    componentName:Strings,
    selected:false
  },
  {
    title: '羽毛球',
    componentName: Ball,
    selected:false
  },
  {
    title: '运动服饰',
    componentName: Clothes,
    selected:false
  },
  {
    title: '手胶',
    componentName: HandGlue,
    selected:false
  },
  {
    title: '运动配件',
    componentName: Accessory,
    selected:false
  },
  {
    title: '器材设备',
    componentName: Equipment,
    selected:false
  },
];


</script>

<template>
  <div>
    <div v-for="item in iconList" :key="item.title"
        class="w-full h-14 flex items-center justify-start pl-8 pt-2 pb-2   cursor-pointer  hover:bg-gray-200 dark:hover:bg-slate-800">
      <component :is="item.componentName" ></component>
      <div class="ml-3 text-lg  text-gray-400 font-thin cursor-pointer hover:text-black ">
        {{item.title}}
        <WaveLine v-if="item.selected"></WaveLine>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>