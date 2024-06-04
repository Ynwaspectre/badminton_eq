import {createApp, onMounted, ref} from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from '../router';
import VueLazyload from 'vue-lazyload'
import VueEasyLightbox from 'vue-easy-lightbox'

import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

let theme = localStorage.getItem('theme');
theme = ref(theme ? theme : 'dark')

const ap = createApp(App)
const pinia = createPinia();

ap.provide('theme', theme)

ap.use(VueLazyload)
ap.use(pinia)
ap.use(VueEasyLightbox)

ap.use(router).mount('#app')


