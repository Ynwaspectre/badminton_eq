import {createApp, onMounted, ref} from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from '../router';
import VueLazyload from 'vue-lazyload'


let theme = localStorage.getItem('theme');
theme = ref(theme ? theme : 'light')

const ap = createApp(App)
const pinia = createPinia();

ap.provide('theme', theme)

console.log('main.js')
ap.use(VueLazyload)
ap.use(pinia)
ap.use(router).mount('#app')


