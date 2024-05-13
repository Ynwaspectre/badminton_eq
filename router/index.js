import {createRouter,createWebHashHistory} from 'vue-router'


const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'index',
            path:'/',
            component: ()=>import('@/view/Index.vue')
        }
    ]


})







export  default  router