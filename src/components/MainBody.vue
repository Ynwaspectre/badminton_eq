<script setup>

import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {useLoadingStore} from "@/stores/loadingStore.js";
import {computed, ref, onMounted, watch} from "vue";
import jsonData from '@/data.json';


const categoryStore = useCategoryStore()
const loadingStore = useLoadingStore()
const category = computed(() => {
  return categoryStore.category
})
const loading = computed(() => loadingStore.loading)

let list = ref(jsonData[category.value])
// list.value=list.value===undefined?[]:list.value


watch(category, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  loadComponent(category.value).then(module => {
    currentComponent.value = module.default;
    currentKey.value++; // 改变key值以强制重新渲染组件
  });
  list.value = jsonData[category.value]
})

const loadComponent = (componentName) => {
  console.log('加载'+componentName+'组件')
  componentName=componentName.charAt(0).toUpperCase() + componentName.slice(1)+"Modal";
  return import(`@/components/Modals/${componentName}.vue`);
}

const showModal = () => {
  console.log(category.value)
  document.getElementById(category.value).showModal()
}

const currentComponent = ref(null);
const currentKey = ref(0);
loadComponent(category.value).then(module => {
  currentComponent.value = module.default;
  currentKey.value++; // 改变key值以强制重新渲染组件
});


</script>

<template>
  <div>
    <!--    加载组件-->
    <Loading class="fixed top-1/3 left-1/2" v-if="loading"></Loading>

    <component :is="currentComponent" :key="currentKey"></component>


    <div class=" w-full  p-4 pb-32 mb-20">
      <div class="masonry-wrapper">
        <div class="masonry gap-4 xl:columns-5 lg:columns-4 sm:columns-2  md:columns-3 ">
          <template v-if="!loading">
            <!--          羽毛球拍-->
            <div class="break-inside-avoid mb-4 rounded shadow-md  cursor-pointer p-4 bg-gray-50 dark:bg-slate-800"
                 v-for="item in list" @click="showModal()">
              <img v-lazy="item.cover" class="rounded w-full transition duration-300 ease-in-out hover:brightness-105"
                   :alt="item.name">
              <div class="gap-2 flex flex-wrap pl-1 pb-1 pt-2 pr-1" v-if="item.tags">
                <div class="badge badge-default text-sm" v-for="item1 in item.tags">{{ item1 }}</div>
              </div>
              <div class="pt-1 pb-1">
                <div class="text-slate-900 dark:text-white pl-2 text-sm font-bold ">名称：{{ item.name }}</div>
                <div class="text-slate-900 dark:text-white pl-2 text-sm font-medium mt-1">品牌：{{ item.brand }}</div>
                <div class="text-slate-900 dark:text-white pl-2 text-sm font-medium mt-1" v-if="item.line">
                  系列：{{ item.line }}
                </div>
                <div class="text-slate-900  dark:text-white text-sm pl-2 mt-1 font-medium ">上市时间：{{
                    item.date
                  }}
                </div>
                <div class="flex items-center mt-1" v-if="item.rate">
                  <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium">评分：</div>
                  <div class="rating rating-xs rating-half">
                    <template v-for="i in (Math.floor((item.rate) / 2))">
                      <input type="radio" name="rating-10" class="mask mask-star-2 bg-orange-400 mask-half-1 "/>
                      <input type="radio" name="rating-10" class="mask mask-star-2 bg-orange-400 mask-half-2 "/>
                    </template>
                    <input v-if="(item.rate % 2)>=1" type="radio" name="rating-10"
                           class="mask mask-star-2 bg-orange-400 mask-half-1 "/>
                  </div>
                  <div class="ml-2 text-sm text-slate-900  dark:text-white font-bold">{{ item.rate }}</div>
                </div>
                <div class="flex items-center mt-1" v-if="item.hot">
                  <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium ">
                    <div class="tooltip" data-tip="热度">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 16 16">
                        <path fill="#e11d48"
                              d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                      </svg>
                    </div>
                  </div>
                  <progress
                      :class="{ progress: true, 'w-2/3': true, 'ml-1': true, 'progress-error': item.hot_rate >= 80, 'progress-warning': item.hot_rate <= 30, 'progress-success': item.hot_rate > 30 && item.hot_rate < 80 }"
                      :value="item.hot" max="5000"></progress>
                  <div class="ml-2 text-xs text-slate-900  dark:text-white font-bold">{{ item.hot }}</div>
                </div>
              </div>
            </div>
            <!-- 更多项目 -->
          </template>
        </div>
      </div>
    </div>
    <Footer v-if="!loading"></Footer>
  </div>
</template>

<style scoped></style>