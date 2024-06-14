<template>
  <div class="loader-container z-[1000]">
    <div class="loader-child"></div>
    <div class="loader-child"></div>
    <div class="loader-child"></div>
  </div>
</template>

<style scoped>
.loader-container {
  @apply w-16 h-16  ;
}

.loader-child {
  @apply absolute w-full h-full rounded-full;
  box-sizing: border-box;
}

.loader-child:nth-of-type(1) {
  @apply left-0 top-0;
  animation: rotate-one 1.15s linear infinite;
  border-bottom: 3px solid #08d9d6;
}

.loader-child:nth-of-type(2) {
  @apply right-0 top-0;
  animation: rotate-two 1.15s linear infinite;
  border-right:  0.1875rem solid #e2c772;
}

.loader-child:nth-of-type(3) {
  @apply right-0 bottom-0;
  animation: rotate-three 1.15s linear infinite;
  border-top: 0.1875rem solid #ff2e63;
}

/* 自定义动画 */
@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>