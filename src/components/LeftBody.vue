<script setup>
import {ref, toRef, computed} from "vue";


import WaveLine from "@/assets/icons/WaveLine.vue";
import Racket from "@/components/LeftIcons/Racket.vue";
import Shoes from "@/components/LeftIcons/Shoes.vue";
import Bag from "@/components/LeftIcons/Bag.vue";
import Strings from "@/components/LeftIcons/Strings.vue";
import Ball from "@/components/LeftIcons/Ball.vue";
import Clothes from "@/components/LeftIcons/Clothes.vue";
import HandGlue from "@/components/LeftIcons/HandGlue.vue";
import Accessory from "@/components/LeftIcons/Accessory.vue";
import {useRouter} from 'vue-router';
import {useCategoryStore} from "@/stores/categoryStore.js";
import {useLoadingStore} from "@/stores/loadingStore.js";
import {usePageStore} from "@/stores/pageStore.js";
import Footer from "@/components/Footer.vue";


const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const pageStore = usePageStore();

let category = ref(categoryStore.category)


const iconList = [
  {
    title: '羽毛球拍',
    componentName: Racket,
    c: 'rackets'
  },
  {
    title: '羽毛球鞋',
    componentName: Shoes,
    c: 'shoes'
  },
  {
    title: '运动包',
    componentName: Bag,
    c: "bag"
  },
  {
    title: '羽毛球线',
    componentName: Strings,
    c: 'strings'
  },
  {
    title: '羽毛球',
    componentName: Ball,
    c: 'ball'
  },
  {
    title: '运动服饰',
    componentName: Clothes,
    c: 'clothes'
  },
  {
    title: '手胶',
    componentName: HandGlue,
    c: 'handglue'
  },
  {
    title: '运动配件',
    componentName: Accessory,
    c: 'accessory'
  }
];
const router = useRouter();

// 初始化当前index
const currentIndex = computed(() => {
  return iconList.findIndex(item => item.c === category.value);
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let isLock = false;

const navTo = async (targetIndex, c) => {
  if (isLock || targetIndex === currentIndex.value) return;
  isLock = true;
  console.log('123')

  // 封装第二部分代码为独立的异步函数
  const secondPart = async () => {
    categoryStore.setCategory(iconList[targetIndex].c);
    loadingStore.setLoading(true);
    pageStore.setPage(1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
  };

  // 第一部分代码
  const firstPart = async () => {
    await router.push({ name: 'Index', params: { c: c } });
    if (targetIndex > currentIndex.value) { // i=3 index=0 那就遍历 0到3
      for (let j = currentIndex.value; j <= targetIndex; j++) {
        category.value = iconList[j].c;
        await sleep(120);
      }
    } else { // i=0 index=3 遍历3 到0
      for (let j = currentIndex.value; j >= targetIndex; j--) {
        category.value = iconList[j].c;
        await sleep(120);
      }
    }
  };

  // 同时启动第一部分和第二部分代码
  await Promise.all([firstPart(), secondPart()]);

  isLock = false;
};

</script>

<template>
  <div>
    <div v-for="(item,i) in iconList" :key="item.title" @click="navTo(i,item.c)"
         class="w-full h-14 flex items-center justify-start pl-8 pt-2 pb-2   cursor-pointer
           hover:bg-gray-200 dark:hover:bg-slate-800">
      <component :is="item.componentName"></component>
      <div
          class="ml-3 font-mono font-bold  text-gray-600 dark:text-gray-100 cursor-pointer hover:text-black dark:hover:text-white">
        {{ item.title }}
        <WaveLine v-if="category===item.c"></WaveLine>
      </div>
    </div>
    <Footer ></Footer>
  </div>
</template>

<style scoped>

</style>