<script setup>

import Footer from "@/components/Footer.vue";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {useLoadingStore} from "@/stores/loadingStore.js";
import {computed, ref} from "vue";

const categoryStore = useCategoryStore()
const loadingStore = useLoadingStore()
const category = computed(() => categoryStore.category)
const loading = computed(() => loadingStore.loading)


console.log(category, 'main')
let list = ref([])

</script>

<template>
  <div>

    <div class="fixed top-1/2 left-1/2" v-if="loading">
      <span class="loading loading-bars loading-lg"></span>
    </div>

    <div class=" w-full  rounded-2xl p-4 pb-32 mb-20">
      <div class="masonry-wrapper">
        <div class="masonry  gap-4 columns-2  xs:columns-1 md:columns-4 lg:5">
          <!--          羽毛球拍-->
          <div class="break-inside-avoid mb-4 rounded shadow-md  cursor-pointer p-4 bg-gray-50 dark:bg-slate-800"
               v-for="i in 100" v-if="category==='rackets'">
            <img src="@/assets/result.png" class="rounded-xl w-full  ">
            <div class="gap-2 flex flex-wrap p-2">
              <div class="badge badge-accent">YONEX</div>
              <div class="badge">天斧系列</div>
              <div class="badge badge-content">操控</div>
            </div>
            <div class="p-1">
              <div class="text-slate-900 dark:text-white pl-2 text-sm font-medium ">名称：100ZZ（古红色）</div>
              <div class="text-slate-900  dark:text-white text-sm pl-2 mt-1 font-medium">上市时间：2021年6月</div>
              <div class="flex items-center mt-1">
                <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium">评分：</div>
                <div class="rating rating-xs">
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked/>
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                </div>
                <div class="ml-2 text-sm text-slate-900  dark:text-white font-bold">9.6</div>
              </div>
              <div class="flex items-center mt-1">
                <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium ">
                  <div class="tooltip" data-tip="热度">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 16 16">
                      <path fill="#e11d48"
                            d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                    </svg>
                  </div>
                </div>
                <progress class="progress progress-error w-2/3 ml-1" value="40" max="100"></progress>
                <div class="ml-2 text-xs text-slate-900  dark:text-white font-bold">14232</div>
              </div>

            </div>


          </div>

          <!-- 更多项目 -->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>