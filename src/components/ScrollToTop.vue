<template>
  <button class="bg-white p-2 rounded-xl" @click="scrollToTop" v-show="showButton">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="#c026d3" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m2-5q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m6 6.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>
  </button>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from 'lodash';
export default {
  setup() {
    const showButton = ref(false);

    // 检测滚动事件，显示或隐藏按钮
    const handleScroll = () => {
      showButton.value = window.scrollY > 100;
    };

    // 滚动到页面顶部
    const scrollToTop = ()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
      });
    }

    // 添加滚动事件监听器
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // 在组件销毁前移除滚动事件监听器
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showButton,
      scrollToTop
    };
  }
};
</script>

<style>

</style>