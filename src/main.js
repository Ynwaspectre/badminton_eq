import {createApp, onMounted, ref} from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from '../router';

let theme = localStorage.getItem('theme');
theme = ref(theme ? theme : 'light')

const ap = createApp(App)
const pinia = createPinia();

ap.provide('theme', theme)

ap.use(pinia)
ap.use(router).mount('#app')


