<script setup>


import Loading from "@/components/Loading.vue";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {useLoadingStore} from "@/stores/loadingStore.js";
import {computed, inject, nextTick, ref, shallowRef, watch} from "vue";
// import jsonData from '@/data.json';
import {shuffle} from "lodash";
import {usePageStore} from "@/stores/pageStore.js";
import RacketsModal from "@/components/Modals/RacketsModal.vue";
import ShoesModal from "@/components/Modals/ShoesModal.vue";
import BagModal from "@/components/Modals/BagModal.vue";
import StringsModal from "@/components/Modals/StringsModal.vue";
import BallModal from "@/components/Modals/BallModal.vue";
import ClothesModal from "@/components/Modals/ClothesModal.vue";
import HandGlueModal from "@/components/Modals/HandGlueModal.vue";
import AccessoryModal from "@/components/Modals/AccessoryModal.vue";


const modalList = shallowRef({
      rackets: RacketsModal,
      shoes: ShoesModal,
      bag: BagModal,
      ball: BallModal,
      strings: StringsModal,
      clothes: ClothesModal,
      handglue: HandGlueModal,
      accessory: AccessoryModal
    }
)


const
    http = inject('http');

const categoryStore = useCategoryStore()
const loadingStore = useLoadingStore()
const pageStore = usePageStore()


const category = computed(() => {
  return categoryStore.category
})
const loading = computed({
  get: () => loadingStore.loading,
  set: (value) => {
    loadingStore.setLoading(value)
  }
})


const page = computed({
  get: () => pageStore.page,
  set: (value) => {
    pageStore.setPage(value)
  }
})

let list = ref([])
let nextPageLoading = ref(false)
let imageLoadedCount = 0;

//选择分类后触发
watch(category, (newValue, oldValue) => {
  console.log(newValue, oldValue)

  list.value = []
  imageLoadedCount = 0;
  getList()
})


const showTheModal = (index) => {
  currentIndex.value=index
  console.log(category.value)
  console.log('show modal')
  document.getElementById(category.value).showModal()
  document.getElementById(category.value).focus()
  document.getElementById(category.value).blur()
}

const redrawVueMasonry = inject('redrawVueMasonry');

setInterval(function () {
  redrawVueMasonry()
}, 1200)

const getList = async () => {
  try {
    const response = await http.get('/getEquipmentList?category=' + category.value + "&page=" + page.value);
    console.log(response.data)
    if (list.value) {
      list.value = list.value.concat(response.data)
    } else {
      list.value = response.data
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  loading.value = false
  nextPageLoading.value = false

}

getList()

const currentIndex=ref(0)

const showLightbox = ref(false)

const imageList = ref([
])
const showImage = (images) => {
  console.log(images)
  showLightbox.value = true
  // imageList.value = images
}

const nextPage = () => {
  loading.value = true
  nextPageLoading.value = true
  page.value++
  getList()
}





//标签
let tagsColor = ref([
  'badge-neutral',
  'badge-primary',
  'badge-secondary',
  'badge-accent',
  'badge-ghost'
])
tagsColor.value = shuffle(tagsColor.value)


</script>

<template>
  <div>
    <!--    加载组件-->
    <Loading class="fixed top-1/3 left-1/2" v-if="loading"></Loading>

    <template v-if="list.length>0">
      <component :is="modalList[category]" :detail="list[currentIndex].detail"></component>
    </template>


    <vue-easy-lightbox
        :visible="showLightbox"
        :imgs="imageList"
        :index="0"
        @hide="showLightbox=false"
    ></vue-easy-lightbox>

    <div class=" w-full  p-2 ">
      <!--      品牌系列筛选  暂时先不做-->
      <!--      <BrandAndLine></BrandAndLine>-->
      <div v-masonry horizontal-order="true" gutter="0" fit-width="true">
        <!--          羽毛球拍-->
        <div v-masonry-tile v-for="(item,index) in list"
             class="w-60 break-inside-avoid mt-2 rounded shadow-md ml-2  p-3 bg-gray-50 dark:bg-slate-800"
        >
          <img v-lazy="item.cover"  @click="showImage(item.images)"
               class="rounded w-full cursor-pointer transition duration-300 ease-in-out hover:brightness-110  hover:scale-105"
               :alt="item.name">
          <div class="gap-2 flex flex-wrap pl-1 pb-1 pt-2 pr-1" v-if="item.tags">
            <div :class="{'badge':true,[tagsColor[i]]:true, 'badge-sm':true}" v-for="(item1,i) in item.tags">
              {{ item1 }}
            </div>
          </div>
          <div class="pb-1">
            <div @click="showTheModal(index)"
                 class="text-slate-900 break-all  dark:text-white pl-2 text-sm font-bold cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-dotted">
              名称：{{ item.name }}
            </div>
            <div class="text-slate-900 dark:text-white pl-2 text-sm font-medium mt-1">品牌：{{ item.brand }}</div>
            <div class="text-slate-900 dark:text-white pl-2 text-sm font-medium mt-1" v-if="item.line">
              系列：{{ item.line }}
            </div>
            <div class="text-slate-900  dark:text-white text-sm pl-2 mt-1 font-medium " v-if="item.date">上市时间：{{
                item.date
              }}
            </div>
            <div class="flex items-center mt-1" v-if="item.rate">
              <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium">评分：</div>
              <div class="rating rating-xs rating-half">
                <template v-for="i in (Math.floor((item.rate) / 2))">
                  <input type="radio" disabled name="rating-10"
                         class="mask mask-star-2 bg-orange-400 mask-half-1 "/>
                  <input type="radio" disabled name="rating-10"
                         class="mask mask-star-2 bg-orange-400 mask-half-2 "/>
                </template>
                <input v-if="(item.rate % 2)>=1" type="radio" name="rating-10" disabled
                       class="mask mask-star-2 bg-orange-400 mask-half-1 "/>
              </div>
              <div class="ml-2 text-sm text-slate-900  dark:text-white font-bold">{{ item.rate }}</div>
            </div>
            <div class="flex items-center mt-1" v-if="item.hot && category==='rackets'">
              <div class="text-slate-900  dark:text-white text-sm pl-2 font-medium ">
                <div class="tooltip" data-tip="热度">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 16 16">
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
      </div>
    </div>
    <div class="text-center text-sm cursor-pointer pb-4 hover:text-gray-400 hover:font-bold" v-if="!loading"
         @click="nextPage">查看更多
    </div>
    <div class="flex justify-center items-center">
      <span class="loading loading-spinner loading-md" v-if="nextPageLoading"></span>
    </div>

  </div>
</template>

<style scoped></style>