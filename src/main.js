import {createApp, onMounted, ref} from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router';

let theme = localStorage.getItem('theme');
theme = ref(theme ? theme : 'light')

const ap = createApp(App)

ap.provide('theme', theme)


ap.use(router).mount('#app')


